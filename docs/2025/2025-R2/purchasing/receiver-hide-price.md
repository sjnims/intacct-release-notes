---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Purchasing/2025-R2-receiver-hide-price.htm
release: 2025-R2
extracted: 2026-02-07
title: "Hide the price for certain transactions"
---

# Hide the price for certain transactions

[Transactions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ALIAS_HERE)

[Transaction definitions—Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ALIAS_HERE)

Purchasing

You can now hide the price column on Purchasing transactions for instances where the price is not relevant to the document type. For example, with receiver documents, your receiving department might only want to confirm the items they received and how many of each. This is especially useful when you receive high-value items and prefer that the item price is not visible.

## Details

When you hide the price for a transaction, the price column is hidden in both the transaction list page and each transaction record.

The price is hidden in the following places for each transaction:

- The transaction header values, including the transaction total and subtotal.
- The transaction line-item totals and subtotals in the line entries table.

This is especially useful for the following scenarios:

- Your receiving department does not care about the item price, they just want to record that they've received ordered items and how many.
- You're receiving high-value items, such as computers, and prefer that warehouse employees not see the price of items received.

## How it works

1. Go to **Purchasing** > **Setup** > **Transaction definitions**.
2. Edit the transaction definition where you want to hide the item price.
3. In the Accounting section, select **Hide price**.
4. Select **Save**.

## Permissions and other requirements

| Subscription          | Purchasing                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                      |
| User type             | Business                                                                                                                         |
| Permissions           | Purchasing transactions: List, View Transaction definitions: List, View, Edit                                                    |
| Restrictions          | If the option to override the suggested price is selected in the transaction definition, the hide price option is not supported. |
