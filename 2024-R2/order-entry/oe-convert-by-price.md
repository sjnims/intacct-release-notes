---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Order_Entry/2024-R2-oe-convert-by-price.htm
release: 2024-R2
extracted: 2026-02-07
title: "Bill for services with blanket sales orders"
---

# Bill for services with blanket sales orders

Easily bill customers for services and other non-inventory items against an agreed-upon amount. Using the sales order workflow, you can now convert sales of billable services by price to draw down an approved blanket sales order amount.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-oe-convertprice.png)

## Details

For example, say that you operate a service-delivery company where you have a blanket sales order with a customer and bill them for services over a period of time. You can set up a blanket sales order for the contracted amount. Then, you'll draw down the sales order by price as services are consumed. This allows you to see previously converted amounts and keep track of the remaining contracted amount on the sales order.

## How it works

When setting up and managing blanket sales orders, you'll complete the following tasks:

- Configure Order Entry to select the following options:
  - Convert transactions by price: This option enables the ability to convert line items by price for non-inventory items.
  - Enable override on transaction conversion type: This option enables you to override the item's default conversion type when you create a new transaction. If this option is not selected, the item's default conversion type is enforced and cannot be changed.
- Define the default conversion type for non-inventory items.

  If you choose not to allow override on the conversion type, make sure that you have items that have Price selected as the default conversion type to use with blanket sales orders.

- Verify that your transaction definitions for blanket sales orders meet the following criteria:
  - Partial conversion handling is set to leave the transaction open.
  - Enable line-item conversion is not selected.

Converting by price is not supported in recurring transactions (the remaining balance can be manually calculated).

### Set up Order Entry to convert line items by price

1. Go to **Order Entry** > **Setup** > **Configuration**.
2. In the Enable functionality section, select **Convert transactions by price**.

    After this option is selected, it cannot be turned off after a transaction is converted by price.

3. To allow override on the item's default conversion type, select **Enable override on transaction conversion type**.
4. Select **Save**.

### Add a transaction with price as the conversion type

1. Go to **Order Entry** > **Transactions** and select the appropriate transaction, such as **Sales order**.
2. Select **Add**.
3. Enter the transaction information and add line items.
    - If override of conversion type was selected, you'll see the Conversion type column and can change the conversion type and item quantity as needed.

      After the conversion type is set for a line item, it cannot be changed later in the workflow.

    - If override of conversion type was not selected, add line items that have a default conversion type of price. You cannot change the item quantity for items that are set to convert by price.

4. Select **Post** to submit the transaction or select **Draft** to save it for later.

When you convert the transaction to the next step in the workflow, you'll enter the amount to convert instead of the quantity of items.

## Requirements

| Subscription          | Order Entry                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Any region                                                                                                                                                          |
| User type             | To configure:  Business user with admin privileges To convert transactions:  Employee user                                                                          |
| Permissions           | Administration (to configure) Application subscriptions: Configure Order Entry Items: List, View, Add, Edit Order Entry transactions: List, View, Add, Edit, Delete |
