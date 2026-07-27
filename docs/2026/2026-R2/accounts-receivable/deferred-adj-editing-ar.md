---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-deferred-adj-editing-ar.htm
release: 2026-R2
extracted: 2026-04-29
title: "Updated rules for editing invoices with deferred adjustments"
---

# Updated rules for editing invoices with deferred adjustments

[Deferred adjustments for PCA](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=deferred_adjustments_pca_overview)

Accounts Receivable

Now there are defined rules when editing invoices after a deferred adjustment for produits constatés d’avance (PCA) has been posted. These rules clarify which fields remain editable so you can make appropriate updates without affecting posted accounting data.

## Key benefits

- **Clear editing boundaries:** Understand which invoice fields are editable after deferred adjustments are posted, reducing uncertainty during updates.

- **Preserved accounting accuracy:** Prevent changes to dates, customer, currency, and deferred adjustment details after deferred adjustments are posted.

- **Flexible nonfinancial updates:** Continue to update memos, attachments, and custom fields without impacting posted accounting data.

## What’s changed

If any line on an invoice has a posted deferred adjustment, the following fields are not editable:

- Date

- Customer and contact fields

- Currency and exchange rate fields

- Deferred adjustment fields (template, start date, and end date)

- All invoice line fields (excluding memo and custom fields)

Nonfinancial fields, such as memo, attachment, and custom fields, remain editable on invoices with posted deferred adjustments.

## Permissions and other requirements

| Subscription                       | Accounts Receivable Accounts Payable                                                                                        |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | France                                                                                                                      |
| User type                          | Business                                                                                                                    |
| Permissions                        | Accounts Receivable Invoices: List, View, Edit, Post                                                                        |
| Configuration                      | Enable Deferred adjustments for both CCA and PCA in Accounts Payable.                                                       |
| Dependencies or other requirements | To use Deferred adjustments for CCA and PCA, you must have a company or an entity with the operating country set to France. |
