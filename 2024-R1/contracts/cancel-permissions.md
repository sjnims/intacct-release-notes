---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Contracts/2024-R1-cancel-permissions.htm
release: 2024-R1
extracted: 2026-02-07
title: "New Cancel and Uncancel permissions provide more granular control"
---

# New Cancel and Uncancel permissions provide more granular control

Prior to this release, all Contracts users who had the Contract: Edit permission were able to cancel and uncancel contracts. To allow you to better protect these responsibilities, we've added the following permissions to Contracts:

- **Cancel**: Allows the user to terminate contracts or contract lines.
- **Uncancel**: Allows the user to uncancel contract lines. The uncancel process sets the contract line back to "In progress".

You can now grant specific access to one or both actions to the applicable users or roles.

## What's changed

After February 13, 2024, users who previously had permission to cancel and uncancel contracts will no longer have these permissions. The new Contract: Cancel and Uncancel permissions will be disabled by default.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-con-permissions.png)

## What you need to do

Sage Intacct administrators can assign permissions. After February 13, 2024, do the following:

- If your company uses role-based permissions: update all applicable Roles to include Contract: Cancel or Uncancel.
- If your company uses user-based permissions: update all applicable Users to include Contract: Cancel or Uncancel.
- If your company uses the Sage Intacct API for an integration that uses the cancellation process: update the API user permissions as applicable.

The Cancel and Uncancel permissions are only effective when combined with the Contract: Edit permission.

## Requirements

| Subscription                       | Contract Billing                                                                                         |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions, excluding France                                                                            |
| Permissions                        | Business users with Administrator privileges can assign permissions. Contract: Edit, Cancel, Uncancel    |
| Dependencies or other requirements | The Cancel and Uncancel permissions are only effective when combined with the Contract: Edit permission. |
