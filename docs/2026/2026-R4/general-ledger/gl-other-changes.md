---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/General_Ledger/2026-R4-gl-other-changes.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other updates to General Ledger"
---

# Other updates to General Ledger

[Set up GL account reconciliations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_lettrage)

[Match transaction lines using GL account reconciliations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=match_transactions_using_lettrage)

General Ledger

This release includes the following General Ledger updates.

## Changes to the Configure General Ledger page

To increase visibility, fields that were previously unavailable on the Configure General Ledger page are now displayed. You can change these settings, but your changes are not saved. When you select Save, Sage Intacct validates your changes and displays an error message if a setting cannot be updated.

Also, when you view the Configure General Ledger page from an entity, you'll now see the same fields that were previously displayed only at the top level. These fields are read-only at the entity level and are shown to provide information about the General Ledger configuration.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/General_Ledger/2026-R4-gl-other-changes.htm#)

| Subscription          | General Ledger                                                  |
| --------------------- | --------------------------------------------------------------- |
| Regional availability | All regions                                                     |
| User type             | Business user with admin privileges                             |
| Permissions           | Administration Application subscriptions: List, View, Configure |

## Updates to the accounting sequence setting

The following changes simplify configuration and help support compliance.

### Accounting sequence setting moved

The option to require an accounting sequence is now available on the Entity Information page as the **Require accounting sequence** checkbox. It was previously located on the Configure General Ledger page.

![Accounting section of the Entity information page. The Require accounting sequence checkbox is circled. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-GL-accounting-sequence.png)

The list of entities that require an accounting sequence is visible on the Configure General Ledger page.

![Section of the Configure General Ledger page that shows a list of entities that require an accounting sequence. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-GL-entities-req-accounting-seq.png)

### Creating an accounting sequence

You can create an accounting sequence only for entities that have the **Require accounting sequence** checkbox selected.

For existing companies with one or more entities operating in France, you must select the checkbox on the Entity information page to enable this functionality.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/General_Ledger/2026-R4-gl-other-changes.htm#)

| Subscription          | General Ledger                                                  |
| --------------------- | --------------------------------------------------------------- |
| Regional availability | All regions                                                     |
| User type             | Business user with admin privileges                             |
| Permissions           | Administration Application subscriptions: List, View, Configure |
