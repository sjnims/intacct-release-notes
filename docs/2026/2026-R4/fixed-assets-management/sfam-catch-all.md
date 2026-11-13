---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other enhancements for Fixed Assets Management"
---

# Other enhancements for Fixed Assets Management

[Create asset classifications in bulk](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_asset_classifications_import)

[Roll forward report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=SFAM_roll_forward_report)

[Asset field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Asset_field_descriptions)

[Depreciation schedule field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Depreciation_schedule_field_descriptions)

[Custom report writer columns](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Custom_report_objects_for_FAM)

Fixed Assets Management

These ideas came from you

This release also includes the following updates to improve your Fixed Assets Management experience.

## Import asset classifications in bulk

Create multiple asset classifications at once using the import service. Bulk importing classifications streamlines Fixed Assets Management setup, reduces the time and effort required to create classifications individually, and supports large classification structures.

### How it works

- Go to **Fixed Assets Management** > **All** > **Asset classifications** and select **Import**.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

| Subscription          | Fixed Assets Management                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                               |
| User type             | Business                                                                                  |
| Permissions           | Classification: List, Add                                                                 |
| Restrictions          | Only creating asset classifications is supported at this time. Updates are not supported. |

## Display depreciation details in the Roll Forward report

The Roll Forward report now includes depreciation rule and depreciation schedule fields. To add these fields to the report, select the fields from **Additional fields to display** and set the Report type to **Detail**. These fields provide greater visibility into the depreciation settings and balances associated with each depreciable asset.

[List of new depreciation-related fields](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

- Depreciation rule ID

- Depreciation method

- Depreciation rate (%)

- Journal rule

- Useful life

- Useful life units

- Coefficient

- Convention

- Journal ID

- Book ID

- Historical accumulated depreciation

- Schedule ID

- Total accumulated depreciation

- Remaining depreciation

Additionally, Journal and Book are now available under **Additional fields to display** instead of as default report columns.

### How it works

- Go to **Fixed Assets Management** > **All** > **Roll forward report**.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

| Subscription          | Fixed Assets Management  |
| --------------------- | ------------------------ |
| Regional availability | All regions              |
| User type             | Business Employee        |
| Permissions           | Roll forward report: Run |

## View the last actual posting date for depreciation schedules

The Depreciation schedules tab on the asset record now includes a Last actual posting date column. The column displays the actual posting date of the most recent depreciation entry in the Posted state, making it easier to see when depreciation was last posted.

![Depreciation schedules tab showing the last actual posting date column.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-fam-last-posting-date.png)

### How it works

- Open an asset's **Depreciation schedules** tab.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

| Subscription          | Fixed Assets Management |
| --------------------- | ----------------------- |
| Regional availability | All regions             |
| User type             | Business Employee       |
| Permissions           | Asset: List, View       |

## View depreciation entry IDs in depreciation schedules

Depreciation schedules now include a Depreciation entry ID column. Use the ID to more easily identify and track depreciation entries across depreciation schedules, the Post Depreciation page, and bulk action runs.

![A depreciation schedule showing the Depreciation entry ID column](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-fam-entry-id.png)

### How it works

- Open an asset's **Depreciation schedules** tab and select a schedule.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

| Subscription          | Fixed Assets Management |
| --------------------- | ----------------------- |
| Regional availability | All regions             |
| User type             | Business Employee       |
| Permissions           | Asset: List, View       |

## Changes to capitalization fields

In Custom reports, the Capitalization date field has moved from the Asset data source to the Capitalization data source. Existing reports that use this field must be updated accordingly.

Additionally, existing Asset list views that include the Capitalization date or Capitalization journal entry fields must be updated. Remove these fields, then save the view. These fields are no longer available in Asset list views.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-sfam-catch-all.htm#)

| Subscription          | Fixed Assets Management Platform Services or Customization Services                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                      |
| User type             | Business                                                                                                         |
| Permissions           | Fixed Assets Management Asset: List Platform Services or Customization Services Custom reports: List, View, Edit |
