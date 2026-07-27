---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Cash_Management/2026-R2-cm-additional-updates.htm
release: 2026-R2
extracted: 2026-04-29
title: "Other updates and enhancements to Cash Management"
---

# Other updates and enhancements to Cash Management

[Configure Cash Management](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Cash_Management)

[Creation rules](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_creation_rules)

[Create additional transactions during reconciliation](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_additional_rec_txns)

cash management

## Limit the visibility of bank transactions based on user-level entity restrictions

### What's changed

Now, when you select the option to enforce user entity restrictions for bank and credit card accounts, the restrictions also apply to transactions. This means that a top-level user viewing the **Bank transactions** page will see only transactions for their entities' accounts.

### Why it matters

With this enhancement to user entity restrictions, you can better enforce your organization's data security policies by permitting users to access only the data they need.

### How it works

If you've previously enabled user entity restrictions for Cash Management, you don't need to do a thing. The new transaction restrictions will apply automatically.

If you want to start enforcing user entity restrictions for Cash Management, here's how:

1.  Go to **Cash Management** > **Setup** > **Configuration**.

2.  In the **Banking** section, select the checkbox to **Enable user entity restrictions for bank and credit card accounts**.

## Creation rules now safeguard against using the same account for both sides of a transaction

Rules, rule sets, and templates create a powerful and flexible system for optimizing reconciliation efforts with automation. But while you're setting up the logic behind such a flexible system, it's possible that unforeseen combinations can occur.

To prevent errors and creation of duplicate journal entries, we've added these safeguards to ensure that a create rule won't use the same general ledger account for both the debit and credit sides of a transaction:

- If a creation rule's template uses the same GL account as the bank or credit card account it's set up to run on, you'll receive an error message when you attempt to add or edit the rule.

- If a previously created rule attempts to create a transaction using the same GL account as the bank or credit card account the rule is run on, the **Rule set performance log** will show an error, and the transaction won't be created.

## Transactions you manually create during bank reconciliation no longer default to the current date

This idea came from you

For error prevention and increased accuracy during reconciliation, additional transactions created manually from the **More actions** menu no longer default to the current date (in other words, the date you are working on the reconciliation). Instead, you must specify the actual transaction date, which is almost inevitably earlier.

## Permissions and other requirements

| Subscription          | Cash Management                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| User type             | Limit visibility of bank transactions Business user with admin privileges Creation rules Business Manual transaction creation Business                                                                                                                                                                                                                                                                                                                                                                                 |
| Permissions           | Limit visibility of bank transactions Administration: Application subscriptions: List, View, and Configure Creation rules Bank transaction rules: List, View, Add, Edit, Delete Bank transaction rule sets: List, View, Add, Edit, Delete Manual transaction creation Reconcile bank: List, View, Add, Edit, Delete Reconcile credit card: List, View, Add, Edit, Delete You need permissions to create the appropriate transaction. For example, to create a manual payment you need permissions for Manual payments. |
