---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Reporting_Advanced/2026-R3-suppress-blank-pages.htm
release: 2026-R3
extracted: 2026-07-27
title: "Exclude blank pages from reports"
---

# Exclude blank pages from reports

[General Ledger reports](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=GL_reports_overview)

[Filters tab—Financial Report Writer](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=GL_FinancialReportEditor_FiltersTab)

Reporting and insights

When you select the Individual report option to generate separate reports for certain dimensions, you can now streamline the report output by suppressing blank pages for dimension values with no data for the period.

This enhancement applies to financial reports for the following dimensions:

- Department

- Location

- Project

In addition, the following General Ledger reports provide this option for the Department and Location dimensions:

- Account balances

- Comparative trial balance

- Department activity

- Dimension balances

- General Ledger

- Journals

- Location activity

- Trial balance

## How it works

When you select the **Individual report** checkbox on the General Ledger report pages, you'll then see an **Exclude blank pages** checkbox. Select the checkbox to omit blank pages from the report if it includes a dimension with no data.

[![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-gl-exclude-blanks-gl-rpts.png)](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-gl-exclude-blanks-gl-rpts.png)

The **Exclude blank pages** checkbox is also available on the Filters tab in the Financial Report Writer when you select the **Run as individual reports** checkbox.

[![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-gl-exclude-blanks-frw-rpts.png)](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-gl-exclude-blanks-frw-rpts.png)

## Permissions and other requirements

| Subscription          | General Ledger                                                      |
| --------------------- | ------------------------------------------------------------------- |
| Regional availability | All regions                                                         |
| User type             | Business Employee                                                   |
| Permissions           | General Ledger Financials: List, View, Add, Edit Other reports: Run |
