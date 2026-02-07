---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Tax/2024-R4-tax-Canadian-solution-enhancements.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements for Canadian Sales Tax"
---

# Enhancements for Canadian Sales Tax

[Taxes application overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Taxes_application)

[Set up a standard tax solution](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_taxes)

[Update a standard VAT or GST setup](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Update_standard_setup)

Taxes

Use our streamlined Canadian Sales Tax solution to calculate and submit taxes for Federal and Harmonized Sales Tax. Exclude transaction line items from being included in tax submissions using tax detail reporting.

## Tax solution setup changes

To streamline Canadian tax reporting and reduce configuration hurdles, we made several changes to the Canadian Sales Tax solution setup. We revised the tax solution to only include tax details and schedules and added new tax details and schedules to cover additional tax situations. We eliminated redundant and expired tax codes, and we added functionality that lets you make a tax schedule inactive.

Review the specific changes and refresh your standard tax setups with the available updates on the **Tax Solutions** page.

Users must **Turn off tax detail filtering** and **Enable override of tax schedule on document entry** to use the updated Canadian Sales Tax solution.

## Set tax filing state for tax details

To support tax submissions for Harmonized Sales Tax, we introduced a new setting for tax details. You can now set the tax detail filing state as Reporting or Not reporting. Transaction line items that use a tax detail set as Reporting are included in tax submission calculations. Line items with tax details set as Not reporting are excluded.

We migrated all existing federal tax details in the Canadian Sales Tax solution to Reporting. Additionally, we migrated all existing provincial tax details to Not reporting.

![Screenshot of Tax detail information page with callout box around Tax rate and Tax filing fields.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-detail-reporting_800x496.png)

When creating a new tax detail, the Tax UID is mandatory for tax details marked as Reporting. It is optional for tax details marked as Not reporting.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | Canada |
| User type | Business user with admin privileges |
| Permissions | Taxes                                                                                                                                                                                                               Tax solutions: List, Add, View, Edit, Delete |
