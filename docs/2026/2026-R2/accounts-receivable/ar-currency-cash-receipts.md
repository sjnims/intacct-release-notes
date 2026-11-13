---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm
release: 2026-R2
extracted: 2026-11-13
title: "Updates to currency in payment posting"
---

# Updates to currency in payment posting

[Example: Receive cash payment on a foreign invoice](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Example_receive_foreign_invoice_pymt)

[Example: Receive cash payment on an invoice using a foreign bank account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Example_receive_invoice_pymt)

[About multi-currency overpayments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_overpymt_multi_curr)

accounts receivable

This release, we're laying the groundwork for future multi-currency enhancements. The updates made in this release improve the distinction between currencies and amounts when multiple currencies are involved.

## What's changed

You'll notice field name enhancements in the following payment-related UI pages:

- Posted payments
- AR Advances

These changes also impact the fields that are displayed in ledgers, registers, statements, and custom reports when you support foreign currency payments.

[Field changes on payment-related pages](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

When using multi-currency, pages related to payments now show multi-currency related fields as follows:

| Field or column                     | Description                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| Bank currency                       | The bank account currency.                                                     |
| Bank amount                         | The payment amount in the bank currency.                                       |
| Txn currency (Transaction currency) | The currency in which the payment was received and recorded.                   |
| Txn amount (Transaction amount)     | The payment amount in the currency that the payment was received and recorded. |
| Base currency                       | The operating currency of the entity.                                          |
| Base amount                         | The payment amount in the operating currency of the entity.                    |

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                    |
| User type             | Business user with admin privileges Business Employee                                          |
| Permissions           | Manage payments: List, View, Add Posted payments: List, View Receive advances: List, View, Add |
