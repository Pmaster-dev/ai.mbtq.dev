import fs from 'node:fs';
import path from 'node:path';

export const ROOT = process.cwd();
export const SPECS_DIR = path.join(ROOT, 'specs');
export const SCHEMAS_DIR = path.join(SPECS_DIR, 'registries', 'schemas');

export const REQUIRED_FIELDS = [
  'id',
  'name',
  'version',
  'description',
  'inputs',
  'outputs',
  'dependencies',
  'eventsProduced',
  'eventsConsumed',
  'runtime',
  'securityRequirements',
  'permissions',
  'healthChecks',
  'lifecycleState',
  'owner',
  'tags',
  'schemaVersion',
  'specType'
];

export const TYPE_TO_SCHEMA = {
  'service.spec': 'service.spec.schema.json',
  'agent.spec': 'agent.spec.schema.json',
  'workflow.spec': 'workflow.spec.schema.json',
  'dispatch.spec': 'dispatch.spec.schema.json',
  'magician.spec': 'magician.spec.schema.json',
  'provider.spec': 'provider.spec.schema.json',
  'runtime.spec': 'runtime.spec.schema.json'
};

export function walkSpecFiles(dir = SPECS_DIR) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkSpecFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.spec.json')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function asRepoPath(filePath) {
  return path.relative(ROOT, filePath).replaceAll('\\\\', '/');
}
