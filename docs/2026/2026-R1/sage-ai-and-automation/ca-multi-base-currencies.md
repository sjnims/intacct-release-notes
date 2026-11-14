---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Sage_AI_and_Automation/2026-R1-ca-multi-base-currencies.htm
release: 2026-R1
extracted: 2026-11-13
title: "Close Automation now supports multi-base currencies"
---

# Close Automation now supports multi-base currencies

[](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=ALIAS_HERE)[Subledger Reconciliation Assistant](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=use_subledger_reconciliation)

[](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=ALIAS_HERE)[Variance Analysis](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Use_variance_analysis)

[](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=ALIAS_HERE)[Multi-base currency considerations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Multi_base_currency_considerations)

[](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=ALIAS_HERE)[Enable multi-base currencies](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enable_multi_base_currency)

Sage AI and Automation

Close Automation is a set of tools, including Subledger Reconciliation Assistant and Variance Analysis, designed to accelerate your period-end close.

- Subledger Reconciliation Assistant saves you time and effort by automating some of the tasks required to reconcile subledgers with General Ledger.

- Variance Analysis alerts budget owners and finance leaders whenever actual spending exceeds your budget.

Subledger Reconciliation Assistant and Variance Analysis have been enhanced to work in companies with multiple base currencies enabled.

## How it works for Subledger Reconciliation Assistant

If your company has multi-base currencies enabled, Subledger Reconciliation Assistant always shows information for entities that share the same base currency.

![Copilot panel showing a variance between General Ledger and Accounts Receivable. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ca-subledger-reconciliation.png)

## How it works for Variance Analysis

For both Copilot generated insights and on-demand reviews, you'll select an entity group with members that share the same base currency.

### Copilot insights

If your company has multi-base currencies enabled, you'll specify which entity (location) groups will be included in the Variance Analysis insights. The group members must all use the same base currency.

![Configure Variance Analysis page with Entity groups section circled. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ca-variance-analysis.png)

### On-demand review

If your company has multi-base currencies enabled, when you run Variance Analysis from the Copilot panel, you'll start by selecting an entity or entity group. The dropdown list includes only entity groups in which all members share the same base currency.

![Copilot panel with a "Entity or entity group" dropdown list. You select one and then select Apply filter. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ca-variance-analysis-insight.png)

## Permissions and other requirements

| Subscription          | Company Sage Copilot Close Automation                                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                           |
| User type             | Business Employee Project Manager                                                                                                                                     |
| Permissions           | Sage Copilot Close Automation Close Assistant: Run Copilot Variance analysis: Run General Ledger Drill down to all transactions from reports: Enable Financials: View |
