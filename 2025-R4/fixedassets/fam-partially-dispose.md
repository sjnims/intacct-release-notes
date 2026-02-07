---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/FixedAssets/2025-R4-fam-partially-dispose.htm
release: 2025-R4
extracted: 2026-02-07
title: "Partially dispose of assets"
---

# Partially dispose of assets

[Partially dispose of an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Partially_dispose_of_asset)

[Partially dispose of assets in bulk](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Partially_dispose_of_assets_in_bulk)

[Partial disposal examples](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Partial_disposal_examples)

Fixed Assets Management

Manage depreciation more precisely by disposing of part of an asset while continuing to depreciate the remaining value.

![An asset showing the dispose button dropdown options](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-fam-partial-disposal.png)

Assets aren’t always retired all at once. You might sell part of a building, retire components of machinery, or remove older parts during an upgrade. We've added the ability to partially dispose of assets, so you can record these changes accurately without manual workarounds.

## Key benefits

- **Retire assets flexibly:** Dispose of part of an asset while keeping the remaining value active for depreciation.
- **Ensure financial accuracy:** Automatically adjust cost and depreciation going forward.
- **Enhance visibility and reporting:** View all partial disposal details, including automatically calculated gain or loss amounts and direct links to the related journal entries.
- **Save time:** Eliminate manual workarounds and simplify asset management.

## What's changed

Previously, you could only fully dispose of an asset. Now, you can process partial disposals for assets that are in service. Fixed Assets Management automatically adjusts the asset’s cost and depreciation schedules while keeping the asset active for ongoing depreciation. The Disposal details section now always appears on assets, displaying information for each partial or full disposal. It also appears on each depreciation schedule, showing the gain or loss amount and related journal entries.

## How it works

1.  View an asset that's in service.
2.  From the Dispose dropdown button, select **Partially dispose**.
3.  Enter the **Partial disposal amount** and any other required details.

You can also process partial disposals in bulk using the import service.

## Permissions and other requirements

| Subscription          | Fixed Assets Management                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                           |
| User type             | Business                                                                                              |
| Permissions           | Fixed Assets Management Asset: List, View, Edit                                                       |
| Import service        | The following fields are now available when updating assets: Partial disposal Partial disposal amount |
| Restrictions          | Reverting a partial disposal is not supported at this time.                                           |
