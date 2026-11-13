---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-reverse-asset-capitalizations.htm
release: 2026-R4
extracted: 2026-11-13
title: "Reverse CIP asset capitalizations"
---

# Reverse CIP asset capitalizations

[Reverse a CIP asset capitalization](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_asset_capitalization)

[About correction treatments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=SFAM_revert_vs_reverse)

Fixed Assets Management

Correct capitalization errors while preserving posted accounting activity. Reverse asset capitalizations in Fixed Assets Management to return assets to the Construction in Progress state. Unlike reverting a capitalization, reversing preserves the original accounting activity and capitalization record instead of deleting it.

![CIP tab of asset with a reversed capitalization](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-sfam-reverse-capitalization.png)

## Key benefits

- **Correct errors with confidence**: Return an asset to the Construction in Progress state so that you can add costs or correct the capitalization date.

- **Preserve posted accounting activity**: Retain the original capitalization record while creating an offsetting journal entry that clearly records the correction.

- **Reduce manual effort**: Eliminate manual journal entry adjustments in the General Ledger.

## How it works

1.  In Fixed Assets Management configuration, [set Correction treatment to Reverse](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_correction_treatment).

2.  From the asset's CIP tab, [reverse the capitalization](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_asset_capitalization).

When you reverse a capitalization, Fixed Assets Management does the following:

- Creates an offsetting journal entry by swapping the debit and credit lines from the original capitalization journal entry.

- Returns the asset to the Construction in Progress state.

- Retains the capitalization record on the CIP tab, marks it as reversed, and records the reversal date.

## What's changed

- Added a Reverse action for asset capitalizations. This option is available when correction treatment is set to reverse in Fixed Assets Management configuration.

- The Capitalization section on the CIP tab now displays capitalization records in a table that includes Capitalization ID, Journal entries, and Reversal date columns.

- The Journal entries link provides access to both the original capitalization journal entry and the reversal journal entry.

## Why the change

Some organizations require posted accounting activity to be reversed rather than deleted. This update provides a consistent and auditable way to correct capitalization transactions while supporting regional accounting requirements.

## Permissions and other requirements

| Subscription                       | Fixed Assets Management Administration                                                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                                                                       |
| User type                          | ConfigureBusiness user with admin privileges Reverse capitalizationsBusiness                                                                                                      |
| Permissions                        | ConfigureAdministration Application subscriptions: Configure Reverse capitalizationsFixed Assets Management Asset: List, View, Edit                                               |
| Configuration                      | In Fixed Assets Management configuration, Correction treatment must be set to Reverse.                                                                                            |
| Dependencies or other requirements | The asset must be active and in the Ready for review state. The asset cannot have any transfers or AP adjustments. The reversal date must be on or after the capitalization date. |
| Restrictions                       | Assets with reversed capitalizations cannot be deleted.                                                                                                                           |
