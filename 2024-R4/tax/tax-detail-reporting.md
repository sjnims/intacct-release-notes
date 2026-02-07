---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Tax/2024-R4-tax-detail-reporting.htm
release: 2024-R4
extracted: 2026-02-07
title: "Tax detail enhancements for tax submission"
---

# Tax detail enhancements for tax submission

[Tax details](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tax_details_vat)

[Submit taxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Submit_taxes)

Taxes

You can now set the tax detail filing state as Reporting or Not reporting. Transaction line items that use a tax detail set as Reporting will be included in tax submission calculations. Line items with tax details set as Not reporting will be excluded.

## How it works

1. Go to **Taxes** > **Setup** > **Details**.
2. Enter the tax detail information. The **Tax filing** field will only appear after you have selected a Tax solution.
3. Under Tax filing, select **Reporting** or **Not reporting**.

![Screenshot of Tax detail information page with callout box for Tax filing Reporting and Not reporting.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-tax-detail-reporting-create.png)

When creating a new tax detail, the Tax UID is mandatory for tax details marked as Reporting. It is optional for tax details marked as not reporting.

## Permissions and other requirements

| Subscription          | Taxes                                             |
| --------------------- | ------------------------------------------------- |
| Regional availability | All regions                                       |
| User type             | Business user with admin privileges               |
| Permissions           | Taxes Tax solution: List, View, Add, Edit, Delete |
