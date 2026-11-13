---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-tier-quantity.htm
release: 2026-R4
extracted: 2026-11-13
title: "Variable-quantity and tiered billing for billing groups"
---

# Variable-quantity and tiered billing for billing groups

[Billing options for billing groups](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Billing_group_options)

[Workflow: Variable-quantity billing with tiered pricing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Variable_quantity_billing_groups)

[Quantity entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_quantity_entries)

Order Entry

Improve billing accuracy by invoicing customers based on actual activity such as transactions, hours, or units. Quantity entries capture billable activity and supply quantities for sales invoices generated from billing groups. For an even more powerful billing workflow, you can combine variable quantities with [Order Entry price lists and tiered pricing](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-tier-pricing.htm) to automatically calculate charges based on recorded activity and pricing rules. This enhancement enables scalable, quantity-based billing without requiring manual calculations.

## Key benefits

- **Flexible pricing**: Calculate variable-quantity charges using manually entered unit prices or Order Entry price lists, including tiered pricing.

- **Reduced manual effort**: Use quantity entries as the source of billed quantities, eliminating the need for separate calculations.

- **Scalable billing workflows**: Bill large volumes of activity without maintaining quantities on each charge.

- **Improved billing accuracy**: Generate invoices using actual recorded quantities instead of estimates.

- **Multiple data entry options**: Create quantity entries through the Quantity entries page, CSV imports, or APIs.

## How it works

1.  Set up an Order Entry price list and configure tiered pricing if you want to bill using Volume, Step, or Absolute pricing methods. For more information, see [Apply flexible pricing to billing groups with OE price lists](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-tier-pricing.htm).

2.  Add a [group charge](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_group_charges) or [individual charge](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_individual_charges) to a billing group and set Quantity source to **Variable**.

3.  [Create or import quantity entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_quantity_entry) to record billable activity.

4.  [Preview invoices](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Preview_invoices_billing_groups) to review quantities, pricing, and calculated amounts.

During invoice generation, Sage Intacct uses quantity entries to determine billed quantities and calculate charges.

## What's changed

- Charges now include a **Quantity source** field.

  Fixed charges use a quantity entered on the charge line. Variable charges use quantity entries to determine the billed quantity.

  ![Charge line showing the Quantity source field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-qty-source_802x246.png)

- Quantity entries are a new record type for capturing billable activity used in variable-quantity billing workflows. Each entry identifies the customer and charge being billed.

  ![Quantity entry record.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-quantity-entry.png)

- Invoice preview displays the quantities used for billing along with associated pricing calculations and invoice amounts.

  ![Preview invoices page showing the Price calculation memo field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-bg-price-calc.png)

## Good to know

- Intacct uses the billing group's schedule periods to determine which unbilled quantity entries are included in an invoice run. Each schedule period includes the previous scheduled invoice date and ends the day before the current scheduled invoice date.

- You can enter multiple quantity entries for the same customer and charge on different dates. Entries for that customer and charge within the same schedule period are summed to determine the billed quantity.

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                                                |
| User type             | Business                                                                                                                                                                                                                                                                                                                                                                                                   |
| Permissions           | Set up price listsPrice lists: List, View, Add, Edit, Delete Price list entry: List, View, Add, Edit, Delete Set up billing groups and chargesBilling groups: List, View, Add, Edit, Delete Individual charges: List, View, Add, Edit, Delete Manage quantity entriesQuantity entries: List, View, Add, Edit, Delete Preview invoices and view invoice runsPreview invoices: List Invoice runs: List, View |
| CSV import            | Available for quantity entries.                                                                                                                                                                                                                                                                                                                                                                            |
