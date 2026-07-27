---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Receivable/2026-R3-ar-bill-back-at-entity-level.htm
release: 2026-R3
extracted: 2026-07-27
title: "Updates to inter-entity bill back"
---

# Updates to inter-entity bill back

This release, we've made updates to inter-entity bill back. With inter-entity bill back, when one entity sells goods or services to another, the receiving entity automatically gets a bill to process and pay. This ensures both sides of the transaction are recorded correctly.

## Entity-level transactions are now supported

Streamline your inter-entity accounting when your organization transacts at the entity level only. You can now generate bill back transactions at the entity level.

With this enhancement:

- Invoices and bills are now created in the correct entity rather than the top level.
- System-generated bills continue to be saved as drafts, allowing users to review and apply tax details before posting.

### How it works

1.  [Complete this form](https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-IhiHBMJdtVPpFrxgMGpn-hUMUlRUTNLUjJKNTdBSTdCVExHQ0NNOTZWRC4u) to get inter-entity bill back for entity-level transactions turned on for your organization.

    You'll be notified after it's turned on.

2.  Create invoices at the entity level.

3.  Select the bill back options for the invoice.

4.  After posting, a corresponding bill is drafted in the entity that's associated with the customer on the invoice.

## Changes to editable fields

Now when an invoice is used for inter-entity bill back, the following fields are not editable after posting:

- Account

- Transaction amount

- Base amount

- Allocation

- Department

- Location

This helps ensure that the data from the invoice stays in alignment with the corresponding inter-entity bill.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                                                                                                                                                                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                          |
| User type             | Business                                                                                                                                                                                                                                                                                             |
| Permissions           | Set up inter-entity bill back Administration Subscriptions: Configure Accounts Receivable Bill back templates: List, View, Add, Edit Company Entities: List, View, Edit Use inter-entity bill back Accounts Payable Bills: List, View, Add, Edit Accounts Receivable Invoices: List, View, Add, Edit |
| Configuration         | Enable inter-entity bill back is selected                                                                                                                                                                                                                                                            |
| Restrictions          | The base currency of the two entities must match. Inter-entity bill back does not support transactions between two entities with different base currencies.                                                                                                                                          |
