---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-summarize-depreciation.htm
release: 2026-R2
extracted: 2026-04-29
title: "Summarize depreciation postings"
---

# Summarize depreciation postings

Fixed Assets Management

You can now reduce General Ledger volume by summarizing depreciation postings across assets that share the same accounting attributes. This helps improve posting performance and makes depreciation entries easier to review and reconcile. Previously, each depreciation entry created a separate journal entry.

At this time, summarizing depreciation entries is available only for companies with [Correction treatment](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-reverse-depreciation.htm#JournalCorrection) set to Reverse.

## Key benefits

- **Reduced GL volume:** Combine depreciation postings across multiple assets into a single summarized journal entry.

- **Simplified reconciliation:** Review depreciation activity more quickly with fewer journal entries.

- **Clear visibility:** See how individual asset depreciation rolls up into summarized postings.

## What's changed

The **Summarize depreciation entries** setting lets you control how depreciation is posted in Fixed Assets Management. You can turn this setting on or off at any time. Changing it only applies to future depreciation postings.

When summarization is turned on, Fixed Assets Management groups depreciation postings across assets into a single journal entry if the postings share the following attributes:

- Journal

- Actual posting date

- Accumulated depreciation GL account

- Depreciation expense GL account

- Dimensions

## How it works

[Turn on summarization](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-summarize-depreciation.htm#)

1.  Go to **Fixed Assets Management** > **Setup** > **Configuration**.

2.  Select **Edit**.

3.  In the Journals and accounts section, set Correction treatment to **Reverse**.

    Setting Correction treatment to Reverse is permanent. After you set it, you cannot use any revert actions, such as reverting transfers or disposals.

4.  In the Depreciation settings section, select **Summarize depreciation entries**.

    ![Configuration page with Summarize depreciation entries checkbox highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-fam-summarize-setting.png)

5.  Select **Save**.

[View summary details](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Fixed_Assets_Management/2026-R2-summarize-depreciation.htm#)

1.  Open a summarized journal entry.

    You can access the journal entry from Fixed Assets Management by selecting **Journal entries** next to a depreciation entry that was included in a summary.

2.  Select the **Base debit** or **Base credit** amount to drill down.

    ![Journal entry page with Base debit and Base credit values highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-summarized-je.png)

    The underlying depreciation entries included in the summary are shown.

    ![List of depreciation entries included in a summary](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-summary-details.png)

## Permissions and other requirements

| Subscription          | Fixed Assets Management Administration (for setup)                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                   |
| User type             | Business user with admin privileges (for setup) Business                                                                                                                                                                                                                      |
| Permissions           | Fixed Assets Management Asset: List, View Administration (for setup) Application subscriptions: Configure                                                                                                                                                                     |
| Configuration         | Fixed Assets Management configuration: Correction treatment must be set to Reverse. Summarize depreciation postings must be turned on.                                                                                                                                        |
| Restrictions          | At this time, summarizing depreciation entries is available only for companies with Correction treatment set to Reverse. Setting Correction treatment to Reverse is permanent. After you set it, you cannot use any revert actions, such as reverting transfers or disposals. |
