---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-streamlined-glod-setup.htm
release: 2024-R4
extracted: 2026-02-07
title: "Streamlined setup for GL Outlier Detection"
---

# Streamlined setup for GL Outlier Detection

GL (General Ledger) Outlier Detection is a Machine Learning service that compares your historical transaction patterns to current transactions in the approval cycle, and flags transactions that do not match. GL Outlier Detection can be a powerful detective control, turning transaction patterns into reliable approval process accuracy. Advantages include improved accuracy in journal entries and improved control measures for your organization.

We've streamlined the setup process for enabling Outlier Detection. To enable Outlier Detection on the Configure AI service page, simply select the **Enable data service** checkbox and then select the **Enable for General Ledger Approval** checkbox. If your organization's data meets the minimum requirements to build a data model, you can set up detection rules and use Outlier Detection within 1 to 2 days.

## Details

When you enable Outlier Detection for General Ledger, Outlier Detection starts indexing and evaluating your company’s data to create a data model specific to your organization. To create your model, Outlier Detection needs data that meets the following requirements:

-   At least 1 month of data that's less than 2 years old
    
-   At least 1,000 posted General Ledger journal entry lines
    

If your organization's data meets this criteria, the model is typically ready within 24 to 48 hours.

The performance of Outlier Detection improves as it learns your organization's transactional data patterns. You’ll get the best results for journals with at least 100 posted transactions.

## How it works

To set up Outlier Detection: 

1.  Go to **Company** \> **Admin** \> **Subscriptions**.
    
2.  Select the **AI/Machine Learning** slider.
    
3.  Select **Configure**.
    
4.  In the AI Services section, select **Enable data service** to allow Sage Intacct to index your company data.
    
5.  In the Outlier Detection section, select **Enable for General Ledger approval**.
    
6.  Select **Save**.
    

When your model is ready, you can define custom settings for Outlier Detection in the Approval options section of Configure General Ledger.

## Permissions and other requirements

| Subscription | AI/Machine Learning                                                                 General Ledger |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Administration permissions                                                                                                                                                                                                               Application subscriptions: List,	View,	Subscribe,	Configure |
| Prerequisites | The following are the minimum data requirements needed to create the model:                                                                                                                                       At least 1 month of data that's less than 2 years old                                                                     At least 1,000 posted General Ledger journal entry lines |
