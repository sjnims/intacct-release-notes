---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Platform_Services/2024-R2-platform-smart-event-log-change.htm
release: 2024-R2
extracted: 2026-02-07
title: "Improved functionality: No more Audit Log package installation"
---

# Improved functionality: No more Audit Log package installation

In Release 24R1, Sage Intacct announced an upcoming solution to generate audit logs for object changes without needing to install the Audit Log package. The solution is now available!

## Details

To prevent conflicts with our new solution, Intacct now blocks the installation of the Audit Log package and prevents the execution of the events associated with it. This means that if Intacct detects the Audit Log package during an installation or upgrade, the install process is blocked and an error message is returned. Any events associated with the former Audit Log package do not execute, and relevant logs reflect that the event is blocked. This enhancement means that you do not need an application package to add events to object changes. This change also means that you can more easily create audit reports and share them.

## How it works

When you create a Smart event, you no longer see an option to select **Log** from event properties. You can continue to select **Email**, **HTTP post**, or **API** for the event properties. Instead, create a report based on the Audit Trail and add it to an application menu for easy access. See [Use an Audit Trail report](https://www.intacct.com/ia/docs/en_US/help_action/Administration/Audit_trail/Reports/audit-history-report.htm#AccessanAuditHistoryreport) for instructions on how to set this up.

In addition, you can go to **Company > Subscriptions > Custom packages** and enable **Audit History by Object Data Area Report**. You can then run this report from the **Custom reports** option in Platform Services.

![The Smart events creation page, step 2, with the Email, HTTP post, and API options visible. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-platform-remove-log-option.png)

## Requirements

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Permissions to the Platform Services application |
