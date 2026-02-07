---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-import-bill-back-invoices.htm
release: 2025-R3
extracted: 2026-02-07
title: "Import large volume bill back transactions"
---

# Import large volume bill back transactions

[Import Accounts Receivable invoices](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AR_Invoices)

[Inter-entity bill back](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_inter_company_bill_back)

Accounts Receivable

This idea came from you

Streamline your invoice processing by importing multiple bill back invoices at once using the updated AR invoice CSV template. Add the ID of the bill back template to the new column and let Intacct create the corresponding bill upon import.

## Key benefits

- Streamline high-volume bill back processing with minimal manual effort.
- Eliminate repetitive data entry to reduce errors and improve accuracy.
- Save time and boost efficiency for teams handling inter-entity transactions.

## How it works

- Inter-entity bill back must be selected in your Accounts Receivable configuration before you download the AR invoices CSV template.
- In the new BILL_BACK_TEMPLATE column of the CSV template, provide the bill back template ID that you want to use for the invoice.
- Before you import bill back invoices, the following must be true:
  - The template IDs that you provide must already be set up as Bill back templates.
  - The customers you are invoicing must also be set up for bill back before you import the bill back invoices
- Import invoices for bill back at the top level only. Inter-entity bill back is not supported at the entity level.
- The location that you provide for the invoice is used to determine the corresponding customer and vendor for the bill back transaction.
- Bills are either created as drafts or are posted, depending on the option you selected when setting up bill back in Configure Accounts Receivable.
- If you have bill back templates enabled for your company and you do not see the column in your AR invoices import template, download the template again.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                       |
| User type             | Business                                                                                                                          |
| Permissions           | To import bill back Invoices: Invoices: View, Edit, Add To manage bill back templates: Bill back templates: List, View, Add, Edit |
| Configuration         | Enable inter-entity bill back in Accounts Receivable.                                                                             |
