---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Time/2025-R2-SIT-distribute-time-based-on-allocations.htm
release: 2025-R2
extracted: 2026-02-07
title: "Distribute time based on transaction allocations—Sage Intelligent Time"
---

# Distribute time based on transaction allocations—Sage Intelligent Time

[Distribute timesheet entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Distribute_timesheet_entries)

[Enable allocation to distribute expense entry configuration](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_enable_allocation_to_distribute)

[Create a transaction allocation definition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_txn_allocation_def)

[Select fields to track time by to appear on time](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=IT_select_fields_to_track_time_by)

time

We now offer the ability to distribute timesheet entries based on transaction allocations. A transaction allocation determines how Sage Intacct calculates the time to distribute between departments, cost centers, grants, programs, and classes. Use transaction allocations to distribute time quickly while ensuring consistent cost allocation.

[![Distributed timesheet entries.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-SIT-distribute-time-based-on-allocations_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-SIT-distribute-time-based-on-allocations.png)

## Details

Transaction allocations provide a way to save standard allocation combinations that are routinely used during transaction entry. You can define an allocation transaction to distribute amounts across multiple dimensions automatically. For more information, go to [About transaction allocations.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Allocations_overview)

- To distribute time, an admin must select the **Enable allocation to distribute expense entry** checkbox on the Configure Expenses page.

  For more information, go to [Enable allocation to distribute expense entry configuration.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_enable_allocation_to_distribute)

- An admin can set up a transaction allocation.

  For more information, go to [Create a transaction allocation definition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_txn_allocation_def).

- Only use transaction allocations that are percentage based in a timesheet entry.
- The fields that you track time by appear based on your application configuration. Go to [Select fields to track time by to appear on time](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=IT_select_fields_to_track_time_by) for more information.
- You cannot delete distributed entry lines directly. You can delete the entry line that contains the total work hours, which also delete the distributed entry lines.

## Example

You are working on several projects in different locations, such as San Francisco and San Jose. You work 4 hours in San Francisco and 4 hours in San Jose. You can select an allocation in your timesheet, allowing Intacct to calculate the time based on the values in the transaction allocation. In this case, the allocation is set up to distribute the time of work evenly between the locations.

## How it works

### Step 1. Enable allocation to distribute expense entry configuration

1. Go to **Expenses** > **Setup** > **Configuration**.
2. Scroll to the **Expense report requirements** section.
3. Select the **Enable allocation to distribute expense entry** checkbox.
4. Select **Save**.

### Step 2. Distribute timesheet entries

1. Go to **Time** > **All** > **Timesheets** > **My timesheets** or **Staff timesheets**.
2. Select **Create a timesheet**.
3. Enter or select a **Begin date**.
4. Choose an **Employee**.

   Skip this step if you are creating your own timesheet.

5. Optionally, enter a **Description**.
6. Select an **Allocation**.
7. Choose **Add allocation**.
8. In an entry line, enter the total hours that you or an employee worked.

   Intacct distributes the time based on the allocation.

9. Complete the required fields.

   The timesheet is saved automatically. You can submit the timesheet by selecting **Submit timesheet**.

## Permissions and other requirements

| Subscription          | Projects Costing (includes Time application) Project Costing and Billing Grant Tracking and Billing Sage Intelligent Time |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States United Kingdom South Africa                                                                |
| User type             | Business Project Manager Employee                                                                                         |
| Permissions           | Time My timesheets: List, View, Add, Edit, Delete Staff timesheets: List, View, Add, Edit, Delete                         |
