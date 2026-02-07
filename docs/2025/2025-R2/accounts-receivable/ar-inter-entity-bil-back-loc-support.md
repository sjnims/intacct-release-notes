---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Receivable/2025-R2-ar-inter-entity-bil-back-loc-support.htm
release: 2025-R2
extracted: 2026-02-07
title: "Inter-entity bill back now supports child locations"
---

# Inter-entity bill back now supports child locations

[Inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_inter_company_bill_back)

Accounts Receivable

Inter-entity bill back now supports child locations of an entity, allowing you to create bill back invoices with more detailed location coding.

## Details

When creating an invoice using a bill back template, you can select a child location in the line items. Sage Intacct refers to the parent entity to find the associated vendor.

A corresponding bill is created in Accounts Payable for the vendor associated with the parent entity.

A few things to note for this update:

- All line item locations in an invoice must share the same parent entity when a bill back template is applied.
- The bill created in Accounts Payable shows the entity as the location, rather than the child location.
- As long as an entity record specifies an associated vendor, you can use that entity's child locations for line items on invoices with bill back templates.

No additional setup is required to use child locations on invoices if you’re already set up for inter-entity bill back.

## Permissions and other requirements

| Subscription          | Accounts Receivable Accounts Payable Company                                                                                                                                                                                                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                                                             |
| User type             | Business                                                                                                                                                                                                                                                                                                                                                                                |
| Permissions           | To create and view bill back transactions: Accounts Receivable Invoices: View, Edit, Add Accounts Payable Bills: List, View To set up inter-entity bill back: Company Entities: Edit Accounts Payable Vendors: List, View, Add, Edit Accounts Receivable Customers: List, View, Add, Edit To create bill back templates: Accounts Receivable Bill back templates: List, View, Add, Edit |
| Configuration         | Enable inter-entity bill back in Accounts Receivable.                                                                                                                                                                                                                                                                                                                                   |
| Restrictions          | Account labels not supported. Avalara and Advanced Tax not supported. Order Entry and Purchase Order invoices do not support inter-entity bill back functionality.                                                                                                                                                                                                                      |
