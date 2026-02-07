---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-wip-management.htm
release: 2025-R2
extracted: 2026-02-07
title: "See historical data for projects in work in progress (WIP) management"
---

# See historical data for projects in work in progress (WIP) management

[View history for WIP projects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_history)

[Import WIP schedule information](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=import_wip_schedule_info)

CONSTRUCTION

A new WIP History page shows data from all your WIP schedules, so you can see historical trends and create customized sets of data for analysis. Also, the WIP History page is now where you export WIP schedule data, using an improved export process.

[![WIP history page showing trend data for a project](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-WIP-history_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-WIP-history.png)

We've renamed the WIP Management page to WIP Schedules, and you no longer export WIP schedule data from this page.

## How it works

### See trends and progress for a WIP project

1. Go to **Projects** > **All** > **WIP history**.
2. Filter by the project (use either the **Project ID** or **Project name** field).
3. Sort by the **Period end**.

You can add columns to see trends for additional data points. For example, to see the profit fade, add **CFO forecast gross profit margin pct (%)**.

[Learn how to add columns](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Change_list_display_ng)

### Export data to update a WIP schedule

1. Go to **Projects** > **All** > **WIP history**.
2. Select the **Fields used for import** view, which shows only the fields that are used for import:
    - Period name
    - Period end
    - Project ID
    - Project name
    - PM forecast cost at completion
    - PM forecast contract value
    - CFO forecast cost at completion
    - CFO forecast contract value

    You can add columns to include in the exported data. When you import, any extra columns that you added are not imported.

    [Learn how to add columns](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Change_list_display_ng)

3. Check that there are no filters applied.
4. Filter by the period (use either the **Period name** or **Period end** field).

    Filter for only one period, and do not filter out any projects for that period.

5. Select **Export**.
6. Select the file type for the exported data.
7. Copy the exported data into an import file (use the import template that you can download from the View WIP Schedules page or the Edit WIP Schedules page).
8. Update the data in the import file.
9. Import the updated data to the WIP schedule.

    [Learn how to import WIP schedule data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=import_wip_schedule_info).

### Export a customized set of data for analysis

1. Go to **Projects** > **All** > **WIP history**.
2. Filter and sort on any columns to show exactly the data you want.
3. Select **Export**.
4. Select the file type for the exported data.

## Permissions and other requirements

| Subscription          | Construction                                                                           |
| --------------------- | -------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                          |
| User type             | Business Project Manager                                                               |
| Permissions           | Projects Projects: List, View, Add, Edit WIP management: List, View, Add, Edit, Delete |
