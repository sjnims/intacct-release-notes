---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Dashboards/2024-R4-saas-intelligence.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements in SaaS Intelligence"
---

# Enhancements in SaaS Intelligence

[Sage Intacct SaaS Intelligence](https://www.sage.com/en-us/sage-business-cloud/intacct/product-capabilities/extended-capabilities/financial-reporting/saas-intelligence/) (sage.com)

DASHBOARDS, REPORTING AND INSIGHTS

SaaS Intelligence is a fully automated SaaS metrics tracking application built directly on the Sage Intacct platform. It includes reports and visualizations that show contextual data about what's going on in your customer base.

We've recently made SaaS Intelligence even better with the following enhancements.

## Full debooks are automatically recategorized as churn

SaaS Intelligence now automatically detects if a cancellation or debook results in a customer having no active subscriptions. If this happens, the final subscription event is automatically reclassified from a **Debook** (CMRR/CARR) to a full customer **Churn** (CMRR/CARR and customer count).

The debook is reversed and the customer is churned as of the debook date. On the customer record, the churn reason shows as **Customer fully debooked**.

The image below shows the debook reclassified to churn, and the churn amount on the dashboard.

[![.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-saas-intelligence-churn_thumb_0_100.png "decorative image")](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-saas-intelligence-churn.png)

## Improved discount handling in Order Entry

You can provide customers with order-level discounts that are represented by discount items on Order Entry transactions. But what happens if the discount item does not renew, or it renews with a lesser value? We’ve simplified the recurring revenue impact of discount items in Order Entry and aligned it with the robust tracking that's available in Contracts—giving you clearer visibility into the impacts of order-level discounting.

Discount items show as a markdown on the dashboard, and discounts that are no longer applied show as uplift, except in the following situations:

-   The discount item coincides with New, Recovered, or Churn.
-   The line is overridden to Acquired.

## Multiple lanes increase processing speed

During transaction processing, customers are sorted into three processing lanes, making processing up to three times faster. All subscription lines stay with the customer, ensuring the line sequence remains in order. This does not affect your workflow, but you can see the processing groups in the queue (select **SaaS Intelligence** > **SaaS Intelligence Queue** from the application switcher).

[![SaaS Queue page showing the new Processing Group column with customers sorted into groups 1, 2, and 3](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-saas-intelligence-lanes_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-saas-intelligence-lanes.png)

SaaS Intelligence is an additional subscription. To learn more about SaaS Intelligence, talk to your [Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Order Entry OR                                                                 Contracts |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     South Africa                                                                     United Kingdom                                                                     United States |
