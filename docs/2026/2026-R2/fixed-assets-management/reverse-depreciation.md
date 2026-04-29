---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm
release: 2026-R2
extracted: 2026-04-29
title: "Reverse depreciation postings"
---

# Reverse depreciation postings

Correct depreciation mistakes without deleting journal entries or relying on manual workarounds. You can now reverse posted depreciation directly within Fixed Assets Management. Reversing creates an offsetting journal entry and preserves the original posting.

![Depreciation schedule showing a reversed entry](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-reversed-entry.png)

Previously, you could only revert depreciation, which deletes the original posting and is not permitted in some regions.

## Key benefits

-   **Improved traceability:** Preserve the original postings while clearly recording corrections.
    
-   **Flexible recovery:** Reverse posted depreciation and repost the period again when you’re ready.
    
-   **Reduced manual effort:** Eliminate manual journal entry adjustments in the General Ledger.
    

## What's changed

-   You can choose Reverse or Revert depreciation by setting the Correction treatment configuration.
    
-   A **Reverse** action is available for posted depreciation entries on the Depreciation Schedule and Post Depreciation pages.
    
-   When you reverse a depreciation entry, the entry is marked as Reversed and an offsetting journal entry is created automatically.
    
-   Depreciation entries can now be linked to multiple journal entries. To support this, the **Journal entry no.** column is replaced with a **Journal entries** link. The link opens a list of all related depreciation expense and reversal journal entries.
    

## Good to know

-   Configuration is permanent at this time. After you set Correction treatment to Reverse, you cannot use revert actions, such as reverting transfers or disposals.
    
-   Assets with reversed depreciation entries cannot be deleted.
    
-   Reversal journal entries debit the Accumulated depreciation GL account and credit the Depreciation expense GL account.
    
    [Example journal entries](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm#)
    
    **Depreciation expense journal entry:**
    
    | GL account | Debit ($) | Credit ($) |
    | --- | --- | --- |
    | Depreciation expense | 500.00 |  |
    | Accumulated depreciation |  | 500.00 |
    
    **Reverse depreciation expense journal entry:**
    
    | GL account | Debit ($) | Credit ($) |
    | --- | --- | --- |
    | Accumulated depreciation | 500.00 |  |
    | Depreciation expense |  | 500.00 |
    

## How it works

[Turn on reversals](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm#)

1.  Go to **Fixed Assets Management** > **Setup** > **Configuration**.
    
2.  Select **Edit**.
    
3.  In the Journals and accounts section, set Correction treatment to **Reverse**.
    
    Setting Correction treatment to Reverse is permanent. After you set it, you cannot use any revert actions, such as reverting transfers or disposals.
    
    ![Configuration page showing the Correction treatment setting](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-correction-setting_803x349.png)
    
4.  Select **Save**.
    

[Reverse a depreciation entry from the Depreciation Schedule page](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
    
2.  Find the asset that you want to update.
    
3.  Select the asset's name to view it.
    
4.  Select the **Depreciation schedules** tab.
    
5.  Select a schedule's ID to view it.
    
6.  For the most recently posted depreciation entry, select More actions > **Reverse**.
    
    ![Depreciation schedule showing the Reverse action](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-reverse.png)
    
7.  Select a **Reversal date**.
    
8.  Select **Reverse** to confirm.
    

[Reverse depreciation entries in bulk from the Post Depreciation page](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Post depreciation**.
    
2.  From the views dropdown at the top left, select the **Posted** view.
    
3.  Select the checkboxes next to the entries that you want to reverse.
    
4.  Select **Reverse**.
    
    ![Post depreciation page showing the Reverse button](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-reverse-bulk.png)
    
5.  Select a **Reversal date**.
    
6.  Select **Reverse** to confirm.
    

## Permissions and other requirements

| Subscription | Fixed Assets Management                                                                 Administration (for setup) |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges (for setup)                                                                 Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View                                                                                                                                                                                                                   Post depreciation: Run                                                                                                                                                                                                       Administration (for setup)                                                                                                                                                                                                               Application subscriptions: Configure |
| Configuration | In Fixed Assets Management configuration, Correction treatment must be set to Reverse. |
| Restrictions | At this time, setting Correction treatment to Reverse is permanent. After you set it, you cannot use any revert actions, such as reverting transfers or disposals. |
