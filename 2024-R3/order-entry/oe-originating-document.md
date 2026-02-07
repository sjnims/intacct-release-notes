---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Order_Entry/2024-R3-OE-originating-document.htm
release: 2024-R3
extracted: 2026-02-07
title: "Trace original transaction documents"
---

# Trace original transaction documents

[Transaction definitions - Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Order_Entry_transaction_definitions)

[Convert a sales transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Converting_a_sales_transaction)

ORDER ENTRY

Order Entry workflows provide great flexibility with multiple potential transaction entry and exit points. Now you can easily track which transactions started a workflow. A more traceable workflow ensures greater inventory reconciliation accuracy.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-OE-originatingdoc-EN.png)

## Details

Being able to trace original documents in your sales order workflows ensures that you can:

- Identify the original transaction in the workflow (originating document).
- Refer back to the previous document in the workflow (source document)
- Generate more informative sales transaction reports
- More easily identify and report on reconciliation issues and take corrective action.

## How it works

To identify an originating document within a sales order workflow:

1. Go to **Order Entry** > **All** > **Transactions** and select a transaction type, such as Sales invoice.
2. In the Order entry transactions window, locate a transaction then select **View**.
3. In the Entries table select a line item row then select **Show details**:
    - If this is the original transaction in the workflow, the Originating document ID field is blank.
    - If this is the second transaction in the workflow, the Originating document ID displays the initial transaction ID (the same ID displays in the Source document ID field).
    - If this is a document in the workflow with more than 2 conversions, the Originating document ID displays the initial transaction ID (the Source document ID displays the last conversion document ID).

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                          |
| User type             | To configure: Business user with Full admin privileges To convert sales transactions: Warehouse user                                                 |
| Permissions           | Administration Application subscriptions: Configure Order Entry Items: List, View, Add, Edit Order entry transactions: List, View, Add, Edit, Delete |
