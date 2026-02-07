---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/FixedAssets/2025-R1-fam-transfer-asset.htm
release: 2025-R1
extracted: 2026-02-07
title: "Transfer assets within an entity"
---

# Transfer assets within an entity

[Transfer an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Transfer_assets)

[About asset transfers](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_transferring_assets)

[Define a journal for asset transfers](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_journal_for_nondepreciable_assets)

Fixed Assets Management

You can now easily transfer assets between departments, projects, or other dimensions.

Each transfer automatically generates journal entries to update the asset's dimensions in the General Ledger, removing the need for manual updates. Transfers are also recorded on the new Transfer History tab for complete transparency and tracking.

This streamlined process saves time and effort while ensuring accurate records and clear visibility into ownership changes during the asset's lifecycle.

![The transfer asset page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-fam-transfer-asset.png)

## Details

To change an asset's allocation or dimensions, you must transfer it. The allocation and dimensions can no longer be modified while editing an asset. This ensures accurate recordkeeping.

When you transfer an asset, Sage Intacct performs the following actions:

- Updates the allocation and dimensions on the asset.
- Creates journal entries to reflect the asset's new dimension ownership in the General Ledger, as of the date of transfer.
- Records the transfer on the Transfer History tab.

The new Transfer History tab is available on asset records. It provides a complete list of transfers and includes links to the associated journal entries.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-fam-transfer-history.png)

### Restrictions

You can only transfer assets that are in the **Ready for review** or **In service** states.

The following actions are currently not supported:

- Transferring assets between locations.
- Reverting a transfer.
- Placing an asset back in review after a transfer.

## How it works

Before you begin, define a journal for transfers in the Fixed Assets Management configuration. Also, verify that the asset has an Asset GL account and an Accumulated depreciation GL account assigned.

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
2.  Select an asset to transfer.
3.  At the top right of the page, select **Transfer**.
4.  Select a **Transfer date**.
5.  Change the allocation or at least one dimension.
6.  Select **Transfer**.

## Permissions and other requirements

| Subscription                       | Fixed Assets Management                                                                                                                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability              | All regions                                                                                                                                                                                                                                |
| User type                          | Business user with admin privileges (to define a transfer journal in configuration) Business (to perform a transfer)                                                                                                                       |
| Permissions                        | Administration (to define a transfer journal in configuration) Application subscriptions: List, View, and Configure Fixed Assets Management (to perform a transfer) Assets: List, View, Edit                                               |
| Configuration                      | The following field must be defined in Fixed Assets Management configuration: Journal for transfers and non-depreciable assets. Additionally, the asset must have an Asset GL account and an Accumulated depreciation GL account assigned. |
| Dependencies or other requirements | Moving forward: To revert a depreciation posting, it must be dated after the last transfer date (if any). To dispose of an asset, the disposal date must be after the last transfer date (if any).                                         |
