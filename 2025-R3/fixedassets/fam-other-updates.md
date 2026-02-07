---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/FixedAssets/2025-R3-fam-other-updates.htm
release: 2025-R3
extracted: 2026-02-07
title: "Depreciation enhancements"
---

# Depreciation enhancements

[Depreciation schedule field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Depreciation_schedule_field_descriptions)

[Daily depreciation method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Depreciation_method_DR)

Fixed Assets Management

We added the ability to view cumulative depreciation and updated the daily depreciation method.

## View cumulative depreciation

![Depreciation schedule shoing the Cumulative depreciation amount field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-FAM-cumulative-depreciation-amount.png)

We added a new column to depreciation schedules called **Cumulative depreciation amount**, which shows a running total of accumulated depreciation. For example, the cumulative depreciation amount for period 3 is the sum of the depreciation amounts posted in periods 1 and 2.

This added visibility helps users track depreciation at a glance and reduces the need for manual calculations. You can also add the Cumulative depreciation amount field to the Post Depreciation list and in custom reports.

## Updated daily depreciation method—France

We've updated the daily depreciation method to better align with French audit and financial reporting standards.

Previously, depreciation for each period was calculated by dividing the asset's depreciable cost by the useful life in days, then multiplying by the number of days in the month.

Now, the method considers an annual depreciation amount: it divides the depreciable cost by the useful life in years, and then allocates that annual amount across each month based on the number of days in that month. The first and last fiscal years are prorated.

Moving forward, assets placed in service will use this new calculation.

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | To view cumulative depreciation:                                                                                                                                                                                                               Business                                                                                                                                                                                                                   Employee                                                                                                                                                                                                        To assign daily method:                                                                                                                                                                                                               Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View |
