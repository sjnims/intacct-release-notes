---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Tax/2024-R3-TPAR-export-for-AU.htm
release: 2024-R3
extracted: 2026-02-07
title: "TPAR export for Australia—Generally available"
---

# TPAR export for Australia—Generally available

[Taxable payments annual report (TPAR)](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_TPAR)

[Export TPAR information](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Export_TPAR_information)

Taxes

Export your Taxable payments annual report (TPAR) in a format that's ready to upload to the Australian Tax Office (ATO). This functionality is available on July 19, 2024.

Previously, after generating your TPAR, you had to export the data from the report page in a human-readable format. Then, you had to reformat it manually, if you planned to upload it directly to the ATO.

Now, using the **Export TPAR file** option in the Accounts Payable menu, you can generate a machine-readable export file that meets the data upload requirements of the ATO. You can then use this file to lodge your report online.

## How it works

After you set up TPAR for your Australian company or entity, you're ready to generate the TPAR. When TPAR is enabled, Export TPAR file is available to users who have Run permissions for the report.

TPAR set up is a multi-step process that includes enabling the option in Accounts Payable configuration, assigning permissions to run the report, and updating the vendor information records for those vendors you want to include. The Help Center steps you through this process.

1. Go to **Accounts Payable** > **All** > **Reports** > **Taxable payments annual report (TPAR)** to run the report.

    Review the report and make corrections to the source data, if needed.

2. Go to Accounts Payable > **All** > **TPAR** > **Export TPAR file** to export the data.

    Sage Intacct generates a machine-readable export file that meets the data upload requirements of the ATO.

3. Lodge your report online with the ATO, using the generated TPAR file.

## Permissions and other requirements

| Subscription                       | Accounts Payable Taxes                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia                                                                                                     |
| User type                          | Business                                                                                                      |
| Permissions                        | Accounts Payable Taxable payments annual report (TPAR): Run                                                   |
| Configuration                      | Accounts Payable: Enable TPAR report                                                                          |
| Dependencies or other requirements | Requires Australia GST tax solution.                                                                          |
| Restrictions                       | The TPAR is for companies or entities that operate in Australia. Grant payments are not included in the TPAR. |
