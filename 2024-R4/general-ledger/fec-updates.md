---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-fec-updates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements for the Accounting entries file (FEC) report"
---

# Enhancements for the Accounting entries file (FEC) report

[Accounting entries file (FEC)](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_accounting_entries_file)

GENERAL LEDGEr

We made several improvements to the Accounting entries file (FEC) report based on your feedback. You can now access the report in any entity with France as the operating country and select user-defined books for inclusion in your reports. In the generated report, foreign currency credits now appear as negative amounts.

## Access the report in any French entity

We opened access to the Accounting entries file to all French companies. Any entity with the operating country set to France can access and grant permissions for users to run the Accounting entries file report.

When you access the report at the top level, you can select the SIREN from a list that includes the SIREN for all French entities that use No Tax or a VAT tax solution. At the entity level, the SIREN auto-populates with the number provided for that entity.

![Screenshot of French language Accounting entries file page with callout box for SIREN selection](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-fec-enhancements-siren.png)

## Run reports on user-defined books

By default, the Accounting entries file report runs on the accrual book. Now, you can select adjustment and user-defined books and run the report on those instead of or in combination with the default book.

![Screenshot of French language Accounting entries file page with callout box for user-defined books](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-fec-enhancements-user-defined-books.png)

## Improved reporting results

In addition to enhancing the functionality, we improved the output for a more accurate report. In the **Montantdevise** column, credit transactions in foreign currencies show as a negative amount.

## How it works

Run an Accounting entries file report using the following steps:

1.  Go to **General Ledger** > **All** > **Reports** > **Accounting entries file (FEC)**.
    
2.  In the Time period section, enter the **Reporting period** and **As of date**.
    
3.  In the Filters section, select any additional or user-defined books to run the report on.  
    Optional: Leave **Combine reporting book with other books** selected to run the report on the default Accrual book and the selected user-defined books. Deselect the checkbox to run the report only on the selected user-defined books.
    
4.  At the top level, select the **SIREN** from the list. The SIREN is populated automatically for reports run at the entity level.
    

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | France |
| User type | Business |
| Permissions | General Ledger                                                                                                                                                                                                               Accounting entries file (FEC) report: Run |
| Restrictions | Company or entity must  have the operating country set to France. |
