---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Receivable/2026-R3-ar-e-invoicing-france-GA.htm
release: 2026-R3
extracted: 2026-07-27
title: "E-Invoicing and e-reporting for France—General Availability"
---

# E-Invoicing and e-reporting for France—General Availability

With e-invoicing and e-reporting, Sage Intacct helps to provide a seamless compliance experience for French businesses.

E-Invoicing automates the transmission of transaction data and status updates so that you can focus on business operations while Intacct silently handles your regulatory obligations in the background.

## Key benefits

- **Support French mandates:** Meet France’s 2026 e-invoicing and e-reporting requirements by exchanging structured invoices and standardizing the transmission of transaction data for B2C and cross-border activities.
- **Reduce manual effort:** Replace manual processes with automated AP and AR workflows using structured data, minimizing errors, rework, and reliance on email-based PDFs or manual entry.

After you’ve [subscribed to E-Invoicing for France](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_e-invoices-france) and enabled your French entities, you can do the following:

- [Send e-invoices](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=send-an-e-invoice-france) from Accounts Receivable or Order Entry.
- [Receive e-invoices](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=receive-e-invoices-france) in Accounts Payable, with or without AP Automation.
- [Report all business-to-customer or foreign-operator transactions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_submit_e-reports_france) to French tax authorities with e-reporting.

## How it works

Before you can use E-Invoicing for France, you need to complete and submit all CA3 returns, and then install the [update for the standard tax solution for France](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Update_standard_setup).

### Set up the E-Invoicing subscription

1.  Enable the E-Invoicing subscription for France.

2.  Enable your French entities for e-invoicing.

3.  Add or verify SIREN or SIRET numbers and electronic addresses in customer records and customers' Bill-to contacts.

4.  Enable GL journals for e-reporting in your French entities.

### How e-invoicing works

All transactions are routed through your PA provider and reported automatically.

1.  Create and send customer invoices in Accounts Receivable or Order Entry.

    1.  Select **e-invoice** as the invoice type and select the invoice mode.

    2.  Track the status of outgoing e-invoices in the Invoice list in Accounts Receivable.

2.  Receive, review, and post incoming e-invoices in Accounts Payable.

### How e-reporting works

There are 3 types of e-reporting submissions: sales, purchases, and payments. Mark transactions for inclusion in an e-report as follows:

1.  Switch to the French entity.

2.  **For e-report of sales**: Mark e-reporting sales transactions as follows:

    - _For B2B invoices to a foreign customer_: In Accounts Receivable create an invoice, or in Order Entry create a sales invoice.

      Select **E-Reporting** as the invoice type and select the appropriate invoice mode.

    - _For B2C sales_: In General Ledger, add a journal entry to an e-reporting-enabled journal.

      Select **Outbound taxes for sales** for tax implications, select **B2C sales** as the type of e-reporting, and select the appropriate invoice mode.

3.  **For e-report of purchases**: Mark e-reporting purchasing transactions as follows:

    - _For B2B purchases from a foreign supplier_: Create an AP bill with **E-Reporting** as the invoice type and the appropriate invoice mode selected.

4.  **For e-report of payments**: Mark e-reporting payment transactions as follows:

    - _For B2B payments_: Receive AR payments as usual.

      Only AR payments applied on an AR invoice with "service" invoice mode are used for e-reporting.

    - _For B2C payments_: In General Ledger, add a journal entry to an e-reporting-enabled journal.

      Select the tax implications as **None**, and select **B2C payment** as the type of e-reporting.

5.  Create and submit e-reports for the period. Track the status of e-reporting submission in the e-reporting list.

    You can add transactions to an e-report throughout the period before submitting the e-report.

    To ensure that all required submissions are included in e-reports, for each reporting type set the reporting period to start the day after the previous reporting period ends.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Company E-Invoicing AP Automation (optional)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| User type             | Setting up E-Invoicing: Business user with admin privileges Sending and receiving e-invoices: Business                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Permissions           | To set up e-invoicing Administration Application subscriptions: List, View, Configure Company Entities: List, View, Add, Edit To send e-invoices and create e-reporting transactions Accounts Receivable Invoices: List, View, Add, Edit, Post, Delete Order Entry Order Entry transactions: List, View, Add, Edit, Delete To generate e-reports Company: E-report: List, View, Add, Edit, Delete To receive e-invoices and create e-reporting transactions Accounts Payable Bills: List, View, Add, Edit, Post, Delete Automated transactions: View To log e-reporting journal entries General Ledger Journals: List, View, Add, Edit, Post, Delete Journal entries: List, View, Add, Edit, Post, Delete |
| Restrictions          | Operating country of the entity must be France and base currency is EUR to enable E-Invoicing. E-Invoicing is only available for entity-level transactions. French entities must have a valid 9-digit SIREN number. The company must have the Tax module enabled, with TVA française - SYS as the selected tax solution. The following transaction types are not supported in this release:  Accounts Receivable Adjustments Accounts Payable Adjustments Transactions created in Purchasing and other applications                                                                                                                                                                                       |
