---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-fec-updates.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhancements for the Accounting entries file (FEC) report"
---

# Enhancements for the Accounting entries file (FEC) report

[Accounting entries file (FEC) report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_accounting_entries_file)

General Ledger

In response to your feedback, we adjusted the FEC report so that vendor and customer IDs only display for offset account entries.

## Details

When you generate a FEC report, column 7 (CompAuxNum) and column 8 (CompAuxLib) display vendor or customer dimension information only for offset account entries.

The FEC report allows for the display of only one dimension, either Vendor, Customer, or Employee. When you create a direct General Ledger entry, you can enter information for all three of these dimensions. In these cases, Intacct cannot determine which dimension to display in the FEC report. To get past this limitation, you can edit your General Ledger account to set a General Ledger account alternative. This defines which dimension to display in the FEC report for columns 7 and 8.

## How it works

To define which dimension to display for offset account entries in the FEC report, set a GL account alternative.

1.  At the top level, go to **General Ledger** > **All** > **General Ledger accounts**.
    
2.  Select **Add** to create a new account, or select **Edit** for an existing account.
    
3.  In the **GL account alternative** field, select **Payables account** or **Receivables account**.
    
    If you select **Payables account**, the vendor dimension is displayed in the FEC report for entries using this account.
    
    If you select **Receivables account**, the customer dimension is displayed in the FEC report for entries using this account.
    

## Improved reporting results

In addition to enhancing the functionality, we improved the output for a more accurate report. In column 17 (Montantdevise), credit transactions in foreign currencies show as a negative amount.

## Permissions and other requirements

| Subscription | General Ledger                                                                 Taxes |
| --- | --- |
| Regional availability | France |
| User type | Business |
| Permissions | General Ledger                                                                                                                                                                                                               Accounts: List, View, Add, Edit, Delete                                                                                                                                                                                                                   Reports, Accounting entries file (FEC) report: Run |
| Restrictions | Company or entity must  have the operating country set to France. |
