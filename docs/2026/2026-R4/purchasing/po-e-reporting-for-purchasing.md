---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-r4-po-e-reporting-for-purchasing.htm
release: 2026-R4
extracted: 2026-11-13
title: "Purchasing now supports E-Reporting for France"
---

# Purchasing now supports E-Reporting for France

[Set up E-Invoicing and E-Reporting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=configure_e-invoicing_france)

[Transaction definitions for Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transaction_definitions)

Purchasing

E-Reporting functionality, as part of the E-Invoicing subscription for French entities, now supports Purchasing transactions. Intacct provides a more complete French compliance workflow across the full purchasing-to-payables lifecycle.

- Applies e-reporting rules consistently across all Sage Intacct applications that support e-invoicing and e-reporting.

- Reduces manual effort and improves data consistency between Purchasing and Accounts Payable for your French entities.

## How it works

1.  [Set up E-Invoicing and E-Reporting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=configure_e-invoicing_france).

2.  Before you begin, confirm that the transaction definition for your purchasing transaction has **Transaction posting** set to **Accounts Payable**. If not, you might need to [edit the transaction definition](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transaction_definitions) or create a new one.

3.  When you create a purchasing transaction, in the E-Invoicing section select **E-Reporting** as the invoice type, and select the appropriate invoice mode. Choose from **TPS1** (if the transaction relates to a service) or **TLB1** (if the transaction relates to goods).

    When you post the transaction, a bill that contains the e-reporting information is automatically posted in Accounts Payable, from where it can be processed as normal.

4.  Add the linked bills to the relevant e-reports, ready for submission to the French tax authority.

## Permissions and other requirements

| Subscription          | Purchasing Company E-Invoicing AP Automation (optional)                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                                                                                                                                                                                                                                                                                   |
| User type             | Setting up E-Invoicing: Business user with admin privileges Sending and receiving e-invoices: Business                                                                                                                                                                                                                                                                                                   |
| Permissions           | To set up e-invoicingAdministration Application subscriptions: List, View, Configure Company Entities: List, View, Add, Edit To create e-reporting transactionsPurchasing Purchasing transactions: List, View, Add, Edit, Delete To edit transaction definitionsPurchasing: Transaction definitions: List, View, Add, Edit, Delete To generate e-reportsCompany: E-report: List, View, Add, Edit, Delete |
| Restrictions          | Operating country of the entity must be France and base currency is EUR to enable E-Invoicing. The transaction definition used to create the transaction must be configured to post to Accounts Payable. The company must have the Tax module enabled, with TVA française - SYS as the selected tax solution.                                                                                            |
