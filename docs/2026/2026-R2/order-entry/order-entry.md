---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-order-entry.htm
release: 2026-R2
extracted: 2026-04-29
title: "Customize sender and reply‑to email addresses for Order Entry communications"
---

# Customize sender and reply‑to email addresses for Order Entry communications

Improve security and consistency by preventing the use of unauthorized or incorrect sender addresses and supporting internal email authentication and sender‑identity policies.

## Key benefits

- **Improved email security**: Uses approved, allow‑listed sender and reply‑to addresses to support authentication and sender‑identity policies.

- **Consistent customer-facing communication**: Ensures Order Entry emails are sent from validated, standardized addresses across users and documents.

- **Reduced configuration errors**: Replaces free‑text entry with picklists, preventing typos and unauthorized or incorrect email addresses.

## What's changed

Sales email workflows now use picklists for "Sender" and "Reply to" fields that are populated only with allow‑listed email addresses. Your admin can [set up the allowed email list](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list).

By replacing free‑text entry with selections from the approved allow list, this update ensures that only authorized, validated email addresses can be used in your customer‑facing communications.

## Permissions and other requirements

| Subscription          | Order Entry Administration          |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Company info: View, Edit            |
