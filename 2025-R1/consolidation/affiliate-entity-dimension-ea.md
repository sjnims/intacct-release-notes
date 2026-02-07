---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Consolidation/2025-R1-affiliate-entity-dimension-ea.htm
release: 2025-R1
extracted: 2026-02-07
title: "New affiliate entity dimension—Early adopter"
---

# New affiliate entity dimension—Early adopter

[Affiliate entity dimension](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ea_affiliate_entity_dimension)

Consolidation

Introducing the new affiliate entity standard dimension, available to early adopters in 2025 R1. Sage Intacct uses the affiliate entity dimension to automatically tag automated inter-entity journal entries. You can also use the affiliate entity dimension to manually tag General Ledger journal entries.

By enabling affiliate entity tagging, you enrich and enhance inter-entity activity and balance information. You'll glean more detailed information when you run reports such as dimension balance, General Ledger, and financial reports.

Affiliate entity tagging also benefits the inter-entity reconciliation process. You can get the balance of accounts by the affiliate entity dimension value. For example, suppose that your management company entity E101 has inter-entity receivables for 15 entities. You can now use the affiliate entity dimension to report on that inter-entity activity and easily reconcile it against the inter-entity payables for all 15 entities.

Use the affiliate entity dimension to automate eliminations in consolidations by seamlessly eliminating activity between entities in the same reporting book. You can use affiliate entity in Domestic, Global, or Advanced Ownership Consolidation. Auto-eliminate across more complex direct and indirect inter-entity relationships in Advanced Ownership Consolidation.

We're launching an Early Adopter program to release the affiliate entity dimension to select customers subscribed to Consolidation.

## What's an affiliate entity?

An affiliate entity is a separate legal entity that's related to another entity, typically through common ownership or control. An affiliate entity can be a parent, direct subsidiary, or indirect second-or third-tier subsidiary, or related to other entities in any other way.

## Track financial transactions by affiliate entity

Automatically track activity by affiliate entity on all automated inter-entity entries. The affiliate entity dimension optionally coupled with a simplified entity pair mapping determines the due to and due from balances by affiliate entity.

For example, consider an inter-entity loan with a source entity of E101 and target entities E102 and E103. Intacct automatically applies the affiliate entity dimensions to the inter-entity entries, as follows:

| Account        | Location | Affiliate entity |
| -------------- | -------- | ---------------- |
| IET Receivable | E101     | E102             |
| IET Receivable | E101     | E103             |
| IET Payable    | E102     | E101             |
| IET Payable    | E103     | E101             |

You can also use the affiliate entity dimension to tag manually created General Ledger entries that record inter-entity, investment, and equity transactions.

The following are examples of automatically tagged General Ledger journal entries:

[![An example GL journal entry with auto-tagged affiliate entity.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-auto-tag-GL-je1_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-auto-tag-GL-je1.png)

[![An example of an auto-tagged GL journal entry showing the affiliate entity value for the inter-entity entry.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-auto-tag-GL-je2_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-auto-tag-GL-je2.png)

The following is an example of a General Ledger journal entry that has been manually tagged with the affiliate entity dimension: 

[![A General Ledger journal entries that have been manually tagged with specific affiliate entity dimension values.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-manual-tag-GL-je_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-manual-tag-GL-je.png)

## Report on affiliate entity activity

You can run detailed reports by affiliate entity for all inter-entity or affiliate account activity. Run a dimension balance report or create a custom report with Financial Report Writer on a given affiliate entity.

For example, the following financial report shows affiliate entity activity for a reporting group that includes entities E100 through E300 and subsidiaries.

- The rows represent the location dimension, which corresponds to the entities in this example.
- The columns represent the affiliate entity dimension.

[![An example of an inter-entity activity report by affiliate entity.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-IET-activity-by-affiliate-entity_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-IET-activity-by-affiliate-entity.png)

The following example dimension balance report shows balances by affiliate entity for the same ownership structure for a given month:

![A dimension balances report showing opening, period, and closing balances by affiliate entity in the ownership structure for a given month.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-dimension-balance-report.png)

## Eliminate activity during consolidation

You can use the affiliate entity dimension to eliminate activity among entities during consolidation.

Using the affiliate entity dimension in the following example, you can define elimination rules that automatically create elimination entries on the reporting book.

The following consolidation example shows a tiered consolidation that uses Advanced Ownership Consolidation.

Intacct eliminates:

- Activity between entities E200 and E300 on the E200 reporting book.
- The remaining activity, such as that between entities E101 and E300, on the E100 reporting book at the top level.

![A 3-tiered ownership structure with entity E100 at the top; entities E101, E102, and E200 at the first subsidiary level; entities E201, E202, and E300 at the second subsidiary level; and entity E301 at the third subsidiary level. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-CONS-tiered-structure.png)

## How it works

Enable the affiliate entity dimension to make it available to all General Ledger journal entries and automated inter-entity transactions (IETs).

Intacct uses the affiliate entity dimension to auto-populate IET lines using the inter-entity account mappings defined in your company. Intacct automatically tags the inter-entity line with the relevant affiliate entity.

You can also tag manually created journal entries by selecting the **Affiliate entity** dimension in the **Show details** drop-down. You can move this field to the entries table by customizing the entries layout.

## Setup

After you enroll in the Early Adopter program, you can enable the affiliate entity dimension.

1.  Go to **Company > Admin > Subscriptions > Multi-Entity Management**.
2.  Select **Configure**.
3.  Select **Enable affiliate entity dimension**.
4.  Select **Save**.
5.  Enable the affiliate dimension in a Consolidation book or ownership structure:
    1.  Go to the list of books or ownership structures:
        - **Domestic Consolidation >** **Setup** **> Books**.
        - **Global Consolidation >** **Setup** **> Books**.
        - **Advanced Ownership Consolidation >** **Setup** **> Ownership structures**.
    2.  Select **Edit** next to the book or ownership structure you want to edit.
    3.  Select **Eliminate by affiliate entity**.
        - For a book: On the **Entities to eliminate** tab, select **Eliminate by affiliate entity**.
        - For an ownership structure: On the Ownership structure page, select **Eliminate by affiliate entity**
6.  Tag a manually generated General Ledger entry with an affiliate entity:
    1.  Go to **General Ledger > **All** > Journal entries**.
    2.  Select **Edit** next to the journal entry you want to edit.
    3.  In the table of **Entries**, select an entry and click in the **Affiliate entity** column for that entry.
    4.  Select the relevant affiliate entity for the entry.
    5.  Select **Post** to save your changes.

After you enable the affiliate entity dimension in Multi-Entity Management, it's automatically enabled in General Ledger.

## What's the Early adopter program?

The Early adopter program provides the new affiliate entity dimension to users of Sage Intacct with Consolidation. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to respond periodically to surveys and provide input.

If you want to be considered for the Early adopter program, [sign up](https://forms.office.com/r/Qiyqvt73hD) today.

## Permissions and other requirements

| Subscription          | Company Multi-Entity General Ledger Any of the following Consolidation subscriptions: Domestic Consolidation Global Consolidation Advanced Ownership Consolidation |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                         |
| User type             | Business                                                                                                                                                           |
| Permissions           | Company Application Subscriptions: List, View, Configure                                                                                                           |
