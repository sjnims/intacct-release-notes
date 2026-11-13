---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Multi-Entity/2026-R4-affiliate-entity-billback.htm
release: 2026-R4
extracted: 2026-11-13
title: "Track and report on inter-entity activity with bill back and affiliate entity dimension"
---

# Track and report on inter-entity activity with bill back and affiliate entity dimension

[Use inter-entity bill back with entity transactions](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Receivable/2026-R4-ar-bill-back-at-entity-level.htm)

[About inter-entity transactions and inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=IET_bill_back)

[Create an invoice with inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_invoice_w_bill_back)

[Affiliate entity standard dimension](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_affiliate_entity_dimension)

Multi-entity

Automated inter-entity bill back now uses the affiliate entity dimension to auto-tag the customer and vendor in an inter-entity transaction. When enabling the affiliate entity dimension, Sage Intacct automatically records the affiliate entity dimension on invoice and bill detail records. The affiliate entity dimension records carry over to the General Ledger (GL) entries when you post the bill or invoice.

You can use this information throughout your reporting, reconciliation, and consolidation processes. This helps ensure accurate elimination during consolidation.

## Key benefits

- **Leverage automation**: Auto-tag invoice and bill entries with the affiliate entity dimension, replacing a previously manual process.

- **Improved reporting and consolidation**: Experience improved downstream reporting, reconciliation, and elimination during consolidation.

- **Improved efficiency**: Reduce manual errors.

## How it works

1.  Enable affiliate entity dimension on the Multi-Entity Management page.

2.  Use the bill back template on the bill or invoice.

    Ensure that the customer and vendor entities are different, as this is the basis for an inter-entity bill back transaction.

3.  The bill back template auto-populates the affiliate entity dimension as follows:

    - On the GL entry for the customer invoice, Intacct auto-populates the affiliate entity with the entity that's tied to the customer.

    - On the GL entry for the vendor bill, Intacct auto-populates the affiliate entity with the entity that's tied to the vendor.

## When this matters

By enabling affiliate entity dimension tagging, you enrich and enhance inter-entity activity and balance information. You'll glean greater detail when you run dimension balance, General Ledger, and financial reports, achieve more granular eliminations, and more cleanly track your inter-entity activity.

Use this feature under the following conditions:

- Accounting regulations require you to use Accounts Receivable bill back functionality instead of inter-entity transactions.

- You want to track and report on inter-entity transactions using the affiliate entity dimension.

## Permissions and other requirements

| Subscription          | Multi-Entity Accounts Receivable Accounts Payable Consolidation                                                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                        |
| User type             | ConfigureBusiness user with admin privileges Send paymentsEmployee Business                                                                                                                                                                                                                        |
| Permissions           | Set up inter-entity bill backAdministration Subscriptions: Configure Accounts Receivable Bill back templates: List, View, Add, Edit Company Entities: List, View, Edit Use inter-entity bill backAccounts Payable Bills: List, View, Add, Edit Accounts Receivable Invoices: List, View, Add, Edit |
| Implementation        | Requires: Consolidation Affiliate entity dimension                                                                                                                                                                                                                                                 |
| Restrictions          | Only relevant to inter-entity bill back transactions where the customer and vendor are associated with different entities.                                                                                                                                                                         |
