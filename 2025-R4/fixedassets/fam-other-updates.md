---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/FixedAssets/2025-R4-fam-other-updates.htm
release: 2025-R4
extracted: 2026-02-07
title: "Other updates to Fixed Assets Management"
---

# Other updates to Fixed Assets Management

[Edit an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_asset)

[Configure historical accumulated depreciation calculation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Define_historical_accumulated_depreciation_setting)

[Create assets from purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_purchasing_transactions)

Fixed Assets Management

We added the following enhancements to improve your experience.

## Edit dimensions without needing an asset transfer

Previously, updating dimensions on an asset required a formal transfer process that created journal entries even for nonfinancial changes. Now, you can edit dimensions directly on assets in service without performing a transfer or generating journal entries. This includes changing the location within the same entity. To move an asset to a different entity, you must still use the transfer process.

This update simplifies maintenance, keeps your ledger clean, and ensures reports reflect accurate, up-to-date information.

## Change the historical accumulated depreciation setting at any time

In Release 2025 R3, we introduced [custom historical accumulated depreciation](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/FixedAssets/2025-R3-fam-historical-acc-depr.htm). Previously, you had to choose a single calculation method for the historical accumulated depreciation and it couldn't be changed later. Now, you can easily switch between **System calculated** and **Manual entry** at any time, even if assets already exist in your company.

To change the **Historical accumulated depreciation** setting, go to **Fixed Assets Management** > **Setup** > **Configuration**.

Changes apply only to assets placed in service going forward, giving you greater flexibility for handling historical data without affecting existing records.

## Edit asset names for better flexibility

Previously, you couldn't rename assets that were in service or created from bills or purchasing transactions. Now, you can edit the name of any asset in the Ready for review or In service states. The original name on the source transaction remains unchanged. This gives you more control over asset records while maintaining a complete audit trail of changes.

## Improved asset cost calculation for ITC—Canada

In Release 2025 R2, we announced [ITC (Input Tax Credit) consideration](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-other-updates.htm#ITC) when creating an asset from a bill. This release, we've added this functionality for purchasing transactions.

When creating an asset from a purchasing transaction in a Canadian entity, we updated how the asset cost is calculated if the **ITC** checkbox is selected. Previously, if **ITC** and **Include tax in asset cost** were selected, the asset cost included the whole base tax amount.

Now, if **ITC** and **Include tax in asset cost** are selected, the asset cost only includes the non-recoverable portion of tax. For example, if the base tax amount is $6,000 and $3,245 is recoverable, the non-recoverable portion of $2,755 is included in the asset cost.

## Permissions and other requirements

| Subscription | Administration                                                                 Fixed Assets Management                                                                 Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | To change the historical accumulated depreciation setting:                                                                                                                                                                                                               Business user with admin privileges                                                                                                                                                                                                       To edit assets and create assets from purchasing transactions:                                                                                                                                                                                                               Business |
| Permissions | Administration (to change the historical accumulated depreciation setting)                                                                                                                                                                                                               Application subscriptions: Configure                                                                                                                                                                                                       Fixed Assets Management                                                                                                                                                                                                               Assets: List, View, Edit                                                                                                                                                                                                       Purchasing (to create assets from purchasing transactions)                                                                                                                                                                                                               Purchasing transactions: List, View, Add |
| Configuration | The Purchasing integration must be turned on and set up to create assets from purchasing transactions. |
| Restrictions | ITC only applies to Canadian entities. |
