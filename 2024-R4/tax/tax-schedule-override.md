---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Tax/2024-R4-tax-schedule-override.htm
release: 2024-R4
extracted: 2026-02-07
title: "Updates for tax schedules"
---

# Updates for tax schedules

Users of Advanced Tax or a VAT tax solution can override the default tax schedules in Purchasing and Order Entry transactions. When you use a VAT tax solution, you can also set tax schedules as inactive.

## Override tax schedules in Purchasing and Order Entry

You can override tax amounts and details in Purchasing and Order Entry to address unusual situations, but sometimes customers need more granular control. Now, companies using Advanced Tax or a VAT tax solution can override the default tax schedule in transaction line items. This lets you calculate taxes for transactions that cross tax jurisdictions, or select a tax schedule when there is no corresponding tax schedule map.

## Details

When you create or convert a Purchasing or Order Entry transaction, each line item is filled with the tax schedule associated with the vendor item or customer item. You can change the default tax schedule by selecting a new tax schedule in the tax schedule dropdown.

For example, you have a construction vendor item that defaults to a Washington tax schedule, but the project needs to be taxed using Oregon rates. With this feature, you can override the default Washington Sales Tax schedule to the corresponding Oregon Sales Tax schedule.

When you change the tax schedule, the totals recalculate automatically. If you have subtotals turned on, you must recalculate those manually.

This feature is only available to companies that use Advanced Tax or a VAT tax solution.

## How it works

Enable this feature in Purchasing and Order Entry.

1.  Go to **Purchasing > Setup > Configuration**.
2.  Under **Tax**, ensure that **Use Advanced Tax schedules** is turned on.
3.  Check the box for **Enable override of tax schedule on document entry**.
4.  Select **Save**.

![Screenshot of Tax section of Configure Purchasing page with callout box around Enable override of tax schedule on document entry.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-schedule-override.configure.png)

Repeat these steps to enable in Order Entry.

## Set tax schedules as inactive

If you use a VAT tax solution, you can set your tax schedules as inactive so they don't appear in filtered lists. You can remove the inactive status at any time.

1.  Go to **Taxes** > **Setup** > **Schedules**.
2.  Select **Edit** for a tax schedule.
3.  Under Status, select **Active** or **Inactive**.
4.  Select **Save**.

## Permissions and other requirements

| Subscription          | Purchasing Order Entry Taxes                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                     |
| User type             | Business                                                                                                                                                        |
| Permissions           | Order Entry Order Entry transactions: List, View, Add, Edit Purchasing Purchasing transactions: List, View, Add, Edit Taxes Tax solution: List, View, Add, Edit |
| Restrictions          | Company or entity must use Advanced Tax or a VAT tax solution.                                                                                                  |
