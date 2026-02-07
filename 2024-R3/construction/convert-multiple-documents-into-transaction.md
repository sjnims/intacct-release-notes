---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Construction/2024-R3-convert-multiple-documents-into-transaction.htm
release: 2024-R3
extracted: 2026-02-07
title: "Convert multiple documents into a single Purchasing transaction"
---

# Convert multiple documents into a single Purchasing transaction

[Convert multiple documents into a single Purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Convert_multiple_documents_into_transaction)

[Field descriptions: Convert from an existing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=FD_convert_from_an_existing_transaction)

[Configure Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Purchase_Orders)

[Transactions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transactions)

[Transaction definitions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transaction_definitions)

[Purchasing transaction states](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_purchasing_transaction_states)

[Convert multiple Purchasing documents into a single transaction (6:13)](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Construction/2024-R3-convert-multiple-documents-into-transaction.htm#)

Construction

You spoke and we listened!

You can convert multiple documents, including lines of documents, into a single Purchasing transaction so that you can create a transaction to pay a vendor in one payment.

When a vendor charges their work for multiple projects in one bill, you can create a single Purchasing transaction that includes multiple documents that you want to convert to replicate the bill. This allows you to track payments easily.

![The Convert from an existing transaction link is selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-convert-multiple-documents-into-transaction-2_307x276.png)

[![Multiple documents are converted in a transaction.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-convert-multiple-documents-into-transaction-1_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-convert-multiple-documents-into-transaction-1.png)

## Details

You still have the option to convert a document into a Purchasing transaction by selecting **Convert** next to a document. However, this option only allows you to convert one document at a time. Go to [Convert a Purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Converting_a_purchase_transaction) for more information. Now, you also have the option to start from a Purchasing transaction to convert one or more documents, including lines of documents, to save you time.

When a document is converted into a Purchasing transaction, the conversion process copies data from the document to the Purchasing transaction. Then, the document exists as a distinct transaction so that you can still access the order. If there is a change in the Purchasing transaction that includes a document, the distinct transaction is unaffected by the change.

A Purchasing transaction can be one of the following:

- Purchase requisition
- Purchase order
- Receipt
- Vendor invoice
- Adjustment

To convert multiple documents into a single Purchasing transaction, the following must be applied:

- An admin must select the **Enable conversions for multiple source documents** checkbox on the [Configure Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Purchase_Orders) page.
- Documents must have the same vendor.
- Documents must be included in the same transaction definition.

  For example, your vendor sends an invoice for projects that they worked on. When you create a transaction definition for the invoice, in the **Can be created from** field, you select purchase orders and subcontracts that are associated to the invoice. Then, you can convert those purchase orders and subcontracts into a single Purchasing transaction because they are included in the transaction definition for the invoice.

## Example

You work with an electrical subcontractor on multiple projects. When the vendor sends their bill for the month, the bill includes a charge for every project that they worked on. The vendor charges for their project work in one bill. Each project has a document, which is a purchase order or subcontract, in your company. In Purchasing, you create an invoice and select **Convert from an existing transaction** to convert documents. You also use the **Source document ID** and **Source document line ID** dropdowns to convert lines of documents to replicate the bill. Then, you pay your vendor in Accounts Payable.

## How it works

### Enable conversions for multiple source documents

An admin must select the **Enable conversions for multiple source documents** checkbox so that you can convert multiple documents into a Purchasing transaction.

1.  Go to **Purchasing** > **Setup** > **Configuration**.
2.  Under Enable functionality, select the **Enable conversions for multiple source documents** checkbox.
3.  **Save** your changes.

### Add a transaction definition for a Purchasing transaction

Create a transaction definition for a Purchasing transaction so that documents can be converted into it.

1.  Go to **Purchasing** > **Setup** > **More** > **Transaction definitions**.
2.  Select **Add**.
3.  Enter information in the required fields.

    For details about each field, go to [Transaction definitions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transaction_definitions) field descriptions.

4.  In the Can be created from field, select purchase orders and subcontracts.

    These documents can be converted into a Purchasing transaction.

5.  If applicable, enter information on the Posting configuration tab.

    You can set user and user group permissions and document permissions on the Security configuration tab.

6.  For multi-entity companies, specify the entity settings on the Entity settings tab.
7.  **Save** your changes.

### Convert multiple documents into a Purchasing transaction

Sage Intacct provides two ways to convert multiple documents into a single Purchasing transaction.

Convert multiple documents into a transaction

1.  Go to **Purchasing** > **All** > **Transactions** > select a transaction.
2.  Select **Add**.
3.  Choose a Vendor.
4.  Select **Convert from an existing transaction**.
5.  Select a Purchasing transaction.

    If you do not see the document that you want to convert, ensure that the document is included in the transaction definition.

    Repeat steps 4 and 5 to convert another document.

6.  Confirm the information on the transaction.
7.  **Submit** your changes.

Convert lines of documents into a transaction

1.  Go to **Purchasing** > **All** > **Transactions** > select a transaction.
2.  Select **Add**.
3.  Choose a Vendor.
4.  From Source document ID, select a document.

    If you do not see the document that you want to convert, ensure that the document is included in the transaction definition.

5.  From Source document line ID, choose a line of a document.

    Repeat step 4 and 5 to convert another line of a document.

6.  Confirm the information on the transaction.
7.  **Submit** your changes.

## Permissions and other requirements

| Subscription          | Construction Purchasing                                |
| --------------------- | ------------------------------------------------------ |
| Regional availability | Australia Canada United States United Kingdom (EA)     |
| User type             | Business Construction manager Warehouse                |
| Permissions           | Purchasing transactions: List, View, Add, Edit, Delete |
