---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-other-updates.htm
release: 2025-R2
extracted: 2026-02-07
title: "Other updates to Fixed Assets Management"
---

# Other updates to Fixed Assets Management

[Edit an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_asset)

[Asset field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Asset_field_descriptions)

[Apply an allocation to an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Apply_allocation_to_asset)

[Create assets from bills](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_bill)

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

Fixed Assets Management

We added the following enhancements to improve your experience.

## Mark assets as intangible

You can now specify if an asset is intangible using the Asset type field. Intangible assets, such as patents or copyrights, do not have physical substance, while tangible assets, like equipment or land, do. This option is for reporting purposes only and does not affect other functionality in the application.

### How it works

1. Go to **Fixed Assets Management** > **All** > **Assets**.
2. Find the asset that you want to mark as Intangible.
3. Select **More actions** > **Edit** at the end of the row.
4. In the Asset type field, select **Intangible**.
5. Select **Save**.

## Edit fields on disposed assets

You can now edit certain fields on disposed assets, allowing you to make corrections without placing the asset back in service. The following fields are editable:

- Serial number
- Asset tag
- Asset type
- Parent asset
- Description
- Notes
- Attachment
- Custom fields

### How it works

1. Go to **Fixed Assets Management** > **All** > **Assets**.
2. Find the disposed asset that you want to edit.
3. Select **More actions** > **Edit** at the end of the row.
4. Make your changes.
5. Select **Save**.

## Simplified allocation assignments

We streamlined the process of assigning allocations to assets. Previously, when you assigned an allocation to an asset, you still had to select a matching location dimension manually. Now, the location from the selected allocation is automatically applied to the asset, saving you time and reducing errors.

## Improved asset cost calculation for ITC—Canada

When creating an asset from an AP bill in a Canadian entity, we updated how the asset cost is calculated if the ITC (Input Tax Credit) checkbox is selected.

Previously, if **ITC** and **Include tax in asset cost** was selected, the asset cost included the whole base tax amount.

Now, if **ITC** and **Include tax in asset cost** is selected, the asset cost only includes the non-recoverable portion of tax. For example, if the base tax amount is $6,000 and $3,245 is recoverable, the non-recoverable portion of $2,755 is included in the asset cost.

## User interface updates

- You can now add the **Book ID** column to the Post depreciation list using the Configure columns option.
- We removed the **Disposal GL account** field from the Disposal details section on assets because it's already in the Asset classification section.
- On the Depreciation Schedule tab of disposed assets, we made the **Journal entry no.** field a link. Selecting the link opens a popup with details about the journal entry.

## Import service updates

We made several updates to the import service to improve error handling and clarity:

- **Download**: You can now select **Download** to download the workbook as an XLSX file with error messages included.
- **Revalidate**: After correcting errors, select **Revalidate** to check if they’ve been resolved. We removed the **Reset errors** button because Revalidate replaces its functionality.
- **Quick access link**: We added a link to the import service at the top of the Company setup checklist for easier access.
- **Improved labels**: We updated labels for better clarity.

[Learn more about the import service](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Company_and_Administration/2025-R2-import-service.htm).

## Permissions and other requirements

| Subscription          | Fixed Assets Management                                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                   |
| User type             | Business                                                                                                                                                                                                      |
| Permissions           | Accounts Payable (for the ITC checkbox) Bills: List, View, Add Company (for the import service) Company setup checklist: Run Fixed Assets Management Asset: List, View, Edit Classification: List, View, Edit |
| CSV import            | The Asset type field now accepts the value Intangible.                                                                                                                                                        |
| Restrictions          | ITC only applies to Canadian entities.                                                                                                                                                                        |
