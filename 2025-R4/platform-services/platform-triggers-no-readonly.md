---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Platform_Services/2025-R4-platform-triggers-no-readonly.htm
release: 2025-R4
extracted: 2026-02-07
title: "Platform triggers simplicity"
---

# Platform triggers simplicity

[Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

[Platform Triggers field block list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Triggers_field_block_list)

platform services

We no longer list read-only fields as options for defining standard objects in triggers. We also now allow direct updates only to custom fields and not to standard fields. These updates simplify the trigger creation process by omitting field options that might lead to data corruption.

## Key benefits

- Simpler and cleaner trigger creation experience.
- Confidence that only fields available for updates are included as options in triggers.

## What's changed

When you create a trigger, fields that might result in data issues no longer appear as options in the UI. Existing triggers that include fields which might cause issues now display a warning icon. Sage Intacct recommends updating these triggers to ensure correct functioning.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-platform-triggers-invalid.png)

Existing fields that will no longer work correctly display an "x" icon.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
