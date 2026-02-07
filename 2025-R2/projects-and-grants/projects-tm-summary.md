---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Projects_and_Grants/2025-R2-projects-tm-summary.htm
release: 2025-R2
extracted: 2026-02-07
title: "Time and materials summary totals and increased expense capacity"
---

# Time and materials summary totals and increased expense capacity

[Map time and materials tasks to Construction project contract lines](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Map_time_material_tasks_)

[Projects permissions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Permissions_pa)

[Training: Construction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=On_demand_training_co)

Projects

We've updated project contract billing in Projects > Generate invoices with a new workflow that lets you manually refresh summary totals and increases the number of expenses for each transaction type.

## Increased expense capacity

We've increased the maximum number of expenses allowed in each transaction type section from 2000 to 4000. This means more expense tracking capacity and improved performance when calculating large projects. On the Generate invoices > Display options tab, select up to 4000 expenses for each transaction.

![Generate invoices Display options showing Expense types and Max row selection up to 4000.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-4000-expenses.png)

We recommend that you set the Max rows to the actual number of expenses that you need to calculate.

## Update expense totals manually

This feature requires a Construction subscription.

The new Update totals button replaces real-time recalculations, significantly improving performance when handling large volumes of expense changes.

After you update your expenses, select to recalculate totals for each time and materials line in the Summary section. Calculations are based on selected expenses and the assigned contract line and rate table.

![Projects Generate invoices screen showing Update totals button and Update required column in the Summary section.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-update-totals.png)

After completing all expense updates, you must select the **Update totals** button before invoicing. You have to be able to override the invoice or specify retainage in the summary grid before finalizing and creating the invoice.

## New Update required column in Summary grid

This feature requires a Construction subscription.

When you create an invoice, ensure all **Update required** check boxes are deselected. Select **Update totals** to clear the check boxes.  

Selecting the **Update totals** button recalculates all totals for changed project contract lines and clears the Update required checkbox.

If you make a change to any expense, the project contract line for that expense requires that you update totals. Changes include clearing one or more expenses, changing or adding a project contract line, or changing or adding a new price or quantity.

Manual changes to the Total this period or Retainage held or Retainage billed require no recalculation.

If you make changes to the project contract line totals and then select the **Update totals** button, your changes are overridden and the totals return to the calculated amounts.

## Permissions and other requirements

| Subscription | Projects application: Project Costing and Billing                                                                 Construction |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges                                                                 Project Manager |
| Permissions | Generate Invoices                                                                                                                                                                                                               Run: Allows users to generate a Pre-Bill report                                                                                                                                                                                                                   Add: Allows users to create an invoice                                                                                                                                                                                                       Project Manager users can create draft invoices only. Business users can create and post invoices.                                                                                                                                                                                                               Edit and delete: Project Manager users can add, change, or delete only their own draft project invoices. Business users can edit invoices created by other user types. |
