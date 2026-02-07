---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Time/2025-R4-enhanced-validations-for-timesheets.htm
release: 2025-R4
extracted: 2026-02-07
title: "Enhanced validation for timesheets—Sage Intelligent Time"
---

# Enhanced validation for timesheets—Sage Intelligent Time

[Create a timesheet—Sage Intelligent Time](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_a_timesheet)

[Create a staff timesheet—Sage Intelligent Time](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=IT_create_staff_timesheet)

time

We enhanced the validation for timesheets while they're in the _draft_ status to ensure all components of a timesheet are accurate before submission.

Previously, to validate the data in a timesheet, you would have to submit the timesheet to Sage Intacct first. Now, timesheets using Sage Intelligent Time (SIT) are validated automatically, even with a _draft_ status.

## Key benefits

- Validation across all relevant dimensions: entities, projects, departments, locations, and user-specific access restrictions
- Ensures that employees interact with data that they are permitted to access
- Enforces entity restrictions efficiently
- Prevents invalid or unauthorized time entries
- Maintains data integrity throughout the process

## Good to know

Sage Intelligent Time validates timesheets by completing the following:

- Ensures all dimensions selected in a timesheet are valid and accessible to an employee based on their permissions
- Restricts access to unauthorized dimensions
- Provides clear error messages with guidance to resolve validation issues

## Permissions and other requirements

| Subscription          | A subscription to at least one of the following Sage Intacct applications is required: Time and Expenses Project Costing (includes Time application) Project Costing and Billing Grant Costing and Billing Sage Intacct Construction |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Australia Canada United States United Kingdom South Africa                                                                                                                                                                           |
| User type             | Business Project Manager Employee                                                                                                                                                                                                    |
| Permissions           | Time My timesheets: List, View, Add, Edit, Delete Staff timesheets: List, View, Add, Edit, Delete                                                                                                                                    |
| Configuration         | Turn on Sage Intelligent Time                                                                                                                                                                                                        |
