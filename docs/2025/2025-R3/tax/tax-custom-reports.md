---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-custom-reports.htm
release: 2025-R3
extracted: 2026-02-07
title: "New and updated custom reports for standard tax solutions"
---

# New and updated custom reports for standard tax solutions

[Tax reports with custom report writer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=VAT_GST_reports)

[Install VAT and GST custom reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Install_VAT_GST_sample_custom_reports)

Taxes

We added custom reports for France, Germany, New Zealand (Early Adopter), and Singapore (Early Adopter). We also updated the custom reports for France and the United Kingdom to support group VAT filing.

![Screenshot of the Customization packages page with a highlight box around five new report packages for France VAT Reports, Germany VAT Reports, New Zealand GST Reports, Singapore GST Reports, and United Kingdom VAT Reports.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-RN-tax-custom-reports.png)

## Key benefits

Custom Report Writer reports allow you to create specialized sets of information based on company data. For standard tax solutions, you can use these reports to review your tax liabilities without creating a tax submission. You can also use them to analyze the details that Sage Regulatory Reporting used to calculate the box amounts in your tax return.

We added custom reports for the following supported regions:

### France

- **France tax submission box detail report_VAT group**: This report displays information in the submission box detail report. It also displays location and location ID information for all entities that share a tax ID to facilitate group VAT filing.

### Germany

- **Germany summary report**: This report displays subtotals for the net amount, tax amount, and total amount for VAT transactions.
- **Germany detail report**: This report displays information in the summary report and detail information for each transaction with links to the source transaction.
- **Germany tax submission box detail report**: This report displays information in the summary report and detail information for each transaction. It also displays transaction record IDs grouped by application area with links to the source transaction.
- **Germany tax submission box detail report_VAT group**: This report displays information in the submission box detail report. It also displays location and location ID information for all entities that share a tax ID.

### New Zealand—Early Adopter

- **New Zealand summary report**: This report displays subtotals for the net amount, tax amount, and total amount for GST transactions.
- **New Zealand detail report**: This report displays information in the summary report and detail information for each transaction with links to the source transaction.

### Singapore—Early Adopter

- **Singapore summary report**: This report displays subtotals for the net amount, tax amount, and total amount for GST transactions.
- **Singapore detail report**: This report displays information in the summary report and detail information for each transaction with links to the source transaction.

### United Kingdom

- **UK tax submission box detail report_VAT group**: This report displays information in the submission box detail report. It also displays location and location ID information for all entities that share a tax ID to facilitate group VAT filing.

## How it works

[Step 1. Download and unzip the reports package](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-custom-reports.htm#)

Download the [VAT and GST custom reports package](https://www.intacct.com/ia/docs/en_US/help_action/Taxes/Indirect_Tax/VAT_and_GST/Setup/install-sample-custom-reports.htm) from the help center and unzip the download file.

[Step 2. Import the reports](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-custom-reports.htm#)

Go to **Customization Services** or **Platform Services** > **All** > **Customization tools** > **Custom packages** and import the files for the custom reports that you want to use.

[Step 3. Run a report](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-custom-reports.htm#)

Go to **Reports** > **All** > **Advanced** > **Custom reports** to select and run your report.

## Permissions and other requirements

| Subscription          | Customization Services Platform Services Taxes                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia France Germany United Kingdom                                                                                                                              |
| User type             | Business                                                                                                                                                             |
| Permissions           | Customization Services Custom reports: List, View, Add, Edit, Delete Platform Services Custom reports: List, View, Add, Edit, Delete Taxes Reports, Tax reports: Run |
