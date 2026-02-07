---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Accounts_Receivable/2024-R2-draft-payments.htm
release: 2024-R2
extracted: 2026-02-07
title: "Draft payments that you're not ready to post"
---

# Draft payments that you're not ready to post

Introducing more flexibility with customer payments. Now you can draft customer payments that you're not ready to post. This gives you the ability to come back to the payment and verify or make changes before you post it to the subledger.

![The Draft & new option is available on each of the Receive payment screens.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-ar-draft-payment.png)

This is especially useful when you want to review payments that were imported in bulk through the Bank Transaction Assistant, a CSV file, or the API as drafts.

You can post draft payments in bulk from the Posted payments page. If you decide you no longer need a draft, you can simply delete it from the list.

![Select draft payments on the posted payments list, then select Post to quickly post them](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-ar-post-payments.png)

## Details

- The Draft option is available any time you create a payment in Accounts Receivable.
- When you create a draft payment for an invoice, the invoice state changes to Selected. The invoice remains selected for payment until you post the payment.
- Edit a draft payment or post it from the Posted payments page.
- Post draft payments individually or in bulk.
- Delete unneeded draft payments from Posted payments.
- The Posted payments page now includes a State column to let you know whether a payment is in a Draft, Posted, Complete, or Reconciled state.
- Allow a user to post draft payments by granting Manage payments: Post permission. This permission is new in this release.

## How it works

### Create a draft payment

1. Go to **Accounts Receivable > **All** > Invoices** and select **+** next to **Receive payments - New!**.
2. Enter the payment information, including the **Customer**, **Amount received**, and **Payment method**.
3. Select **Show invoices**.
4. Select the invoices you are receiving payment for and select **Add & Close**.
5. Select **Draft & new** or **Draft** to save the payment without completing it.

    The payment appears in the Posted payments list with a state of Draft.

### Edit a draft payment

1. Go to **Accounts Receivable > **All** > Payments** > **Posted payments**.
2. Select **Edit** to the left of each draft payment that you want to modify.
3. Update payment details as needed.
4. Select **Post** or, if you plan to make further changes, select **Draft**.

### Post draft payments from the list

1. Go to **Accounts Receivable > **All** > Payments** > **Posted payments**.
2. Select the checkbox to the left of each draft payment that you want to post.

    Enter Draft at the top of the State column to view only draft payments.

3. Select **Post**.
4. Select **OK** to confirm your action.

### Delete draft payments from the list

1. Go to **Accounts Receivable > **All** > Payments** > **Posted payments**.
2. Select the checkbox to the right of each draft payment that you want to delete.
3. Select **Delete**.
4. Select **OK** to confirm your action.

## Setup

Update permissions for users who will create and manage draft payments, using the following table as a guide.

If your company uses role-based permissions, [assign permissions to a role](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_roles). If your company has user-based permissions, [assign permissions to specific users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_users).

| User actions                               | Required Accounts Receivable permissions                                                                    |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Add, edit, and delete draft payments       | Manage payments: List, View, Add                                                                            |
| Post, add, edit, and delete draft payments | Manage payments: List, View, Add, Post To post draft payments, Manage payments: Add permission is required. |

## Requirements

| Subscription          | Accounts Receivable                        |
| --------------------- | ------------------------------------------ |
| Regional availability | All regions                                |
| User type             | Business user                              |
| Permissions           | Manage payments: List, View, Add, and Post |
