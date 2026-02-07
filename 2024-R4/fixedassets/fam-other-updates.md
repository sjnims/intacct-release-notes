---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-other-updates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Other updates in Fixed Assets Management"
---

# Other updates in Fixed Assets Management

[Asset field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Asset_field_descriptions)

[About bulk action runs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_fa_bulk_action_runs)

[Add or edit an asset group](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_asset_group)

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

[Import assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_asset)

Fixed Assets Management

We added the following enhancements to improve your experience.

## Add notes to assets

A new Notes field on assets allows you to capture additional details.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-FAM-notes-field.png)

You can use the Notes field to record information such as service history, condition, comments, or any other details that do not fit in existing fields. The field is optional and supports up to 2,000 characters.

## Enhanced lists

[Enhanced lists](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/User_Experience/2024-R4-next-gen-lists.htm) are available on the Bulk Action Runs and Asset Groups pages. These pages now align with the rest of the Fixed Assets Management application.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-fam-bulk-runs.png)

If you prefer to use the previous interface, select **Turn off beta**.

## Import service updates

The import service received the following updates.

### A single workspace

We've streamlined the import process by combining all fields into a single sheet for easier review.

Previously, asset fields and depreciation rule fields were split between two separate sheets: Add headers and Add lines. Now, all data appears in the Add lines sheet, with depreciation rule lines following their respective asset lines. This maintains the format from the import template.

Assets are still assigned a unique Header number, making it easy to match depreciation rule lines to the corresponding asset. Additionally, for depreciation rule lines, only the relevant fields are editable, while the rest are read-only.

### New exit functionality

The Exit button has been improved to give you more control. When you select **Exit**, you can choose between two options: **Exit and save progress** or **Exit and clear progress**.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-fam-import.png)

Previously, closing the Import service always automatically saved all data. This could lead to confusion if you intended to start a new import but data from a previous session was still present. Now, if you select **Exit and clear progress**, all data on the Add lines sheet is removed from the workspace.

## Permissions and other requirements

| Subscription | Fixed Assets Management                                                                 Company |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Add, Edit                                                                                                                                                                                                                   Bulk action runs: List, View                                                                                                                                                                                                       Company                                                                                                                                                                                                               Company setup checklist: Run |
