# Deaf First Platform Knowledge Hub

## Vision
- Mission: Build Deaf-first, accessibility-first AI products
- User journeys: creators, organizations, developers, and end users
- Ecosystem: web platform, AI tooling, and deployment infrastructure

## Platform
- Architecture: `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/singlesource.md`
- Service registry: `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/registry/services.yaml`
- APIs registry: `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/registry/APIs.yaml`

## AI
- PinkyAI documentation strategy and governance
- Agent/workflow inventory: `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/registry/workflows.yaml`
- Structured metadata for automation in `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/registry/`

## Applications
- Business Magician (planned)
- Job Magician (planned)
- Developer Magician (planned)
- SignLanguageAssistant (prototype bundle in `SignLanguageAssistant/`)

## Operations
- CI/CD workflows in `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/workflows/`
- Dependency automation in `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/dependabot.yml`
- Deployment references in `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/DEPLOYMENT.md`

## Documentation Inventory and Audit Status

| Path | Type | Status | Notes |
|---|---|---|---|
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/README.md` | Root overview | UPDATE | Strong summary, but contains legacy sections and mixed source-of-truth signals. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/API.md` | API doc | UPDATE | Useful intent, but endpoint host/contracts appear placeholder and need alignment with current app routes. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/CONTRIBUTING.md` | Contributor guide | UPDATE | Good structure, but references old repo names/contacts and needs normalization. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/DEPLOYMENT.md` | Deployment guide | UPDATE | Valuable checklist, but includes mixed targets and environment examples needing validation. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/singlesource.md` | Architecture/stack policy | KEEP | Primary architecture intent and standards baseline; should remain canonical after cleanup passes. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/docs/mbtq_architecture.html` | Legacy architecture artifact | ARCHIVE | Historical artifact; retain for reference only, not active source-of-truth. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/templates/README.md` | Template documentation | KEEP | Active template catalog and onboarding for template users. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/SignLanguageAssistant/README.md` | Prototype overview | ARCHIVE | Rich but prototype-heavy; overlaps with architecture and implementation docs. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/SignLanguageAssistant/ARCHITECTURE.md` | Prototype architecture | MERGE | Keep key ideas, merge reusable architecture parts into central platform architecture docs. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/SignLanguageAssistant/IMPLEMENTATION_SUMMARY.md` | Implementation snapshot | ARCHIVE | Session/date-bound status report; historical context only. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/SignLanguageAssistant/QUICKSTART.md` | Prototype setup guide | MERGE | Merge practical setup steps into maintained platform onboarding docs. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/SignLanguageAssistant/NEXTJS_INTEGRATION.md` | Integration guide | MERGE | Merge stable integration patterns into `docs/API.md` + platform docs to avoid drift. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/dependabot.yml` | Automation config | UPDATE | Keep automation but update directories and ecosystem paths to match actual repo layout. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/workflows/issue-labled.yml` | Workflow | KEEP | Active issue triage helper workflow. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/workflows/jekyll-gh-pages.yml` | Workflow | ARCHIVE | Sample Pages workflow; archive unless GitHub Pages publishing is actively used. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/workflows/mbtq-wcag-check.yml` | Workflow | UPDATE | Important accessibility workflow; currently requires syntax/trigger hardening. |
| `/home/runner/work/ai.mbtq.dev/ai.mbtq.dev/.github/workflows/pinkflow.yml` | Workflow | ARCHIVE | Empty placeholder file; archive or replace with real automation definition. |

## Next Documentation Governance Loop

GitHub Change
→ PinkyAI Review
→ Update docs
→ Consistency check
→ Pull Request

