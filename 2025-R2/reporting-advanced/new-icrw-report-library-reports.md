---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Reporting-Advanced/2025-R2-New-ICRW-Report-Library-reports.htm
release: 2025-R2
extracted: 2026-02-07
title: "New and enhanced ICRW Report library reports"
---

# New and enhanced ICRW Report library reports

[Welcome to Interactive Custom Report Writer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-welcome)

[ICRW Report library reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-Report-library-list)

[ICRW reporting areas](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=What_is_subject_area_crw)

[Reporting areas reference](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW_reporting_area_reference)

[ICRW Construction WIP reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-construction-wip-reports)

[Analyze fixed assets, depreciation, and NBV with ICRW](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-use-FAM-report)

ADVANCED REPORTING

New Fixed Assets Management and improved Construction Work In Progress (WIP) reports, are now available for the ICRW Report library.

ICRW requires a separate subscription. For information on attaining an ICRW subscription, [contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

The ICRW Report library provides prebuilt reports for you to view, copy, and use as a template for your own reports. After making a copy of a library report, you can customize it to fit your needs.

For more information, see the [ICRW Report library](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC-ICRW-report-library).

##

Details

The following new and enhanced reports are now available in the ICRW Report library.

### New Fixed Assets Management report

This ICRW report supports Sage Fixed Assets Management (SFAM).

**Assets, Depreciation, and Net Book Value (NBV) report**: Provides comprehensive details on company fixed assets, depreciation, and NBV through a variety of selectable views. Net Book Value (NBV) details offer insights into fixed assets purchase price minus the sum of the depreciation amounts at any given point in time.

This report comprises multiple reporting areas through the use of custom SQL. Custom SQL-based reports require that you use **Run Interactive** when running the report.

For more information, see [Analyze fixed assets, depreciation, and NBV with ICRW](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-use-FAM-report).

### Enhanced Construction reports

Construction Work In Progress (WIP) reports in the ICRW Report library have been enhanced in the following areas: [WIP account usage](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Reporting-Advanced/2025-R2-New-ICRW-Report-Library-reports.htm#WIP) and [WIP rollup project](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Reporting-Advanced/2025-R2-New-ICRW-Report-Library-reports.htm#WIP2).

### WIP account usage reports

Construction reports that contain GL information now use the accounts specified in WIP management.

- Cost accounts: Select the cost accounts for totaling job costs to the date used in your WIP schedules.
- Revenue accounts: Select the revenue accounts for totaling the billed to date amounts used in your WIP schedules.

To configure Work in Progress (WIP) management for GL accounts and journal, see [Set up work in progress (WIP) management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting).

You do not need to use the WIP feature to update this configuration.

**Enhanced WIP account usage reports:**

- Project Cost Entries - CRE
- Project Cost Overview - CRE
- Project Estimate vs Actual Cost - CRE
- Project Estimate vs Actual Cost PJD - CRE
- WIP Billing GL Detail - CRE
- WIP Cost GL Detail - CRE

### WIP rollup project reports

New WIP rollup Project ID prompt and columns are now included in the following ICRW WIP library reports. You can select a specific rollup project.

**Enhanced WIP rollup project reports:**

- WIP Billing GL Detail - CRE
- WIP CFO Import Worksheet - CRE
- WIP Cost GL Detail - CRE
- WIP PM Import Worksheet - CRE
- WIP Schedule by Period - CRE
- WIP Schedule by Project - CRE

## How it works

1.  Go to **Reports > All > Advanced** and select **Interactive Custom Reports**.
2.  In the upper left corner of the ICRW List page, select **Report library**.
3.  Find the desired report in the list and do one of the following:
    1.  Select **Edit**, to copy and modify the report.
    2.  Select **Run**, to view the report results.

For more information, see the [ICRW Report library](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC-ICRW-report-library).

## Permissions and other requirements

| Subscription                       | Interactive Custom Report Writer Construction Fixed Assets Management Customization Services OR Platform Services                                                                   |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | ICRW: All regions Construction: United States, Canada, Australia, United Kingdom                                                                                                    |
| Permissions                        | ICRW: Business, Project Manager - List, Run, View, Add, Edit, Delete Fixed Assets Management: Business Construction: Business, Project Manager                                      |
| Dependencies or other requirements | Access to data in the report or visual board you're running. Construction requires a separate subscription. For more information, contact your Sage Intacct Account Representative. |
