---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-payment-ids-for-advances.htm
release: 2025-R3
extracted: 2026-02-07
title: "Enhancements to customer advances"
---

# Enhancements to customer advances

[Customer advances](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_advances_ar)

Accounts Receivable

We've improved customer advances to improve tracking with payment IDs, provide flexibility with draft advances, and make it easier to receive payment while applying an advance.

## Key Benefits

- **Increased flexibility**: Save advances as drafts and return to them later, enabling you to start work even when all details aren’t available.
- **Improved efficiency**: Find an advance more quickly by searching on the Payment ID.
- **Enhanced traceability**: Payment IDs appear in key reports and views, making it easier to track and reconcile customer advances.

## Payment IDs for customer advances

Assign a document sequence to customer advances to automatically generate a unique Payment ID when the advance is posted. This ID appears in standard views and reports, improving traceability.

### How it works

- Assign the document sequence to advances in Accounts Receivable configuration, under Document sequencing.
- Intacct shows the Payment ID in standard views of the Advances list and on the detail page for posted advances.

  Payment IDs are also included in the AR Ledger, Customer aging, Receipts register, and in custom reports.

- In default views of the Advances list, a **Payment ID** column appears after the Customer name.
- Draft advances show a placeholder for the Payment ID until you post the advance.

### Good to know

- Optionally, when you set up the document sequence, create and assign a document sequence for each entity, not just the top level.
- After you assign a document sequence, Sage Intacct creates payment IDs for new advances when you post them. Existing posted advances are unaffected.

## Draft advances

You can now save a customer advance as a draft, allowing you to return later to complete and post it. This is helpful when you need to begin recording an advance but are waiting on additional details. If you determine that a draft advance is not needed, you can delete it.

Users with the existing Receive advances: Add permissions can save, edit, and delete draft advances.

## Applying an advance and receiving payment from the list

To make your workflow more efficient, we've enhanced the **Apply more** option on AR advances to allow you to do the following:

- Apply the advance to multiple invoices
- Receive payment on the remaining invoice balance

### Example

Say that your customer previously paid an advance in the amount of 200 and has invoices for in the amounts of 150 and 175. You want to apply the advance to the open invoices, along with the customer's payment of 125.

1.  On the AR advances list, select **Apply more** for the advance.
2.  Select and add the invoices that you want to apply the advance to.
3.  Intacct opens the Receive payments page, where you can see that the system automatically distributed the advance between the two invoices.
4.  Under Payment information, enter the **Amount received** from the customer, and then select **Post**.

The invoices are paid in their entirety and the advance is fully applied.

### Good to know

- When you select multiple invoices, the advance is applied to the invoices using the waterfall method.
- You can override the credit distribution amounts before you post.
- You can receive payment for any amount up to the total invoice amount minus the value of the advance.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                      |
| User type             | Set up Payment IDs:  Business user with admin privileges Create and delete draft advances: Business                                                              |
| Permissions           | Set up Payment IDs:  Administration Application subscriptions: List, View, Configure Create and delete draft advances: Accounts Receivable Receive advances: Add |
