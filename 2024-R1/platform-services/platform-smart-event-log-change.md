---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Platform_Services/2024-R1-platform-smart-event-log-change.htm
release: 2024-R1
extracted: 2026-02-07
title: "Understand upcoming changes to Smart event logs"
---

# Understand upcoming changes to Smart event logs

Sage Intacct previously used an application package to add events for object changes to create an audit log. We're working on a solution that generates audit logs for object changes without requiring the installation of the Audit Trail package. We'll give you notice before we make this change, but we want you to be aware of it now.

## Details

In the coming months, to prevent conflicts with our new solution, Intacct will block the installation of the Audit Trail package and prevent the execution of the events associated with it. This means that at that time, if Intacct detects the Audit Trail package during an installation or upgrade, the install process will be blocked. In addition, an error message will be returned. Finally, any events associated with the former Audit Trail package will not execute, and relevant logs will reflect that the event was blocked and the reason why.

These upcoming changes mean that you will no longer need an application package to add events to object changes. [Instead, you'll be able to view object changes using the Audit Trail](https://www.intacct.com/ia/docs/en_US/help_action/Administration/Audit_trail/aa-TOC-audit-trails.htm).

## Requirements

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Permissions to the Platform Services application |
