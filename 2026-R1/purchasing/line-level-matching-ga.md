---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-line-level-matching-ga.htm
release: 2026-R1
extracted: 2026-02-07
title: "Line-level matching for AP Automation—General availability"
---

# Line-level matching for AP Automation—General availability

[Compare header-level to line-level transaction matching](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automated_txn_line_level_vs_header_level_matching)

Purchasing

Line-level document matching introduces a more precise way to automate transaction processing with AP Automation with Purchasing. For line-level matching, AI does the following:

-   Matches the vendor document to the source Purchasing transaction.
    
-   Populates line items in the target transaction using data from the uploaded or emailed vendor document, rather than the source transaction.
    
-   Flags any differences found in terms of price or quantity between the vendor invoice and the source transaction.
    

## Key benefits

-   Strengthen your purchasing process with intelligent 3-way matching between purchase orders, receivers, and vendor invoices while eliminating the need to convert transactions manually.
    
-   Quickly identify AI-flagged discrepancies in quantity or price between the automated transaction and source transaction, allowing you to determine and resolve line variations and unexpected lines.
    
-   Minimize review effort on minor differences with match tolerance thresholds.
    

## How it works

[Configure line-level matching for Purchasing automation](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-line-level-matching-ga.htm#)

1.  Go to **Purchasing** > **Setup** > **Configuration**.
    
2.  Select **Override header-level matching with line-level matching**.
    
3.  Select **Save**.
    

[Email or upload documents](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-line-level-matching-ga.htm#)

Continue emailing and uploading documents for processing.

[Review exceptions and post transactions](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-line-level-matching-ga.htm#)

View a summary of exceptions when there are discrepancies between matched transaction lines. For example, the purchase order has an item price of $5, but the vendor invoice charged you $8 for that item.

![""](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-po-match-tolerances.png)

1.  Select **View exceptions** to see the discrepancy summary when AI flags lines that do not match.
    
2.  Edit the automated transaction lines or post the exceptions as needed.
    

## Permissions and other requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 AP Automation                                                                 Sage Cloud Service |
| --- | --- |
| Regional availability | All regions |
| User type | Upload transactions for Purchasing automation                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       View, edit, and post automated transactions                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Move a draft transaction to the Accounts Payable workflow                                                                                                                                                                                                               Business user |
| Permissions | Accounts Payable  (to change a draft transaction to an AP bill)                                                                                                                                      Bills: Add                                                                                                                                  Purchasing (to view or edit the automated transactions)                                                                                                                                      Automated transactions: List                                                                     Purchasing transactions: View, Edit, Add, Delete, Override exceptions |
| Configuration | Select Enable draft mode for the top level and each entity                                                                     Select Automate transactions with header-level document matching                                                                     Select Override header-level matching with line-level matching |
