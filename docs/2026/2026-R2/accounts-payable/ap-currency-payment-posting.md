---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm
release: 2026-R2
extracted: 2026-04-29
title: "Currency in payment posting"
---

# Currency in payment posting

This release introduces enhancements to multi-currency payment posting in Accounts Payable (AP). By distinguishing between the bank account currency for the payment and the bill currency, Sage Intacct enables you to follow the money trail more easily when posting multi-currency payments.

## Key enhancements

You'll notice field name enhancements in UI pages such as the following:

-   Posted payments
-   Payment requests
-   AP Advances
-   Manual payments

[Enhancements to General Ledger transaction currency](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm#)

-   **Payment line**: The transaction currency and amount of the bank line now uses the bank currency and related payment amount.
-   **Payment offset**: The transaction currency for the AP line now uses the currency of the bill and the related transaction amount.

[Enhancements to payment pages](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm#)

Intacct shows separate fields for amounts and currencies for clarity and ease of use.

When using multi-currency, pages related to payments now show multi-currency related fields such as the following:

| Field or column | Description |
| --- | --- |
| Bank currency | This is the bank account currency. |
| Bank amount | This is the bank payment amount. |
| Txn currency (Transaction currency) | This is the currency of the bill. |
| Txn amount (Transaction amount) | This is the amount that's applied to the bill in the currency of the bill. |
| Base currency | This is the operating currency of the entity. |
| Base amount | This is the amount in the operating currency of the entity. |

An example of a payment request with the updated fields is shown here:

| Vendor name | Bank currency | Bank amount | Txn currency | Txn amount | Base currency | Base amount |
| --- | --- | --- | --- | --- | --- | --- |
| Example, Ltd. | CAD | $138.03 | CAD | $138.03 | USD | $100.00 |

[Example: Enhancements to Payment information](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm#)

We added bank currency fields to the Posted payment and View payment pages. These new fields make it easier to follow bank currency information within payment workflows, while clearly distinguishing between transaction currency and bank currency for better usability.

An example is shown in the following table:

| Payment method | Vendor name | Payment status | Txn amount (USD) | Bank amount (CAD) |
| --- | --- | --- | --- | --- |
| Cash | Example, Ltd. | Complete | 100.00 | 138.03 |

The table includes new columns that separate the transaction amount and transaction currency from the bank amount and bank currency.

[Enhancements to the Void payment page, ledgers and registers, and custom reports](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-ap-currency-payment-posting.htm#)

Further enhancements are shown in the following table: 

| Product area | New columns or fields |
| --- | --- |
| Void payment page | The Void payment page now shows the payment amount in the bank account currency for all types of payments.                                                                                                                                                              Bank currency                                                                                 Bank amount |
| Ledgers and registers | Ledgers and registers now show the payment amount in the bank currency. Bills now show amounts in the bill currency. The payment line now shows the amount in the bank currency.                                                                                                                                                              Bank currency                                                                                 Bank amount                                                                                 Bill currency                                                                                 Bill amount |
| Custom reports | The AP Payables Payment report and AP Advance report now include separate columns for bank currency and bank amount. These are also available in the API.                                                                                                                                                              Bank currency                                                                                 Bank amount |

## Permissions and other requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges                                                                 Business                                                                 Employee                                                                 Payment Approver |
| Permissions | Accounts Receivable                                                                                                                                                                                                               Pay bills: Run |
