---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Construction/2024-R3-wip-management-ga.htm
release: 2024-R3
extracted: 2026-02-07
title: "Work in progress (WIP) management—Generally available"
---

# Work in progress (WIP) management—Generally available

[WIP management overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_reports)

[Set up WIP management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[Create a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_wip_report)

[Edit a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_wip_report)

[Post a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=post_wip_report)

CONSTRUCTION

Use WIP schedules to track overbilling and underbilling and show the predicted profit at the end of your project. WIP schedules are useful for project managers, controllers, CFOs, and anyone monitoring the profitability of ongoing projects.

## Details

CFOs and project managers can use the interactive tool to enter their own project cost and revenue forecasts to go along with data pulled from Sage Intacct Construction. Values are pulled from:

- Projects
- Estimates
- Project contracts
- Job to date costs from General Ledger
- Job to date billings from General Ledger

Each WIP schedule covers a specific period. The WIP schedule periods are based on the reporting periods that you already have set up in your entity.

Each row in the WIP projects section represents an ongoing project. Each column contains information for that project and the WIP schedule period.

## How it works

1. Include projects in WIP schedules (by default, no projects are included in WIP schedules):
    1. Go to **Projects** > **All** > **WIP project settings**.
    2. Using the checkboxes in the list, select one or more projects that you want to include in WIP schedules.

        You can select up to 100 projects at a time.

        To show the project hierarchy, select **Display hierarchy**.

    3. Specify how you want to include the selected projects by selecting one of the options in the **Include** button.

2. Go to **Projects** > **All** > and select the **+** next to **WIP management**.

    Alternately, you can select **Create** on the WIP management list page.

3. If you are at the top level, select an **Entity**.
4. Select a **Period name**.

    The available options are based on the reporting periods that are set up for your entity. If a reporting period is already in use for a WIP schedule, it's not available in the list.

    After you select a reporting period as the period name, the projects that meet the WIP schedule criteria during that period are listed in the WIP projects section. You can start editing the project information.

5. Select **Save**.
6. When you're ready to post the over and under-billing totals for the month, select **Post**.

## Permissions and other requirements

| Subscription          | Construction                                                                        |
| --------------------- | ----------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States                                                      |
| User type             | Business user Project manager                                                       |
| Permissions           | Projects: List, View, Add, Edit WIP management: List, View, Add, Edit, Delete, Post |
