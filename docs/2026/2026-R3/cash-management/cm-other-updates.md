---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Cash_Management/2026-R3-cm-other-updates.htm
release: 2026-R3
extracted: 2026-07-27
title: "Increased precision in display of reconciliation information"
---

# Increased precision in display of reconciliation information

This idea came from you

To ensure clarity, we've changed the way we display information about an account's last reconciliation. These changes apply to:

- Reconciliation popup window

- Reconcile bank account or Reconcile credit card account page

## Last reconciliation type—new statuses

The new possible statuses for the **Last reconciliation type field** are as follows:

- **Banking cloud:** Bank feed or Bank transaction assistant (BTA) file import

- **Classic import:** Classic import experience

- **Manual:** Manual transaction matching

These are all the possible statuses and replace all previous statuses.

## Bank feed date fields—new display

**Last bank feed date** and **Last bank feed transaction date** display dates only if the account was last reconciled using a bank feed.

- Previously, these fields displayed dates if the account was last reconciled using either a bank feed or BTA file import.

## Permissions and other requirements

| Subscription          | Cash Management                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                        |
| User type             | Business                                                                                           |
| Permissions           | Reconcile bank: List, View, Add, Edit, Delete Reconcile credit card: List, View, Add, Edit, Delete |
