---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Time_and_Expenses/2024-R2-distribute-employee-expenses.htm
release: 2024-R2
extracted: 2026-02-07
title: "Ability to distribute employee expenses"
---

# Ability to distribute employee expenses

We now offer the ability to distribute employee expenses based on transaction allocations in an expense report. This allows you to distribute employee expenses quickly. You can distribute employee expenses and credit card transactions linked to an employee.

## Details

Previously, when you created an expense report, you would need to calculate the distribution and enter several lines for an expense item. Now, when you create an expense report, you can distribute the amount paid for a transaction. Sage Intacct calculates the amount to distribute between departments, cost centers, grants, programs, or classes. Intacct distributes the amount based on the transaction allocation.

- To distribute employee expenses, an admin must select the **Enable allocation to distribute expense entry** checkbox on the [Configure Time and Expenses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Time_and_Expenses) page.
- An admin can [set up a transaction allocation.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_txn_allocation_def)
- A transaction allocation determines how Intacct distributes the amount of an employee expense.
- Only use transaction allocations that are percentage based in an employee expense.

[![The Add distribute expense button is selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-distribute-employee-expenses_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-distribute-employee-expenses.png)

## Example

You travel for work and visit several locations throughout the week, such as San Jose, San Francisco, and Los Angeles. During your work travel, you paid for meals in those locations. On your expense report, you want to distribute the amount paid for the meals between the locations. When you distribute the amount paid for the meals, Intacct calculates the expense based on the values in the transaction allocation. In this case, the allocation is set up to distribute the cost of the meals evenly between the locations.

## How it works

### Enable allocation to distribute expense entry

An admin must select the **Enable allocation to distribute expense entry** checkbox so that you can distribute employee expenses.

1. Go to **Time and Expenses** > **Setup tab** > **Configuration**.
2. Scroll to **Expense report requirements**.
3. Under Transactions, select the **Enable allocation to distribute expense entry** checkbox.
4. **Save** your changes.

### Distribute employee expenses

1. Go to **Time and Expenses** > **All tab** > **Expenses** > **My expenses** or **Staff expenses**.
2. Select **Add**.
3. In the Expense report info section, enter information in the required fields.
4. Select **Add distribute expense**.
5. Choose an **Allocation**.
6. Enter an **Amount**.

    Intacct shows a preview of the distributed expense calculations. You can change this information in the Expense entries section.

7. After you complete entering information in the fields, select **Add expense**.

Your expenses are distributed into multiple expense entries on your expense report. You can save your expense report as a draft or submit it for approval.

### Distribute credit card transactions

The location of the expense entry must be the same as the credit card location.

1. Go to **Time and Expenses** > **All tab** > **Expenses** > **My expenses** or **Staff expenses**.
2. Select **Add**.
3. In the Expense report info section, enter information in the required fields.
4. Choose **Select credit card transactions**.
5. Select a credit card transaction.
6. Enter an **Amount to apply**.
7. Choose an **Allocation**.
8. After you complete entering information in the fields, select **Add expense**.
9. For each expense entry, select an **Expense type**.

You can save your expense report as a draft or submit it for approval.

## Permissions and other requirements

| Subscription          | Time and Expenses                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                            |
| User type             | Business Employee Project manager Platform Warehouse                                     |
| Permissions           | Expense summaries: List expenses, View expense, Add expense My expenses: List, View, Add |
