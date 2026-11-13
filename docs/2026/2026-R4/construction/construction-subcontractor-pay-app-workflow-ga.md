---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-subcontractor-pay-app-workflow-GA.htm
release: 2026-R4
extracted: 2026-11-13
title: "Subcontractor payment application workflow—General availability"
---

# Subcontractor payment application workflow—General availability

[Subcontractor payment application workflow](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_constr_payment_application_workflow "Subcontractor payment application workflow")

construction

Record and track payment applications and valuations in line with regional construction industry practices and requirements.

## Key benefits

- **Simplified workflow**: Replace manual workarounds with a streamlined workflow, starting with a purchase order and moving from application to valuation to invoice.

- **Improved visibility**: View payment application activity and related documents in one place with Payment application details tabs.

- **Greater reporting accuracy**: Reduce period‑end adjustments by maintaining accurate, traceable payment amounts across reporting periods.

## What's changed

On Purchasing transaction definitions, we added a **Payment application workflow** section with two settings:

- **Enable payment application workflow**: Use to enable the workflow on the selected transaction definition.

  This setting is available when you select either **Order** or **Invoice** as both the **Template type** and **Workflow category**. For **Order** transaction definitions, the primary document workflow must be enabled.

- **Application document category**: Select the document type for the transaction definition: **Application**, **Valuation**, or **Invoice**.

  This setting is available only for **Invoice** transaction definitions when you enable the payment application workflow.

  Applications and valuations can post to the General Ledger (GL) or remain non-posting transactions. When posting to the General Ledger, subtotals are suppressed to prevent duplicate postings.

![Payment application workflow settings on transaction definition setup page](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-const-subcontractor-pay-app-purchasing-settings.png "Payment application workflow settings on transaction definition setup page")

## How it works

Move transactions through the payment application workflow as follows:

1.  Create and post a purchase order or subcontract with the workflow enabled.

2.  Convert the order to an application and post it.

3.  When amounts are certified, convert the application to a valuation and post it.

4.  Convert the valuation to an invoice.

Each document in the workflow includes a **Payment application details** tab where you can track activity for applications and their associated valuations and invoices.

![Payment application showing Payment application details tab](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-subcontractor-pay-app-details-tab.png "Payment application showing Payment application details tab")

## Good to know

As documents move through each stage:

- For payment applications, converted lines must originate from the same primary document.

- For valuations, converted lines can come from multiple applications if those applications originate from the same primary document.

- For invoices, converted lines can come from multiple valuations based on the same primary document.

## Permissions and other requirements

| Subscription                       | Construction Purchasing                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                         |
| User type                          | Business Construction Manager Project Manager                                                                                                                                                                                                                                                                                                                                                                         |
| Permissions                        | Configure transaction definitionsPurchasing PO transaction definitions: List, View, Add, Edit, Delete Use the payment application workflowPurchasing Purchasing transactions: List, View, Add, Edit, Delete                                                                                                                                                                                                           |
| Dependencies or other requirements | PurchasingOn purchasing transaction definitions: Enable payment application workflow is available when you select either Order or Invoice as both the Template type and Workflow category. For Order transaction definitions, the primary document workflow must be enabled. Application document category is available only for Invoice transaction definitions when you select Enable payment application workflow. |
| Restrictions                       | You can only convert transactions with a State of Pending or Partially converted.                                                                                                                                                                                                                                                                                                                                     |
