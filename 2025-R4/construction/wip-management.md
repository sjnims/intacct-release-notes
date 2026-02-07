---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Construction/2025-R4-wip-management.htm
release: 2025-R4
extracted: 2026-02-07
title: "Enhancements in work in progress (WIP) management"
---

# Enhancements in work in progress (WIP) management

[Set up WIP management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[View history for WIP projects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_history)

[Create a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_wip_report)

[Edit a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_wip_report)

CONSTRUCTION

In this release we've made the following enhancements to work in progress (WIP) management.

## Choose whether WIP schedules include projects that have no job to date costs or billings

On the Configure Projects page, a new **Include projects that have no job to date costs of billings** option lets you control how WIP schedules handle projects that have no job to date costs or billings.

If the option is selected (which it is by default), WIP schedules include all projects that are set up to be included, even if they have no job to date costs or billings.

If you clear the option, WIP schedules exclude projects that have no job to date costs or billings.

## Easily set project costs or billings to complete

In WIP schedules, 2 new buttons above the grid let you easily update CFO forecasts to show that a project is complete in terms of costs or billings. These buttons update only the projects you've selected:

-   **Set project costs to complete (100%)**: For each selected project, copy the **Job to date costs** to **CFO forecast cost at completion**, which causes the **CFO forecast pct complete** to be calculated as 100%.
-   **Set billings to complete (100%)**: For each selected project, copy the **Job to date billings** to **CFO forecast contract value**, indicating that everything for the job has been billed.

If you set both costs and billings to complete, the **Job to date overbilled** and **Job to date underbilled** fields show zero.

## View project cost breakdown from the WIP history page—Early Adopter

You can now open the WIP Schedule Project Breakdown page from the WIP history page, by selecting More actions > **Show project breakdown**.

### What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

[Would you like to be considered for this Early Adopter program?](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Construction/2025-R4-wip-management.htm#)

To learn more about this Early Adopter program, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Construction                                                                 Projects |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     United Kingdom                                                                     United States |
| User type | Business                                                                 Project Manager |
| Permissions | Projects                                                                                                                                      Projects: List, View, Add, Edit                                                                     WIP management: List, View, Add, Edit, Delete |
