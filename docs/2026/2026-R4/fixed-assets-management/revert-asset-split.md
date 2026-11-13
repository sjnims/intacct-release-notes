---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-revert-asset-split.htm
release: 2026-R4
extracted: 2026-11-13
title: "Revert asset splits"
---

# Revert asset splits

[Revert an asset split](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revert_asset_split)

[About correction treatments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=SFAM_revert_vs_reverse)

Fixed Assets Management

This idea came from you

Easily undo asset splits that were created by mistake without manual adjustments or workarounds. Reverting a split deletes the assets created by the split and restores the original asset to its state before the split.

![Asset detail page showing the Revert split option](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-sfam-revert-split.png)

## Key benefits

- **Error correction**: Undo an accidental or incorrect asset split.
- **Accurate data restoration**: Automatically restore the original asset to its pre-split state and remove the assets created by the split.

- **Reduced manual effort**: Avoid complex adjustments and workarounds when correcting a split.

## How it works

1.  Open an asset that's in the Split state.

2.  Select More actions > **Revert split**.

3.  Select **Revert** to confirm.

    Fixed Assets Management deletes the assets created by the split and restores the original asset to its state before the split, allowing you to continue working with the original asset or create a new split.

## Good to know

- The revert split option is available only when correction treatment is set to Revert in Fixed Assets Management configuration.

- You cannot revert a split if any asset created by the split has subsequent activity, such as posted depreciation, transfers, disposals, or AP adjustments. Revert the subsequent activity before reverting the split.

- You can revert a split only when all assets created by the split remain in the same state they were in immediately after the split. Return any assets that have changed state before reverting the split.

## Permissions and other requirements

| Subscription                       | Fixed Assets Management                                                                                                           |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                       |
| User type                          | ConfigureBusiness user with admin privileges Revert splitsBusiness                                                                |
| Permissions                        | ConfigureAdministration Application subscriptions: Configure Revert splitsFixed Assets Management Asset: List, View, Edit, Delete |
| Configuration                      | In Fixed Assets Management configuration, Correction treatment must be set to Revert.                                             |
| Dependencies or other requirements | The asset must be in the Split state.                                                                                             |
