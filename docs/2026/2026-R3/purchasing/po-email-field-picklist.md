---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Purchasing/2026-R3-po-email-field-picklist.htm
release: 2026-R3
extracted: 2026-07-27
title: "Customize sender and reply‑to email addresses for Purchasing communications"
---

# Customize sender and reply‑to email addresses for Purchasing communications

Improve security and consistency by preventing the use of unauthorized or incorrect sender email addresses and supporting internal email authentication and sender‑identity policies.

## Key benefits

- **Improved email security**: Uses approved, allow‑listed sender and reply‑to addresses to support authentication and sender‑identity policies.

- **Consistent customer-facing communication**: Ensures that Purchasing emails are sent from validated, standardized addresses across users and documents.

- **Reduced configuration errors**: Replaces free‑text entry with dropdowns, preventing typos and unauthorized or incorrect email addresses.

## What's changed

When you email a purchasing document, the "Sender" and "Reply to" fields are now dropdown lists that are populated only with allow‑listed sender email addresses. Your admin can set up the [Allowed email address list](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list).

By replacing free‑text entry with selections from the approved allow list, this update ensures that only authorized, validated email addresses can be used in your vendor‑facing communications.

## Permissions and other requirements

| Subscription          | Purchasing Administration                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                           |
| User type             | Business Employee Project Manager Warehouse                                                                           |
| Permissions           | Purchasing Print or email documents: Run                                                                              |
| Restrictions          | Employee users can only email transactions that were created using a transaction definition template type of "Quote". |
