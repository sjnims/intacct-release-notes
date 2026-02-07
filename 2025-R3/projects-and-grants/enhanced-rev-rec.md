---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Projects_and_Grants/2025-R3-enhanced-rev-rec.htm
release: 2025-R3
extracted: 2026-02-07
title: "Improved revenue recognition based on budgeted project cost"
---

# Improved revenue recognition based on budgeted project cost

[Manage project revenue recognition by budgeted cost](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Project-rev-rec-cost)

[Project revenue recognition schedule FAQs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_project_revenue_recognition_schedules)

[Project revenue recognition posting dates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Project_revenue_recognition)

Projects

We improved the way percent complete revenue recognition is calculated when recognition is based on a project's budgeted vs. actual costs. You can now calculate revenue as of a desired date and Intacct will include all applicable GL transactions that post on or before that date.

## Key benefits

- Ensures that revenue is recognized using only the applicable actual costs posted within the same reporting period.
- Improves financial accuracy and auditability by eliminating cost blending across periods.
- Reduces timing-related discrepancies in revenue recognition due to late cost transaction postings.

## What's changed

Previously, project revenue recognition based on budgeted cost was calculated when you either opened the revenue recognition schedule for an applicable transaction or executed the post function on a scheduled revenue entry as of the date you performed the action.

We added an **Update percent complete schedules** button to the **Manage revenue schedules** page. This gives you control over your month-end close process over when project revenue is calculated and scheduled.

![Manage revenue schedules page with the Update percent complete schedules button highlighted.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-Rev-rec-update-percent-complete-schedules_1055x124.png "Manage revenue schedules")

The scheduled posting date for revenue schedules based on a project's budgeted vs. actual costs will remain blank until you execute the Update percent complete schedules process. So, you are now required to execute this process prior to posting this type of project revenue.

## How it works

1. In the **Manage revenue schedules** page, select the desired **As of date** on or before which includes the cost transactions you want to include in the revenue calculation, select any other desired filters, and select **Preview**
2. Select **Update percent complete schedules**.

   This button triggers an offline bulk action that gathers project-related data and performs the percentage of completion calculations. If Intacct finds valid recognition, it schedules the revenue using the specified As of date as the scheduled posting date.

3. Review the results and post the revenue as desired.

For more information see [Manage revenue recognition based on budgeted project cost](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Project-rev-rec-cost).

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Projects_and_Grants/2025-R3-enhanced-rev-rec.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription                       | Projects configured for Projects costing and billing Standard revenue recognition                                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia Canada South Africa United Kingdom United States                                                                                                                                        |
| User type                          | Business with admin privileges Project Manager Construction Manager with added permission to create and post invoices                                                                             |
| Permissions                        | General Ledger Revenue recognition schedule: List, Edit                                                                                                                                           |
| Dependencies or other requirements | The associated revenue recognition template must have Based on set to either Budgeted cost from summary or Budgeted cost from GL Manage revenue schedules must be accessed from the entity level. |
