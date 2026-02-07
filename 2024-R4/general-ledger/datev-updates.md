---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-datev-updates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Intermediary account for DATEV export"
---

# Intermediary account for DATEV export

[DATEV data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_DATEV_data_export)

GENERAL LEDGEr

We enhanced our support for the DATEV export with a new account that facilitates the transfer of balances in the General Ledger entries CSV file.

## Details

The DATEV intermediary account makes it easier for you to organize your financial data before running the DATEV export. The extracted amounts are not reflected in the chart of accounts and not used in Sage Intacct for accounting purposes.

## How it works

Use the following steps to run a DATEV export:

1.  Go to **General Ledger** > **All** > **Reports** and select **DATEV export**.
    
2.  Enter the **Time period** to include in the export.
    
3.  Enter the **Filter** information, including your **Intermediary account** number.
    

![Screenshot of the DATEV export page with a callout box for the Intermediary account field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-datev-intermediary-account.png)

The Intermediary account is a required field. The value entered must be numeric and have the same length as the account number defined during Company setup. It cannot be the same as an existing General Ledger account number. You can modify the Intermediary account before starting a DATEV export.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | All regions (requires German tax solution) |
| User type | Business user with admin privileges |
| Permissions | General Ledger                                                                                                                                      Reports, DATEV data export: Run |
| Restrictions | You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level. |
