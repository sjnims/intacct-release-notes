---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Construction/2025-R4-construction-retainage-360.htm
release: 2025-R4
extracted: 2026-02-07
title: "View retainage release details from a release batch, bill, or invoice"
---

# View retainage release details from a release batch, bill, or invoice

[View retainage details](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=View_retainage_details)

[Release retainage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Release_Retainage)

construction

Retainage release information now displays in four areas of Sage Intacct, streamlining your workflow and offering a comprehensive view across customers and vendors.

## What's changed

### Accounts Payable

We added a **Retainage release details** tab to the **AP Retainage release** page and the **Bill** details page, with links to most fields so you can easily drill down to the details.

- On the **AP retainage release** page:
  - To streamline retainage release information, we added a **General** tab. This tab contains the same **Options** and **Details** data that you're used to finding for a retainage release batch, all under a new header.
  - The new **Retainage release details** tab displays the data in an AP retainage release batch.

  ![AP Retainage release page showing Retainage release details tab](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-const-ap-retainage-release-details.png)

- On the **Bill** details page:
  - The new **Retainage release details** tab lists bills that include held retainage amounts.
  - Now, you can easily find the release batch that generated the bill and tell whether a batch has been processed.

  ![Bill details page showing Retainage release details tab](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-const-bill-retainage-release-details.png)

### Accounts Receivable

We added a **Retainage release details** tab to the **AR Retainage release** page and the **Invoice** details page, with links to most fields so you can easily drill down to the details.

- On the **AR retainage release** page:
  - To streamline retainage release information, we added a **General** tab. This tab contains the same **Options** and **Details** data that you're used to finding for a retainage release batch, all under a new header.
  - The new **Retainage release details** tab displays the data included in an AR retainage release batch.

  ![AR Retainage release page showing Retainage release details tab](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-const-ar-retainage-release-details.png)

- On the **Invoice** details page:
  - The new **Retainage release details** tab lists invoices that include held retainage amounts.
  - Now, you can easily find the release batch that generated the invoice and tell whether a batch has been processed.

  ![Invoice details page showing Retainage release details tab](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-const-invoice-retainage-release-details.png)

## Good to know

In addition to viewing retainage release information, you can perform the following tasks on the **Retainage release details** tab:

- Filter and sort columns.
- Export the grid to a CSV file.
- Select links for most fields to drill into details.

## How it works

To view information for retainage release batches:

1. Go to either **Accounts Payable** > **All** > **Retainage** or **Accounts Receivable** > **All** > **Retainage**.
2. Select to view or edit a retainage release batch in the list.
3. Select the **Retainage release details** tab.

To view retainage release information for bills:

1. Go to **Accounts Payable** > **All** > **Bills**.
2. Select to view or edit a bill in the list.
3. Select the **Retainage release details** tab.

To view retainage release information for invoices:

1. Go to **Accounts Receivable** > **All** > **Invoices**.
2. Select to view or edit an invoice in the list.
3. Select the **Retainage release details**

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Construction Projects                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| User type             | Business Construction Manager Project Manager                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Permissions           | Accounts Payable Accounts Payable release retainage: List, View, Add, Edit, Delete Accounts Receivable Accounts Receivable release retainage: List, View, Add, Edit, Delete                                                                                                                                                                                                                                                                                                                                                                                                 |
| Configuration         | The Retainage release details tab displays only if you have the required subscriptions, permissions, and user type, and if you have set up Sage Intacct as follows: In Accounts Payable, enable AP retainage (Accounts Payable > Setup > Configuration). In Purchasing, enable retainage on transaction definitions (Purchasing > Setup > Transaction Definitions). In Accounts Receivable, enable AR retainage (Accounts Receivable > Setup > Configuration). In Order Entry, enable retainage on transaction definitions (Order Entry > Setup > Transaction definitions). |
