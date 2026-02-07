---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Platform_Services/2024-R3-platform-smart-event-log-change.htm
release: 2024-R3
extracted: 2026-02-07
title: "Reminder: No more Audit Log package installation"
---

# Reminder: No more Audit Log package installation

In Release 2024 Release 1, Sage Intacct announced a change regarding the Audit log package. We want to remind you about this change and its benefits to you.

## Details

Intacct will block the installation of the Audit Log package and prevent the execution of the events associated with it. If Intacct detects the Audit Log package during an installation or upgrade, the install process is blocked and an error message is returned. Events associated with the Audit Log package do not execute, and relevant logs will reflect that the event is blocked. This enhancement means that you do not need an application package to add events to object changes. Instead, you can easily create audit reports and share them.

## How it works

Intacct encourages you to create a report based on the Audit Trail and add it to an application menu for easy access. See [Use an Audit Trail report](https://www.intacct.com/ia/docs/en_US/help_action/Administration/Audit_trail/Reports/audit-history-report.htm#AccessanAuditHistoryreport) for instructions on how to set this up.

In addition, you can go to **Company > Subscriptions > Custom packages** and enable **Audit History by Object Data Area Report**. You can then run this report from the **Custom reports** option in Platform Services.

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Permissions to the Platform Services application |
