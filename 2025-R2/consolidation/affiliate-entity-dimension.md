---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Consolidation/2025-R2-affiliate-entity-dimension.htm
release: 2025-R2
extracted: 2026-02-07
title: "New affiliate entity standard dimension—General availability"
---

# New affiliate entity standard dimension—General availability

[Affiliate entity standard dimension](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_affiliate_entity_dimension)

[Reclassify data with the affiliate entity dimension and consolidate](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reclassify_txns_affiliate_entity_dimension)

Consolidation

Introducing the new affiliate entity standard dimension, generally available in 2025 R2 to customers with a Consolidation subscription. With the affiliate entity dimension, Sage Intacct automatically tags automated inter-entity journal entries. You can also use the affiliate entity dimension to manually tag General Ledger journal entries.

By enabling affiliate entity dimension tagging, you enrich and enhance inter-entity activity and balance information. You'll glean greater detail when you run dimension balance, General Ledger, and financial reports, achieve more granular eliminations, and more cleanly track your inter-entity activity.

Affiliate entity tagging benefits the inter-entity reconciliation process. You can get the balance of accounts by the affiliate entity dimension value. For example, suppose that your management company entity E101 has inter-entity receivables for 15 entities. You can now use the affiliate entity dimension to report on that inter-entity activity and easily reconcile it against the inter-entity payables for all 15 entities. You can do all this using only one inter-entity receivable account and one inter-entity payable account.

Use the affiliate entity dimension to automate eliminations in your consolidations by eliminating activity between entities in the same reporting book. You can use affiliate entity in Domestic, Global, or Advanced Ownership Consolidation. Auto-eliminate across more complex direct and indirect inter-entity relationships in Advanced Ownership Consolidation.

Simplify your inter-entity mapping by leveraging the affiliate entity dimension to identify the due to or due from amounts in an inter-entity transaction.

## Where can I use the affiliate entity dimension?

You can use the affiliate entity dimension in the following Sage Intacct subscriptions and product areas:

- General Ledger
- Budget
- Platform Services
- Consolidation (Domestic Consolidation, Global Consolidation, Advanced Ownership Consolidation)
- Reports (standard, financial, custom)
- Automated inter-entity transactions (IETs)

The affiliate entity dimension does not currently support the use of inter-entity bill back.

## What's the affiliate entity dimension?

An affiliate entity is a separate legal entity that's related to another entity, typically through common ownership or control. An affiliate entity can be a parent, direct subsidiary, or an indirect second- or third-tier subsidiary. Or, an affiliate entity can be related to other entities in any other way.

The affiliate entity dimension is a new Sage Intacct standard dimension that you can use to tag the entity affiliated with a transaction. Intacct pulls affiliate entities from the Entities list (**Company** > \***\*Setup\*\*** > **Entities**), which is the standard source of entities in your company.

The list of entities is shown here:

