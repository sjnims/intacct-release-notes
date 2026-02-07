---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Nonprofit/2024R4-grants-retainage.htm
release: 2024-R4
extracted: 2026-02-07
title: "Use retainage without a Construction subscription"
---

# Use retainage without a Construction subscription

[Retainage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_Retainage)

NONPROFIT

We're excited to announce that you can now use the retainage feature in Accounts Payable and Accounts Receivable without a Construction subscription.

Retainage, also known as retention, is a portion of the contract price that is intentionally withheld until the project is substantially complete. This practice ensures that the customers or vendors fulfill their obligations and complete the project to the agreed upon standards.

Retainage works with accrual only companies. You cannot use retainage with a Contracts subscription.

## How it works

### For customers, enable retainage in Accounts Receivable

1.  Add General Ledger accounts, one for retainage receivable entries and one for retainage release clearing entries.
2.  Specify retainage tracking accounts and enable retainage on Order Entry transaction definitions for customers.
3.  Optionally, set a default retainage percentage for customers.
4.  Withhold retainage amounts on customer invoices.

### For vendors, enable retainage in Accounts Payable

1.  Add a General Ledger account for retainage payable entries.
2.  Specify a retainage tracking account and enable retainage on Purchasing transaction definitions for vendors.
3.  Optionally, set a default retainage percentage for vendors.
4.  Withhold retainage amounts on vendor bills.

Go to the [Retainage overview help](https://dev-us.intacct.com/users/ia-help/helpfiles_dev/docs/en_US/help_action/Projects/retainage/retainage-overview.htm?tocpath=Applications%7CProjects%7CRetainage%7C_____1) for additional workflow details.

## Permissions and other requirements

| Subscription          | Grant Tracking and Billing or Project Costing and Billing  |
| --------------------- | ---------------------------------------------------------- |
| Regional availability | United States United Kingdom South Africa Canada Australia |
| User type             | Business Employee                                          |
| Permissions           | Projects: list, view                                       |
