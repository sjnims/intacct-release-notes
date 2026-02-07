---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/General_Ledger/2025-R3-view-top-level-je-txns-from-entity.htm
release: 2025-R3
extracted: 2026-02-07
title: "View top-level journal entries at the entity level"
---

# View top-level journal entries at the entity level

[Journal Entries list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Viewing_and_Managing_Journal_Transactions)

[Filter a list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Filter_a_list)

[Filter enhanced lists](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Advanced_filters-ng)

general ledger

To accelerate the load time for transactions on the Journal Transactions list page, we've added additional filtering with an **Include top-level transactions** checkbox. You'll see this checkbox only when working at the entity level.

The checkbox is cleared by default, so the top-level transactions are initially filtered out of the list at the entity level.

![Journal transactions list with Include top-level transactions checkbox highlighted.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-gl-top-level-txns.png)

The Include top-level transactions checkbox was not added to the enhanced version of the list page. The enhanced list has a different filtering method, and the top-level transactions are automatically included.

## How it works

If you're not using the enhanced version of the list, follow these steps to view top-level transactions when working at the entity level.

1. Go to **General Ledger** > **All** > **Journal entries**.
2. Find the journal in the list.
3. Select **View transactions**.
4. Select **Include top-level transactions**.

## Permissions and other requirements

| Subscription          | General Ledger                                                     |
| --------------------- | ------------------------------------------------------------------ |
| Regional availability | All regions                                                        |
| User type             | Business Employee                                                  |
| Permissions           | General Ledger Journal entries: List                               |
| Restrictions          | The checkbox is not available on the enhanced version of the list. |
