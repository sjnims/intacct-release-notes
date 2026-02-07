---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/OrderEntry/2025-R1-OE-Relax-SecuritySetting.htm
release: 2025-R1
extracted: 2026-02-07
title: "Security setting changes for sales transaction definitions"
---

# Security setting changes for sales transaction definitions

[Configure sales transaction definitions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Order_Entry_transaction_definitions)

[Draft, post, and save](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=draft_save_post)

ORDER ENTRY

Later this year, Sage Intacct will permit users to save draft sales transactions without a document ID. This change ensures more efficient completion of your sales transaction workflows, and provides more flexibility during transaction processing.

In this release, you'll see the first stage of the change in your sales transactions. When you set security settings for transaction definitions, you can configure restrictions on a user's ability to edit, delete, or create transactions. Now those restrictions do not impact a user's ability to create or modify draft transactions.

Users must have the appropriate application and entity-level permission to access transactions created with a transaction definition containing security restrictions.

## Details

Your team members can now leverage additional document options when they want to create or edit a sales transaction document containing restrictions:

- Users can create draft transactions.
- Users can copy an existing transaction and save it as a draft.
- Saved drafts can be edited at a later time.

Users remain unable to post transactions created with a transaction definition containing security restrictions.

## How it works

Transaction definitions may include security settings to restrict editing or have a create policy set to Convert only. These settings still allow users to edit or create new draft transactions, or make a copy of an existing transaction (**More actions > Copy to**). A copied transaction can be edited, saved as a draft, and edited later.

There are no configuration settings required for this feature change.

## Permissions and other requirements

| Subscription          | Order Entry                                                         |
| --------------------- | ------------------------------------------------------------------- |
| Regional availability | All regions                                                         |
| User type             | Business Employee Project Manager Warehouse                         |
| Permissions           | Order Entry Order Entry transactions: List, View, Edit, Delete, Add |
