---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Contracts/2024-R1-import-MEA-price-lists.htm
release: 2024-R1
extracted: 2026-02-07
title: "Save time with the new MEA price list import template"
---

# Save time with the new MEA price list import template

This idea came from you

You can now import multiple-element arrangement (MEA) price lists using a CSV template. Previously, you had to add MEA price list entries via API or manual data entry. Use the import process to create new MEA price lists or add new price list entries to existing price lists.

The new MEA price list import template contains everything you need to get started importing your data. The column headers contain detailed descriptions regarding when a column is required.

We've also included tabs with examples of how to import different types of MEA price list entries. As each price type requires a different set of fields, Sage Intacct recommends that you import like price types in separate processes to avoid errors.

[![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-con-mea-price-list-import_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-con-mea-price-list-import.png)

The MEA price list import template uses the line numbers concept that you might have seen in other Intacct import templates. Line numbers determine the order in which rows are imported but they do not display in the user interface. See the example tabs on how to correctly use line numbers in the import file.

## Details

-   You can download the MEA price list import template from the Company Setup Checklist or from the MEA Price Lists list page.
-   You can create a new MEA price list and import the associated price list entries in the same import process. When the Intacct encounters a unique NAME, it will create a new MEA price list.
-   When creating multiple price list entries for an item in an MEA prices list, LINE\_NO is required for each entry. Start with 1 for the first entry and increment by 1 for each subsequent entry.
-   If you import a new MEA price list entry for an item with an existing entry, the import process overwrites the existing MEA price list entry with the imported data. The import process does not support updating existing price list entries.

## Requirements

| Subscriptions | Contract Advanced Revenue Management |
| --- | --- |
| Regional availability | All regions, excluding France |
| Permissions | Business user with:                                                                     Contract MEA Price List: List, Add, Edit |
| Dependencies or other requirements | To access import templates via the Company Setup Checklist, the Business user must also have Admin privileges.                                                                     To access import templates via the MEA Price List page, the Business user does not need Admin privileges. |
