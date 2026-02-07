---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-user-restrictions-enforced-on-payments.htm
release: 2024-R3
extracted: 2026-02-07
title: "User restrictions enforced for payment approvals"
---

# User restrictions enforced for payment approvals

[Restricted users in Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Restricted_users_in_AP)

[Approve or decline a payment](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Approving_Bill_Payments)

Accounts Payable

Restricted users can no longer approve or decline payments that contain line items coded to departments and locations for which they do not have access. They can approve or decline a payment only when all line items for a payment are for departments or locations to which they have access.

The new behavior matches existing behavior for bill approvals, where restricted users can only approve or decline a bill when all line items are for their restricted entities.

## Permissions and other requirements

| Subscription          | Accounts Payable                                         |
| --------------------- | -------------------------------------------------------- |
| Regional availability | All regions                                              |
| User type             | Business, Employee, Project Manager, and Warehouse       |
| Permissions           | Approve payments: List, plus the assigned approval level |
