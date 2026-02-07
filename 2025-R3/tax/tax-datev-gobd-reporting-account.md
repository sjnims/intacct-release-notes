---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-datev-gobd-reporting-account.htm
release: 2025-R3
extracted: 2026-02-07
title: "Reporting account filter for DATEV and GoBD exports"
---

# Reporting account filter for DATEV and GoBD exports

[DATEV export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=aa_TOC_DATEV_data_export)

[GoBD data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=aa_toc_gobd_data_export)

[Reporting account setup](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Setup_overview_reporting_accounts)

Taxes

Multinational companies operating in Germany can now filter and run their DATEV and GoBD exports on General Ledger reporting accounts.

![Screenshot of the DATEV export page with Reporting accounts labels section highlighted in a purple box.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-RN-tax-datev-gobd-reporting-account.png)

## Key benefits

Multinational companies often have to accommodate different chart of accounts requirements for different operating countries. The new reporting account filter for DATEV export and GoBD data export gives you the reporting flexibility to meet those requirements.

## How it works

[Step 1. Enable reporting accounts](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-datev-gobd-reporting-account.htm#)

Go to **General Ledger** > **Setup** > **Configuration** > **Reports** and select the **Enable reporting accounts labels** checkbox.

[Step 2. Create your chart of accounts rule set](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-datev-gobd-reporting-account.htm#)

Go to **General Ledger** > **All** > **Accounts** > **Reporting accounts** and create a reporting account set to map your German chart of accounts to your existing chart of accounts.

[Step 3. Run your export on the reporting account](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-datev-gobd-reporting-account.htm#)

Go to **General Ledger** > **All** > **Reports** > **DATEV export** or **GoBD data export**. Check the **Substitute with reporting account labels** checkbox, and select the **Reporting account set**.

## Permissions and other requirements

| Subscription          | Taxes                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Germany                                                                                                                    |
| User type             | Business                                                                                                                   |
| Permissions           | General Ledger Reporting accounts: List, View, Add, Edit, Delete Reports, DATEV data export: Run Reports, GoBD export: Run |
