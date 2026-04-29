---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Purchasing/2026-R2-intelligent-3-way-matching-automation.htm
release: 2026-R2
extracted: 2026-04-29
title: "Intelligent 3-way matching with AP Automation"
---

# Intelligent 3-way matching with AP Automation

Intelligent 3-way matching strengthens AP Automation by introducing AI‑driven, line-level document matching across purchase orders, receivers, and vendor invoices. This enhancement increases accuracy, reduces manual intervention, and helps teams resolve discrepancies faster and with greater confidence.

![""](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-po-match-tolerances.png)

## Key benefits

-   **Faster exception handling:** AI automatically flags quantity and price differences so reviewers can quickly identify and address line discrepancies in the Exception summary.
-   **More precise automation:** Vendor invoices are matched directly to the source purchasing transaction at the line level, rather than relying solely on header‑level document matching.
-   **Reduced review effort:** Match tolerance thresholds help minimize unnecessary review of minor differences, allowing teams to focus on true exceptions.

## How it works

When line-level matching is enabled for Purchasing automation, documents continue to be uploaded or emailed as usual. The system applies AI to match vendor invoice lines to purchase orders and receivers, surfaces discrepancies, and allows users to review exceptions or post transactions as needed.

[Set up intelligent 3-way document matching](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Purchasing/2026-R2-intelligent-3-way-matching-automation.htm#)

1.  Go to **Purchasing** > **Setup** > **Configuration**.
    
2.  Select **Automate header-level document matching**.
    
3.  Enter transaction definitions to match as follows:
    
    | Entity | Target | Source |
    | --- | --- | --- |
    | Top level | Receiver | Purchase order |
    | Top level | Vendor invoice | Receiver |
    
4.  Select **Override header-level matching with line-level matching**.
    
5.  Select **Save**.
    

[Email or upload documents](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Purchasing/2026-R2-intelligent-3-way-matching-automation.htm#)

Continue emailing and uploading documents for processing.

[Review exceptions and post transactions](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Purchasing/2026-R2-intelligent-3-way-matching-automation.htm#)

View a summary of exceptions when there are discrepancies between matched transaction lines. For example, a purchase order has an item price of $5, but the vendor invoice charged you $8 for the item.

1.  Select **View exceptions** to see the discrepancy summary when AI flags lines that do not match.
    
2.  Edit the automated transaction lines or post the exceptions as needed.
    

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 AP Automation                                                                 Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | To set up 3-way matching                                                                                                                                              Administration                                                                                                                                                      Application subscriptions: List, View, Configure                                                                                                                                                  Purchasing                                                                                                                                                                                                                                       PO transaction definitions: List, View, Add, Edit                                                                                                                                                                                                                                                                                                                                                             To change a draft transaction to an AP bill                                                                                                                                              Accounts Payable                                                                                                                                                      Bills: Add                                                                                                                                                                                                                                                                                To view or edit automated transactions                                                                                                                                              Purchasing                                                                                                                                                      Automated transactions: List                                                                             Purchasing transactions: View, Edit, Add, Delete, Override exceptions |
| Configuration | Select Enable draft mode for the top level and each entity                                                                     Select Automate transactions with header-level document matching                                                                     Select Override header-level matching with line-level matching                                                                     Optionally, select Enable match tolerances                                                                     Optionally, select Enable conversions for multiple source documents |
