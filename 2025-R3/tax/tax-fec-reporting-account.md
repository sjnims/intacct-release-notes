---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-fec-reporting-account.htm
release: 2025-R3
extracted: 2026-02-07
title: "Reporting account filter for Accounting Entries File (FEC) report"
---

# Reporting account filter for Accounting Entries File (FEC) report

[Accounting entries file (FEC)](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_accounting_entries_file)

[Reporting account setup](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Setup_overview_reporting_accounts)

Taxes

Multinational companies operating in France can now filter and run their FEC report on General Ledger reporting accounts.

![Screenshot of the FEC report page with Reporting accounts labels section highlighted in a purple box.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-RN-tax-fec-reporting-account.png)

## Key benefits

Multinational companies often have to accommodate different chart of accounts requirements for different operating countries. The new reporting account filter for the FEC report gives you the flexibility to meet those requirements.

## How it works

[Step 1. Enable reporting accounts](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-fec-reporting-account.htm#)

Go to **General Ledger** > **Setup** > **Configuration** > **Reports** and select the **Enable reporting accounts labels** checkbox.

[Step 2. Create your chart of accounts rule set](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-fec-reporting-account.htm#)

Go to **General Ledger** > **All** > **Accounts** > **Reporting accounts** and create a reporting account set to map your French chart of accounts to your existing chart of accounts.

[Step 3. Run your export on the reporting account](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Tax/2025-R3-tax-fec-reporting-account.htm#)

Go to **General Ledger** > **All** > **Reports** > **Accounting entries file (FEC)**. Check the **Substitute with reporting account labels** checkbox, and select the **Reporting account set**.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | France |
| User type | Business |
| Permissions | General Ledger                                                                                                                                      Reporting accounts: List, View, Add, Edit, Delete                                                                     Reports, Accounting entries file (FEC): Run |
