---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Cash_Management/2026-R3-cm-other-updates.htm
release: 2026-R3
extracted: 2026-11-13
title: "Increased precision in display of reconciliation information"
---

# Increased precision in display of reconciliation information

[](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_dimension_relationship)[Field descriptions: Reconcile bank account and Reconcile credit card account pages](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reconciliation_fbf)

cash management

This idea came from you

To ensure clarity, we've changed the way we display information about an account's last reconciliation. These changes apply to the following areas:

- Reconciliation popup window

- Reconcile bank account or Reconcile credit card account page

## Last reconciliation type—new statuses

The new possible statuses for the **Last reconciliation type** field are as follows:

| Reconciliation type                                       | New status     | Previous status | Notes                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------- | -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bank feed or Bank transaction assistant (BTA) file import | Banking cloud  | Bank feed       | Q: How do I know if the last reconciliation used a bank feed or a BTA import? A: When Last reconciliation type is Banking cloud: If Last bank feed date displays a date, the last reconciliation used a bank feed. If Last bank feed date is blank, the last reconciliation used a BTA file import. See Bank feed date fields—new display (below) for more information. |
| Classic import experience                                 | Classic import | Import          |                                                                                                                                                                                                                                                                                                                                                                         |
| Manual transaction matching                               | Manual         | Manual          |                                                                                                                                                                                                                                                                                                                                                                         |

## Bank feed date fields—new display

**Last bank feed date** and **Last bank feed transaction date** display dates only if the account was last reconciled using a bank feed.

- Previously, these fields displayed dates if the account was last reconciled using either a bank feed or a BTA file import.

## Permissions and other requirements

| Subscription          | Cash Management                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                        |
| User type             | Business                                                                                           |
| Permissions           | Reconcile bank: List, View, Add, Edit, Delete Reconcile credit card: List, View, Add, Edit, Delete |
