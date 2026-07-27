---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Company_and_Administration/2026-R3-email-verification.htm
release: 2026-R3
extracted: 2026-07-27
title: "Email verification for user accounts"
---

# Email verification for user accounts

Keep Sage Intacct user accounts and email addresses secure and up-to-date. Intacct now verifies new or updated email addresses and periodically asks users to confirm that their email address is still valid.

## Key benefits

- **Confirm email ownership:** Helps ensure email addresses belong to the correct user.

- **Protect account changes:** Reduces the risk of unauthorized email updates.

- **Maintain reliable communication:** Helps ensure users receive notifications, alerts, and password reset emails.

- **Work without interruption:** Verification does not affect sign-in, single sign-on (SSO), or multi-factor authentication (MFA).

## How it works

Intacct uses email verification to confirm that email addresses are accurate and belong to the intended user. Whether an email address is being updated or periodically re-verified, users can continue working normally throughout the process.

### Email changes

When a user or admin updates an email address, Intacct marks the new address as unverified and sends a verification email containing a secure link. Until the new email address is verified, the current email address remains active. This helps avoid interruptions to account access and email communications.

After the user confirms the new email address, it automatically becomes the primary email address for the account. If the verification link expires, the current email address remains in use.

### Ongoing re-verification

Users must verify a new email address before it becomes active. To help keep account information accurate, users are also asked to reverify their email address every 12 months. As the verification deadline approaches, reminder messages appear in Intacct, but users can continue working normally while completing the verification process.

## What to expect

- If a verification link expires, you can request a new one.

- Reminder messages and emails are limited to help reduce notification fatigue.

- Verification does not block sign-in or interrupt SSO or MFA.

- Administrators can view verification status and history.

## Permissions and other requirements

| Subscription          | Company                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                     |
| User type             | To configure this feature: Business user with admin privileges To use this feature: All user types.             |
| Permissions           | You will see the email verification controls in My preferences. All users have access to their own preferences. |
| Restrictions          | Only available in production companies                                                                          |
