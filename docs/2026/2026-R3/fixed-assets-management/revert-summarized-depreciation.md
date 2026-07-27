---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Fixed_Assets_Management/2026-R3-revert-summarized-depreciation.htm
release: 2026-R3
extracted: 2026-07-27
title: "Revert summarized depreciation postings"
---

# Revert summarized depreciation postings

This idea came from you

You can now summarize depreciation postings when the correction treatment for Fixed Assets Management is set to Revert. Previously, summarized depreciation postings were available only when correction treatment was set to Reverse. This enhancement helps reduce General Ledger volume and gives you the flexibility to revert individual depreciation entries that are included in a summarized posting.

## Key benefits

- **Gain more flexibility**: Use summarized depreciation postings with either the Reverse or Revert correction treatment.

- **Reduce General Ledger volume**: Combine depreciation postings across multiple assets into a single summarized journal entry.

- **Simplify reconciliation**: Review depreciation activity more quickly with fewer journal entries.

- **Correct posting errors with confidence**: Revert individual depreciation entries included in a summarized posting. The summarized journal entry is updated automatically.

## How it works

1.  Set the Correction treatment for Fixed Assets Management to Revert.

2.  Turn on Summarize depreciation entries.

3.  Review summarized depreciation postings.

4.  Revert depreciation entries included in a summarized posting when corrections are needed.

## What's changed

We extended the Summarize depreciation entries setting to support both correction treatments. When summarization is turned on and the correction treatment is **Revert**, you can summarize depreciation postings and later revert individual depreciation entries included in a summarized posting.

Reverting a depreciation entry included in a summarized posting does the following:

- Updates the summarized journal entry to remove the amounts associated with the reverted depreciation entry.

- Restores the depreciation entry and related schedule to its previous state.

## Good to know

- When summarization is turned on, Fixed Assets Management groups depreciation postings into a summarized journal entry when they share the same journal, actual posting date, accumulated depreciation GL account, depreciation expense GL account, and location dimension.

- You can revert depreciation entries in bulk from the Post Depreciation page or individually from the Depreciation Schedule page.

- If all depreciation entries in a summarized journal entry are reverted, the summarized journal entry is deleted.

## Permissions and other requirements

| Subscription          | Fixed Assets Management Administration (for setup)                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                   |
| User type             | To configure this feature: Business user with admin privileges To use this feature: Business                                                  |
| Permissions           | To configure this feature: Administration Application subscriptions: Configure To use this feature: Fixed Assets Management Asset: List, View |
| Configuration         | Fixed Assets Management configuration: Correction treatment must be set to Revert. Summarize depreciation postings must be turned on.         |
