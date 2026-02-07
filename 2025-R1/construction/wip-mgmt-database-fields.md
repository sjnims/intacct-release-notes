---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Construction/2025-R1-wip-mgmt-database-fields.htm
release: 2025-R1
extracted: 2026-02-07
title: "Updated database fields for WIP management"
---

# Updated database fields for WIP management

[Custom Report Writer](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_custom_reports_wizard)

CONSTRUCTION

We updated the names of some database fields to make them more meaningful. If you have custom reports that use these fields, you need to update the reports with the new field names.

| Object | Old field name | New field name |
| --- | --- | --- |
| WIP schedule | locationkey | createdFromEntity |
| WIP schedule | wipLocationkey | assignedEntity |
| WIP schedule | periodBegin | periodStartDate |
| WIP schedule | periodEnd | periodEndDate |
| WIP schedule | note | notes |
| WIP schedule project | currentPeriodBilledToDateAmount | yearToDateBillingAmount |
| WIP schedule project | currentPeriodEarnedToDateAmount | yearToDateEarnedRevenueAmount |
| WIP schedule project | currentPeriodOverBillingAmount | jobToDateOverBillingAmount |
| WIP schedule project | currentPeriodUnderBillingAmount | jobToDateUnderBillingAmount |
| WIP schedule project | currentPeriodEarnedProfit | yearToDateEarnedProfitAmount |
| WIP schedule project | note | notes |

## Permissions and other requirements

| Subscription | Projects                                                                 Customization or Platform Services |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     United States |
| User type | Business                                                                 Project Manager |
| Permissions | Projects:                                                                                                                                      Projects: List, View, Add, Edit                                                                     WIP management: List, View, Add, Edit, Delete, Post                                                                                                                                  Customization or Platform Services:                                                                                                                                      Custom reports: List, View, Add, Edit, Delete |
| Dependencies or other requirements | Access to data in the report you're running. |
