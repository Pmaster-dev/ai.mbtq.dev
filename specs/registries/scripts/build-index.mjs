import fs from 'node:fs';
import path from 'node:path';
import { SPECS_DIR, walkSpecFiles, readJson, asRepoPath } from './spec-lib.mjs';

const files = walkSpecFiles();
const generatedAt = new Date().toISOString();

const index = {
  version: '1.0.0',
  generatedAt,
  totalSpecs: files.length,
  byType: {},
  specs: []
};

for (const file of files) {
  const spec = readJson(file);
  const specRef = {
    id: spec.id,
    specType: spec.specType,
    name: spec.name,
    version: spec.version,
    lifecycleState: spec.lifecycleState,
    owner: spec.owner,
    path: asRepoPath(file),
    dependencies: spec.dependencies,
    runtime: spec.runtime,
    tags: spec.tags
  };

  index.specs.push(specRef);
  if (!index.byType[spec.specType]) {
    index.byType[spec.specType] = [];
  }
  index.byType[spec.specType].push(specRef.id);
}

const outputPath = path.join(SPECS_DIR, 'registries', 'index.json');
fs.writeFileSync(outputPath, `${JSON.stringify(index, null, 2)}\n`);

console.log(`Registry index written to ${asRepoPath(outputPath)}.`);
