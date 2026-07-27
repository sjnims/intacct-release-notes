---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Receivable/2026-R3-ar-email-field-picklist.htm
release: 2026-R3
extracted: 2026-07-27
title: "Customize sender and reply‑to email addresses for Accounts Receivable invoices and statements"
---

# Customize sender and reply‑to email addresses for Accounts Receivable invoices and statements

Improve security and consistency by preventing the use of unauthorized or incorrect sender email addresses and supporting internal email authentication and sender‑identity policies.

## Key benefits

- **Improved email security**: Uses approved, allow‑listed sender and reply‑to addresses to support authentication and sender‑identity policies.

- **Consistent customer-facing communication**: Ensures that Accounts Receivable invoices and statements are sent from validated, standardized addresses across users and documents.

- **Reduced configuration errors**: Replaces free‑text entry with dropdowns, preventing typos and unauthorized or incorrect email addresses.

## What's changed

When you email an invoice or statement, the "Sender" and "Reply to" fields are now dropdown lists that are populated only with allow‑listed sender email addresses. Your admin can set up the [Allowed email address list](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list).

By replacing free‑text entry with selections from the approved allow list, this update ensures that only authorized, validated email addresses can be used in your customer‑facing communications.

## Permissions and other requirements

| Subscription          | Accounts Receivable Administration                                              |
| --------------------- | ------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                     |
| User type             | Business user with admin privileges Business                                    |
| Permissions           | Accounts Receivable Print or email invoices: Run Print or email statements: Run |
