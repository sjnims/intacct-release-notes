---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Company_and_Administration/2026-R1-new-client-user-type.htm
release: 2026-R1
extracted: 2026-11-13
title: "New Client user type for Accountant consoles"
---

# New Client user type for Accountant consoles

[About Client user type](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_client_user_type)

[User type descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=User_types_and_permissions)

[Considerations when adding new users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Considerations_when_adding_new_users)

[Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager)

CONSOLES

Designed for Accounting console instances, the Client user type grants broader access than the Payment approver user type, enabling customers to perform tasks beyond approving payments.

Client users count toward your Business User licenses and may affect your subscription. Check your user counts to avoid unexpected charges.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-consoles-new-client-user-ea.png)

## Key benefits

- **Supports real client workflows**: Give users access designed for practical, day‑to‑day operational activity rather than limiting them to approval‑only actions.

- **Expanded approval functionality**: Enable users transactional access to AP, AR, Order Entry, Cash Management, and Time and Expenses.

### Client vs Payment Approver

The Client user type is designed for everyday client work and allows for full transactional processing. The Payment Approver user type is approval centered and has mostly view-only access. Both user types have limited permissions with no admin privileges.

For more information, go to [About Client user type](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_client_user_type).

## How it works

The Client user type is available for Accountant console instances. If your Management console is an instance of an Accountant console, you'll also see this new user type.

To assign this user type:

1.  Go to **Company** > **Admin** > **Users, roles, and groups** and select **Users**.

2.  Find the user that you want to assign the Client user type to.

3.  Select More actions > **Edit** at the end of the row.

4.  Select **Client** for the User type.

5.  Select **Save**.

## Permissions and other requirements

| Subscription          | Consoles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| User type             | Client                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Permissions           | The new user type has the following permissions and access. Company List, View Cash Management List, View, Add, Edit Run all subledger reports Run, export, confirm, or void ACH and bank files General Ledger List, View Run financial and GL subledger reports Accounts Payable, Accounts Receivable, Order Entry List, View, Add, Edit Approve all AP, Purchasing & Order Entry transactions Add and Edit Vendors and Customers Time and Expenses List, View, Add, Edit Add and Edit employees Advanced Modules List, View |
| Restrictions          | Available for instances under Accountant console type. Not available for external users.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
