import fs from 'node:fs';
import path from 'node:path';
import {
  SCHEMAS_DIR,
  REQUIRED_FIELDS,
  TYPE_TO_SCHEMA,
  walkSpecFiles,
  readJson,
  asRepoPath
} from './spec-lib.mjs';

const errors = [];
const files = walkSpecFiles();

for (const file of files) {
  const spec = readJson(file);
  const repoPath = asRepoPath(file);

  for (const field of REQUIRED_FIELDS) {
    if (!(field in spec)) {
      errors.push(`${repoPath}: missing required field '${field}'`);
    }
  }

  if (spec.schemaVersion !== '1.0.0') {
    errors.push(`${repoPath}: schemaVersion must be '1.0.0'`);
  }

  const schemaFileName = TYPE_TO_SCHEMA[spec.specType];
  if (!schemaFileName) {
    errors.push(`${repoPath}: unknown specType '${spec.specType}'`);
  } else {
    const schemaPath = path.join(SCHEMAS_DIR, schemaFileName);
    if (!fs.existsSync(schemaPath)) {
      errors.push(`${repoPath}: schema file not found '${asRepoPath(schemaPath)}'`);
    } else {
      const schema = readJson(schemaPath);
      const expectedType = schema?.properties?.specType?.const;
      if (expectedType !== spec.specType) {
        errors.push(`${repoPath}: specType '${spec.specType}' does not match schema '${expectedType}'`);
      }
    }
  }

  const arrays = [
    'inputs',
    'outputs',
    'dependencies',
    'eventsProduced',
    'eventsConsumed',
    'securityRequirements',
    'permissions',
    'healthChecks',
    'tags'
  ];

  for (const key of arrays) {
    if (!Array.isArray(spec[key])) {
      errors.push(`${repoPath}: '${key}' must be an array`);
    }
  }

  if (!spec.runtime || typeof spec.runtime !== 'object') {
    errors.push(`${repoPath}: runtime must be an object`);
  } else {
    if (typeof spec.runtime.primary !== 'string' || spec.runtime.primary.length === 0) {
      errors.push(`${repoPath}: runtime.primary must be a non-empty string`);
    }
    if (!Array.isArray(spec.runtime.supported) || spec.runtime.supported.length === 0) {
      errors.push(`${repoPath}: runtime.supported must be a non-empty array`);
    }
  }

  if (!['draft', 'active', 'deprecated', 'archived'].includes(spec.lifecycleState)) {
    errors.push(`${repoPath}: lifecycleState must be one of draft|active|deprecated|archived`);
  }

  const runtimeSupported = spec.runtime?.supported ?? [];
  const agnosticTargets = ['fastapi', 'deno', 'python-worker'];
  for (const target of agnosticTargets) {
    if (!runtimeSupported.includes(target)) {
      errors.push(`${repoPath}: runtime.supported must include '${target}' for framework-agnostic compatibility`);
    }
  }
}

if (errors.length > 0) {
  console.error('Spec validation failed:\n');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Validated ${files.length} spec files successfully.`);
