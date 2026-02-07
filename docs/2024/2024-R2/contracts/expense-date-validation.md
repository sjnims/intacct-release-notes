---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Contracts/2024-R2-expense-date-validation.htm
release: 2024-R2
extracted: 2026-02-07
title: "Expense schedule date validation"
---

# Expense schedule date validation

We added a new date validation to the expense schedule. The scheduled posting date for an expense entry must now be on or after the expense template start date. This change reduces issues if the expense is later canceled.

For example, say that the expense template start date is April 1, 2024 and the expense template end date is March 31, 2025. Sage Intacct automatically schedules the expense to be recognized between April 1, 2024 and March 31, 2025.

Say that you then try to edit one of the expense's scheduled posting dates to March 15, 2024. Sage Intacct displays an error as March 15,2024 is before the expense template start date of April 1, 2024.

## Requirements

| Subscription          | Contract expense recognition    |
| --------------------- | ------------------------------- |
| Regional availability | All regions, excluding France   |
| Permissions           | Contract: List, View, Edit, Add |
