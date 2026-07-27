---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Order_Entry/2026-R3-OE-convert-multiple-documents-into-transaction.htm
release: 2026-R3
extracted: 2026-07-27
title: "A new way to combine multiple documents into a single transaction"
---

# A new way to combine multiple documents into a single transaction

[Configure Order Entry](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_the_Order_Entry_Application)

Order entry

This idea came from you

In response to valuable customer input, we introduced a time-saving multi-document convert function for the Purchasing application last year. This functionality is now also available in Order Entry.

You can now simplify your workflow during conversion by combining multiple documents, or specific line items, into a single transaction. For example, when you need to send a customer invoice for multiple sales orders, you can create a single invoice transaction from multiple documents, including specific line items.

## What's changed

When you move a transaction through a sales workflow, you convert one document to the next step, as defined in the corresponding Order Entry transaction definition. However, the convert functionality only allows you to convert one full document at a time. Now you can choose to convert one or more sales orders at a time, including specific lines from different orders.

### Example

You have a recurring sales order for monthly plant maintenance service delivery, billed quarterly. When you send the customer the quarterly invoice, you want it to include billing for 3 months of service delivery.

In Order Entry, you'll create an invoice and select the customer. Then you'll select each monthly billing order to include on the invoice. When each month's order is selected, the service line detail is automatically listed and available to select.

## How it works

Before you can convert multi-transaction line items, you first configure Order Entry.

1.  Configure Order Entry to enable multiple source document conversion.

2.  Add a new sales transaction Convert multiple documents or line items into a single transaction.

3.  In the Entries table on an item row, select the **Source document ID** and then the **Source document line ID** for each line item you want to include.

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                   |
| User type             | Business Warehouse                                                                                                                                                            |
| Permissions           | Configure Order Entry Administration Application subscriptions: List, View, and Configure Create sales transactions Order Entry Order Entry transactions: List, View, and Add |
| Configuration         | Order Entry has advance workflow enabled.                                                                                                                                     |
| Restrictions          | You can only convert transactions where the State is Pending or Partially converted.                                                                                          |
