---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Company_and_Administration/2026-R4-email-sender-list.htm
release: 2026-R4
extracted: 2026-11-13
title: "Email sender allow list enforcement"
---

# Email sender allow list enforcement

[Manage allowed email addresses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list)

Company & administration

Sage Intacct will now enforce the **Allowed sender email addresses** list. When enforcement begins, only email addresses on your company's allowed list can be used as sender or reply-to addresses. This change helps protect your organization from email spoofing by ensuring that only approved email addresses can be used as sender or reply-to addresses.

To help you prepare, review and update your allowed sender email addresses list now to ensure your email processes continue to work as expected when enforcement is enabled.

**Enforcement of the Allowed sender email addresses list will begin the week of November 9, 2026.**

## Key benefits

- Improved email security

- Trusted sender address management

- Greater visibility into approved email addresses

- Proactive preparation for upcoming enforcement

## Action required

Before enforcement begins, verify that your allowed sender email addresses list is complete and accurate.

Your list has been automatically populated with email addresses used by your organization during the past three months. Review the list carefully to confirm it includes all addresses needed for your business processes, integrations, and email communications.

1.  Go to **Company > Setup > Company > Security**.

2.  Review the addresses in the **Allowed sender email addresses** section.

3.  Add any sender or reply-to addresses your organization uses that are missing.

4.  Remove addresses that are no longer used.

## Good to know

When enforcement starts, sender and reply-to fields will only accept email addresses on your allowed list. Any emails not on the list will be blocked.

Email delivery failures will appear in **Company > Admin > Email delivery logs**.

Enforcement will apply anywhere sender or reply-to email addresses can be configured, including:

- email templates

- invoices

- statements

- dunning notices

- purchase orders

- sales orders

## Permissions and other requirements

| Subscription          | Administration Company      |
| --------------------- | --------------------------- |
| Regional availability | All regions                 |
| User type             | Business                    |
| Permissions           | Company info: View and Edit |
