---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Cash_Management/2024-R3-file-import-v2.htm
release: 2024-R3
extracted: 2026-02-07
title: "Bank transaction assistant file import enhancements"
---

# Bank transaction assistant file import enhancements

[Import bank transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_bank_transactions)

Cash management

Bank transaction assistant file import now supports BAI2 and CAMT.053 file types and the process for uploading files is more streamlined.

This import experience takes the place of the classic import process. You can use one method or the other, but not both at the same time. You continue to use the classic import experience for any in-pocess reconciliations.

## Details

There's a new way to import your bank transactions for reconciliation that focuses on flexibility, control, and visibility and it's now generally available.

-   Imported transactions appear in a centralized location for all bank accounts on the Bank transactions page.
    
-   Transactions you import remain in Sage Intacct, even after reconciliation.
    
-   More file formats are supported, giving you extra flexibility.
    
-   You can increase control of who imports bank transactions using permissions.
    
-   A new import activity list provides added insight.
    

This import experience works with our new workflow, [Bank transaction assistant](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-generate-receipts-cm.htm).

### More file types supported

In addition to the CSV and QIF file formats that are supported in the classic import process, we now support XLS, XLSX, OFX, BAI2 and CAMT.053 files. To ensure a smooth import process, make sure that your file is formatted correctly.

For CSV, XLS, and XLSX files, you select a 3 column or 4 column file type.

-   If your file displays amounts in 1 column (both positive and negative amounts appear in this column), select a 3 column file type.
    
-   If your file displays amounts in 2 columns (money in and money out), select a 4 column type.
    

You can include additional columns for even more insight into transactions.

## How it works

### Enable the feature

1.  Go to **Company > Subscriptions > Sage Cloud Services** and select **Configure**.
    
2.  Select **Enable bank transaction assistant file import**.
    
3.  Select **Save**.
    

Then, assign the **Bank transactions for API and import** permission to appropriate users.

### Import bank transactions

1.  Go to **Cash Management > All**, and select the **+** icon next to **Bank transaction import files**.
    
2.  On the Import bank transactions page, select the **Bank account** and then select **Continue**.
    
    If a bank account is in the process of being reconciled, it will not appear in the dropdown.
    
3.  On the **Upload your file** page, select the file type and the date format.
    
    Select **how to set up your file** on the Upload your file page to learn more about how to format your file for import. In this guide, there are example files that you can use as templates.
    

### View a list of imported files

Go to **Cash Management > All > **Bank transaction import files****.

### View imported bank transactions

Imported bank transactions appear on the Bank transactions list and remain there even after they are included in a reconciliation.

The Bank transactions list includes transactions from both import files and bank feeds. You can create a custom view that includes the Source column to display where each transaction came from.

1.  Go to **Cash Management > All > Bank transactions**.
    
2.  Select **View**.
    

## Permissions and other requirements

| Subscription | Cash Management                                                                 Sage Cloud Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Bank transactions for API and import: Add, List, Delete, View |
| Configuration | Enable bank transaction assistant file import on the Configure Sage Cloud Services page. |
