---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Purchasing/2025-R2-po-automation-enhancements.htm
release: 2025-R2
extracted: 2026-02-07
title: "Automated transactions without matching for AP Automation with Purchasing—Early Adopter"
---

# Automated transactions without matching for AP Automation with Purchasing—Early Adopter

Boost efficiency by combining AI-powered transactions with the flexibility of the Purchasing application. You can now automate transactions that do not have a source match defined, for example, vendor invoices that do not start with purchase requisitions or orders.

If you'd like to be considered for the Early Adopter programs for automated transactions without matching, [fill out this short questionnaire](https://forms.office.com/r/JqPgvXzaym).

## Details

AP Automation with Purchasing streamlines transaction entry by automatically creating draft transactions from documents that you email or upload. Sage Intacct identifies the vendor and fills in certain transaction details for you, such as location, department, and item IDs.

With this update, you can do the following:

- Configure transaction definitions to automate transactions that do not have a previous transaction to match with in the purchasing workflow.
- Change the transaction type for incorrect predictions, which feeds back to the machine learning model to improve future predictions.
- Get the benefits of both automated transaction matching and non-matching transactions. You have the flexibility to set up both options or use just one, as matches your needs.

## How it works

1.  Go to **Purchasing** > **Setup**  > **Configuration**.
2.  In the Automation settings section, select **Automate transactions without matching**.
3.  Select the **Entity name** and **Target** transaction definitions to automate.

    Target defines the transaction type that automation uses to draft incoming documents.

4.  Select **Save**.

When you have automation enabled for both transactions with matching and transactions without matching, AI will first look for a transaction match. If AI cannot predict a match, it will identify the document type and draft a non-matching transaction.

## What is the Early adopter program?

The Early adopter program provides automated transactions without document matching to users of AP Automation with Purchasing. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to respond periodically to surveys and provide input.

If you'd like to be considered for the Early adopter programs for automated transactions without matching, [fill out this short questionnaire](https://forms.office.com/r/JqPgvXzaym).

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable Sage Cloud Service                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                     |
| User type             | Upload transactions for Purchasing automation Business, Platform, Project manager, or Warehouse user View, edit, and post automated transactions Business, Platform, Project manager, or Warehouse user Move a draft transaction to the Accounts Payable workflow Business user |
| Permissions           | Accounts Payable permissions Bills: Add (to change a draft transaction to an AP bill) Purchasing permissions (to view or edit the emailed transactions) Automated transactions: List Purchasing transactions: View, Edit, Add                                                   |
| Configuration         | Enable draft mode selected for the top level and each entity Automate transactions without matching enabled                                                                                                                                                                     |
