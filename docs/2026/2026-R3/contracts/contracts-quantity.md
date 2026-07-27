---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Contracts/2026-R3-contracts-quantity.htm
release: 2026-R3
extracted: 2026-07-27
title: "Improve transparency for usage-based invoices"
---

# Improve transparency for usage-based invoices

This idea came from you

New quantity and price fields provide greater visibility into how usage-based charges are calculated and billed, helping reduce customer confusion and invoice disputes. This enhancement makes usage and pricing information available throughout the billing workflow and in printed invoices.

## Key benefits

- **Improve invoice transparency**: Show the quantities and pricing used to calculate billed amounts directly on contract invoices.

- **Reduce billing disputes**: Give customers clearer visibility into usage-based charges and pricing calculations.

- **Simplify invoice review**: See quantity, quantity used, and average price together during invoice generation.

- **Customize printed invoices**: Include the new fields in printed document templates using merge fields.

## What's changed

A new setting in Contracts configuration, **Show quantity details on invoice**, lets you display additional quantity and pricing details for usage-based invoices.

When enabled, **Quantity used** and **Average price** fields are available throughout the billing workflow, including invoice generation and invoice review pages. Invoices can display **Quantity**, **Quantity used**, and **Average price** together to provide greater visibility into how billed amounts are calculated.

- **Quantity used** represents the actual quantity converted into an invoice line, regardless of billing price list settings.

- **Average price** represents the effective per-unit price used to calculate the billed amount (Extended price ÷ Quantity used).

**Quantity used** and **Average price** are also available as merge fields for printed documents. A new printed document template **OE Sales Invoice Tiered Billing** includes these fields.

## Good to know

This feature is disabled by default. After you enable **Show quantity details on invoice**, the setting cannot be turned off.

## Permissions and other requirements

| Subscription                       | Contracts Administration Customization Services or Platform Services                                                                                                                                                                                                                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia Canada South Africa United Kingdom United States                                                                                                                                                                                                                                      |
| User type                          | To configure this feature: Business user with admin privileges To use this feature: Business                                                                                                                                                                                                    |
| Permissions                        | To configure this feature Administration Application subscriptions: Configure To review and generate invoices Contracts Generate invoices: Preview, Generate To manage printed document templates Customization Services or Platform Services Printed document templates: List, View, Add, Edit |
| Configuration                      | Enable Show quantity details on invoice in Contracts configuration.                                                                                                                                                                                                                             |
| Dependencies or other requirements | To display the new values on printed invoices, update printed document templates to use the Quantity used and Average price merge fields or use the provided template: OE Sales Invoice Tiered Billing.                                                                                         |
