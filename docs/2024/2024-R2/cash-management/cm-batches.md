---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-cm-batches.htm
release: 2024-R2
extracted: 2026-02-07
title: "Get granular visibility into Cash Management batches"
---

# Get granular visibility into Cash Management batches

Previously, all Cash Management transactions appeared in one batch summary journal entry. Going forward, batches will be created by transactions type for increased granularity and visibility.

For example, all credit card transactions for a day or month will post in one batch, while all funds transfers for the same day or month will post in another batch.

| Old batch description                     | New batch description                    |
| ----------------------------------------- | ---------------------------------------- |
| Cash Management Transactions              | Cash Management Credit card transactions |
| Cash Management Credit card fees          |
| Cash Management Funds transfers           |
| Cash Management Bank interest and charges |
| Cash Management Other receipts            |
| Cash Management Deposits                  |

## Requirements

| Subscription          | Cash Management General Ledger                        |
| --------------------- | ----------------------------------------------------- |
| Regional availability | All regions                                           |
| User type             | Business user with admin privileges                   |
| Permissions           | General Ledger Journal entries: List, View, Add, Edit |
