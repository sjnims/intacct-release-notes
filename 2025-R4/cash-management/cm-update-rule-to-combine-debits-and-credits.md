---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Cash_Management/2025-R4-cm-update-rule-to-combine-debits-and-credits.htm
release: 2025-R4
extracted: 2026-02-07
title: "Combine debit and credit transaction amounts for easier matching"
---

# Combine debit and credit transaction amounts for easier matching

[Create a matching rule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_matching_rule)

[Matching rule examples](https://www.intacct.com/ia/docs/help_action/Default.htm#Matching_rules_sets_examples)

[Matching and creation rules FAQ](https://www.intacct.com/ia/docs/help_action/Default.htm#Rec_rules_faqs)

Cash Management

Some business processes require the combining of a debit and credit for reconciliation matching. The process is now automated with reconciliation rules.

## Key benefits

Save time by eliminating the number of manual matches when reconciling.

You can set up a matching rule to match a transaction and associated fees or charges in Intacct to a single bank transaction. For example, you might have a payment service transaction that incurred a transaction fee where the transaction and fee are listed as separate items in Intacct.

## How it works

![Create matching rule screen, with new Amount (combine debits and credits) option selected](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-cm-new-matching-cond-field.png)

1.  Go to **Cash Management** > **Setup** > **Reconciliation rules** and either create a new matching rule or edit an existing one.
    
2.  Use grouping and filtering for increased accuracy.
    
3.  In the Matching conditions section, select **Amount (combine debits and credits)** to combine amounts on bank or Intacct transactions.
    

When the matching rule runs, the credits and debits are combined when matching on amount.

## Permissions and other requirements

| Subscription | Cash Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Bank transaction rules: Add, Edit, List |
