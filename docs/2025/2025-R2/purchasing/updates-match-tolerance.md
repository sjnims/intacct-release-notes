---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Purchasing/2025-R2-updates-match-tolerance.htm
release: 2025-R2
extracted: 2026-02-07
title: "Match tolerance exceptions are now flagged for drafts"
---

# Match tolerance exceptions are now flagged for drafts

[Match tolerances](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_match_tolerances)

Purchasing

Now, line items that are exceptions to your tolerance settings are flagged for draft transactions in addition to posted transactions. This allows you to see line item discrepancies before you post the transaction, so you can catch issues before they hit the books.

## Details

With match tolerances, Sage Intacct automatically compares the quantities and unit prices when you convert from one Purchasing transaction to the next. If the quantity or unit price in any line item is not within the tolerance limit you set, Intacct flags the converted to transaction as an exception. You can then choose to accept or fix the differences.

## Permissions and other requirements

| Subscription                       | Purchasing                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                   |
| User type                          | Business                                                                                                                      |
| Permissions                        | Purchasing Purchasing transactions: List, Edit, Override exceptions                                                           |
| Configuration                      | Enable match tolerances selected in Purchasing configurations                                                                 |
| Dependencies or other requirements | Smart Events that are configured to update Purchasing transaction documents might impact your activity with match tolerances. |
| Restrictions                       | Overriding transaction exceptions is not supported through API or CSV update.                                                 |
