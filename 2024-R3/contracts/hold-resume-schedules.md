---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Contracts/2024-R3-hold-resume-schedules.htm
release: 2024-R3
extracted: 2026-02-07
title: "Hold and resume schedules in bulk and more"
---

# Hold and resume schedules in bulk and more

[Manage schedules in bulk](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Manage_schedules)

[Hold or resume multiple contract line schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Hold_resume_contract_schedules)

Contracts

We're thrilled to announce updates to the Manage Schedules page. We've added new bulk actions so you can manage your contracts from a centralized view. We also revamped the user interface to improve your experience.

## Hold and resume schedules in bulk

We've added the ability to hold and resume schedules from the Manage Schedules page. Now you can manually hold or resume billing, revenue, and expense schedules in bulk across multiple contracts, eliminating the need to access each contract individually. When you hold or resume contract line schedules, Intacct creates a bulk action run record and runs the process offline.

### Hold contract line schedules

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-contracts-hold_805x389.png)

1. Go to **Contracts** > **All** > **Manage schedules**.
2. In the Action dropdown, select **Hold**.
3. In the **As of date** field, select a date on or before which includes the contract lines you want to hold.
4. Select your desired filters to narrow the focus of the contract lines you want to hold.
5. Select **Preview**.
6. Under **Schedules to hold**, select the checkbox next to each type of schedule you want to hold.
7. In the **Hold date** field, select the desired date.
8. **Optional:** Enter any text regarding the hold in the **Hold memo** field.
9. Select the checkbox to the far left of the contract line that you want to hold, or select the checkbox in the column header to select all contract lines on a page.
10. Select **Hold**.

    Intacct creates a bulk action run record and completes the process offline.

### Resume contract line schedules

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-contracts-resume_804x387.png)

1. Go to **Contracts** > **All** > **Manage schedules**.
2. In the Action dropdown, select **Resume**.
3. In the **As of date** field, select a date on or before which includes the contract lines you want to resume.
4. Select your desired filters to narrow the focus of the contract lines you want to resume.
5. Select **Preview**.
6. Under **Schedules to resume**, select the checkbox next to each type of schedule you want to resume.
7. In the **Resume date** field, select the desired date.
8. **Optional:** Enter any text regarding the hold in the **Resume memo** field.
9. **Optional:** To use a Revenue adjustment type that's different than the type on the associated revenue template, use the dropdown list to select the desired type.
10. Select the checkbox to the far left of the contract line that you want to resume, or select the checkbox in the column header to select all contract lines on a page.
11. Select **Resume**.

    Intacct creates a bulk action run record and completes the process offline.

## User interface updates

We've made the following updates to improve your experience.

### New filters

We've added new filters to the Manage Schedules page, giving you more ways to refine the list of schedules or contract lines on which you want to act:

- Customer type
- Contract type
- Transaction currency
- Template
- Project type
- Task or task group
- Project manager
- Employee or employee group
- Maximum number of records to select

### New layout for the Filters section

Due to the increased number of filter options filter options, we updated the layout to use four columns instead of two. Now you can quickly scan across the page to find desired filters.

Additionally, the Filters section automatically collapses when you select Preview. You can now see the beginning of the filtered results list without having to scroll first.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-contracts-new-filters-layout.png)

### New column filters in the results list section

Columns in the results list section now have a filter capability. Use the column filters to further refine the schedules or contract lines on which you want to act.

For example, say you are looking for a particular line number. Enter the line number in the applicable column filter field.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-contracts-filtered-columns.png)

### Other changes

- We made the following field label changes:

  | Old label                              | New label         |
  | -------------------------------------- | ----------------- |
  | Preview entries                        | Preview           |
  | Manage revenue and expense recognition | Manage schedules  |
  | Line no.                               | Contract line no. |

- We added a new **Action** field to select the bulk action you want to perform.
- For the Post action, you now select either the Revenue or Expense schedule type. When you select Preview, a single filtered results list appears, making it easier to manage.
- For the Post action, we added the following new columns in the results list:
  - Total amount
  - Template
  - Schedule start date
  - Schedule end date

  We also rearranged the columns in a logical order and moved additional fields to a **Show details** dropdown in each row.

## Permissions and other requirements

| Subscription          | Contracts                                                    |
| --------------------- | ------------------------------------------------------------ |
| Regional availability | Australia Canada South Africa United Kingdom United States   |
| User type             | Business                                                     |
| Permissions           | Contracts Manage schedules: Run Bulk Action Runs: List, View |
