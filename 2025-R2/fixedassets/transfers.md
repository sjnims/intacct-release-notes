---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-transfers.htm
release: 2025-R2
extracted: 2026-02-07
title: "Transfer assets between entities, revert transfers, and more"
---

# Transfer assets between entities, revert transfers, and more

[About asset transfers](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_transferring_assets)

[Transfer an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Transfer_assets)

[Revert an asset transfer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revert_an_asset_transfer)

[View the details of an asset transfer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=View_asset_transfer_details)

Fixed Assets Management

Last release, we introduced [transferring assets within an entity](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/FixedAssets/2025-R1-fam-transfer-asset.htm). This release, we're excited to expand that functionality to support transfers between entities. We also added the ability to revert a transfer, improved the handling of transfer journal entries for multiple books, and added a transfer details page.

## Transfer assets between entities

You can now transfer assets between entities and locations that share the same base currency. When you transfer between entities, Sage Intacct automatically creates inter-entity transfer journal entries to keep your General Ledger accurate and in sync with Fixed Assets Management, removing the need for manual updates.

### Details

- Only assets created at the top level can be transferred between entities.
- Entities involved in the transfer must use the same base currency.
- To transfer, the asset must be in the Ready for review or In service state.

### How it works

1.  Go to the top level of your company.
2.  Go to **Fixed Assets Management** > **All** > **Assets**.
3.  Find the asset that you want to transfer.
4.  Select the asset's ID to view it.
5.  At the top right of the page, select **Transfer**.
6.  Select a **Transfer date**.
7.  Select a location that belongs to a different entity.
8.  Optionally, change other dimensions as needed.
9.  Select **Transfer**.

## Revert an asset transfer

If you made a mistake when transferring an asset, you can now easily undo the transfer. Previously, correcting a transfer required manually updating the General Ledger or re-transferring the asset. Now, you can revert the most recent asset transfer directly in Fixed Assets Management, saving time and reducing errors.

![Transfer history tab of an asset showing the revert transfer button.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-fam-revert-transfer.png)

### Details

To revert a transfer, the asset must be in the Ready for review or In service state.

When you revert a transfer, Sage Intacct performs the following actions:

- Removes the transfer record from the asset's Transfer History
- Deletes the associated journal entries from the General Ledger
- Restores the asset's previously assigned dimensions and allocation

You can only revert the most recent transfer. To revert an older transfer, first revert each transfer after it, starting with the most recent.

### How it works

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
2.  Find the asset containing the transfer that you want to revert.
3.  Select the asset's ID to view it.
4.  Select the **Transfer history** tab.
5.  Find the most recent transfer.
6.  Select **More actions** > **Revert** at the end of the row.
7.  Select **Revert** to confirm.

## Improved handling of transfer journal entries for multiple books

We improved how transfer journal entries are handled when an asset has multiple depreciation schedules.

Previously, when you transferred an asset, Sage Intacct created a journal entry for the asset cost in the transfer journal defined in the Fixed Assets Management configuration. Additionally, it only created a journal entry for accumulated depreciation if the depreciation schedule’s journal matched the transfer journal—leaving you to create journal entries manually for other books.

Now, when you transfer an asset, Sage Intacct automatically creates the following journal entries:

- A journal entry for the asset’s cost using the transfer journal.
- Journal entries for accumulated depreciation for each depreciation schedule, using the journal defined in that schedule’s rule.

This update eliminates the need for manual journal entry creation when assets have multiple books, reducing effort, and improving accuracy.

### Example

For example, when you transfer an asset with 2 depreciation schedules, the following journal entries are created.

[Asset cost journal entry—Transfer journal](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-transfers.htm#)

| GL account | Dimensions     | Allocation     | Debit ($) | Credit ($) |
| ---------- | -------------- | -------------- | --------- | ---------- |
| Asset      | New dimensions | New allocation | 1,000.00  |            |
| Asset      | Old dimensions | Old allocation |           | 1,000.00   |

[Accumulated depreciation journal entry—Depreciation schedule 1 journal](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-transfers.htm#)

| GL account               | Dimensions     | Allocation     | Debit ($) | Credit ($) |
| ------------------------ | -------------- | -------------- | --------- | ---------- |
| Accumulated depreciation | Old dimensions | Old allocation | 27.50     |            |
| Accumulated depreciation | New dimensions | New allocation |           | 27.50      |

[Accumulated depreciation journal entry—Depreciation schedule 2 journal](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-transfers.htm#)

| GL account               | Dimensions     | Allocation     | Debit ($) | Credit ($) |
| ------------------------ | -------------- | -------------- | --------- | ---------- |
| Accumulated depreciation | Old dimensions | Old allocation | 55.00     |            |
| Accumulated depreciation | New dimensions | New allocation |           | 55.00      |

## View transfer details

We added a new details page for asset transfers, which is accessible from the Transfer History tab on each asset.

You can now select a transfer to view its details, including the asset’s previous allocation and dimension values, and links to the associated journal entries.

![Details page of an asset transfer.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-fam-view-transfer_804x665.png)

### How it works

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
2.  Find the asset containing the transfer that you want to view.
3.  Select the asset's ID to view it.
4.  Select the **Transfer history** tab.
5.  Find the transfer that you want to view.
6.  Select the transfer's ID to view its details.

## Permissions and other requirements

| Subscription          | Fixed Assets Management                                                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                               |
| User type             | Business                                                                                                                                                                                                                                  |
| Permissions           | Fixed Assets Management Asset: List, View, Add, Edit                                                                                                                                                                                      |
| Configuration         | The following field must be defined in Fixed Assets Management configuration: Journal for transfers and non-depreciable assets Additionally, the asset must have an Asset GL account and an Accumulated depreciation GL account assigned. |
