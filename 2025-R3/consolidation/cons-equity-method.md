---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Consolidation/2025-R3-cons-equity-method.htm
release: 2025-R3
extracted: 2026-02-07
title: "Automate equity method with Advanced Ownership Consolidation—Early Adopter"
---

# Automate equity method with Advanced Ownership Consolidation—Early Adopter

[Equity consolidation method](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=EA_TOC_equity_method_ns)

CONSOLIDATION

Advanced Ownership Consolidation now supports the equity consolidation method in ownership structures. Sage Intacct equity consolidation method automatically records a subsidiary's ownership net income to the parent entity or entities based on ownership percentage.

Sage Intacct equity consolidation method does the following:

- Automates the recording of subsidiary income to a user-defined book for the parent entity or entities.
- Ensures ownership transparency by recording and tracking changes by period.
- Supports single subsidiary rollup to multiple parents with multiple rollup levels.

## Key benefits

Equity consolidation method provides the following key benefits:

- Ownership structures that reflect a more comprehensive view of percentage ownership of entities, enabling the recording and tracking of changes by accounting period.
- Subsidiary entities that roll up to multiple parent entities, up to 100% ownership, with inclusion in multiple rollup levels.
- Leverages the new affiliate entity dimension to auto-tag new equity consolidation entries on parent entities, driving greater flexibility and accuracy in financial reporting.

## Example

Suppose that an ownership structure has a parent entity E100 with subsidiary entities E200, E300, E400, E401.

The ownership structure in this example has the following:

- Three levels of parent and subsidiary entities.
- Different ownership percentages per subsidiary entity.
- A subsidiary entity at the lowest level that rolls up to multiple parent entities.

![An ownership structure with 3 levels and a subsidiary entity that rolls up to multiple parent entities.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-AOC-equity-method-structure.png)

The top parent entity is E100, which owns 100% of E200 and E300, and 40% of E400. E200 owns 40% of E401, E300 owns 30% of E401, and E400 owns 30% of E401.

In this example, we're looking specifically at the rollup from E401 to E100, by way of E400. Intacct records the net income of subsidiaries E401 and E400 using equity consolidation method. Examining this rollup on its own enables looking more closely at the impact of using equity consolidation method.

The equity entries roll up from E401 to E100 as shown in the following table:

| Entity | Parent entity | Percentage owned | Net income | Total net income |
| ------ | ------------- | ---------------- | ---------- | ---------------- |
| E401   | E400          | 30%              | 100,000    | 100,000          |
| E400   | E100          | 40%              | 200,000    | 230,000          |
| E100   | None          | parent entity    | 300,000    | 392,000          |

### Equity method during consolidation

![Intacct uses the equity method to post equity entries to parent entities E400 and E100. Intacct adds the equity entries to the parent entity's net income.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-AOC-equity-method-example1.png)

In this example, Intacct uses the equity method to consolidate multi-level ownership structures from the bottom up, beginning with E401:

- E401: The parent entity for E401 in this example is E400. Intacct calculates the equity entry and posts it to parent E400. This is 30% x 100,000 = 30,000. Intacct posts 30,000 as equity income to E400.
- E400: Parent entity E100 owns 40% of E400. The total net income for E400 is 230,000. This includes the E400 net income plus the equity income from E401 that Intacct posts to E400 (200,000 + 30,000 = 230,000).
- E100: The parent entity is E100. Intacct calculates the equity entry and posts it to parent E100. This is 40% x 230,00 = 92,000. Adding the equity income from E400 to E100 net income, we get the total income for E100 (92,000 + 300,000 = 392,000).

## What's changed?

Ownership structures will now include the option to select the equity consolidation method for any subsidiary entities in the ownership structure. Each ownership structure that uses equity method requires a user-defined book to which Intacct posts the equity entries.

## How it works

During this process, Sage Intacct automatically records the subsidiary’s net income to the parent entity's user-defined book.

Sage Intacct equity consolidation method works as follows:

1. Intacct auto-generates equity entries and writes these entries to the user-defined book for the parent entity.
2. Then, Intacct consolidates the equity entries that it writes to the parent's user-defined book.
3. If using the affiliate entity dimension, Intacct tags the subsidiary source entity with the affiliate entity dimension.

## How to use equity consolidation method

1. **Create a user-defined book**. Intacct automatically records ownership structure equity entries to the user-defined book.
2. **Select the user-defined book in the ownership structure**. In a new or existing ownership structure, select the user-defined book you created.
3. **Select equity method and percent ownership**. Select equity consolidation method and percent ownership for the relevant subsidiary entities.
4. **Specify accounts**. For each subsidiary entity that uses equity method, select the following accounts:
    - Investment income account. This is a balance sheet (non-closing) account.
    - Subsidiary revenue account. This is an income statement (closing) account.
5. **Activate and run**. Activate the ownership structure and run the consolidation for the period.

You can run a General Ledger report on the user-defined book to view the equity method entries recorded during consolidation.

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

You’re eligible to join the Early Adopter Program if you’re subscribed to Advanced Ownership Consolidation and have a business need for the equity consolidation method.

If you want to be considered for the Equity Method Early Adopter program, [complete this form](https://forms.office.com/r/KUJT00tnHD).

## Permissions and other requirements

| Subscription          | Company Multi-Entity Advanced Ownership Consolidation Optional: affiliate entity dimension                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                               |
| User type             | Business user with admin privileges                                                                                                                                                                                      |
| Permissions           | Company Application subscriptions: List, View, Configure Consolidation Manage books: List, View, Add, Edit, Delete Run consolidations: Run Ownership structure: List, View, Add, Edit, Delete Consolidate structure: Run |
| Restrictions          | Early Adopters with an Advanced Ownership Consolidation subscription                                                                                                                                                     |
