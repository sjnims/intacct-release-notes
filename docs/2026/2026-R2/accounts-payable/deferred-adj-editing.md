---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-deferred-adj-editing.htm
release: 2026-R2
extracted: 2026-04-29
title: "Updated rules for editing bills with deferred adjustments"
---

# Updated rules for editing bills with deferred adjustments

[Deferred adjustments for CCA](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=deferred_adjustments_cca_overview)

Accounts Payable

Now there are defined rules when editing bills after a deferred adjustment for charges constatées d’avance (CCA) has been posted. These rules clarify which fields remain editable so you can make appropriate updates without affecting posted accounting data.

## Key benefits

- **Clear editing boundaries:** Understand which bill fields are editable after deferred adjustments are posted, reducing uncertainty during updates.

- **Preserved accounting accuracy:** Prevent changes to dates, vendor, currency, and deferred adjustment details after deferred adjustments are posted.

- **Flexible nonfinancial updates:** Continue to update memos, attachments, and custom fields without impacting posted accounting data.

## What’s changed

If any line on a bill has a posted deferred adjustment, the following fields are not editable:

- Date

- Vendor and contact fields

- Currency and exchange rate fields

- Deferred adjustment fields (template, start date, and end date)

- All bill line fields (excluding memo and custom fields)

Nonfinancial fields, such as memo, attachment, and custom fields, remain editable on bills with posted deferred adjustments.

## Permissions and other requirements

| Subscription                       | Accounts Payable                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | France                                                                                                                      |
| User type                          | Business                                                                                                                    |
| Permissions                        | Accounts Payable Bills: List, View, Edit, Post                                                                              |
| Configuration                      | Enable Deferred adjustments for both CCA and PCA in Accounts Payable.                                                       |
| Dependencies or other requirements | To use Deferred adjustments for CCA and PCA, you must have a company or an entity with the operating country set to France. |
