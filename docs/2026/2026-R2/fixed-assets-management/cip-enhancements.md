---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-cip-enhancements.htm
release: 2026-R2
extracted: 2026-04-29
title: "Enhancements to CIP asset capitalization"
---

# Enhancements to CIP asset capitalization

[Capitalize a CIP asset](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Capitalize_CIP_asset)

[Revert a CIP asset capitalization](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revert_asset_capitalization)

Fixed Assets Management

Get more control over when and how you capitalize Construction in Progress (CIP) assets. You can now specify a capitalization date that aligns with your accounting timelines and revert a capitalization if you need to make changes. Previously, capitalization always used the current date and couldn’t be undone.

![Capitalize asset window showing new capitalization date field.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-capitalization-date.png)

## Key benefits

-   **Flexible capitalization timing:** Specify a capitalization date that supports backdated entries and month-end close.
    
-   **Easier corrections:** Revert a capitalization if it was created in error or if additional costs need to be added.
    
-   **Improved control over asset lifecycle:** Move assets between Construction in progress and Ready for review states without manual workarounds.
    

## What's changed

-   When capitalizing a CIP asset, you can now enter a capitalization date instead of using the current date by default.  
    This date is used for the capitalization journal entry that moves costs from the CIP GL account to the Asset GL account.
    
-   The capitalization date now displays on the asset's CIP tab.
    
-   A **Revert capitalization** action is available for CIP assets in the Ready for review state.
    
-   Reverting a capitalization changes the asset's state back to Construction in progress and deletes the capitalization journal entry.
    

## How it works

[Capitalize an asset](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-cip-enhancements.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
    
2.  Find the CIP asset that you want to capitalize.
    
3.  Select the asset's name to view it.
    
4.  At the top-right of the page, select **Capitalize**.
    
5.  Select a **Capitalization date**.
    
6.  Select **Capitalize**.
    

[Revert a capitalization](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-cip-enhancements.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
    
2.  Find the CIP asset that you want to revert.
    
3.  Select the asset's name to view it.
    
4.  At the top-right of the page, select More actions > **Revert capitalization**.
    
5.  Select **Revert** to confirm.
    

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Edit |
| Configuration | Enable CIP must be turned on in Fixed Assets Management configuration.                                                                 To revert capitalizations, Correction treatment must be set to Revert in Fixed Assets Management configuration. |
| Dependencies or other requirements | The capitalization date must be on or after the asset's acquisition date and in an open period. |
