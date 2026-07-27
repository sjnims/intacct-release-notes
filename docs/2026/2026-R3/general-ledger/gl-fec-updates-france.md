---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/General_Ledger/2026-R3-gl-fec-updates-france.htm
release: 2026-R3
extracted: 2026-07-27
title: "Customer and supplier dimensions for the FEC report"
---

# Customer and supplier dimensions for the FEC report

This idea came from you

Accounting Entries File (FEC) reports for companies and entities operating in France now include dimension information for General Ledger and specific subledger transactions. This enhancement helps improve statutory reporting accuracy, strengthens audit traceability, and supports France’s e-reporting requirements.

![FEC report in French with highlight box around column dimensions.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-gl-fec-updates-france.png)

## Key benefits

- **Improved accuracy**: Improves statutory reporting accuracy for France by including customer, vendor, and employee dimensions in the FEC report.

- **Comprehensive coverage**: Works across General Ledger transactions, subledger transactions for Accounts Payable and Accounts Receivable, and entity account mapping scenarios.

## How it works

Depending on the transaction, Sage Intacct uses offset accounts, alternate accounts, and specific account codes to populate the **CompAuxNum** and **CompAuxLib** columns of the report.

### Offset accounts

For opening balances and period transactions, Sage Intacct pulls dimension information from the subledger's offset account into the **CompAuxNum** and **CompAuxLib** columns of the report.

- For Accounts Payable, the columns display the vendor dimension.

- For Accounts Receivable, the columns display the customer dimension.

### Alternate accounts

If you set an alternate account for your General Ledger, Sage Intacct pulls dimension information from the alternate account.

- For a payables alternate account, the columns display the vendor dimension.

- For a receivables alternate account, the columns display the customer dimension.

### Account prefixes

If the transaction account begins with certain codes, then Sage Intacct populates the FEC report with the associated dimension.

- For Accounts Payable accounts that begin with 401, 403, 404, 405, 408, or 409, the columns display the vendor dimension

- For Accounts Receivable accounts that begin with 411, 413, 416, 418, or 419, the columns display the customer dimension

- Transactions created in the General Ledger will display dimension information for all the above listed account prefixes, according to the prefix grouping.

## Permissions and other requirements

| Subscription          | General Ledger                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                    |
| User type             | Business                                                                                                  |
| Permissions           | General Ledger Accounts: List, View, Add, Edit, Delete Reports, Accounting entries file (FEC) report: Run |
| Restrictions          | Company or entity must have the operating country set to France.                                          |
