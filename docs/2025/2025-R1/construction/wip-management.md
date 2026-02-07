---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Construction/2025-R1-wip-management.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhancements in work in progress (WIP) management"
---

# Enhancements in work in progress (WIP) management

[Set up WIP management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[Create a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_wip_report)

[Edit a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_wip_report)

CONSTRUCTION

## New fields

WIP schedules include the following new fields.

[![WIP schedule page with new fields circled](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-wip-new-fields_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-wip-new-fields.png)

### Prior period WIP schedule

If there is a WIP schedule for the prior reporting period, it's shown in this field. You can drill down to view it.

When you create a new WIP schedule, PM and CFO forecasts from the prior period WIP schedule are automatically copied into the new WIP schedule. If there isn't a prior period WIP schedule, PM and CFO forecasts are blank.

Values from the prior period WIP schedule are also used to determine the values for some of the other new fields: Period billings, Period costs, Period earned profit, and Period earnings.

If there is a prior period WIP schedule, the **Prior period** section appears and shows information from the prior period WIP schedule.

### YTD costs

Shows the total costs from General Ledger entries for the project from the start of the current fiscal year to the WIP schedule period-end date.

### Period billings

Billings for the WIP schedule period, determined as follows:

- If there is a WIP schedule for the prior reporting period, period billings are calculated:

  Job to date billings − Job to date billings from the prior period

- If there isn't a WIP schedule for the prior reporting period, the period billings amount is the total of billings posted in General Ledger for the WIP schedule period.

### Period costs

Costs for the WIP schedule period, determined as follows:

- If there is a WIP schedule for the prior reporting period, period costs are calculated:

  Job to date costs − Job to date costs from the prior period

- If there isn't a WIP schedule for the prior reporting period, the period costs amount is the total of costs posted in General Ledger for the WIP schedule period.

### Period earned profit

Earned profit for the WIP schedule period, determined as follows:

- If there is a WIP schedule for the prior reporting period, period earned profit is calculated:

  Earned profit to date − Earned profit to date from the prior period

- If there isn't a WIP schedule for the prior reporting period, no earned profit amount is shown.

### Period earnings

Earnings for the WIP schedule period, determined as follows:

- If there is a WIP schedule for the prior reporting period, period earnings is calculated:

  Earned to date − Earned to date from the prior period

- If there isn't a WIP schedule for the prior reporting period, no earnings amount is shown.

### Project begin date and Project end date

These fields show the begin and end dates for the project.

These dates are specified on the Project Information page (go to **Projects** > \***\*All\*\*** \> **Projects**, and then select the project).

## Use different offset accounts for overbilling and underbilling

In WIP management configuration settings, we've replaced the **Offset account** field with the following fields:

- **Offset account for costs in excess of billings**
- **Offset account for billings in excess of costs**

With the new fields, you can specify different offset accounts for overbilling and underbilling amounts.

If you want to use the same offset account for overbilling and underbilling, you can. In fact, this is the default for any existing project that already has an offset account specified. The existing offset account is automatically entered in both of the new fields. So if you want to continue using a single offset account, you don't need to do anything.

You set up offset accounts for WIP management projects on the Configure Projects page (**Projects** > **Setup** > **Configuration**)

[![Configure Projects page with new offset account fields circled](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-wip-offset-account-fields_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-wip-offset-account-fields.png)

## WIP schedules are saved automatically when you refresh

When you're editing a WIP schedule and you select **Refresh** to get the latest project data, the WIP schedule is saved automatically. When you enter data in other ways, you still save your changes by selecting **Save**.

## Permissions and other requirements

| Subscription          | Construction                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States                                                               |
| User type             | Business Project Manager                                                                     |
| Permissions           | Projects Projects: List, View, Add, Edit WIP management: List, View, Add, Edit, Delete, Post |
