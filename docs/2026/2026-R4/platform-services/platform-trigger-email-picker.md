---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Platform_Services/2026-R4-platform-trigger-email-picker.htm
release: 2026-R4
extracted: 2026-11-13
title: "Warnings for unapproved email addresses in trigger configuration and logs"
---

# Warnings for unapproved email addresses in trigger configuration and logs

[Set trigger type properties](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set-trigger-type-properties)

Platform services

Improve security and consistency by knowing which emails are not on your company's allowed list. A warning about the use of an email that's not authorized appears if you try to include it in your **Send email** trigger type.

## Key benefits

- **Improved email security**: Uses approved, allow‑listed sender and reply‑to addresses to support authentication and sender‑identity policies.

- **Consistent customer-facing communication**: Helps to ensure that your triggers contain the correct and intended email addresses.

- **Reduced configuration errors**: Reminds you to add emails to the allow list or remove emails that are not in it. Triggers that contain emails not on the allow list continue to work for now.

## What's changed

Now you can immediately see whether an email that you use in a Platform email trigger type is in your company's allowed list. When you create a trigger using the **Send email** trigger type, a warning displays if you use an email that's not on the [Allowed email address list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list) . Previously you could add an email that was not on the allowed list without a warning appearing.

![Trigger type properties to create an email trigger, which contains a warning about unapproved email.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-trigger-email_list_error.png)

You can create a trigger using the email trigger type that does not contain an allowed email. If you do, the **Trigger log** indicates that the trigger uses an email not on the allowed list.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
