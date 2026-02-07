---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Tax/2024-R3-tax-Canada-term-discount.htm
release: 2024-R3
extracted: 2026-02-07
title: "Support for term discounts in Canadian taxes"
---

# Support for term discounts in Canadian taxes

[Capture tax on term discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=capture_tax_term_discounts)

Taxes

Customers using the standard tax solution for Canada can now capture taxes on their term discounts. In compliance with Canadian Revenue Agency (CRA) rules, tax is calculated on the invoice line totals, allowing Canadian customers to meet the tax requirements for Canadian GST.

## Details

Canadian GST requires taxes to be calculated on the amount before any term discount is applied. For example, a supplier sends an invoice to a customer with a goods amount of $100 and taxes of $7. The supplier offers a 5% term discount if the payment is made within 30 days of purchase. If the customer takes advantage of the term discount, the amount due is $102 ($95 for the goods and $7 for the taxes). Canadian GST is still payable on the pre-discount goods amount of $100 even if the customer takes advantage of the discount and only pays $95.

Now, if you use the Canadian tax solution, you can set up your terms to calculate GST correctly on the discounts applied in a transaction.

Term discounts can be applied in the following transaction types:

- Accounts Payable: Bills , Recurring bills
- Accounts Receivable: Invoices, Recurring invoices
- Order Entry: Transactions posting to Account Receivable
- Purchasing: Transactions posting to Accounts Payable

## How it works

To define terms in **Accounts Payable** or **Accounts Receivable**, go to **Setup** > **More** > **Terms**.

![Screenshot of Accounts Payable terms information setup with the 'Calculate based on' section highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-tax-canada-term-discounts.png)

You can set the discount to calculate on the line-item total (which excludes added charges such as shipping) or the invoice total (which includes added charges such as shipping). This selection determines how the taxes are calculated when the term is used in a transaction.

When you create a transaction, you can select a term discount to apply to the transaction. To comply with CRA rules and capture taxes on the amount before the discount is applied, you must select a term discount that calculates based on the line-item total.

If you select a term discount that calculates on the invoice total, then the taxes are captured on the gross invoice amount, which is not in compliance with CRA rules.

In Accounts Payable transactions, the term discount is automatically calculated. In Accounts Receivable transactions, you must select the **Apply term discount** checkbox. Term discounts are only applied when the payment is made in full.

To see the applied discount, you must run a General Ledger report or subledger report.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Taxes                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada (with Canadian tax solution)                                                                                                                                                                     |
| User type             | Business user with admin privileges                                                                                                                                                                     |
| Permissions           | Accounts Payable Bills: List, View, Add, Edit, Post, Delete Terms: List, View, Add, Edit, Delete Accounts Receivable Invoices: List, View, Add, Edit, Post, Delete Terms: List, View, Add, Edit, Delete |
