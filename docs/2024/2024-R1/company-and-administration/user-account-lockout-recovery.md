---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Company_and_Administration/2024-R1-user-account-lockout-recovery.htm
release: 2024-R1
extracted: 2026-02-07
title: "Self-service account recovery"
---

# Self-service account recovery

If you get locked out, Sage Intacct has streamlined how you can regain account access and get back to business quickly. With our self-service recovery process, you can securely reclaim your account in minutes, reducing downtime and maintaining peak productivity.

## Details

The self-service recovery process allows you to:

**Initiate recovery directly:** No need to reach out to support. Simply navigate to the Sage Intacct login page and select **Forgot you password?**. Intacct then walks you through how to reset your password.

**Secure notifications:** Account alerts and recovery options are sent directly to your registered user **account email address**. [Learn more about the user account email address.](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Company_and_Administration/2024-R1-email-address-for-user-accounts.htm)

The recovery process also provides enhanced security. You answer your pre-set security questions to verify your identity and complete your account recovery.

## How it works

For users:

These instructions assume you have answered the Password security question on your **My preferences** page.

Your administrator cannot view or change your security question and answer.

1. If you forget your password, or become locked out from Intacct, go to the sign in page of Intacct and select **Forgot your password?**.

   ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-user-account-lockout-recovery-forgot-password.png)

2. Follow the directions for verifying your account and resetting your password.

For admins:

Review your company security policies, and then set the maximum number of times the incorrect information can be entered in a password reset attempt.

1. Go to **Company > **Setup** > Configuration > Company > Security tab**, then select **Edit**.
2. In Login settings, in the Password section, set the **Maximum number of verification attempts for a password reset**.

   ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-user-account-lockout-recovery.png)

   This is the maximum number of times the incorrect information can be entered in a password reset attempt. When the limit is reached, Intacct locks the account for 24 hours.

3. **Save** your changes.

## Requirements

All users have access to the sign in page of Intacct and their user account email address in **My preferences**.

The following requirements are for setting the **Maximum number of verification attempts for a password reset**.

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Permissions           | Company info: View and Edit         |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
