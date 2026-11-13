---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Receivable/2026-R4-ar-bill-back-at-entity-level.htm
release: 2026-R4
extracted: 2026-11-13
title: "Enhancements to inter-entity bill back"
---

# Enhancements to inter-entity bill back

[Inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_inter_company_bill_back)

Accounts Receivable

This release brings the following enhancements to inter-entity bill back. Inter-entity bill back accurately records transactions between two entities in the same organization. When one entity sells goods or services to another, the receiving entity automatically gets a bill to process and pay. This ensures both sides of the transaction are recorded correctly.

## Create bill back transactions at the entity level

Last release, you could sign up for the option to create bill back transactions at the entity level. Previously, inter-entity bill back supported top level transactions only. Now, no extra steps are required to use inter-entity bill back for entity transactions. This allows you to streamline inter-entity accounting when your organization transacts at the entity level only.

With this enhancement, you can do the following:

- Post invoices for bill back in the respective entity with bill back templates.
- View the resulting bill back transaction details when you select the **Record generator ID** link in the invoice.

## Use the affiliate entity dimension in bill back transactions

You can now use inter-entity bill back with the affiliate entity dimension to auto-tag the customer and vendor in an inter-entity transaction.

Learn more about how to [track and report on inter-entity activity with bill back and the affiliate entity dimension](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Multi-Entity/2026-R4-affiliate-entity-billback.htm).

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                        |
| User type             | Business                                                                                                                                                                                                                                                                                           |
| Permissions           | Set up inter-entity bill backAdministration Subscriptions: Configure Accounts Receivable Bill back templates: List, View, Add, Edit Company Entities: List, View, Edit Use inter-entity bill backAccounts Payable Bills: List, View, Add, Edit Accounts Receivable Invoices: List, View, Add, Edit |
| Configuration         | Enable inter-entity bill back is selected on the Configure Accounts Receivable page. Affiliate entity dimension must be enabled in the Consolidations subscription for use with inter-entity bill back.                                                                                            |
| Restrictions          | The base currency of the two entities must match. Inter-entity bill back does not support transactions between two entities with different base currencies. Invoice type e-invoices are not supported for bill back.                                                                               |