[![The Entities list from which the affiliate entity dimension draws affiliated entities.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-AE-entity-list_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-AE-entity-list.png)

The following is an example of a General Ledger report of an inter-entity receivable account where all entries have affiliate entity tagging.

[![A General Ledger report that lists journal entries by posting date with location and affiliate entity dimensions for each entry. The Affiliate entity column shows the value of the affiliate entity dimension for each entry.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-GL-report-AE-tagged_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-GL-report-AE-tagged.png)

As demonstrated in the report, with the affiliate entity dimension you can do the following: 

- Easily identify the affiliate entities for each transaction.
- Filter the report data by affiliate entity dimension.
- Identify all transactions tagged with a particular affiliate entity.

For example, the report shows a transaction with a 5,000 USD debit to location E101 where the tagged affiliate entity is E200.

## Track financial transactions by affiliate entity dimension

Automatically track activity by the affiliate entity dimension on all automated inter-entity entries. Intacct still uses inter-entity account mapping to determine the due to and due from accounts for inter-entity transactions. Intacct then automatically applies the affiliate entity dimension to all automatically generated inter-entity entries.

For example, consider an inter-entity loan with a source entity of E101 and target entities E102 and E103. Intacct automatically applies the affiliate entity dimension to the inter-entity entries, as follows:

| Account        | Location | Affiliate entity |
| -------------- | -------- | ---------------- |
| IET Receivable | E101     | E102             |
| IET Receivable | E101     | E103             |
| IET Payable    | E102     | E101             |
| IET Payable    | E103     | E101             |

The following is an example of a General Ledger journal entry with inter-entity entries that Intacct automatically tagged with the affiliate entity dimension:

[![An example of an auto-tagged GL journal entry showing the affiliate entity value for the inter-entity entry.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-auto-tag-GL-je2_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-auto-tag-GL-je2.png)

You can also use the affiliate entity dimension to tag manually created General Ledger entries that record inter-entity, investment, and equity transactions.

The following is an example of a General Ledger journal entry that's manually tagged with the affiliate entity dimension: 

[![General Ledger journal entries that have been manually tagged with specific affiliate entity dimension values.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-GL-report-AE-and-location_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-GL-report-AE-and-location.png)

## Report by affiliate entity dimension

You can run detailed reports by the affiliate entity dimension for all inter-entity activity. Run a dimension balance report or create a report with Financial Report Writer on a given affiliate entity dimension.

For example, the following financial report shows inter-entity activity by affiliate entity dimension for entities E100 through E300 and subsidiaries.

[![An example of an inter-entity activity report by affiliate entity.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-IET-activity-by-affiliate-entity_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-IET-activity-by-affiliate-entity.png)

- The rows represent the location dimension, which corresponds to the entities in this example.
- The columns represent the affiliate entity dimension.

The following example dimension balance report shows balances by affiliate entity for the same location group for a given month:

[![A dimension balance report showing opening, period, and closing balances by affiliate entity in the location group for a given month.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-dimension-balance-report_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-dimension-balance-report.png)

## Use the affiliate entity dimension with Consolidation

Tagging transactions with the affiliate entity dimension means you can leverage the affiliate entity dimension in your consolidations.

With the power of the affiliate entity dimension, you can do the following:

- Consolidate activity by affiliate entity dimension.
- Consolidate and eliminate activity by affiliate entity dimension.

The following consolidation example shows a tiered consolidation that uses Advanced Ownership Consolidation.

![A 3-tiered ownership structure with entity E100 at the top; entities E101, E102, and E200 at the first subsidiary level; entities E201, E202, and E300 at the second subsidiary level; and entity E301 at the third subsidiary level. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-CONS-tiered-structure.png)

Intacct eliminates the following activity:

- Activity between entities E200 and E300 on the E200 reporting book.
- The remaining activity, such as the activity between entities E101 and E300, on the E100 reporting book at the top level.

## How it works

Enable the affiliate entity dimension to make it available to all General Ledger (GL) journal entries and automated inter-entity transactions (IETs).

When auto-generating inter-entity lines for GL journal entries, Intacct does the following:

1.  Auto-creates inter-entity lines using the inter-entity account mapping for your company.
2.  Auto-tags these inter-entity lines with the affiliate entity dimension value.

You can also tag manually created journal entries by selecting the **Affiliate entity** dimension in the **Show details** dropdown. You can move this field to the entries table by customizing the entries layout.

### Set up the affiliate entity dimension

1.  Go to **Company** > **Admin** > **Subscriptions** > **Multi-Entity Management**.
2.  Select **Configure**.
3.  Select **Enable affiliate entity dimension**.
4.  Select **Save**.

After you enable the affiliate entity dimension in Multi-Entity Management, it's automatically enabled in General Ledger.

### Eliminate by the affiliate entity dimension in a Consolidation book or ownership structure

1.  Go to the list of books or ownership structures:
    - **Domestic Consolidation** > **Setup** > **Books**.
    - **Global Consolidation** > **Setup** > **Books**.
    - **Advanced Ownership Consolidation** > **Setup** > **Ownership structures**.
2.  Select **Edit** next to the book or ownership structure that you want to edit.
3.  Select **Eliminate by affiliate entity**.
    - For a book: On the **Entities to eliminate** tab, select **Eliminate by affiliate entity**.
    - For an ownership structure: On the Ownership structure page, select **Eliminate by affiliate entity**.

### Tag manually created journal entries with the affiliate entity dimension

1.  Go to **General Ledger** > **All** > **Journal entries**.
2.  Select **Edit** next to the journal entry that you want to edit.
3.  In the table of **Entries**, select an entry and then select the **Affiliate entity** table cell for that entry.
4.  Select the relevant affiliate entity for the entry.
5.  Select **Post** to save your changes.

## Permissions and other requirements

| Subscription          | Company Multi-Entity General Ledger Any of the following Consolidation subscriptions: Domestic Consolidation Global Consolidation Advanced Ownership Consolidation |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                                        |
| User type             | Business                                                                                                                                                           |
| Permissions           | Company Application Subscriptions: List, View, Configure                                                                                                           |
