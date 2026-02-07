---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-PO-convert-multiple-documents-into-transaction.htm
release: 2025-R3
extracted: 2026-02-07
title: "A new way to combine multiple documents into a single transaction—General availability"
---

# A new way to combine multiple documents into a single transaction—General availability

[Convert multiple documents into a single Purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Convert_multiple_documents_into_transaction_ns)

[Configure Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Purchase_Orders)

[Convert multiple Purchasing documents into a single transaction (6:13)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-PO-convert-multiple-documents-into-transaction.htm#)

PURCHASING

This idea came from you

In response to valuable customer input, we introduced a time-saving multi-document convert function for the Construction application last year. This functionality is now available to all Purchasing subscribers.

You can now simplify your workflow during conversion by combining multiple documents, or specific line items, into a single transaction. For example, when a vendor sends you an invoice for multiple orders, you can create a single Purchasing transaction from multiple converted documents, including specific line items.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-PO-multi-to-one.png)

## What's changed

When you move a transaction through a Purchasing workflow, you convert one document to the next step, as defined in the corresponding purchase transaction definition. However, the workflow convert functionality only allows you to convert one full document at a time. Now you can choose to convert one or more purchasing documents at one time, including specific lines from different documents.

### Example

You work with a subcontractor on multiple projects. When the subcontractor sends their bill for the month, it includes a charge for every project that they worked on. Each of the projects the subcontractor worked on has a purchase order or subcontract, created by your company. In Purchasing, you create an invoice and select **Convert from an existing transaction** to convert all the purchase order documents. Using the **Source document ID** and **Source document line ID** dropdown lists, you select the purchase orders, and, if required, the specific line items you want to include in a single payment transaction.

## How it works

### Step 1. Enable conversions for multiple source documents

1.  Go to **Purchasing** > **Setup** > **Configuration**.
    
2.  In the Enable functionality section, select the **Enable conversions for multiple source documents** checkbox.
    
3.  **Save** your changes.
    

### Step 2. Add a transaction definition for a Purchasing transaction

1.  Go to **Purchasing** > **Setup** > **More** > **Transaction definitions**.
    
2.  Select **Add**.
    
3.  Enter information in the required fields.
    
    For details about each field, go to [Transaction definitions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transaction_definitions) field descriptions.
    
4.  In the **Can be created from** field, select all the document types that can be converted into a Purchasing transaction.
    
5.  If applicable, enter information on the Posting configuration tab.
    
    You can set user and user group permissions and document permissions on the Security configuration tab.
    
6.  For multi-entity companies, specify the entity settings on the Entity settings tab.
    
7.  **Save** your changes.
    

### Step 3. Convert multiple documents or line items into a single Purchasing transaction

1.  Go to **Purchasing** > **All** > **Transactions** and select Add (circle) next to the transaction type.
    
2.  Select a Vendor.
    
3.  Select **Convert from an existing transaction**.
    
4.  Select a Purchasing transaction.
    
    If you do not see the document that you want to convert, make sure that the document is included in the **Can be created from** transaction list.
    

1.  If you only want to include specific line items from the selected transaction, in the **Source document ID** field, select a document.
    
2.  Repeat steps 4 and 5 to include another document or document line item in the transaction.
    
3.  Confirm the information on the transaction.
    
4.  **Save** your changes.
    

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-PO-convert-multiple-documents-into-transaction.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | Business                                                             Construction Manager                                                             Project Manager (create and convert only)                                                             Warehouse |
| Permissions | Purchasing transactions: List, View, Add, Edit, Delete |
