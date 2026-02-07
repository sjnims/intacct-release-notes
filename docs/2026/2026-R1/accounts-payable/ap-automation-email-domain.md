---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Payable/2026-R1-ap-automation-email-domain.htm
release: 2026-R1
extracted: 2026-02-07
title: "Your email domain for AP Automation is changing"
---

# Your email domain for AP Automation is changing

[AP Automation email domain FAQs](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=E-mail_domain_AP_automation_FAQ)

[Automate bill entry](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ap_bill_automation)

[Contact your Sage Intacct account manager](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager)

Accounts Payable

Since May 2025, we announced that an email change is coming in February 2026. Over the weekend of February 13-16, all companies are moving to this new email experience. The new email domain supports highly requested features such as auto-forwarding rules, more file formats, and additional notification capabilities when documents do not get processed.

Notify your vendors of this email address update. After you're on the new email domain, your email addresses change from @sagemail.com to @ai.sage.com. Emails sent to the previous email address will be forwarded to the new domain for a period of time.

## Key benefits

With smarter email capabilities, you'll notice the following enhancements:

- **Auto-forwarding rules**: Save time with auto-forwarding rules, so you do not have to forward each email to your automation email manually.
- **Email copy capabilities for bounce back notifications**: Get notified when automated transaction documents bounce back to the original sender. This helps you stay on top of incoming transactions and proactively communicate with vendors when documents do not get processed.
- **New file formats**:
  - Attachments that are in the email body can now be extracted for processing.
  - Transactions can now be read even when they're in the email body as text, not just when added as an attachment.
  - iPhone images in the HEIC file format are now supported.

    This format is not supported for split view, but you can download the attachment to compare transaction details.

## Action required

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-email-CC-settings-us.png "Screenshot of field settings in Configure email services popup.")

1. Go to **Accounts Payable** > **Setup** > **Configuration** and find the Bill automation settings section.
2. Select **Configure** next to Email services.
3. Select **Send to the following address**.
4. Enter the email address to which you want to send notifications when email documents bounce back.
5. Select **Save**.

Sage Intacct sends a copy of any bounce-back notifications to this email address as soon as your AP Automation email addresses end in @ai.sage.com

## Permissions and other requirements

| Subscription          | Accounts Payable AP Automation                                                  |
| --------------------- | ------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                     |
| User type             | Business                                                                        |
| Permissions           | Accounts Payable Bills: List, View, Add, Edit                                   |
| Configuration         | Contact your Account Manager or Channel Executive to start using AP Automation. |
