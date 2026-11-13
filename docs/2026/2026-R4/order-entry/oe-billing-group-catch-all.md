---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-catch-all.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other enhancements for billing groups"
---

# Other enhancements for billing groups

[Add group charges](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_group_charges)

[Add individual charges](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_individual_charges)

[Billing group field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Billing_group_fbf)

Order Entry

This release also includes the following updates to improve the management and control of billing groups.

## Assign user-defined dimensions on charges

Charges now support user-defined dimensions. When you assign user-defined dimensions, they carry through to generated sales invoices and journal entries. This helps maintain accounting accuracy and reporting consistency.

User-defined dimensions respect existing dimension permissions, visibility rules, and configuration settings.

![A group charge showing user-defined dimension fields](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-bg-udds.png)

### How it works

- Create a charge and expand **Show details** to assign user-defined dimensions.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-catch-all.htm#)

| Subscription          | Order Entry                      |
| --------------------- | -------------------------------- |
| Regional availability | All regions                      |
| User type             | Business                         |
| Permissions           | Billing groups: List, View, Edit |

## Include inventory items on charges

Charges now support inventory items in addition to non-inventory items. This allows you to automate recurring billing for physical products.

To support inventory item billing, charges now include a Warehouse field. For inventory items, a warehouse is required and it’s copied to generated sales invoice lines.

Billing groups automate invoice creation only. Generated invoices do not update on-hand inventory quantity or value. Continue to manage stock movements, fulfillment, valuation, costing, and COGS through your existing Inventory Control workflows.

![A charge with an inventory item selected and showing the warehouse field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-bg-inventory-items.png)

### How it works

- Create a charge using an inventory item and assign a warehouse.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-catch-all.htm#)

| Subscription                       | Order Entry Inventory Control                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                   |
| User type                          | Business                                                                                      |
| Permissions                        | Order Entry Billing groups: List, View, Edit                                                  |
| Dependencies or other requirements | In the transaction definition for the billing group, Inventory total must not include ONHAND. |
| Restrictions                       | Tiered price list entries are not supported for inventory items.                              |

## View all billing group members

A new **View all customers** option lets you see a consolidated list of all members in a billing group from a single page. The list includes individually assigned customers and customers included through customer groups, along with each customer’s billing status. Each customer appears only once, even if included through multiple customer groups or both individually and through a customer group.

You can also now select a customer group to drill down and view its details.

These enhancements make it easier to review billing group membership and identify which customers are included in the billing group without navigating to multiple records.

![Billing group showing the View all customers button and pop-up with the list of customers](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-view-all-bg-members.png)

### How it works

- When viewing a billing group, go to the Members section and select **View all customers** or select a customer group.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-catch-all.htm#)

| Subscription          | Order Entry Accounts Receivable                                                  |
| --------------------- | -------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                      |
| User type             | Business Employee                                                                |
| Permissions           | Order Entry Billing groups: List, View Accounts Receivable Customer groups: View |
