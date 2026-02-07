---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Order_Entry/2024-R3-OE-convert-by-price-recurring.htm
release: 2024-R3
extracted: 2026-02-07
title: "View conversion type in recurring sales orders"
---

# View conversion type in recurring sales orders

[About recurring transactions - Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_recurring_transactions_oe)

[About price conversion](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Price_conversion_overview)

[Configure Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_the_Order_Entry_Application)

Order Entry

In 2024 R2, Sage Intacct added functionality to help you monitor billing against standing sales orders. Going one step further, the sales order workflow now allows you to easily keep track of the remaining balance in recurring scheduled sales order transactions.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-OEPO-convert-field-recurring-template.png)

## Details

If your Order Entry application is configured to allow conversion by price, you can now view the default conversion type in your recurring transaction templates. This increased flexibility helps you keep track of remaining contracted quantity or price on recurring Order Entry transactions.

## How it works

To view conversion defaults in recurring sales transactions, you'll complete the following tasks to enable line item conversion and set up recurring transactions.

### Configure Order Entry

1.  Go to **Order Entry** > **Setup** \> **Configuration**and scroll down to the Enable functionality section.
2.  Select the following options:
    - **Convert transactions by price**: Enables the ability to convert line items by price for non-inventory items.

    After this option is selected, it cannot be turned off after changing a transaction line item's default conversion type.
    - **Allow override of item's default conversion type**: Enables others to override a non-inventory item's default conversion type when converting to a new transaction in the workflow. If this option is not selected, the default conversion type is enforced and cannot be changed.

3.  Define the default conversion type for non-inventory items. See [Add an item](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_Viewing_Item_Information).

### Create a recurring template

There are multiple ways to create recurring transaction templates. Here is a brief overview of how to create a new recurring sales template.

1.  Go to **Order Entry** > **All** > **Other transactions** and select the + next to **Recurring transactions**.
2.  Select a document type, for example, Sales Order, then select **Apply**.
3.  Enter transaction information and add at least one line item. If this is a recurring sales order for a service, select a non-inventory item with the default conversion type of Price.
4.  Select the **Schedule** tab and enter required details.
5.  Select **Save**.

For additional information on all the ways to create recurring transactions, see [Recurring transactions - Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Recurring_Template).

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                          |
| User type             | To configure:  Business user with Full admin privileges To create recurring schedules for transactions:  Warehouse user                              |
| Permissions           | Administration Application subscriptions: Configure Order Entry Recurring transactions: List, View, Add, Edit                                        |
| Restrictions          | Price conversion is not available for transactions that include drop shipment, landed cost or kit type items, or for renewing contract transactions. |
