---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-PO-convert-by-price-recurring.htm
release: 2024-R3
extracted: 2026-02-07
title: "View conversion type on recurring purchase orders"
---

# View conversion type on recurring purchase orders

[About recurring transactions - Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_recurring_transactions_po)

[About price conversion](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Price_conversion_overview)

[Configure Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Purchase_Orders)

Purchasing

In Release 2 Sage Intacct added functionality to help you monitor billing against standing purchase orders. Going one step further, the purchase order workflow now allows you to easily track the remaining balance in recurring scheduled purchase order transactions.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-OEPO-convert-field-recurring-template.png)

## Details

If your Purchasing application is configured to allow conversion by price, you can now view the default conversion type in your recurring transactions. With this increased flexibility you can keep track of remaining contracted quantity or price on recurring Purchasing transactions.

## How it works

To view conversion defaults in recurring purchase orders, you'll complete the following tasks to enable line item conversion and set up recurring purchase transactions.

### Configure Order Entry

1. Go to **Purchasing** > **Setup** \> **Configuration**and scroll down to the Enable functionality section.
2. Select the following options:
   - **Convert transactions by price**: Enables the ability to convert line items by price for non-inventory items.

   After this option is selected, it cannot be turned off after a transaction is converted by price.
   - **Allow override of item's default conversion type**: Enables others to override a non-inventory item's default conversion type when converting to a new transaction in the workflow. If this option is not selected, the default conversion type is enforced and cannot be changed.

3. Define the default conversion type for non-inventory items. See [Add an item](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_Viewing_Item_Information).

### Create a recurring template

There are multiple ways to create recurring transaction templates, here is a brief overview of how to create a new recurring purchase template.

1. Go to **Purchasing** > **All** > **Other transactions** and select the + next to **Recurring transactions**.
2. Select a document type, for example, Purchase Order, then select **Apply**.
3. Enter transaction information and add at least one line item. If this is a recurring purchase order for non-inventory items such as a service, select an item with default conversion type of Price.
4. Select the **Schedule** tab and enter required details.
5. Select **Save**.

For additional information on all the ways to create recurring transactions, see [Recurring transactions - Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_Recurring_Templates_for_Purchase_Orders).

## Permissions and other requirements

| Subscription          | Purchasing                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                             |
| User type             | To configure and enable recurring transactions:  Business user with Full admin privileges To create recurring schedules for transactions:  Employee user                                |
| Permissions           | Administration Application subscriptions: Configure Purchasing Recurring transactions: List, View, Add, Edit                                                                            |
| Restrictions          | Price conversion is not available for transactions that include drop shipment, landed cost or kit type items, for renewing contract transactions, or transactions including allocation. |
