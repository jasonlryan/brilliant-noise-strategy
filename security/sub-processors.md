# BN Trust OS - Sub-Processor Registry

## Overview

This document maintains the complete registry of all sub-processors engaged by Brilliant Noise for the provision of BN Trust OS services. All sub-processors listed here are bound by appropriate data processing agreements and security requirements.

**Last Updated:** [Date]
**Review Frequency:** Monthly
**Client Notification:** 30 days advance notice for changes

## Sub-Processor Categories

### Infrastructure and Hosting

#### Amazon Web Services (AWS)
**Service Provided:** Primary cloud infrastructure and hosting
**Data Processing Activities:** 
- Application hosting and compute services
- Database hosting and management
- Data storage and backup services
- Content delivery network (CDN)

**Location:** Ireland (EU-West-1 region)
**Data Residency:** All client data stored within EU boundaries
**Safeguards:** 
- AWS Data Processing Addendum (Standard Contractual Clauses)
- SOC 2 Type II certified
- ISO 27001 certified
- Regular third-party security audits

**Security Measures:**
- Encryption at rest and in transit
- Network isolation and VPC configuration
- Identity and access management (IAM)
- 24/7 monitoring and incident response

#### Microsoft Azure
**Service Provided:** Secondary hosting and backup services
**Data Processing Activities:**
- Disaster recovery and backup hosting
- Development and testing environments
- Analytics and reporting services

**Location:** Netherlands (West Europe region)
**Data Residency:** EU data residency guaranteed
**Safeguards:**
- Microsoft Data Protection Addendum
- SOC 2 Type II certified  
- ISO 27001 certified
- GDPR compliance certification

**Security Measures:**
- Azure Security Center monitoring
- Multi-factor authentication requirements
- Encryption with customer-managed keys
- Regular vulnerability assessments

### Communication and Notifications

#### SendGrid (Twilio)
**Service Provided:** Transactional email delivery
**Data Processing Activities:**
- Email notification delivery
- Email analytics and tracking
- Bounce and complaint handling

**Location:** United States (with EU data processing options)
**Data Residency:** Email metadata may be processed in US; content encrypted
**Safeguards:**
- Standard Contractual Clauses (EU-US)
- Privacy Shield successor framework (adequacy decision pending)
- ISO 27001 certified
- SOC 2 Type II certified

**Data Minimization:**
- Only email addresses and required notification content processed
- No sensitive client data included in email content
- 30-day data retention for delivery logs
- Automatic PII redaction in templates

#### Slack Technologies
**Service Provided:** Real-time workflow notifications
**Data Processing Activities:**
- Approval request notifications
- System alert delivery
- Integration webhooks

**Location:** United States
**Data Residency:** Notification data temporarily processed in US
**Safeguards:**
- Slack Data Processing Addendum
- Privacy Shield certified (transition to SCCs in progress)
- SOC 2 Type II certified
- ISO 27001 certified

**Data Minimization:**
- Only notification metadata and system events shared
- No personal client data in notification content
- Immediate deletion after successful delivery
- Encrypted message content

### Analytics and Monitoring

#### DataDog
**Service Provided:** Application performance monitoring and logging
**Data Processing Activities:**
- System performance metrics collection
- Error logging and alerting
- Infrastructure monitoring

**Location:** United States (with EU data residency option)
**Data Residency:** Monitoring data processed in EU datacenter
**Safeguards:**
- Standard Contractual Clauses
- SOC 2 Type II certified
- ISO 27001 certified
- Regular security assessments

**Data Minimization:**
- System metrics only, no personal data
- Automated PII detection and redaction
- 90-day data retention for logs
- Encrypted data transmission

#### Sentry
**Service Provided:** Error tracking and performance monitoring
**Data Processing Activities:**
- Application error collection
- Performance bottleneck identification
- Exception tracking and alerting

**Location:** United States (with EU region available)
**Data Residency:** Error data processed in EU region when possible
**Safeguards:**
- Sentry Data Processing Agreement
- Standard Contractual Clauses
- SOC 2 Type II in progress
- Privacy-first architecture

**Data Minimization:**
- Technical error data only
- Automatic PII scrubbing enabled
- 30-day error data retention
- Source code information redacted

### Security and Compliance

#### CrowdStrike
**Service Provided:** Endpoint detection and response (EDR)
**Data Processing Activities:**
- Endpoint security monitoring
- Threat detection and response
- Security incident analysis

**Location:** United States (with EU data processing)
**Data Residency:** Security logs may be processed globally for threat intelligence
**Safeguards:**
- CrowdStrike Data Processing Agreement
- FedRAMP Moderate certification
- ISO 27001 certified
- SOC 2 Type II certified

