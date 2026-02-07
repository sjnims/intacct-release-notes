---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Purchasing/2025-R4-PO-Match-tolerance.htm
release: 2025-R4
extracted: 2026-02-07
title: "Broader visibility into match tolerance exceptions"
---

# Broader visibility into match tolerance exceptions

[Set up match tolerances](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_match_tolerances)

[View transaction match tolerance exceptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=View_transactions_w_match_tolerance_exceptions)

Purchasing

Accurately track and resolve mismatches with greater visibility into transaction value or percentage differences. When match tolerance is enabled, Sage Intacct automatically compares purchase order details—quantity and price—to identify any discrepancies during conversion. You can now view specific quantities and price variances on the Exception summary.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-po-match-tolerances.png)

In this example, the Exception summary highlights key issues—one mobile phone is not received, and the unit price increased. This gives the purchasing manager clear and actionable insights to decide the next steps and keep operations running smoothly.

## Key benefits

Use the match tolerance Exception summary to identify workflow exceptions and track transaction discrepancies:

- Easily identify the exact quantity and/or price differences between workflow transactions.
- Quickly recognize specific transaction details to make sure payments line up with approved purchase quantities and amounts.
- Provide Accounts Payable or other departments in charge of finances clearer reports on company spending.

## How it works

1.  Enable match tolerances in Purchasing.
2.  Configure the transaction definitions that you want to validate with either a quantity or price tolerance percentage, or both.
3.  If a new transaction is created and the quantity or price differs from the source transaction, view the exception.
4.  Choose whether to adjust, accept, or override the exceptions.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Purchasing/2025-R4-PO-Match-tolerance.htm#)

To request a follow-up on **2025 Release 4** enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription                       | Purchasing                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                   |
| User type                          | Business                                                                                                      |
| Permissions                        | Purchasing transactions: List, Edit, Override exceptions                                                      |
| Configuration                      | Ensure match tolerances is selected in Purchasing configuration                                               |
| Dependencies or other requirements | Smart Events that are configured to update Purchasing transactions might override match tolerance exceptions. |
| Restrictions                       | Overriding transaction exceptions is not supported through API or CSV update.                                 |
