---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm
release: 2026-R2
extracted: 2026-11-13
title: "Updates to currency in payment posting"
---

# Updates to currency in payment posting

[Example: Pay a bill with a foreign currency bank account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Example_bill_pay)

Accounts payable

This release, we're laying the groundwork for future multi-currency enhancements. The updates made in this release improve the distinction between currencies and amounts when multiple currencies are involved.

## What's changed

You'll notice field name enhancements in the following payment-related UI pages:

- Posted payments
- Payment requests
- AP Advances
- Manual payments

These changes also impact the fields that are displayed in ledgers, registers, and custom reports when you support foreign currency payments.

[Field changes on payment-related pages](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm#)

When using multi-currency, pages related to payments now show multi-currency related fields as follows:

| Field or column                     | Description                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| Bank currency                       | The bank account currency.                                                   |
| Bank amount                         | The payment amount in the bank currency.                                     |
| Txn currency (Transaction currency) | The currency in which the payment was issued and recorded.                   |
| Txn amount (Transaction amount)     | The payment amount in the currency that the payment was issued and recorded. |
| Base currency                       | The operating currency of the entity.                                        |
| Base amount                         | The payment amount in the operating currency of the entity.                  |

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                |
| User type             | Business user with admin privileges Business Employee                                                                                      |
| Permissions           | AP advances: List, View, Edit, Post Manual payments: List, View, Edit, Post Payment requests: List, View, Edit Posted payments: List, View |
