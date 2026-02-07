---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Reporting-Financial/2024-R1-schedule-validation.htm
release: 2024-R1
extracted: 2026-02-07
title: "Improved process for setting up report schedules"
---

# Improved process for setting up report schedules

When you create or update a report schedule, Intacct checks that the schedule will not produce more than 31 reports for past dates. This limit prevents performance problems that could result from running too many reports at one time.

For example, suppose you create a schedule to run a report daily for a year. At the end of the year, you review and decide to continue this schedule indefinitely. You edit the schedule and remove the end date, but you inadvertently do not change the start date. Running this schedule would recreate the report for every day from that start date to today.

We chose the limit of 31 reports to allow for a full month of daily reports.

## Requirements

| Subscription | General Ledger |
| --- | --- |
| Regional availability | All regions |
| Permissions | Financials: List, View, Add, Edit                                                                 Also, for any specific report you're scheduling: Run |
