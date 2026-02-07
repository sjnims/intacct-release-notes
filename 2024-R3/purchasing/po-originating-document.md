---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-PO-originating-document.htm
release: 2024-R3
extracted: 2026-02-07
title: "Trace original transaction documents"
---

# Trace original transaction documents

[Transaction definitions - Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_Purchasing_transaction_definitions)

[Convert a purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Converting_a_purchase_transaction)

PURCHASING

Purchasing workflows provide great flexibility with multiple potential transaction entry and exit points. Now you can easily track which transaction started a workflow. A more traceable workflow ensures greater inventory reconciliation accuracy.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-PO-originatingdoc-EN.png)

## Details

Being able to trace original documents in your purchasing workflows ensures that you can:

-   Identify the original transaction in the workflow (originating document).
-   Refer back to the previous document in the workflow (source document).
-   Generate more informative purchase transaction reports.
-   More easily identify and report on reconciliation issues and take corrective action.

## How it works

To identify an originating document within a purchasing workflow:

1.  Go to **Purchasing** > **All** > **Transactions** and select a transaction type, such as Sales invoice.
    
2.  In the Purchasing transactions window, locate a transaction in the table then select **View**.
    
3.  In the Entries table, select a line item row then select **Show details**:
    
    -   If this is the original transaction in the workflow, the Originating document ID field is blank.
        
    
    -   If this is the second transaction in the workflow, the Originating document ID displays the initial transaction ID (the same ID displays in the Source document ID field).
        
    -   If this is a document in the workflow with more than 2 conversions, the Originating ID displays the initial transaction ID (the Source document ID displays the last conversion document ID).
        

## Permissions and other requirements

| Subscription | Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | To configure:                                                                                                                                                                                                               Business user with Full admin privileges                                                                                                                                                                                                       To convert purchase transactions:                                                                                                                                                                                                               Employee user |
| Permissions | Administration                                                                                                                                                                                                               Application subscriptions: Configure                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Items: List, View, Add, Edit                                                                                                                                                                                                                                                                                                                                                     Purchasing transactions: List, View, Add, Edit, Delete |
