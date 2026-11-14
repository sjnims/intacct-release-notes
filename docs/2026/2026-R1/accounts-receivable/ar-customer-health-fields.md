---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-customer-health-fields.htm
release: 2026-R1
extracted: 2026-11-13
title: "Customer health insights"
---

# Customer health insights

[Customers REST API reference](https://developer.sage.com/intacct/apis/intacct/1/intacct-openapi/groups/accounts-receivable/groups/customers/tags/accounts_receivable_customers)

[Update customer records using CSV import](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Importing_exporting_customer_information)

[Customer health insights](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Customer_health_insights)

Accounts Receivable

Customer health insights introduces three new fields on the Customer record that give you a consistent way to store and use customer health information from your CRM, internal processes, or external systems. These fields help you bring important engagement and sentiment signals into Sage Intacct so finance teams can quickly spot risk, strengthen renewal plans, and take proactive action.

![Additional information tab of a customer, showing the new health fields](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-customer-health.png)

For example, a Finance Manager can open a Customer record, see a score of 62 with a status of At risk, and coordinate with Customer Service on next steps.

## Key benefits

- **Centralize customer‑health data:** Store health indicators in one standard place.

- **Support proactive customer management:** Give teams clearer data to identify risk and coordinate engagement.

- **Bring external signals into Intacct:** Populate the health fields through APIs or imports.

- **Enhance reporting and analysis:** Use the fields in list views, custom reports, and analytics.

## What's changed

We added three new fields to the Additional details tab of Customer records:

- **Health score (0–100):** A numeric value that your systems can calculate or populate from usage metrics and scoring formulas.

- **Health status (Healthy, Escalated, At risk):** A human‑readable status derived from the score or your CRM.

- **At risk for churn (True/False):** A flag you can set, for example if the score drops below a certain threshold.

You can also add these fields to the Customers list and use them across custom reports, imports, and APIs. They’re designed as building blocks that your integrations, imports, and workflows can populate and use.

Read the [REST API release notes](https://developer.sage.com/intacct/docs/1/sage-intacct-rest-api/release-notes/2026-r1#customer-health-metrics) to learn more about integrating these fields.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                  |
| User type             | Business Employee                                                                                            |
| Permissions           | Accounts Receivable Customers: List, View, Add, Edit                                                         |
| CSV import            | The following fields are available in the Customer import template: HEALTH\_SCORE HEALTH\_STATUS CHURN\_RISK |
