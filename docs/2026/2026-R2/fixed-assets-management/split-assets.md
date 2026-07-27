---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-split-assets.htm
release: 2026-R2
extracted: 2026-04-29
title: "Split an asset into multiple assets"
---

# Split an asset into multiple assets

[Split an asset](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Split_asset)

[Example: Split an asset](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Split_asset_example)

Fixed Assets Management

Easily manage assets that need to be tracked separately. You can now split an existing asset into up to 20 independent assets while preserving depreciation accuracy and history.

This enhancement gives you more flexibility to manage depreciation, transfers, and disposals without manual workarounds. Fixed Assets Management automatically recalculates values and maintains a clear link between the original asset and the assets created by the split.

![Split page showing an asset being split into 5 assets](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-split-asset.png)

## Key benefits

- **Greater asset flexibility:** Split an asset directly from the asset record and manage the resulting assets separately.

- **Accurate depreciation calculations:** Automatically recalculate cost, salvage value, and depreciation while keeping totals aligned with the original asset.

- **Preserved audit trail:** Maintain a clear history that links the original asset to all assets created by the split.

- **Reduced manual effort**: Eliminate workarounds and manual adjustments when assets need to be tracked, transferred, or disposed separately.

## What's changed

A **Split** action is now available on assets that are in Ready for Review or In Service states. You can use it to split an asset into a maximum of 20 assets.

When you split an asset, the following changes occur:

- The original asset status changes to Split.

- Unposted depreciation periods on the original asset are marked as Canceled. Posted periods remain posted.

- New assets inherit posted periods as Historically posted.

- Depreciation for unposted periods is recalculated based on the split date, asset cost, salvage value, and depreciation method.

Assets also include a **Splits** tab, which shows the split date and the relationship between the original asset and the assets created by the split.

## Good to know

- An asset that has been split cannot be edited, deleted, or split again.

- Assets created by a split cannot be deleted, but each can be split one additional time.

- You can only edit the following fields on assets created by a split: Asset name, Status, Serial number, Quantity, Parent asset, Description, Notes, Attachment, Asset tag, Dimensions, and custom fields.

## How it works

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
2.  Find the asset that you want to split.
3.  Select the asset's name to view it.
4.  At the top-right of the page, select **Split**.
5.  Select a **Split date**.
6.  Enter the names, costs, and salvage values for the assets created by the split.

    The total cost of the resulting assets must equal the original asset’s cost, and their total salvage value must equal the original asset’s salvage value.

7.  Select **Split**.

## Permissions and other requirements

| Subscription          | Fixed Assets Management                         |
| --------------------- | ----------------------------------------------- |
| Regional availability | All regions                                     |
| User type             | Business                                        |
| Permissions           | Fixed Assets Management Asset: List, View, Edit |
