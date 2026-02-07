---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Cash_Management/2025-R2-cm-deprecate-classic-import.htm
release: 2025-R2
extracted: 2026-02-07
title: "Classic import for reconciliation is retiring"
---

# Classic import for reconciliation is retiring

[Import transactions for reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#../../../../help_action/Default.htm#cshid=TOC_import_bank_txns)

cash management

Since 2024 Release 2, we’ve been enhancing our bank transaction import process to boost your efficiency. Many of you have already switched to the newer **Bank transaction assistant file import** experience and are enjoying its benefits. However, some are still using the older **Classic import** method.

This is an announcement that we plan to retire the Classic import method no earlier than May 2026. Keep an eye out for an update about the specific date in an upcoming release. If you have not made the switch yet, now is the time to do so. Transitioning to the new method will allow you to take full advantage of the latest features we offer.

This change does not impact any custom integrations that use the Intacct API.

## Details

Bank transaction assistant file import introduces a fresh approach to importing.

- Imported transactions appear in a centralized location for all accounts on the Bank transactions page.
- Transactions you import remain in Sage Intacct, even after reconciliation.
- Multiple file formats are supported, giving you extra flexibility.
- You can increase control of who imports bank transactions using permissions.
- A new import activity list provides added insight.
- Import credit card transactions for reconciliation.

  Learn more about [importing credit card transactions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Cash_Management/2025-R2-cm-bta-import-credit-card-txn.htm).

This import experience works with our new workflow, [Bank transaction assistant](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#../../../../help_action/Default.htm#cshid=TOC_bta).

### More file types supported

In addition to the CSV and QIF file formats that are supported in the classic import process, we now support XLS, XLSX, OFX, BAI2, ASO, and CAMT.053 files. To ensure a smooth import process, make sure that your file is formatted correctly.

For CSV, XLS, and XLSX files, you select a 3 column or 4 column file type.

- If your file displays amounts in 1 column (both positive and negative amounts appear in this column), select a 3 column file type.
- If your file displays amounts in 2 columns (money in and money out), select a 4 column type.

You can include additional columns for even more insight into transactions.

## How it works

### Step 1: Enable the feature

1.  Go to **Company** > **Subscriptions** > **Sage Cloud Services** and select **Configure**.
2.  Select **Enable bank transaction assistant file import**.
3.  Select **Save**.

Then, assign the **Bank transactions for API and import** permission to appropriate users.

### Step 2: Import bank transactions

1.  Go to **Cash Management** > **All**, and select the **+** icon next to **Bank transaction import files**.
2.  On the Import bank transactions page, select the **Bank account** and then select **Continue**.

    If a bank account is in the process of being reconciled, it will not appear in the dropdown.

3.  On the **Upload your file** page, select the file type and the date format.

    Select **how to set up your file** on the Upload your file page to learn more about how to format your file for import. In this guide, there are example files that you can use as templates.

### Step 3: View a list of imported files

Go to **Cash Management** > **All** > \***\*Bank transaction import files\*\***.

### Step 4: View imported bank transactions

Imported bank transactions appear on the Bank transactions list and remain there even after they’re included in a reconciliation.

The Bank transactions list includes transactions from both import files and bank feeds. You can create a custom view that includes the Source column to display where each transaction came from.

1.  Go to **Cash Management** > **All** > **Bank transactions**.
2.  Select **View**.

## Permissions and other requirements

| Subscription          | Cash Management Sage Cloud Services                                           |
| --------------------- | ----------------------------------------------------------------------------- |
| Regional availability | All regions                                                                   |
| User type             | Business                                                                      |
| Permissions           | Cash Management Bank transactions for API and import: Add, List, Delete, View |
| Configuration         | Enable Bank transaction assistant file import in Sage Cloud Services          |
