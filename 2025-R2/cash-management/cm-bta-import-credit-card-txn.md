---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Cash_Management/2025-R2-cm-bta-import-credit-card-txn.htm
release: 2025-R2
extracted: 2026-02-07
title: "Import credit card bank transactions for reconciliation with Bank transaction assistant file import"
---

# Import credit card bank transactions for reconciliation with Bank transaction assistant file import

[Import transactions for reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#../../../../help_action/Default.htm#cshid=TOC_import_bank_txns)

cash management

Import credit card transactions for reconciliation. Control who imports bank transactions with a new permission and view a list of all import activity for added insight. Multiple file formats are supported, which gives you extra flexibility.

This import experience also works with [Bank transaction assistant](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Receive_bulk_payments_bank_txns).

## Details

Import CSV, QIF, XLS, XLSX, OFX, CAMT.053, BAI2, and ASO files. To ensure a smooth import process, make sure that your file is formatted correctly.

For CSV, XLS, and XLSX files, specify whether your file displays amounts in two columns (money in and money out) or one column (positive and negative amounts appear in this column). You select a 3 column or 4 column file type, respectively. There are also additional columns to add for even more insight into transactions.

## How it works

1.  Go to **Cash Management** > **All** > **Transactions** and select Add (circle) next to **Bank transaction import files**.
2.  On the Import bank transactions page, select the **Bank account**.

    If a bank account is in the process of being reconciled, it does not appear in the dropdown.

3.  Select **Continue**.
4.  On the **Upload your file** page, select the file type and the date format.

    Select **how to set up your file** to learn more about how to format your file for import. In this guide, there are example files that you can use as templates.

5.  Select **Review transactions**.
6.  Select the date order.
7.  Select **Continue**.
8.  Select **Confirm import**.

Imported transactions appear on the Bank transactions list and remain there even after they’re included in a reconciliation.

### View the imported bank transactions

1.  Go to **Cash Management** > **All** > **Bank transactions**.
2.  Select **View**.

## Permissions and other requirements

| Subscription          | Cash Management Sage Cloud Services                                           |
| --------------------- | ----------------------------------------------------------------------------- |
| Regional availability | All regions                                                                   |
| User type             | Business                                                                      |
| Permissions           | Cash Management Bank transactions for API and import: Add, List, Delete, View |
| Configuration         | Enable Bank transaction assistant file import in Sage Cloud Services          |
