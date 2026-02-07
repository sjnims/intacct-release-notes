---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Purchasing/2024-R2-pur-convert-by-price.htm
release: 2024-R2
extracted: 2026-02-07
title: "Pay for services with blanket purchase orders"
---

# Pay for services with blanket purchase orders

Easily purchase services and other non-inventory items against a set purchase amount. Using the purchase order workflow, you can now convert purchases of billable services by price to draw down an approved blanket purchase order amount.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-pur-convertprice.png)

## Details

For example, say that you have an approved spending amount with a consulting firm for billable hours towards a project. You can now set up a blanket purchase order for the contracted amount. Then, you'll draw down the purchase order by price as services are consumed. This allows you to see previously converted amounts and keep track of the remaining contracted amount on the purchase order.

## How it works

When setting up and managing blanket purchase orders, you'll complete the following tasks:

- Configure Purchasing to select the following options:
  - Convert transactions by price: This option enables the ability to convert line items by price for non-inventory items.
  - Enable override on transaction conversion type: This option enables you to override the item's default conversion type when you create a new transaction. If this option is not selected, the item's default conversion type is enforced and cannot be changed.
- Define the default conversion type for non-inventory items.

  If you choose not to allow override on the conversion type, make sure that you have items that have Price selected as the default conversion type to use with blanket purchase orders.

- Verify that your transaction definition for blanket purchase orders meets the following criteria:
  - Partial conversion handling is set to leave the transaction open.

Converting by price is not supported in recurring transactions (the remaining balance can be manually calculated).

### Set up Purchasing to convert line items by price

1. Go to **Purchasing** > **Setup** > **Configuration**.
2. In the Enable functionality section, select **Convert transactions by price**.

    After this option is selected, it cannot be turned off after a transaction is converted by price.

3. To allow override on the item's default conversion type, select **Enable override on transaction conversion type**.
4. Select **Save**.

### Add a transaction with price as the conversion type

1. Go to **Purchasing** > **Transactions** and select the appropriate transaction, such as **Purchase order**.
2. Select **Add**.
3. Enter the transaction information and add line items.
    - If override of conversion type was selected, you'll see the Conversion type column and can change the conversion type and item quantity as needed.

      After the conversion type is set for a line item, it cannot be changed later in the workflow.

    - If override of conversion type was not selected, add line items that have a default conversion type of price. You cannot change the item quantity for items that are set to convert by price.

4. Select **Post** to submit the transaction or select **Draft** to save it for later.

When you convert the transaction to the next step in the workflow, you'll enter the amount to convert instead of the quantity of items.

## Requirements

| Subscription          | Purchasing                                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Any region                                                                                                                                                        |
| User type             | To configure:  Business user with admin privileges To convert transactions:  Employee user                                                                        |
| Permissions           | Administration (to configure) Application subscriptions: Configure Purchasing Items: List, View, Add, Edit Purchasing transactions: List, View, Add, Edit, Delete |
