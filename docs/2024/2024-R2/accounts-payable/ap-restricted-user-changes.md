---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Accounts_Payable/2024-R2-ap-restricted-user-changes.htm
release: 2024-R2
extracted: 2026-02-07
title: "Restricted user behavior in Accounts Payable"
---

# Restricted user behavior in Accounts Payable

To enforce the restrictions you place on users and to protect the integrity of your data, we made the following changes to restricted user behavior.

## Bill approval

Department-restricted users cannot approve or decline bills that contain line items coded to departments outside of their restrictions. They can approve or decline a bill when all line items are within their restrictions.

This change ensures that when users approve bills, they are doing so with full knowledge of all line items. The new behavior matches existing behavior for entity-resticted users, who can only approve or decline a bill when all line items are for restricted entities.

## Editing bills

Entity-restricted and department-restricted users cannot post edits that they make to bills that contain line items outside their restrictions.

This change ensures that users are allowed to modify only transactions for which they have full visibility.

## Requirements

| Subscription          | Accounts Payable                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                           |
| User type             | Approve or decline a bill Business, Employee, Project Manager, and Warehouse Edit and post a bill Business user with admin privileges |
| Permissions           | Accounts Payable Approve Bills: List, plus level approval, if you're set up for value approval Bills: List, View, Edit                |
