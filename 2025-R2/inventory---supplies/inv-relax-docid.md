---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Inventory___Supplies/2025-R2-inv-relax-DOCID.htm
release: 2025-R2
extracted: 2026-02-07
title: "Change in document number requirements"
---

# Change in document number requirements

[Draft, post, and save](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=draft_save_post)

inventory control

Increase your transaction workflow efficiency. To align with automation requirements and ensure consistency across applications, Sage Intacct now permits users to save draft inventory transactions without a document number. This change ensures more efficiency in completing your transaction workflows, and greater flexibility during inventory transaction processing.

## Details

By relaxing the document numbering requirement in draft transactions, you can leverage additional document tracking options: 

- Save transactions in draft state when you are not sure of the document number.
- Automatically assign draft transactions the next sequence number. To avoid any confusion, the document number field is not visible until the draft is saved.

After a document number is assigned to a draft document, it cannot be changed.

- If you convert transactions that use the source document number, you can change or delete the number when saving as a draft.

## How it works

When entering new transactions, warehouse users can enter new inventory management transactions, such as warehouse transfers or inventory adjustments, with less required information.

Additionally, inventory managers have greater flexibility in information gathering prior to posting: Easier parent document identification, or track inventory transactions using source document number retrieval.

Looking for a specific draft transaction without a document number? The Transaction history tab displays a record number for all draft documents saved without a document number.

## Permissions and other requirements

| Subscription          | Inventory Control                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                   |
| User type             | Business Employee Project Manager Warehouse                                                                                                                                                                                                                                   |
| Permissions           | To create new inventory transactions, you need one or more of the following sets of permissions:  Inventory transactions: List, View, Add, Edit Replenish inventory: Preview, Generate Warehouse transfer: List, View, Add, Edit Manage supplies: Edit Request supplies: Edit |
| CSV import            | A column for Document number for draft transactions is no longer required.                                                                                                                                                                                                    |
