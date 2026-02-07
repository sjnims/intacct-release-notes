---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Industry_Solutions/Sage_Field_Operations/2026-R1-receive-purchase-orders-from-sfo.htm
release: 2026-R1
extracted: 2026-02-07
title: "Receive purchase orders from Sage Field Operations"
---

# Receive purchase orders from Sage Field Operations

[About Sage Field Operations](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=sage-field-operations)

Sage Field Operations

We've made receiving purchase orders (POs) easier than ever. You can now receive full or partial POs directly from within Sage Field Operations (SFO), without logging into Sage Intacct.

This update also supports Credit Purchase Orders, so returning items is just as simple. Whether you're working with POs related to Work Orders or stocking locations, you'll have more flexibility and visibility with the new **Receipts** tab.

[![The Review receipt information page.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-receive-purchase-orders-from-sfo.png)](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-receive-purchase-orders-from-sfo.png)

## Key benefits

- **Simplified PO receipts**: No need to go to Sage Intacct to receive items or return them via a Credit PO.
- **Added support**: Extra support for receiving purchase orders to stocking locations; no longer Work Order only.
- **Improved visibility**: Improved visibility into received items, and items returned on a Credit PO > Receipts tab.

## Good to know

- Available from Purchase Order Office view in the Detail Register tab.
- Supports both POs associated with Work Orders, and POs received to a stocking location.
- Partially or fully convert POs from SFO, whether receiving items or returning them via a Credit Purchase Order. Serialized parts can be received or returned with other inventory and non-inventory parts.
- New **Receipts** tab on the PO shows information about received items, regardless of whether they were received from SFO or Sage Intacct.
- POs can still be received or returned from Sage Intacct when needed, even if they were received partially from SFO.

## Setup considerations

- POs associated with Work Orders use the Transaction definition in Settings > Connections > Purchase Order Receiver Transaction Definition - Work Orders. This setting was renamed from Purchase Order Receiver Transaction Definition and retains the current setting by default.
- Stocking location POs use the new Transaction definition set up in Setting > Connections > Purchase Order Receiver Transaction Definition - Inventory. This only needs to be set up if inventory is received to stocking locations.
- Receipts are only available from the Purchase Order Detail office view when the role permission includes Other > Manage Options > Purchase Orders.

## Learn about Sage Field Operations

For more information, contact your [Sage Intacct account manager](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

You can also check out the following resources:

- [Sage Field Operations user guides](https://support.operix.com/hc/en-us/articles/13116278587917)—Create a free account to log in and review the user guides.
- [Sage Field Operations web page](https://www.sage.com/en-us/products/sage-field-operations/)

## Permissions and other requirements

| Subscription          | Sage Field Operations Sage Intacct Construction (to use jobs)                           |
| --------------------- | --------------------------------------------------------------------------------------- |
| Regional availability | Canada United States                                                                    |
| Permissions           | Available features are based on users' role and user-based permissions in Sage Intacct. |
