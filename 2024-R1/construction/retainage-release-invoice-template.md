---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-retainage-release-invoice-template.htm
release: 2024-R1
extracted: 2026-02-07
title: "New template option for retainage release invoices"
---

# New template option for retainage release invoices

You can now assign a printed document template specifically for invoices that release retainage.

## Details

Printed document templates allow you to format transaction documents using Microsoft Word and merge fields. Previously, you could set a default template for invoices, but not one specific for invoices that release retainage.

When you set up the **Retainage release invoice template**, this printed document template is used whenever you print an invoice that was generated from the Retainage task in Accounts Receivable.

![You can select a Retainage release invoice template.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-retainage-release-invoice-template.png)

Invoices that were not generated from the Retainage task continue to use the printed document template that's selected in the formatting section of Configure Accounts Receivable.

## How it works

[You can create your own retainage release invoice template using printed document templates in Customization or Platform Services](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_printed_document_templates).

After you've uploaded the template to Sage Intacct at the top level, do the following:

1.  Go to **Accounts Receivable** > **Setup tab** > **Configuration**.
    
2.  In the Accounting settings section, go to **Retainage**.
    
3.  Select a **Retainage release** invoice **template**.
    
    You can add multiple printed document templates at the top level, then assign the appropriate template on the Configure Accounts Receivable page for each entity that uses retainage.
    
4.  Select **Save**.
    

Going forward, all new invoices that release retainage use this template when you print the invoice. Existing release retainage invoices continue to use the template that was assigned when the retainage was released.

## Requirements

| Subscription | Accounts Receivable                                                             Administration                                                             Purchasing                                                             Construction |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                       Canada                                                                                                                                                                                                       United States |
| User type | Business user with admin privileges |
| Permissions | Application subscriptions: List, View, Configure |
