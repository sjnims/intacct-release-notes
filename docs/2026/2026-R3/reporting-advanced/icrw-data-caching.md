---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Reporting_Advanced/2026-R3-ICRW-data-caching.htm
release: 2026-R3
extracted: 2026-11-13
title: "New ICRW data caching capabilities"
---

# New ICRW data caching capabilities

[Guidelines for creating ICRW reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-report-guidelines)

[Ensure that an ICRW report shows the latest data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW-show-latest-data)

[Switch the data caching status in an ICRW report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW_switch_data_caching)

Reporting & insights

You can now switch the data caching status for an Interactive Custom Report Writer (ICRW) report effortlessly with a prompt. This new capability expedites building reports and improves performance when viewing previously generated reports.

## Key benefits

Data caching stores previously generated report results for later use, thereby enhancing performance. After a report has run, the cached data can be used for subsequent executions of the report, saving the time it would take to request the data again.

You can switch the data caching status effortlessly, on report-by-report basis, through the use of a presentation variable prompt.

- **Enabled data caching** retrieves the data once, providing enhanced performance. This is helpful when a report is configured to use As Of date prior to the current today. In this case, any current entries and transactions have no effect on the data for the report's As Of date.

- **Disabled data caching** provides the most recent version of the data, ensuring the report is up to date. This is helpful when you need to see the data for the most recent transactions in the report.

You define the data caching settings in the ICRW Prompt dialog, as show in the following screen shot. You then activate the prompt in the report XML, as described in [How it works](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Reporting_Advanced/2026-R3-ICRW-data-caching.htm#How).

![ICRW Prompt dialog with the settings to create a presentation variable prompt to switch the data caching status for a report.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-ICRW-add-presentation-variable-prompts_404x560.png "ICRW Prompt dialog")

## How it works

You can switch the data caching status on a report-by-report basis with a presentation variable prompt, in the following way.

1.  Set the data caching configuration for a report.

2.  Create a presentation variable prompt in the report to enable and disable data caching.

3.  Activate the presentation variable with a line of XML code in the report.

4.  Select the data caching status from the prompt at run time.

For detailed instructions, see [Switch the data caching status in an ICRW report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW_switch_data_caching).

## Permissions and other requirements

| Subscription                       | Interactive Custom Report Writer Customization Services OR Platform Services   |
| ---------------------------------- | ------------------------------------------------------------------------------ |
| Regional availability              | ICRW: All regions                                                              |
| User type                          | Interactive Custom Report Writer: Business user with admin privileges Business |
| Permissions                        | Interactive Custom Report Writer Run, View, List, Add, Edit, Delete            |
| Dependencies or other requirements | Access to data in the report.                                                  |
