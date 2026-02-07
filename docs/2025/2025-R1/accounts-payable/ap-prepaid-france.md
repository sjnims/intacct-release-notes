---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Accounts_Payable/2025-R1-ap-prepaid-france.htm
release: 2025-R1
extracted: 2026-02-07
title: "Deferred adjustments for Charges constatées d’avance (CCA) in France"
---

# Deferred adjustments for Charges constatées d’avance (CCA) in France

[Deferred adjustments for CCA overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=deferred_adjustments_cca_overview)

[Enable deferred adjustments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=deferred_adjustments_cca_setup)

Accounts Payable

Deferred adjustments for charges constatées d’avance (CCA) in Accounts Payable lets you accommodate for amounts paid in advance for goods and services that span multiple accounting periods. With [Deferred adjustments for produits constatés d’avance (PCA) in Accounts Receivable](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Accounts_Receivable/2025-R1-ar-prepaid-france.htm), this feature helps you avoid overstating revenue and expenses in a current period and aligns with the principles outlined in the French General Accounting Plan (Plan Comptable Général, or PCG).

## Details

With Deferred adjustments for CCA and PCA, you can post a transaction in one period, and then generate a schedule that divides the transaction amounts paid (CCA) or received (PCA) over a user-defined number of monthly, quarterly, or annual periods.

Deferred adjustments automatically post to the General Ledger account at the start of the schedule period. At the end of the schedule period, the amount to allocate to future installments reverts back to the originating account.

For example, you sign a service contract with a software provider for a term of five years and pay the entire amount up front. To spread the cost over the term of the contract rather than have it concentrated in the payment period, you can generate a deferred adjustment schedule. When you do this, the entire paid amount posts to the General Ledger account, but at the end of the first schedule period, the unused portion reverts back to the originating account to be paid in the subsequent period. This automated post and revert payment continues according to the schedule over the course of the contract.

To use Deferred adjustments for CCA and PCA, you must have a company or an entity with an operating country set to France.

## How it works

### Step 1. Enable Deferred adjustments in Accounts Payable

![Screenshot of the Accounts Payable configuration page with a callout box around the deferred adjustments configuration fields.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-ap-ar-prepaid-configure.png)

1. Go to **Accounts Payable** > **Setup** > **Configuration**.
2. Under **Enable functionality**, select **Enable deferred adjustments**.
3. Select the **Deferred adjustments journal**.
4. Enter the **Historical cut-off date**.  
   This allows you to transfer existing deferred adjustment schedules into Sage Intacct. Schedule entries posted before the date entered are treated as a read-only historical entry.

### Step 2. Set up a Deferred adjustments template

![Screenshot of the Deferred adjustments template creation page with a callout box around the Deferred adjustments type for CCA.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-ap-prepaid-template.png)

1. Go to **Accounts Payable** > **Setup** > **Deferred adjustments template**.
2. Enter a **Template ID** and select a **Deferred adjustment journal**.  
   This defaults to the journal you selected during configuration, but you can change to another journal.
3. Select an **Account**.  
   This is used as the intermediary account for the schedule postings to the General Ledger.
4. Select a **Schedule period**.  
   You can select monthly, quarterly, or annually.

### Step 3. Apply the Deferred adjustments template to a bill

Now when you create a bill, you can select a **Deferred adjustments template** at the line level and set the start and end dates for the schedule.

The deferred adjustment schedule only includes the base amount for the transaction. Other charges like taxes are not included in the scheduled payments.

### Step 4. View the Deferred adjustments schedule

When you view a posted bill for a deferred adjustment, you can select a **View schedule** link. This lets you review the full schedule and see the status of all scheduled payments. You can view the journal entry for posted payments, review errors, and select open payments to post them manually.

### Step 5. Run a Deferred adjustments forecast report

1. Go to **Accounts Payable** > **Reports** > **Deferred adjustments forecast report**.
2. Set the **As of date**. This must be the first day of the period.
3. Select the **Number of periods** and the **Schedule period** to display in the report.
4. In the **Filters** section, select the filters for running the report.  
   You can set filters for Account, Deferred adjustment journal, Deferred adjustment template, and Vendor.
5. In the **Filters** section, select the scheduled post status types to display in the report.  
   You can select All, Posted, Not posted, Errors, Terminated, and Historical.
6. In the **Format** section, select the Report type for summary or detail.
7. In the **Format** section, select how to group the report information.  
   You can select to group by Account, Deferred adjustment journal, Deferred adjustment template, or Vendor.

When you run the detail report, you can select any transaction date to go to the original bill. You can also select any document line number to go to the Deferred adjustment schedule associated with that payment. By selecting the template link, you can review the Deferred adjustment template used to create the schedule.

Deferred adjustments for CCA and PCA is for France only. If you have a French company or entity and want to use this feature, contact customer support.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| User type             | Business                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Permissions           | Accounts Payable Deferred adjustments: List, View, Add, Edit, Delete Reports, Deferred adjustments forecast report: Run Accounts Receivable Deferred adjustments: List, View, Add, Edit, Delete Reports, Deferred adjustments forecast report: Run These permissions are for configuration, template creation, and reports. If the feature is enabled, anyone who can create Accounts Payable and Accounts Receivable transactions can see the deferred adjustments fields and schedules. |
| Restrictions          | To use Deferred adjustments for CCA and PCA, you must have a company or an entity with an operating country set to France.                                                                                                                                                                                                                                                                                                                                                                |
