---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Receivable/2026-R3-ar-bill-back-at-entity-level.htm
release: 2026-R3
extracted: 2026-11-13
title: "Enhancements to inter-entity bill back"
---

# Enhancements to inter-entity bill back

[Inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_inter_company_bill_back)

Accounts Receivable

Inter-entity bill back accurately records transactions between two entities in the same organization. When one entity sells goods or services to another, the receiving entity automatically gets a bill to process and pay. This ensures both sides of the transaction are recorded correctly.

## Entity-level transactions are now supported

Streamline your inter-entity accounting when your organization transacts at the entity level only. You can now record bill back transactions in the specific entities.

With this enhancement:

- Post invoices for bill back in the respective entity.
- View the resulting bill back transaction details when you select the **Record generator ID** link in the invoice.

### How it works

1.  [Complete this form](https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-IhiHBMJdtVPpFrxgMGpn-hUMUlRUTNLUjJKNTdBSTdCVExHQ0NNOTZWRC4u) to get inter-entity bill back for entity-level transactions turned on for your organization.

    You'll be notified after it's turned on.

2.  Create invoices at the entity level.

3.  Select the bill back options for the invoice.

4.  After posting, the system creates a corresponding bill for the entity that's associated with the customer on the invoice.

## Changes to editable fields

Now when an invoice is used for inter-entity bill back, you cannot edit the following fields after posting:

- Account

- Transaction amount

- Base amount

- Allocation

- Department

- Location

This helps ensure that the data from the invoice stays in alignment with the corresponding inter-entity bill.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                        |
| User type             | Business                                                                                                                                                                                                                                                                                           |
| Permissions           | Set up inter-entity bill backAdministration Subscriptions: Configure Accounts Receivable Bill back templates: List, View, Add, Edit Company Entities: List, View, Edit Use inter-entity bill backAccounts Payable Bills: List, View, Add, Edit Accounts Receivable Invoices: List, View, Add, Edit |
| Configuration         | Enable inter-entity bill back is selected on the Configure Accounts Receivable page.                                                                                                                                                                                                               |
| Restrictions          | The base currency of the two entities must match. Inter-entity bill back does not support transactions between two entities with different base currencies. Invoice type e-invoices are not supported for bill back.                                                                               |