**Data Minimization:**
- System security events only
- No access to client application data
- Threat intelligence data anonymized
- 90-day log retention policy

#### Qualys
**Service Provided:** Vulnerability assessment and compliance scanning
**Data Processing Activities:**
- Infrastructure vulnerability scanning
- Compliance assessment and reporting
- Security posture monitoring

**Location:** United States (with EU scanning nodes)
**Data Residency:** Scan results processed in EU when possible
**Safeguards:**
- Qualys Master Service Agreement with DPA
- SOC 2 Type II certified
- ISO 27001 certified
- FedRAMP authorized

**Data Minimization:**
- Technical vulnerability data only
- No client application data accessed
- Automated compliance reporting
- 12-month scan history retention

### Development and Testing

#### GitHub (Microsoft)
**Service Provided:** Source code management and CI/CD
**Data Processing Activities:**
- Source code repository hosting
- Automated testing and deployment
- Version control and collaboration

**Location:** United States (with EU data residency options)
**Data Residency:** Source code may be replicated globally for performance
**Safeguards:**
- GitHub Data Protection Agreement
- SOC 2 Type II certified
- ISO 27001 certified
- Regular security audits

**Data Minimization:**
- Source code and technical documentation only
- No client data in development repositories
- Access restricted to development team
- Automated secret scanning enabled

#### Docker Hub
**Service Provided:** Container image registry
**Data Processing Activities:**
- Container image storage and distribution
- Build pipeline integration
- Version management

**Location:** United States
**Data Residency:** Container images replicated globally
**Safeguards:**
- Docker Terms of Service with privacy provisions
- Industry-standard security practices
- Vulnerability scanning enabled
- Access controls and authentication

**Data Minimization:**
- Application container images only
- No client data embedded in containers
- Public images security scanned
- Regular image updates and patching

## Sub-Processor Management Process

### Due Diligence Process
**Initial Assessment:**
1. Security questionnaire completion
2. Certification verification (SOC 2, ISO 27001)
3. Data processing agreement negotiation
4. Technical security review
5. Privacy impact assessment

**Ongoing Monitoring:**
- Quarterly security posture reviews
- Annual certification renewal verification
- Incident notification and response procedures
- Regular contract and compliance reviews

### Change Management
**Adding New Sub-Processors:**
1. Complete due diligence process
2. Negotiate appropriate data processing agreement
3. Provide 30-day advance notice to clients
4. Allow client objection period
5. Update sub-processor registry

**Modifying Existing Sub-Processors:**
1. Assess impact of changes on data protection
2. Update data processing agreements if necessary
3. Notify clients of material changes
4. Update registry and security documentation

**Removing Sub-Processors:**
1. Ensure secure data deletion or transfer
2. Terminate data processing agreements
3. Update client documentation
4. Remove from active sub-processor registry

### Client Rights and Notifications

#### Notification Requirements
**Advance Notice:** 30 days minimum for new sub-processors
**Information Provided:**
- Sub-processor name and contact information
- Services to be provided
- Location of data processing
- Data protection safeguards implemented

**Notification Methods:**
- Email to designated client contacts
- Update to client portal documentation
- Quarterly sub-processor report
- Annual compliance review meetings

#### Client Objection Process
**Objection Period:** 30 days from notification
**Valid Objection Grounds:**
- Inadequate data protection safeguards
- Unsupported data transfer mechanisms
- Conflict with client data residency requirements
- Failure to meet client security standards

**Resolution Process:**
1. Client submits written objection with specific concerns
2. BN reviews objection and assesses alternatives
3. Parties negotiate mutually acceptable solution
4. If no resolution, client may terminate affected services

### Security and Compliance Monitoring

#### Regular Assessments
**Monthly Reviews:**
- Sub-processor security incident reports
- Certification status verification
- Compliance with data processing agreements
- Performance and service quality metrics

**Quarterly Assessments:**
- Comprehensive security questionnaire updates
- Privacy and data protection compliance review
- Financial stability and business continuity assessment
- Client feedback and satisfaction surveys

**Annual Audits:**
- Full security and compliance audit
- Data processing agreement renewal
- Risk assessment and mitigation planning
- Strategic partnership review

#### Incident Response
**Sub-Processor Incident Notification:**
- Immediate notification to BN security team
- Assessment of impact on BN and client data
- Client notification within 24 hours if applicable
- Coordinated incident response and remediation

**Remediation Requirements:**
- Root cause analysis and corrective actions
- Evidence of security improvements
- Prevention measures implementation
- Regular follow-up and monitoring

---

*This sub-processor registry is maintained as a living document and updated monthly. All changes are communicated to clients according to contractual notification requirements and data protection regulations.*