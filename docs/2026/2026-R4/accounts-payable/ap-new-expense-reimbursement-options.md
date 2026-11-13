---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm
release: 2026-R4
extracted: 2026-11-13
title: "Reimburse employee expenses through Accounts Payable or payroll"
---

# Reimburse employee expenses through Accounts Payable or payroll

[Remit employee expenses through payroll overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_remit_through_payroll)

[Reimburse employee expenses using AP bills overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reimburse_expenses_using_AP_bills)

[About expense adjustments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_expense_adjustments)

[About advance expense types](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_advance_expense_types)

Accounts Payable

This idea came from you

Sage Intacct now allows reimbursement of employee expenses using Accounts Payable or remit employee expenses through your external payroll provider. This update helps align employee reimbursements with your existing payment process while improving control and visibility over expense payments.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-new-expense-reimbursement-options.png "Enable employee expense reimbursement options.")

## Key benefits

- **Work with familiar processes**: Use existing payment workflows by reimbursing employees through Accounts Payable or payroll.

- **Gain greater financial oversight**: Improve financial visibility and control with reimbursement activity tracked through standard Accounts Payable and payroll processes.

- **Adapt to your business needs**: Increase flexibility by allowing you to choose the reimbursement method that best fits your company's processes.

## How it works

Reimburse expenses using Accounts Payable

1.  Open the Configure Expenses page to reimburse employees using AP bills, including the AP term and Employee liability expense account.

2.  Associate a vendor with each employee for reimbursements.

3.  Submit an employee expense report for approval.

4.  Approve the expense report.

    The approved expense report automatically generates a corresponding bill in Accounts Payable.

5.  Pay the bill in Accounts Payable to reimburse the employee.

6.  Run the Expense ledger report to track employee expense balances.

Remit expenses through payroll

1.  Open the Configure Expenses page to remit employee expenses through external payroll, including the Employee liability expense account.

2.  Submit an employee expense report for approval.

3.  Approve the expense report.

    Approved expense reports are available in the Remit to payroll list.

4.  Remit employee expenses through payroll.

5.  Run the Expense ledger report to track employee expense balances.

## What's changed

The following changes apply when you reimburse employee expenses through Accounts Payable or payroll:

[We removed the following from the Configure Expenses page](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

- Default payment method field

- Default bank account field

- Contacts for notifications field

- Expense report reimbursement approval settings

- Allow reclassification option

- Enable reversal of unpaid expenses option

[We removed the following labels from the Expenses menu](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

- Reimbursements - Approve

- Reimbursements - Pending

- Reimbursements - Posted

- Reimbursements - Select expenses to reimburse

- Reports - Employee aging

- Advances

[We added the following section to the Expense type information page](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

- Expense purpose

[The following changes apply to the Expense ledger report](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

- Removed the **Check no.** field.

- Added **Remitted** as a status option when employee expenses are remitted through payroll.

[When you reimburse expenses using Accounts Payable, the following changes apply](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

- On employee records, we added the following section to the Reimbursement information tab:

  - Associated vendor

- We added the following field on expense reports:

  - Associated bill

[When you track remittance through payroll, the following changes apply](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Payable/2026-R4-ap-new-expense-reimbursement-options.htm#)

We added the **Remit expense reports for payroll** label on the Expenses menu.

## Good to know

- After a bill is created, you cannot change the employee expense reimbursement method.

- Remit employee expenses or reverse remittance in the entity where the expense was created.

- You can choose how employee expenses are reimbursed:

  - Reimburse expenses using AP bills

    - When an expense report is approved, Intacct automatically generates a bill in Accounts Payable for employee reimbursement.

    - Pay bills through the standard Accounts Payable process to reimburse employees.

  - Remit expenses through payroll

    - Approved expense reports can be exported and processed to your payroll provider.

## Permissions and other requirements

| Subscription          | Time and Expenses Accounts Payable                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                        |
| User type             | Business user with admin privileges                                                                |
| Permissions           | Expenses Remit expenses for payroll: List, View, Remit, Undo remit Accounts Payable Pay bills: Run |
