---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Industry_solutions/2024-R4-construction-management.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements in Sage Construction Management"
---

# Enhancements in Sage Construction Management

[Integration tips for Sage Construction Management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tips_Integrate_SageConstrMgt)

CONSTRUCTION

Sage Construction Management is an all-in-one cloud solution that provides a complete set of project management features. This solution aligns your operations and finance data so you can win more business and execute projects more efficiently. For more information, visit the [Sage Construction Management web page](https://www.sage.com/en-us/products/sage-construction-management/).

## Details

In this release we've made several enhancements to Sage Construction Management.

### Improvements in the Accounting Link for Sage Intacct

- You can now integrate the following with Sage Intacct:
  - **Labor timecards.** Sage Construction Management includes options for selecting the right data source for the project’s timesheet fields. You can specify Sage Construction Management labor codes in Sage Intacct and select the required time types for Sage Intacct.
  - **Equipment timecards.** You can specify the linking preferences for Sage Intacct and map Sage Construction Management equipment codes to Sage Intacct items.
  - **Miscellaneous expenses.** You can specify whether the posting rules are selected according to the payment type (such as cash or Mastercard) or according to the expense type (such as food or fuel) for the employee and the vendor.
- You can now post fields to Intacct even if they're over Intacct's 25 character limit. A new posting preference truncates such fields instead of preventing them from posting.
- When synchronizing linked employees, you can now post employee IDs to Sage Intacct.
- You can now retrieve Sage Intacct payments that are over 180 days old.
- The posting process stops if a project or prime contract number exceeds the maximum number of 20 characters. For other fields, such as customers and estimates, the posting process depends on posting preferences.
- Terms used in Sage Construction Management and Sage Intacct for prime contract types are linked.
- Billing terms are sent to Sage Intacct using the terms selected in the company profile of the customer on the prime contract.
- The project, cost budget, and prime contract sync to Intacct separately to avoid deleting the entire project and syncing again if the prime contract syncs incorrectly. You can now resync projects, cost budgets, and prime contracts when Sage Construction Management gets updated with new values and update them after they're posted.
- You can now post prime invoices with stored materials.
- You can now post or repost prime contract information.
- When posting and importing vendors, payment terms are included.

### New reports

- A report for Sage Intacct Work In Progress (WIP) PM forecasting export.
- Analytics - contract, invoice, and ERP job to date costs.
- Sage Construction Management cost budgets / commitments / gross cost at completion vs ERP job to date costs.
- Detailed summary with ERP job to date costs.
- Financial summary using Sage Construction Management prime invoice totals and ERP job to date costs.
- New BI summary dashboards for retainage:
  - Cross project - prime and sub invoice retainage overview.
  - Prime and sub invoice retainage overview.

To learn more about these and other enhancements, see the [Sage Construction Management release notes](https://help.sagecm.corecon.com/Content/ReleaseNotes/RNs-home.htm).

## More information

- For more information, visit the [Sage Construction Management web page](https://www.sage.com/en-us/products/sage-construction-management/).
- Visit the [Construction Management Help Center](https://help.sagecm.corecon.com/Content/Home.htm) to learn how to use Sage Construction Management.
- Sign up for [training at Sage University](https://www.sageu.com/sagecm).

## Permissions and other requirements

Both Sage Intacct Construction and the Sage CM Accounting Link for Sage Intacct are required.

| Subscription          | Sage Construction Management Sage Intacct Construction                                          |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States                                                                  |
| Implementation        | Use the Sage Intacct Accounting Link (required) to integrate with Sage Construction Management. |
