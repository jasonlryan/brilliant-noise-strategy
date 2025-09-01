# Gate A Checklist - Foundation Controls

## Overview
Gate A is the binary control that determines if BN Trust OS is ready for customer data and production use. All criteria must be GREEN before any customer-facing services activate.

**Status:** 🔴 RED / 🟡 AMBER / 🟢 GREEN  
**Last Review:** [Date]  
**Next Review:** [Monthly]

## Binary Criteria

### Legal & IP Controls ✅
- [ ] **New MSA + IP Addendum Active**: All new SOWs use updated legal framework
  - Evidence: Contract count showing % on new terms
  - Target: 100% new SOWs, 80%+ existing clients migrated
  - Owner: Legal Lead

- [ ] **Contractor IP Assignment**: All contractors under proper IP assignment agreements  
  - Evidence: Signed IP assignment agreements on file
  - Target: 100% coverage for all technical contractors
  - Owner: Legal Lead

- [ ] **Sub-Processor Registry Current**: All sub-processors documented and published
  - Evidence: /security/sub-processors.md updated monthly
  - Target: No undocumented sub-processors
  - Owner: Security Lead

### SDLC & Release Controls 🔧
- [ ] **No Direct-to-Production**: Zero direct code pushes to production
  - Evidence: Git logs showing dev→staging→prod only
  - Target: 0 direct-to-prod events in 30 days
  - Owner: Engineering Lead

- [ ] **CI/CD Pipeline Active**: Automated testing with manual prod approval
  - Evidence: CI/CD logs showing test passes, manual approvals
  - Target: 100% releases through pipeline
  - Owner: Engineering Lead

- [ ] **Rollback Capability Proven**: Rollback tested and documented in staging
  - Evidence: Staging rollback test completed monthly
  - Target: <15 minute rollback time proven
  - Owner: DevOps

### Security Minimums 🔒
- [ ] **SSO/MFA Enforced**: All user accounts require multi-factor authentication
  - Evidence: SSO dashboard showing 100% coverage
  - Target: 100% of user accounts, zero password-only access
  - Owner: Security Lead

- [ ] **Secrets Centralized**: No hardcoded secrets, all in secure vault
  - Evidence: Code scan results, vault inventory
  - Target: Zero hardcoded secrets found in scans
  - Owner: Engineering Lead

- [ ] **Logging & Retention Active**: Security events logged with proper retention
  - Evidence: Log aggregation dashboard, retention policies
  - Target: 12-month retention, real-time alerting active
  - Owner: Security Lead

- [ ] **Backup & Restore Tested**: Backup tested and restore time documented
  - Evidence: Monthly restore test results
  - Target: <4 hour restore time, 99%+ backup success rate
  - Owner: DevOps

## Gate A Decision Matrix

### 🟢 GREEN (All Systems Go)
- All 8 criteria ✅ GREEN
- No critical security incidents in 30 days
- Customer data and production work approved

### 🟡 AMBER (Conditional)
- 1-2 criteria in progress with clear resolution timeline
- No customer-facing releases until GREEN
- Internal work may continue with risk acceptance

### 🔴 RED (Full Stop)
- 3+ criteria not met OR critical security incident
- All customer work suspended immediately
- Emergency escalation to CEO required

## Evidence Repository
**Documentation Location:** /foundation/evidence/
- Legal agreements and IP assignments
- CI/CD pipeline logs and test results
- Security configuration screenshots
- Backup test results and timing
- Monthly audit reports

## Review Process
**Monthly Gate A Review:**
1. Security Lead compiles evidence
2. Each owner confirms their criteria status
3. CEO makes final Gate A decision
4. Status communicated to all teams
5. Any issues escalated immediately

**Emergency Review Triggers:**
- Security incident
- Direct-to-prod event
- Failed backup/restore
- Legal/compliance violation

## Contact Information
- **Security Lead:** [Name/Email]
- **Engineering Lead:** [Name/Email]
- **Legal Lead:** [Name/Email]
- **CEO (Final Authority):** [Name/Email]

---
*Gate A status determines all customer-facing work. When in doubt, escalate immediately.*