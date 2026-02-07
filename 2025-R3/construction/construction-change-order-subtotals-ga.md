---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-change-order-subtotals-GA.htm
release: 2025-R3
extracted: 2026-02-07
title: "Support for subtotals on purchasing change orders"
---

# Support for subtotals on purchasing change orders

This idea came from you

Easily calculate and track subtotal revisions from purchasing change orders. And, get visibility into draft and posted subtotal amounts on source documents.

## Key benefits

With enhanced subtotal tracking for purchasing change orders, you get the following benefits:

- **Greater control over changes**: Easily calculate and track subtotal revisions directly from purchasing change orders, so you always know the financial impact of each update.
- **Improved visibility**: See both draft and posted subtotal amounts on source documents to get a clearer picture of your purchasing activity.
- **Streamlined reconciliation**: Reduce manual effort and simplify downstream reporting.

## What's changed

We aligned subtotal behavior between the source document and change order documents.

### Change order configuration

When you create a change document, a new Change document options section is available where you can select to sync subtotals with a source document.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-const-CO-sync.png)

### Change order information details appear on subcontract

On the Change documents tab of the source document, select Show details to view breakdowns for the draft and posted subtotal details of the change order.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-const-subtotal-breakdown.png)

### Posted change order subtotals on the subcontract

Change order details for a purchase order appear on the header for improved visibility.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-const-subtotal-header.png)

### Tax handling for change orders

When a source line is modified, the tax schedule and tax details are copied and locked on the change order line. New lines added by a change order can have different tax settings. These are carried to the source document but do not affect the original subtitles.

## How it works

[Step 1. Create the transaction definition enabled for subtotals for the source document](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-change-order-subtotals-GA.htm#)

1. Go to **Purchasing** \> **Setup** \> **More** and select Add next to **Transaction definitions**.
2. Select **Order** as the Template type.
3. Select **Order** as the Workflow category.
4. Select **Enable change order workflow**.
5. Select **Source document** as the Document type.
6. Select **Enable subtotals** in the Transactions subtotals section in the Accounting section.

    A grid appears.

7. Enter subtotal information.
8. Select **Save**.

[Step 2. Create the transaction definition enabled for subtotals for the change order](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-change-order-subtotals-GA.htm#)

1. Go to **Purchasing** \> **Setup** \> **More** and select Add next to **Transaction definitions**.
2. Select **Order** as the Template type.
3. Select **Order** as the Workflow category.
4. Select **Enable change order workflow**.
5. Select **Change document** as the Document type.
6. Select **Change single source document (sync source subtotal options)**.
7. Select the transaction definition that you created in step 1 for the **Source document**.

    Subtotal information populates from the source document.

8. Select **Save**.

When you create the new source document, any related change orders inherit its subtotal settings.

## Good to know

Enable subtotals on Purchasing source documents using a new transaction definition that has no existing documents attached to it. Use this transaction definition for any new Purchasing documents going forward.

You cannot enable subtotals on change order transaction definitions directly. However, if linked to a single source transaction definition, change order transaction definitions inherit subtotal settings from that source.

Subtotals apply only to the following documents:

- Original entries in source documents.
- Delta entries in change orders.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-change-order-subtotals-GA.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription          | Construction Projects enabled for Project costing and billing Purchasing |
| --------------------- | ------------------------------------------------------------------------ |
| Regional availability | Australia Canada United States United Kingdom                            |
| User type             | Business                                                                 |
| Permissions           | Purchasing Transaction definitions: Add, Edit, List                      |
| Restrictions          | Apportioned subtotals are not supported.                                 |
