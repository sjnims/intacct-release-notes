---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Time/2026-R2-SIT-assign-delegates-to-approve-timesheets.htm
release: 2026-R2
extracted: 2026-11-13
title: "Assign delegates to approve timesheets using Sage Intelligent Time"
---

# Assign delegates to approve timesheets using Sage Intelligent Time

This feature has been postponed and is not available in the current release. We expect to deliver the delegates for timesheet approvals feature in a future release and will provide an updated release note when it becomes available.

You can now assign delegates to approve timesheets while you're out of office using Sage Intelligent Time. When employees submit timesheets while an approver is absent, delegates can approve or decline them to ensure that payroll processing continues smoothly.

## Key benefits

- **Continuous workflow**: Timesheet approvals continue uninterrupted when approvers are out of the office.

- **Operational efficiency**: Eliminates manual reassignment of approvers, reducing administrative overhead.

- **Enhanced user experience**: Provides a reliable and transparent approval process for employees and managers.

- **Audit and accountability**: Maintains a clear audit trail of delegated actions for governance and reporting.

## How it works

[Enable and assign delegates for timesheet approvals](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Time/2026-R2-SIT-assign-delegates-to-approve-timesheets.htm#)

1.  Go to **Time** > **Setup** > **Configuration**.

2.  Find Timesheets approval settings and select the **Enable delegation** checkbox.

3.  Select **Manage**.

4.  Select a **Default delegate**.

5.  Select a delegate for each approver.

6.  Select **Save**.

7.  Select **Save** again.

[Set approval delegation for Time](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Time/2026-R2-SIT-assign-delegates-to-approve-timesheets.htm#)

1.  Select your user name at the top of the page, and then select **My preferences**.

2.  Find the Email notifications section and under Approval delegation, select the checkbox for **Time**.

3.  Set your out-of-office start and end dates.

4.  Select **Save**.

[Delegates approve or decline timesheets](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Time/2026-R2-SIT-assign-delegates-to-approve-timesheets.htm#)

1.  Go to **Time** > **All** > **Timesheets** > **Approve timesheets**.

2.  Select the **To do** tab.

3.  Set up your view.

    - To filter the table, enter a value in the text box at the top of a column.

    - To change the sort order of a column, select a column header.

4.  Find the timesheet and select its checkbox.

5.  Select **Approve** or **Decline**.

6.  Optionally, review your selections and enter a comment.

7.  Select **Approve** or **Decline**.

## What's changed

We've added the following labels on the Configure Time page:

- **Enable delegation**: Turns on delegation for timesheet approvals. When you select this checkbox, the **Manage** button appears.

- **Manage**: This button allows you to assign users as delegates for approvers.

## Good to know

- The default delegate can only approve timesheets when acting as the approver delegate.

- When out-of-office approvals are enabled, approval requests are directed to the assigned delegate and remain visible until the out-of-office expires.

### Notifications

The following must be enabled so that delegates receive email notifications for any rerouted approval requests:

- Email notifications enabled in the Timesheets approval settings section of Configure Time.

  For more information, go to [Configure Time.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_time)

- Email notifications on each user preferences page.

  For more information, go to [Email notifications and approvals.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Email_notification_preferences)

## Permissions and other requirements

| Subscription          | A subscription to at least one of the following Sage Intacct applications is required: Time and Expenses Project Costing (includes Time application) Project Costing and Billing Grant Costing and Billing Sage Intacct Construction |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                           |
| User type             | Business user with admin privileges                                                                                                                                                                                                  |
| Permissions           | Administration Application subscriptions: List, View, Configure                                                                                                                                                                      |
| Configuration         | Turn on Sage Intelligent Time Set up approvals for timesheets                                                                                                                                                                        |
