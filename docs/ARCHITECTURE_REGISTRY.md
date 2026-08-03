# MBTQ Studio Registry Architecture

Generated from `specs/` at 2026-08-03T01:18:10.596Z.

## Registry Summary
- Version: 1.0.0
- Total specs: 7

## Specs by Type
- agent.spec: 1
- dispatch.spec: 1
- magician.spec: 1
- provider.spec: 1
- runtime.spec: 1
- service.spec: 1
- workflow.spec: 1

## Specification Inventory

| ID | Type | Version | Lifecycle | Owner | Path |
|---|---|---|---|---|---|
| agent.spec.auditor | agent.spec | 0.1.0 | draft | MBTQ Core Team | `specs/agents/spec-auditor.agent.spec.json` |
| dispatch.spec.router | dispatch.spec | 0.1.0 | draft | MBTQ Core Team | `specs/dispatch/spec-dispatch.dispatch.spec.json` |
| magician.developer | magician.spec | 0.1.0 | draft | MBTQ Core Team | `specs/magicians/developer-magician.magician.spec.json` |
| provider.github-actions | provider.spec | 0.1.0 | draft | MBTQ Core Team | `specs/providers/github-actions.provider.spec.json` |
| runtime.multi-framework | runtime.spec | 0.1.0 | draft | MBTQ Core Team | `specs/runtimes/multi-runtime.runtime.spec.json` |
| svc.registry.foundation | service.spec | 0.1.0 | draft | MBTQ Core Team | `specs/services/foundation-registry.service.spec.json` |
| workflow.spec-governance | workflow.spec | 0.1.0 | draft | MBTQ Core Team | `specs/workflows/spec-governance.workflow.spec.json` |

## Runtime Compatibility

Framework-agnostic support targets are encoded in every spec runtime.supported array, including FastAPI, Deno, and Python workers.
