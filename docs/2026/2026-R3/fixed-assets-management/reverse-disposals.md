---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Fixed_Assets_Management/2026-R3-reverse-disposals.htm
release: 2026-R3
extracted: 2026-07-27
title: "Reverse asset disposals"
---

# Reverse asset disposals

Fixed Assets Management

You can now reverse full and partial asset disposals in Fixed Assets Management. Reversing a disposal creates offsetting journal entries and restores the asset and related depreciation information to its state before the disposal. This helps you correct disposal errors while preserving posted accounting activity.

Previously, you could only revert disposals, which deleted the original journal entries. In some regions, accounting standards require posted transactions to be reversed rather than deleted.

![Disposals tab showing a reversed partial disposal](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-fam-reverse-disposal.png)

## Key benefits

- **Correct disposal errors with confidence**: Reverse full or partial disposals, automatically restoring the asset to its previous state.

- **Preserve posted accounting activity:** Create offsetting journal entries instead of deleting existing disposal postings.

- **Reduce manual effort**: Eliminate manual journal entry adjustments in the General Ledger.

- **Support regional accounting requirements**: Reverse posted transactions in regions where journal entries cannot be deleted.

## How it works

1.  Turn on reversals for Fixed Assets Management.

2.  View an asset and go to the Disposals tab.

3.  Select **Reverse** for a partial or full disposal.
4.  Review the resulting journal entries:
    - For depreciable assets, view the entries from a depreciation schedule.

    - For nondepreciable assets, view the entries from the Disposals tab.

## What's changed

A Reverse option is now available on the Disposals tab for partial and full disposals.

Reversing a disposal does the following:

- Creates a journal entry that mirrors the original disposal journal entry by reversing the debit and credit amounts.

- Restores the asset and related depreciation schedules to their state before the disposal.

- Retains the original disposal record on the Disposals tab, marks it as reversed, and records the reversal date.

## Good to know

- To use this feature, Correction treatment must be set to Reverse in Fixed Assets Management configuration. With this release, you can also [switch between Revert and Reverse configurations](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Fixed_Assets_Management/2026-R3-fam-other.htm#Switch).

- Reverse the most recent disposal before reversing earlier disposals.

- Assets with reversed disposals cannot be deleted.

## Permissions and other requirements

| Subscription          | Fixed Assets Management Administration (for setup)                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                   |
| User type             | To configure this feature: Business user with admin privileges To use this feature: Business                                                  |
| Permissions           | To configure this feature: Administration Application subscriptions: Configure To use this feature: Fixed Assets Management Asset: List, View |
| Configuration         | In Fixed Assets Management configuration, Correction treatment must be set to Reverse.                                                        |
