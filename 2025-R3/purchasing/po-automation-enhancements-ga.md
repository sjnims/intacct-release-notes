---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-po-automation-enhancements-ga.htm
release: 2025-R3
extracted: 2026-02-07
title: "Automated transactions without matching for AP Automation with Purchasing—General availability"
---

# Automated transactions without matching for AP Automation with Purchasing—General availability

Boost efficiency by combining AI-powered transactions with the flexibility of the Purchasing application. You can now automate transactions that do not have a source match defined, for example, vendor invoices that do not start with purchase requisitions or orders.

## Key benefits

AP Automation with Purchasing streamlines transaction entry by automatically creating draft transactions from documents that you email or upload. Sage Intacct identifies the vendor and fills in transaction details for you, such as price, amount, location, department, and item IDs.

With this update, you can do the following:

- Configure transaction definitions to automate transactions that do not have a previous transaction to match with in the purchasing workflow.
- Change the transaction type for incorrect predictions, which feeds back to the machine learning model to improve future predictions.
- Get the benefits of both automated transaction matching and non-matching transactions. You have the flexibility to set up both options or use just one, as matches your needs.

## How it works

1.  Go to **Purchasing** > **Setup** > **Configuration**.
2.  In the Automation settings section, select **Automate transactions without matching**.
3.  Select the **Entity name** and **Target** transaction definitions to automate.

    Target defines the transaction type that automation uses to draft incoming documents.

4.  Select **Save**.

If the AI has low confidence in the document type, it drafts a placeholder transaction for you to edit.

If automation is enabled for both transactions with matching and transactions without matching, the AI will first look for a transaction match. If the AI cannot predict a match, it will identify the document type and draft a non-matching transaction.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-po-automation-enhancements-ga.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable AP Automation Sage Cloud Service                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                     |
| User type             | Upload transactions for Purchasing automation Business, Platform, Project manager, or Warehouse user View, edit, and post automated transactions Business, Platform, Project manager, or Warehouse user Move a draft transaction to the Accounts Payable workflow Business user |
| Permissions           | Accounts Payable Bills: Add (to change a draft transaction to an AP bill) Purchasing (to view or edit the emailed transactions) Automated transactions: List Purchasing transactions: View, Edit, Add                                                                           |
| Configuration         | Enable draft mode selected for the top level and each entity Automate transactions without matching enabled                                                                                                                                                                     |
