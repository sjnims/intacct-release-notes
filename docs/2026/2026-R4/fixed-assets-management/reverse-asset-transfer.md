---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Fixed_Assets_Management/2026-R4-reverse-asset-transfer.htm
release: 2026-R4
extracted: 2026-11-13
title: "Reverse asset transfers"
---

# Reverse asset transfers

[Reverse an asset transfer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_asset_transfer)

[About correction treatments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=SFAM_revert_vs_reverse)

Fixed Assets Management

Reverse asset transfers in Fixed Assets Management to restore an asset’s previous dimensions and correct transfer errors. Unlike reverting a transfer, reversing preserves the original transfer record and accounting activity while creating an offsetting journal entry that clearly records the correction.

![Transfers tab of an asset showing a reversed transfer](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-sfam-reverse-transfer.png)

## Key benefits

- **Correct errors with confidence**: Restore an asset to the dimensions assigned before the transfer so you can correct transfer or date mistakes.

- **Preserve posted accounting activity**: Retain the original transfer record while creating an offsetting journal entry that records the correction.

- **Reduce manual effort**: Eliminate manual journal entry adjustments in the General Ledger and avoid creating additional transfers.

## How it works

1.  In Fixed Assets Management configuration, [set Correction treatment to Reverse](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_correction_treatment).

2.  From the asset's Transfers tab, [reverse the most recent transfer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reverse_asset_transfer).

When you reverse an asset transfer, Fixed Assets Management does the following:

- Creates an offsetting journal entry by swapping the debit and credit lines from the original transfer journal entry.

- Restores the asset to the dimensions assigned before the transfer.

- Retains the original transfer record on the Transfers tab, marks it as reversed, and records the reversal date.

## What's changed

- Added a Reverse action for asset transfers. This option is available when correction treatment is set to reverse in Fixed Assets Management configuration.

- Transfer records now include the reversal date and remain available after they’re reversed.

- The Journal entries link on the transfer record provides access to both the original transfer journal entry and the reversal journal entry.

## Why the change

Some organizations require posted accounting activity to be reversed rather than deleted. This update provides a consistent and auditable way to correct transfers while supporting regional accounting requirements.

## Permissions and other requirements

| Subscription                       | Fixed Assets Management Administration                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                                                                                                                                                                                                                                                                                          |
| User type                          | ConfigureBusiness user with admin privileges Reverse transfersBusiness                                                                                                                                                                                                                                                                                                                               |
| Permissions                        | ConfigureAdministration Application subscriptions: Configure Reverse transfersFixed Assets Management Asset: List, View, Edit                                                                                                                                                                                                                                                                        |
| Configuration                      | In Fixed Assets Management configuration, Correction treatment must be set to Reverse.                                                                                                                                                                                                                                                                                                               |
| Dependencies or other requirements | The asset must be active and in the Ready for review or In service state. The asset cannot have any AP adjustments, depreciation postings, or disposals after the transfer date. Transfers must be reversed in reverse chronological order, starting with the most recent transfer. The reversal date must be on or after the transfer date and before the next scheduled depreciation posting date. |
| Restrictions                       | Assets with reversed transfers cannot be deleted.                                                                                                                                                                                                                                                                                                                                                    |
