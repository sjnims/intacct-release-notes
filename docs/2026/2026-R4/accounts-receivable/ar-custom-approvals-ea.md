---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Receivable/2026-R4-ar-custom-approvals-EA.htm
release: 2026-R4
extracted: 2026-11-13
title: "Custom approvals for invoices and Order Entry transactions—Early Adopter"
---

# Custom approvals for invoices and Order Entry transactions—Early Adopter

Introducing approval workflow support for invoices or Order Entry transactions. Create and manage custom approval workflows for invoices or OE transactions from a centralized **Custom approvals** application. Define approval rules using invoice or OE transaction data and business-specific criteria, automatically route invoices or OE transactions to designated approvers, and review approval history.

## Key benefits

- **Centralized approval setup**: Create and manage custom approval rules and policies in the new Custom approvals application.

- **Flexible approval criteria**: Create approval rules using fields such as currency, amount, vendor type, payment priority, and other supported transaction attributes.

- **Automated approval routing**: Route invoices or OE transactions to designated users or user groups based on configurable approval conditions.

- **Approval visibility**: Review pending approvals in a centralized queue and view approval history directly from the transaction.

## What's new

Custom approvals for invoices and OE transactions introduce a new **Custom approvals** application, configurable approval rule sets and policies, and permissions that give administrators control over how invoices and OE transactions are routed and approved. View the approval history on the new Approval history tab on the invoice or transaction.

## How it works

1.  Open the Custom approvals application.

2.  Create a custom approval rule set for invoices or OE transactions.

3.  Set up the rule criteria for when and how to route the approval.

    When specifying approvers you can assign an individual user or user group, or specific people within a user group.

4.  Create a custom approval policy for invoices or OE transactions and add the rule set to it.

5.  Submit invoices or OE transactions for approval.

6.  Approvers review and approve pending approvals in the Custom approvals application.

View the approval history on the History tab on the invoice or OE transaction.

## Good to know

- Approval rules run sequentially based on their order in the approval policy.

- Custom approval rule sets support header-level invoice and OE transaction fields.

- Approvers can be individual users, user groups, or specific members of a user group.

- Custom approval rules cannot currently be edited after they're created.

## What's the Early Adopter program?

We invite you to explore this feature as part of the Early Adopter program. Your feedback helps us improve the experience before broader release.

As part of the program, you'll work closely with the product team and provide feedback about your experience using the feature.

[Sign up for Early Adopter access here](https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-IhiHBMJdtVPpFrxgMGpn-hURFJJUzhPTTBEUjVDSUo0VlAyMUVISkhSMS4u).

## Permissions and other requirements

| Subscription          | Administration Custom approvals Accounts Receivable Order Entry                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| User type             | Create and manage approval rule setsBusiness user with admin privileges Review and approve transactionsBusiness Employee                                                                                                                                                                                                                                                                                                                                                       |
| Permissions           | Create custom approval rules, rule sets, and policiesCustom approvals: Custom approval rule sets: List, View, Add, Delete Custom approval policies: List, View, Add, Edit, Delete Approve transactionsCustom approvals: Approve records: List Accounts Receivable: Invoices: List, View, Add Order Entry: Order Entry transactions: List, View, Add View approval historyAccounts Receivable: Invoices: List, View, Add Order Entry: Order Entry transactions: List, View, Add |
