---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Company_and_Administration/2026-R1-new-client-user-type.htm
release: 2026-R1
extracted: 2026-02-07
title: "New Client user type—Consoles"
---

# New Client user type—Consoles

[User type descriptions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=User_types_and_permissions)

CONSOLES

This idea came from you

Designed for Accounting console instances, the Client user type provides more access than the Payment approver user type, enabling customers to perform tasks beyond approving payments.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-con-new-client-user.png)

## Details

The new Client user type is a limited, non-admin user with fewer restrictions than the Payment Approver user type. Permissions give transactional access for AP, AR, Order Entry, Cash Management, and Time & Expenses.

### Client vs Payment Approver

The Client user type is designed for everyday client work and allows for full transactional processing. The Payment Approver user type is approval centered and has mostly view-only access. Both user types have limited permissions and no admin privileges.

### Client user type capabilities

| Company             | List and View access No access to Checklists, Assignments, Email templates, Transaction Allocations, Attachments, Attachment Folders, Reporting Periods, or Cover Letters. No access to Add or Edit Entities or Dimensions No access to import company data, but access to import transactions No ability to change modular configuration settings |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cash Management     | List, View, Add, and Edit all Cash Management transaction types Run all subledger reports Run, List, View, Export, Confirm, Void ACH and bank files No access to open or close subledger periods No access to reconcile, add or edit bank and credit cards                                                                                         |
| GL                  | List and View access Run Financial and GL subledger Reports No access to add or edit Reports or Dashboards No access to add or edit journal entries (including statistical, adjusting, user-defined, GAAP, or tax journal entries) No access to approve Journal Entries No access to budgets or opening or closing the books                       |
| AP/AR & Order Entry | List, View, Add, Edit, and Approve all AP, Purchasing, AR, and OE transactions Add and edit Vendors and Customers No access to edit Items or Price Lists No access to edit transaction definitions or approvals                                                                                                                                    |
| Time & Expenses     | List, View, Add, Edit, and Approve all time and expense transactions Run all subledger reports Run, List, View, Export, Confirm, Void bank files Add and edit Employees                                                                                                                                                                            |
| Advanced Modules    | List and View access No transactional use                                                                                                                                                                                                                                                                                                          |
| Platform Services   | No Access                                                                                                                                                                                                                                                                                                                                          |

## How it works

The Client user type is available for Accountant console instances. If your Management console is an instance of an Accountant console, you'll also see this new user type.

To assign this user type, follow the instructions below:

1. Go to **Company** > **Setup** > **Users** > **Add** or **Edit**.
2. Select **Client** for the User type.
3. Select **Save**.

For more information, go to [Add a new user](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_a_user) or [Edit user information](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_user_information).

## Permissions and other requirements

| Subscription          | Consoles                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User type             | Client                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Permissions           | The new user type has the following permissions and access. Company List, View Cash Management List, View, Add, Edit Run all subledger reports Run, export, confirm or void ACH and bank files General Ledger List, View Run financial and GL subledger reports AP/AR & Order Entry List, View, Add, Edit Approve all AP, Purchasing & OE transactions Add and Edit Vendors and Customers Time & Expenses List, View, Add, Edit Add and Edit employees Advanced Modules List, View |
| Restrictions          | Available for instances under Accountant console type. Not available for external users.                                                                                                                                                                                                                                                                                                                                                                                           |
