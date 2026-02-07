---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Time_Expenses/2024-R1-unmask-emp-bank-details.htm
release: 2024-R1
extracted: 2026-02-07
title: "New permission for employee bank details"
---

# New permission for employee bank details

Companies that use bank file payments to pay employee expense reimbursements can now assign permissions as appropriate to unmask employees' bank account details. This is useful when a staff member with appropriate access authorization needs to verify an employee's bank account information in Sage Intacct.

## How it works

Assign the new **Unmask bank details** permission, which you can find under the Employee permission set, to grant users access to view an employee's bank file details. This unmasks an employee's creditor account number in the employee record, custom reports, and audit trail.

This permission is unassigned by default. It's a required permission to add and update employees that are enabled for bank file payments.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-unmask-emp-bank-details-permission.png)

Here is an example of an employee record with masked bank details versus unmasked bank details:

| Masked bank details | Unmasked bank details |
| --- | --- |

The bank account fields that appear depend on the country and bank file format for the employee.

## Requirements

| Subscription | Company |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | To assign the new permission to users:                                                                                                                                      Users: List, View, and Edit                                                                                                                                              Roles: List, View, and Edit                                                                                                                                                                                                       The Company permission that you need depends on whether your company uses role-based or user-based permissions. |
| Configuration | Configured for bank file payments in the Time and Expenses application. |
| Restrictions | This permission unmasks employee bank details for bank file payments. It does not impact ACH bank details. |
