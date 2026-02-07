---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-post-perm-requirements.htm
release: 2025-R2
extracted: 2026-02-07
title: "Post permissions required when importing posted adjustments"
---

# Post permissions required when importing posted adjustments

[Import Accounts Payable adjustments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AP_Adjustments)

Accounts Payable

We've updated the CSV import for AP adjustments to enforce the permissions required for importing posted transactions. This change provides greater security and control over your financial data.

By requiring specific post permissions, we ensure that only authorized users can import posted transactions, protecting your financial data from unauthorized changes. This update aligns with permissions required for CSV import requirements in other areas of Sage Intacct, improving consistency. Users without post permissions can still import transactions as drafts, provided they have Add permissions.

## Details

-   Users importing posted AP adjustments must have Adjustments: Add, Post permission.
-   Users without Post permissions can import adjustments as drafts, as long as they have Add permissions.

## Permissions and other requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts Payable                                                                                                                                                                                                               Adjustments: Add, Post |
