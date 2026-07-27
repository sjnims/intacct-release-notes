---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm
release: 2026-R2
extracted: 2026-04-29
title: "Currency in cash receipts"
---

# Currency in cash receipts

This release introduces enhancements to multi-currency payment posting in Accounts Receivable. By distinguishing between the bank account currency for the cash receipt and the invoice currency, Sage Intacct enables you to follow the money trail more easily when applying payments to a bank account using a currency that differs from the invoice currency.

## Key enhancements

[Enhancements to General Ledger transaction currency](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

- **Payment line**: The transaction currency and amount of the bank line now uses the bank currency and related cash receipt amount.
- **Payment offset**: The transaction currency for the AR line now uses the currency of the invoice and related transaction amount.

[Enhancements to the Posted payments pages](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

Intacct shows separate fields for amounts and currencies for clarity and ease of use.

When using multi-currency, pages related to payments now show multi-currency related fields such as the following:

| Field or column                     | Description                                                               |
| ----------------------------------- | ------------------------------------------------------------------------- |
| Bank currency                       | This is the bank account currency.                                        |
| Bank amount                         | This is the bank payment amount.                                          |
| Txn currency (Transaction currency) | This is the currency of the invoice.                                      |
| Txn amount (Transaction amount)     | This is the amount that's applied to the invoice in the invoice currency. |
| Base currency                       | This is the operating currency of the entity.                             |
| Base amount                         | This is the amount in the operating currency of the entity.               |

[Example: Enhancements to the Payment information tab](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

We added bank currency and bank amount fields to the Posted payment pages in Accounts Receivable. These new fields make it easier to follow bank currency information within payment receipt workflows, while clearly distinguishing between transaction currency and bank currency for better usability.

An example is shown in the following table:

| Customer name  | Payment method | Txn payment amount | Txn amount applied | Txn currency | Payment amount | Amount applied | Bank amount | Bank currency |
| -------------- | -------------- | ------------------ | ------------------ | ------------ | -------------- | -------------- | ----------- | ------------- |
| Examples, Inc. | Cash           | 1,000.00           | 1,000.00           | USD          | 1,000.00       | 1,000.00       | 978.00      | CAD           |

[Example: Transaction currencies and amounts; bank currencies and amounts](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

The Posting details tab differentiates among the debit and credit transaction amounts, the debit and credit base amounts, and the transaction and base currencies.

In this example, the invoice is in USD and the payment is received into a bank account that uses CAD.

Following is an example of a table of General Ledger journals posted:

| Location | Account no. | Account name        | Txn currency | Debit txn amount | Credit txn amount | Base currency | Debit base amount | Credit base amount |
| -------- | ----------- | ------------------- | ------------ | ---------------- | ----------------- | ------------- | ----------------- | ------------------ |
| USA      | 1005        | Bank of Banks       | CAD          | 978.00           | None              | USD           | 1,000.00          | None               |
| USA      | 1200        | Accounts Receivable | USD          | None             | 1,000.00          | USD           | None              | 1,000.00           |

The following table shows the total amounts for the General Ledger journals posted:

| Total debit txn amount | Total credit txn amount | Total debit base amount | Total credit base amount |
| ---------------------- | ----------------------- | ----------------------- | ------------------------ |
| 978.00 CAD             | 1,000.00 USD            | 1,000.00 USD            | 1,000.00 USD             |

[Enhancements to the ledgers, registers, and custom reports](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-currency-cash-receipts.htm#)

Further enhancements are shown in the following table:

| Product area          | New columns or fields                                                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ledgers and registers | Ledgers and registers now show the payment amount in the bank currency. Invoices now show amounts in the invoice currency. The payment line now shows the amount in the bank currency. Bank currency Bank amount Invoice currency Invoice amount |
| Custom reports        | The AR Receivables Payment report and AR Advance report now include separate columns for bank currency and bank amount. These are also available in the API. Bank currency Bank amount                                                           |

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                    |
| --------------------- | ---------------------------------------------------------------------- |
| Regional availability | All regions                                                            |
| User type             | Business user with admin privileges Business Employee Payment Approver |
| Permissions           | Accounts Receivable Invoices: List, View                               |
