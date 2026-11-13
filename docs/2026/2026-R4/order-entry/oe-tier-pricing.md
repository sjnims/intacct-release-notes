---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-tier-pricing.htm
release: 2026-R4
extracted: 2026-11-13
title: "Apply flexible pricing to billing groups with OE price lists"
---

# Apply flexible pricing to billing groups with OE price lists

[Billing options for billing groups](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Billing_group_options)

[Use price lists with billing groups](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Use_price_lists_with_billing_groups)

Order Entry

Use an Order Entry price list to calculate billing group charges, instead of entering prices manually. For more advanced pricing scenarios, you can also set up tiered pricing that adjusts charges based on total quantities, progressive quantity tiers, or fixed tiers. This enhancement supports more flexible billing models while reducing manual price calculations. Sage Intacct applies the pricing during sales invoice generation and displays the calculation details during invoice preview.

This capability is designed for billing groups and does not change existing price list behavior for other Order Entry users. It supports [variable-quantity billing for billing groups](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Order_Entry/2026-R4-OE-billing-group-tier-quantity.htm).

## Key benefits

- **Scalable and consistent pricing**: Define pricing rules once in an Order Entry price list and apply them consistently across billing group invoices.

- **Flexible pricing models**: Use standard price list pricing or configure tiered pricing to support a variety of quantity-based billing scenarios.

- **Reduced manual calculations**: Automatically apply price list and tiered pricing calculations during invoice generation instead of manually calculating charges.

- **Transparent pricing details**: Review the quantity, pricing method, tiers, unit price, and calculated amount in invoice preview.

## How it works

1.  Create or update an Order Entry price list and add price list entries for the items used by your billing group charges.

2.  Optionally, enable tiered billing on a price list entry, select a tier pricing method, and define the tiers.

3.  Create or update a billing group and assign a default price list.

4.  Create charges that use the price list.

5.  Preview invoices to review pricing calculations.

    Sage Intacct automatically applies the applicable price list pricing and tier calculations during invoice generation.

## What's changed

### Billing groups support Order Entry price lists

Use Order Entry price lists as the pricing source for billing group charges.

- Billing groups include a **Default price list** field.

  ![Billing group showing the default price list field](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-billing-group-price-list.png)

- When the billing group's selected transaction definition has an initial price list, that price list is automatically populated as the billing group's default price list. You can select a different default price list for the billing group if needed.

- Charges inherit the billing group's default price list. You can override the price list on charges when needed.

  ![Group charge showing price list field](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-charge-price-list.png)

- If a charge does not have a manually entered price but does have an assigned price list, Sage Intacct calculates the price from the selected price list during invoice generation.

### Order Entry price lists support tiered pricing for billing groups

Order Entry price list entries now include an **Enable tiered billing** option for billing group pricing. After enabling, define quantity-based tiers and select from one of the following pricing methods:

- **Volume**: The entire quantity is priced at the rate for the tier in which the total quantity falls. Only one tier rate applies per transaction.

- **Step**: Successive tier rates apply to the portions of the quantity within each tier. For example, units in Tier 1 are billed at the Tier 1 rate; units in Tier 2 at the Tier 2 rate; and so on. Multiple tier rates can apply within a single transaction.

- **Absolute**: A fixed amount applies when the total quantity falls within a tier's range. The amount does not vary with the number of units within that range.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-tiered-price-list.png "OE price list showing enable tiered billing, tier pricing, and tiers")

### Invoice preview provides pricing calculation details

Invoice preview now includes a **Price calculation memo** field that displays pricing calculation details, including:

- Quantity type

- Quantity used in the calculation

- Tier pricing method

- Tier information

You can also review the calculated amounts in the invoice preview.

![Preview invoices showing new price calculation memo field](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-oe-preview-invoices.png)

## Good to know

- Changing the billing group's default price list does not update existing charges. The default price list is applied only when creating new charges.

- To calculate pricing from a price list, ensure the charge has a price list assigned and leave the price field blank.

- Tiered price list entries support only Non-inventory and Non-inventory (sales only) item types.

- Markup and discount value types are not available for tiered price list entries. Only the Actual value type is supported.

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                                                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                         |
| User type             | Business                                                                                                                                                                                                                                                                                                                            |
| Permissions           | Set up price listsPrice lists: List, View, Add, Edit, Delete Price list entry: List, View, Add, Edit, Delete Set up billing groups and chargesBilling groups: List, View, Add, Edit, Delete Individual charges: List, View, Add, Edit, Delete Preview invoices and view invoice runsPreview invoices: List Invoice runs: List, View |
| CSV import            | The following fields are available in the SO price lists template: TIEREDBILLING, TIERCALCTYPE, TIER\_NO, BEGIN\_QTY, TIER\_RATE                                                                                                                                                                                                    |
