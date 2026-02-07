---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-clear-deliver-revenue.htm
release: 2024-R4
extracted: 2026-02-07
title: "Clear and deliver in bulk and more"
---

# Clear and deliver in bulk and more

[Clear contract revenue or expense recognition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Clear_revenue_or_expense_entry)

[Deliver a contract or contract lines](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Deliver_contract)

[Manage schedules field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Manage_schedules)

Contracts

Manage contracts more efficiently from a centralized view using the following actions on the Manage Schedules page:

- Clear revenue recognition
- Clear expense recognition
- Deliver contract lines

Now you can manually clear or deliver in bulk across multiple contracts, eliminating the need to access each contract individually. When you initiate these actions, Sage Intacct creates a bulk action run record and runs the process offline.

To streamline your workflow further, we also made the following updates to the Manage Schedules page:

- Added filters for user-defined dimensions
- Expanded selection options in the results table
- For the Post action, added the **Expense line no.** column to the results table
- Outdated results are automatically hidden when switching actions

## Clear revenue or expense recognition

You can clear posted recognition if, for example, you realize that the wrong posting date was used. This action resets the status of the selected rows in the schedule to Open and reverses the applicable journal entries.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-clear.png)

1. Go to **Contracts** > **All** > **Manage schedules**.
2. In the Action dropdown, select **Clear**.
3. Choose whether you want to clear **Revenue** or **Expense** schedules.
4. Select which **Journal** to use.
5. Select filters to narrow the focus of the schedules you want to clear.
6. Select **Preview**.
7. Select the schedules that you want to clear.
8. Select **Clear**.

    Intacct creates a bulk action run record and completes the process offline.

## Deliver contract lines

If you use event-based recognition, use this feature to trigger revenue recognition by marking contract lines as delivered.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-deliver.png)

1. Go to **Contracts** > **All** > **Manage schedules**.
2. In the Action dropdown, select **Deliver**.
3. In the **As of date** field, select a date on or before which includes the contract lines you want to deliver.
4. Select filters to narrow the focus of the contract lines you want to deliver.
5. Select **Preview**.
6. In the **Delivery date** field, select a date.
7. Select the contract lines that you want to deliver.
8. Select **Deliver**.

    Intacct creates a bulk action run record and completes the process offline.

## User-defined dimension filters

We added support for user-defined dimensions on the Manage Schedules page, giving you more ways to refine the list of schedules or contract lines on which you want to act. The new User-defined dimensions section is located under the Filters section.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-UDDs.png)

## New selection options

We expanded the selection options on the Manage Schedules page allowing you to select large numbers of rows efficiently. Now you can use the arrow next to the checkbox in the table header to perform the following actions:

- **Select all on this page**: Select all items currently visible on the page.
- **Select all**: Select all items across all pages of the table.
- **Clear selected**: Deselect all previously selected items.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-select.png)

## Expense line no. column

We added the **Expense line no.** column to the results table for the Post action, making it easier to differentiate between rows. This addition also aligns with the structure of the Expense lines list.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-expense-line-no.png)

## Auto-hide previous results

Previously, when you selected Preview for an action on the Manage Schedules page and then switched to a different action, the previous results table remained visible until you selected Preview again. Now, when you change actions, the previous results table automatically hides.

## Permissions and other requirements

| Subscription          | Contracts                                                    |
| --------------------- | ------------------------------------------------------------ |
| Regional availability | Australia Canada South Africa United Kingdom United States   |
| User type             | Business                                                     |
| Permissions           | Contracts Manage schedules: Run Bulk Action Runs: List, View |
