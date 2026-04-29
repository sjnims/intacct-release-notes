---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-revert-partial-disposals.htm
release: 2026-R2
extracted: 2026-04-29
title: "Revert partial disposals"
---

# Revert partial disposals

[Revert a partial disposal](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revert_partial_disposal)

Fixed Assets Management

Easily undo partial disposals while preserving accurate depreciation and audit trails.

You can now revert the most recent partial disposal for an asset directly in Fixed Assets Management. This simplifies error correction and removes the need for manual General Ledger workarounds.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-revert-partial-disposal.png "Disposals tab showing the Revert action")

## Key benefits

-   **Easier corrections:** Quickly undo accidental partial disposals directly from the asset record.
    
-   **Accurate data restoration:** Automatically restore depreciation schedules and amounts to their state before the partial disposal.
    
-   **Time savings:** Eliminate time‑consuming workarounds previously required to fix partial disposal mistakes.
    

## What's changed

A Revert action is now available for partial disposals on the Disposals tab of assets.

Reverting a partial disposal:

-   Deletes the related partial disposal journal entries.
    
-   Removes the partial disposal record from the Disposals tab.
    
-   Restores depreciation schedules and amounts to their state before the partial disposal.
    

## Good to know

-   You must revert the most recent partial disposal before you can revert an earlier one.
    
-   You can only revert a partial disposal if no subsequent journal entries (such as transfers or depreciation expense) have been posted for the asset after the partial disposal date.
    

## How it works

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
    
2.  Find the asset that you want to update.
    
3.  Select the asset's name to view it.
    
4.  Select the **Disposals** tab.
    
5.  Find the most recent partial disposal.
    
6.  Select More actions > **Revert** at the end of the row.
    
7.  Select **Revert** to confirm.
    

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Edit |
| Configuration | Correction treatment must be set to Revert in Fixed Assets Management configuration. |
