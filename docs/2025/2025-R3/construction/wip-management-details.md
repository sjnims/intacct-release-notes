---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-wip-management-details.htm
release: 2025-R3
extracted: 2026-02-07
title: "Work with project costs at your preferred level of detail in work in progress (WIP) management—Early Adopter"
---

# Work with project costs at your preferred level of detail in work in progress (WIP) management—Early Adopter

[Work with project costs at your preferred level of detail in WIP schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=detail_level_for_project_costs)

CONSTRUCTION

You can now choose the level of detail to use in WIP schedules for viewing project costs and entering PM cost forecasts.

Related to this feature, we've changed how projects with no billings or costs are handled. If a project is set up to be included in WIP schedules, it will be, even if it has no billings or costs.

This change is for everyone, not only participants in the Early Adopter program.

## How it works

In the Configure Projects page (**Projects** > **Setup** > **Configuration**), you choose one of the following as the level of detail for project costs:

- **WIP schedule projects**: Do not break down project costs. View and enter them as totals at the WIP schedule project level. If you use this level of detail, WIP schedules work the same as they have in previous releases of Sage Intacct.

  This is the default level of detail.

- **Subprojects**: Break down project costs by WIP schedule projects and their subprojects.
- **Tasks**: Break down project costs by tasks within each WIP schedule project and each of its subprojects.
- **Tasks and cost types**: Break down project costs by combinations of task and cost type within each WIP schedule project and each of its subprojects.

In new WIP schedules, view project costs and enter PM cost forecasts at the new level of detail. You do this for each WIP schedule project separately, in the new WIP Schedule Project Breakdown page.

Changing the configuration setting for level of detail does not change existing WIP schedules. However, if you refresh a WIP schedule, it's updated to use the level of detail that's currently set in configuration.

When importing data, the data you import is based on the level of detail for project costs.

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

[Would you like to be considered for this Early Adopter program?](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-wip-management-details.htm#)

To learn more about this Early Adopter program, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription          | Construction Projects                                                                  |
| --------------------- | -------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                          |
| User type             | Business Project Manager                                                               |
| Permissions           | Projects Projects: List, View, Add, Edit WIP management: List, View, Add, Edit, Delete |
