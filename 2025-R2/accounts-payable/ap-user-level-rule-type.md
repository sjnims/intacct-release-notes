---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-user-level-rule-type.htm
release: 2025-R2
extracted: 2026-02-07
title: "New rule type for named users in bill approvals"
---

# New rule type for named users in bill approvals

[User level approval](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_user_level_approval)

Accounts Payable

We've updated the way you add approval users to your bill approval policy to remove clutter from the Rule type list and make the approval policy easier to scan.

The Rule type column, which previously included rule types and users with bill approval permissions, now contains only rule types. To add a named user, select the new **User Level** rule type. Then, in the new User level column, select an approver from the list of users with bill approval permissions.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-user-level-approval.png)

Already have named users as part of your bill approval policy? You're all set! Sage Intacct automatically converts your named users to User Level rule types.

## How it works

1.  Go to **Accounts Payable** > **Setup** > **Configuration**.
2.  Under Bill approval settings, select **Manage** for Approval policies.
3.  On a new line, select **User level** as the Rule type.
    
    Because you selected User Level, Intacct automatically advances you to the User column.
    
4.  Select the user that you want to add as an approver.
    
    Users must have Bill approval permissions to appear in the User column.
    
5.  Select **Save** to return to the Configuration page.
6.  Select **Save**.

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Company |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Administration                                                                                                                                      Application subscriptions: List, View, Configure |
