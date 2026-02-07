---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Cash_Management/2025-R3-cm-funds-transfer-curr-enhancements.htm
release: 2025-R3
extracted: 2026-02-07
title: "Funds transfers at entity level now require at least one bank account from that entity"
---

# Funds transfers at entity level now require at least one bank account from that entity

[Record a funds transfer between entities](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ME_funds-transfers)

Cash Management

When you add a funds transfer at the entity level, Intacct now checks that at least one of the accounts is owned by the entity. If neither account belongs to the entity, Intacct displays a message to inform you and does not post the transaction.

## How it works

1.  At the entity level, go to **Cash Management** > **All** and select Add (circle) next to **Funds transfers**.
2.  Select the two cash accounts for the transfer:
    
    -   **From account:** The source account.
    -   **To account:** The receiving account.
    
    At least one of the selected accounts must belong to the entity.
    
    After you select the two accounts, the balance and currency for each account appear.
    
3.  Complete the rest of the transfer details.
    
4.  Select **Save**.
    
    If neither account is at entity level, an error appears and the transfer is not posted.
    

## Permissions and other requirements

| Subscription | Cash Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Cash Management                                                                                                                                                                                                               Funds transfers: Add, View |
| Configuration | Configure Cash Management to allow creating, editing, and deleting foreign currency transactions. |
