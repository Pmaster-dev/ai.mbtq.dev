import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const indexPath = path.join(root, 'specs', 'registries', 'index.json');
const docsPath = path.join(root, 'docs', 'ARCHITECTURE_REGISTRY.md');

const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

const lines = [];
lines.push('# MBTQ Studio Registry Architecture');
lines.push('');
lines.push(`Generated from \`specs/\` at ${index.generatedAt}.`);
lines.push('');
lines.push('## Registry Summary');
lines.push(`- Version: ${index.version}`);
lines.push(`- Total specs: ${index.totalSpecs}`);
lines.push('');
lines.push('## Specs by Type');

for (const [type, ids] of Object.entries(index.byType)) {
  lines.push(`- ${type}: ${ids.length}`);
}

lines.push('');
lines.push('## Specification Inventory');
lines.push('');
lines.push('| ID | Type | Version | Lifecycle | Owner | Path |');
lines.push('|---|---|---|---|---|---|');

for (const spec of index.specs) {
  lines.push(`| ${spec.id} | ${spec.specType} | ${spec.version} | ${spec.lifecycleState} | ${spec.owner} | \`${spec.path}\` |`);
}

lines.push('');
lines.push('## Runtime Compatibility');
lines.push('');
lines.push('Framework-agnostic support targets are encoded in every spec runtime.supported array, including FastAPI, Deno, and Python workers.');

fs.writeFileSync(docsPath, `${lines.join('\n')}\n`);
console.log('Architecture registry documentation generated at docs/ARCHITECTURE_REGISTRY.md.');
