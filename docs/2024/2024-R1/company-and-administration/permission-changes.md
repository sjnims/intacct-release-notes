---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Company_and_Administration/2024-R1-permission-changes.htm
release: 2024-R1
extracted: 2026-02-07
title: "Permission changes"
---

# Permission changes

[Assign user permissions for new features (4:05)](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Company_and_Administration/2024-R1-permission-changes.htm#)

Company and Administration

You can find more information about the permissions needed for a feature in its associated release note in the Requirements section.

## Updated

We've updated aspects of the following permissions.

### Projects and Time & Expenses

These permissions are only for customers that have the embedded version of Sage Intelligent Time enabled. Intelligent Time is available to Early Adopters. [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager) to enable Sage Intelligent Time.

- **Time sources:** View
- **Time preferences:** View

  These permissions were previously under My timesheets and Staff timesheets permission options, respectively. We moved them outside of those categories so that users can access the Time sources and Time preferences permissions easily.

![Time sources and Time preferences permissions displayed in the Time & Expenses application.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-permission-changes.png)

## Added

We've also added permissions to support new features. All new permissions are automatically off by default, unless otherwise noted.

### Contracts

- **Contract**: Cancel

  Allows the user to [terminate contracts or contract lines.](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Contracts/2024-R1-cancel-permissions.htm)

- **Contract**: Uncancel

  Allows the user to [uncancel contract lines.](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Contracts/2024-R1-cancel-permissions.htm) The uncancel process sets the contract line back to "In progress".

### Interactive Custom Report Writer (ICRW)

- **ICRW Primary Consumer:** Enable

  ICRW Primary Consumer role allows ICRW users to [view and run reports based on reporting areas](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Reporting-Advanced/2024-R1-primary-consumer-role.htm) that are typically outside of their range of permissions. The following conditions apply:
  - ICRW Primary Consumer feature must be enabled for the company.
  - A user must have ICRW access.
  - Primary Consumer access must be assigned to the users.  
    Full ICRW admin privileges are required to assign Primary Consumer role access, such as a Business user with full admin privileges.
  - A user must have explicit permission for the report.

Requires Interactive Custom Report Writer and Construction subscriptions.

### Order Entry

- **Reverse conversion:** Enable

  Allows the user to [reverse conversion for non-inventory items.](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-reverse-OE-conversions.htm)

  Requires the Construction subscription.

### Time & Expenses

- **Employees:** Unmask bank details

  Allows the user to [see unmasked employee bank details](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Time_Expenses/2024-R1-unmask-emp-bank-details.htm) for bank file payments.
