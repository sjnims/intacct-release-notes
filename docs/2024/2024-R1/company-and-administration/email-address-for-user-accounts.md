---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Company_and_Administration/2024-R1-email-address-for-user-accounts.htm
release: 2024-R1
extracted: 2026-02-07
title: "New email address for user accounts"
---

# New email address for user accounts

A new email address has been created for all user accounts in Sage Intacct to improve security. This email address provides a dedicated contact point for your account and system questions.

Company admins can update the new account email address directly. Individual users can update their email addresses on the My Preferences page.

## Details

Previously, Intacct only had a primary email address that was shared between a contact record and a user's account. Changes made to the contact record would automatically update the user's account information.

The new account email address has been added to enhance security by being only available to two designated users: you, and your company admins. This limited availability ensures greater privacy, and protection from unauthorized access.

The new account email address helps Intacct more efficiently communicate with users who are having login-related issues. The account email address also ensures that users have a reliable means of receiving vital account information without the risk of unauthorized changes.

The user account email address does not have to match the primary email address. The emails can be the same, or different.

The user account email is specifically used for password resets.

### User information page updates

We've also updated the User information page. The update to the User information page makes it easier to enter and manage user account details.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-user-account-email-user-page_600x473.png)

To avoid creating duplicate contact records, creating a new user does not automatically create a contact record for that user.  
If you're creating a new user who is also an employee, customer, or vendor, add them to the Customers, Vendors, or Employees list first, then add them as a user.

## How it works

### For users

You can update your account email address from the My preferences page. All users have access to their My preferences page.

1. Select your login name at the top of any page and select **My preferences**.
2. In the Security preferences section, select **Change account email address**.

   ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-user-account-my-preferences.png)

3. Enter a new account email address and confirm it.  
   ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-user-account-email-change-email.png)
4. **Save** your changes.

### For admins

You can update any user's account email address on the User information page.

1. Go to **Company > **Admin\***\* > **Users, roles, and groups** and select**Users\*\*.
2. Find the user and select **Edit**.
3. On the User information tab, update the **Account email address** to the user's preferred email.
4. **Save** your changes.

## Requirements

All users have access to their My preferences page. To update the User information page, you need the following:

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Users: List, View, and Edit         |
