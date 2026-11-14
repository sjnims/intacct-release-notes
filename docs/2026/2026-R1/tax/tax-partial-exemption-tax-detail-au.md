---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Tax/2026-R1-tax-partial-exemption-tax-detail-au.htm
release: 2026-R1
extracted: 2026-11-13
title: "Reduced input tax credits for tax details in Australia"
---

# Reduced input tax credits for tax details in Australia

[Set up partial exemption](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_partial_exemption)

[Enter partial exemption](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enter_partial_exemption)

Taxes

This idea came from you

Capturing the correct taxes can be complex when part of a purchase is exempt from taxation. With this enhancement, you can set Reduced Input Tax Credit (RITC) percentages for input tax details at the tax detail level for entities using the Australia tax solution. This gives you greater flexibility and accuracy when applying exemptions to line items in Accounts Payable and Purchasing transactions.

## Key benefits

- **More flexibility**: Apply different RITC exemption rates for the same tax detail across multiple entities.

- **Entity-level control**: Enable RITC only for entities that make qualifying purchases.

- **Streamlined entry**: Configure line items to default as RITC for faster data entry.

- **Data accuracy**: Maintain transactional integrity by accurately calculating recoverable and non-recoverable tax portions.

## How it works

You can enable RITC at the company level for any entity using the standard tax solution for Australia. At that time, you can choose to have RITC selected by default for all transaction lines. You can also assign an unrecoverable tax account.

![Screenshot of the RITC enablement section of the entity information page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-tax-partial-exemption-tax-detail-au-enable.png)

Then, you can configure your tax details to set a default RITC percentage and assign custom percentages for specific entities.

![Screenshot of the RITC configuration section of the tax detail information page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-tax-partial-exemption-tax-detail-au-detail.png)

When RITC is enabled, each line item in a bill displays an RITC checkbox. For the lines checked as RITC, Sage Intacct does the following:

- Calculates recoverable and non-recoverable tax amounts.

- Captures recoverable amounts for tax reporting.

- Posts non-recoverable amounts to the appropriate General Ledger account.

## Permissions and other requirements

| Subscription          | Accounts Payable Purchasing Taxes                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia                                                                                                                                                                                               |
| User type             | Business                                                                                                                                                                                                |
| Permissions           | Company Entities: List, View, Add, Edit Accounts Payable Bills: List, Add, Edit, Post, Delete Purchasing Purchasing transactions: List, Add, Edit, Post, Delete Taxes Tax detail: List, View, Add, Edit |
| Restrictions          | You must enable RITC in each applicable entity and configure RITC for each tax detail. You must enter transactions with RITC line items at the entity level.                                            |
