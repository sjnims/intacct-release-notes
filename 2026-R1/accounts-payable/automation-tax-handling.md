---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Payable/2026-R1-automation-tax-handling.htm
release: 2026-R1
extracted: 2026-02-07
title: "AP Automation now predicts tax details"
---

# AP Automation now predicts tax details

[Automate bill entry](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ap_bill_automation)

[Contact your Sage Intacct account manager](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager)

Accounts Payable

Now AP Automation predicts tax details for automated transactions, reducing manual data entry and improving automation efficiency. This enhancement applies to both transactions that have a single line that summarizes the total and transactions that include all line items and associated amounts.

## Key benefits

- Saves time by reducing manual tax entry.
- Improves transaction accuracy through AI-driven predictions that learn and adapt over time as more transactions are posted.

## How it works

1. AP Automation leverages historical transaction data and vendor patterns to predict tax details at the line level.

    AI populates tax details when there's a single tax detail per line. If there are multiple tax details per line, enter them manually.

2. The system populates tax details automatically for each line where applicable.

    Predicted tax details are consistent with the tax solution.

3. Tax amount calculations continue to follow existing Intacct behavior based on the available tax details.

## Permissions and other requirements

| Subscription                       | AP Automation Taxes                                                                                                                                                                                                        |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                                                                                                                |
| User type                          | Business                                                                                                                                                                                                                   |
| Permissions                        | Bills: List, View, Add, Edit, Delete                                                                                                                                                                                       |
| Configuration                      | Contact your Account Manager or Channel Executive to start using AP Automation.                                                                                                                                            |
| Dependencies or other requirements | Tax details must be defined in Intacct for AI to predict them in automated transactions. If the tax information is on the document but tax details are not defined in the predicted tax solution, the field is left blank. |
| Restrictions                       | AI predicts tax details when there's a single tax detail per line. If there are multiple tax details per line, this field is left blank.                                                                                   |
