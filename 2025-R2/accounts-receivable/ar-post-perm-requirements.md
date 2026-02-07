---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Receivable/2025-R2-ar-post-perm-requirements.htm
release: 2025-R2
extracted: 2026-02-07
title: "Post permissions required when importing posted transactions"
---

# Post permissions required when importing posted transactions

[Import invoices](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AR_Invoices)

[Import AR adjustments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AR_Adjustments)

Accounts Receivable

We've updated the CSV import for AR invoices and AR adjustments to enforce the permissions required for importing posted transactions. This change provides greater security and control over your financial data.

By requiring specific post permissions, we ensure that only authorized users can import posted transactions, protecting your financial data from unauthorized changes. This update aligns with permissions required for CSV import requirements in other areas of Sage Intacct, improving consistency. Users without post permissions can still import transactions as drafts, provided they have Add permissions.

## Details

-   Users importing posted AR invoices must have Invoices: Add, Post permissions.
-   Users importing posted AR adjustments must have Adjustments: Add, Post permission.
-   Users without Post permissions can import invoices and adjustments as drafts, as long as they have Add permissions.

## Permissions and other requirements

| Subscription | Accounts Receivable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts Receivable                                                                                                                                                                                                               Invoices: Add, Post                                                                                                                                                                                                                   Adjustments: Add, Post |
