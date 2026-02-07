---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Construction/2026-R1-wip-management.htm
release: 2026-R1
extracted: 2026-02-07
title: "Enhancements in work in progress (WIP) management"
---

# Enhancements in work in progress (WIP) management

[Set up WIP management](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[Set options to calculate forecasts for WIP schedule projects](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_schedule_projects)

[Work with project costs at your preferred level of detail in WIP schedules](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=detail_level_for_project_costs)

CONSTRUCTION

In this release, we've made the following enhancements to work in progress (WIP) management.

## Set costs and billings for projects to complete as of a specific WIP period

Setting costs and billings to complete is now a once and done process. Use the new WIP Schedule Projects page to set costs or billings (or both) complete on multiple projects at once by specifying a WIP period. The selected projects are set to complete as of the specified WIP period.

-   If you set a project's costs to complete, the **CFO forecast cost at completion** matches the **Job to date costs** amount, effectively making the project 100% cost complete.
    
    **CFO forecast cost to complete** and **CFO forecast pct complete** are recalculated based on the CFO forecast cost at completion.
    
-   If you set a project's billings complete, the **CFO forecast contract value** matches the **Job to date billings** amount, effectively making the project 100% billings complete.

For projects that have all their revenue recognized, or for cost plus projects where the revenue is recognized when the cost is incurred, you should set both costs and billings to complete. If you do this, CFO forecasts are adjusted automatically to keep the project at 100% complete, with no further overbilling or underbilling adjustment.

At any time, you can clear a project's costs complete period or billings complete period so CFO forecasts can be manually changed again:

[Learn how to set a project's costs or billings to complete](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=complete_costs_billings)

## See warnings for details in the project breakdown—Early Adopter

When viewing a WIP schedule, you can now see if there are any warnings for project cost details. Errors and warnings are shown in the grid:

-   The **Errors** and **Warnings** columns show if there are messages related to information in the WIP schedule page.
-   The **Warnings in project breakdown** column shows if there are warnings related to information in the WIP Schedule Project Breakdown page.

### What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

[Would you like to be considered for this Early Adopter program?](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Construction/2026-R1-wip-management.htm#)

To learn more about this Early Adopter program, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Construction                                                                 Projects |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     United Kingdom                                                                     United States |
| User type | Business                                                                 Construction Manager                                                                 Project Manager |
| Permissions | Projects                                                                                                                                      Projects: List, View, Add, Edit                                                                     WIP management: List, View, Add, Edit |
