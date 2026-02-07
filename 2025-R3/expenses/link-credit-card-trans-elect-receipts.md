---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Expenses/2025-R3-link-credit-card-trans-elect-receipts.htm
release: 2025-R3
extracted: 2026-02-07
title: "Link credit card transactions and electronic receipts to employee expense reports"
---

# Link credit card transactions and electronic receipts to employee expense reports

[Add credit card transactions and electronic receipts to employee expense reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_credit_card_transactions_and_electronic_receipts)

[Create a credit card account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_Charge_Card_Accounts)

[Enter a credit card transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recording_Editing_and_Viewing_Charge_Card_Transactions)

[Automate employee expenses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automate_employee_expenses)

[Distribute credit card transactions linked with electronic receipts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Distribute_credit_card_transactions_and_electronic_receipts)

[My expense reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Aa_TOC_my_expense_report)

[Staff expense reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Aa_TOC_staff_expense_reports)

Expenses

You can now use credit card transactions and electronic receipts together in employee expense reports to enter data quickly. Link credit card transactions with electronic receipts to help automate your employee expense creation process, saving time and reducing manual effort.

Contact your account manager or Value Added Reseller (VAR) to enable expense automation.

![The Select electronic receipts option on employee expense reports.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-link-credit-card-trans-elect-receipts-1.png)

![The Link to credit card transaction option on employee expense reports.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-link-credit-card-trans-elect-receipts-2.png)

## Key benefits

- **Create credit card transactions automatically**: Set up a Cash Management creation rule to generate credit card transactions automatically from bank feeds or bank transaction import files. Then, you can add credit card transactions linked with receipt images to expense reports.
- **Link all documents to an expense line**: Match receipts and credit card transactions at line level. This ensures accurate data representation, enhancing visibility during the approval process.
- **Split credit card transactions**: For added flexibility, you can split a single credit card transaction into multiple expense lines on an expense report. Then, you link the credit card transaction to a receipt.

  For example, if a charge includes both airfare and meals, you can separate them into different categories. Then, you attach the appropriate receipt uploaded through email.

## How it works

1.  An admin selects **Enable electronic receipt inbounding** on the Configure Expenses page. After that is enabled, receipts appear automatically on the Electronic receipts list.

    Learn how to [Automate employee expenses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automate_employee_expenses).

2.  Users with the appropriate permissions can create credit card transactions to associate with employee expenses.

    Learn how to [Enter a credit card transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Recording_Editing_and_Viewing_Charge_Card_Transactions).

3.  Users with the appropriate permissions can link electronic receipts and credit card transactions to employee expense reports. When linking electronic receipts with credit card transactions, you must select the electronic receipts first. Then, you can select the credit card transactions.

    Learn how to [Add credit card transactions and electronic receipts to employee expense reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_credit_card_transactions_and_electronic_receipts).

## What's changed

Previously, you could only use credit card transactions and electronic receipts separately. With the release, you can use credit card transactions and electronic receipts together in expense reports for a more streamlined workflow.

## Good to know

An electronic receipt is a supporting document for a credit card transaction. If the electronic receipt amount differs from the credit card transaction amount, the credit card transaction amount takes precedence.

## Permissions and other requirements

| Subscription          | Cash Management Time and Expenses                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                                                                                                                                                                                                   |
| User type             | Business Project Manager Employee                                                                                                                                                                                                                               |
| Permissions           | Cash Management Credit card accounts: List, View, Add Credit card transactions: Add Expenses Electronic receipts: List, View, Upload, Manage staff electronic receipts Expense summaries: List expenses, View expense, Add expense My expenses: List, View, Add |
| Configuration         | Enable electronic receipt inbounding                                                                                                                                                                                                                            |
| Restrictions          | Not available for the following companies: VAT/GST enabled companies Cash and Accrual companies configured to post credit card transaction charges and fees to the General Ledger after creation Cash-based companies                                           |
