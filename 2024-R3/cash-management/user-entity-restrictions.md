---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Cash_Management/2024-R3-user-entity-restrictions.htm
release: 2024-R3
extracted: 2026-02-07
title: "Restrict access to reconciliation information by enforcing user restrictions"
---

# Restrict access to reconciliation information by enforcing user restrictions

Top level users can now be restricted to viewing bank reconciliation information for an account based on their entity location restrictions. For example, if a top level user is restricted to Entity 001 and Entity 002, they will not be able to view reconciliation information for any bank accounts that have a location of Entity 003.

Configure Cash Management to restrict a top level user from viewing the following information for an entity-restricted bank account:

-   Reconciliation history report.
    
-   Reconciliation information such as statement beginning balance.
    

## How it works

1.  Go to **Cash Management > Setup > Configuration**.
    
2.  Select **Enable user entity restrictions for bank accounts**.
    
3.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Administration                                                                 Cash Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Administration: Application subscriptions: List, View, and Configure |
| Configuration | Configure Cash Management to Enable user entity restrictions for bank accounts. |
