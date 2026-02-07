---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Tax/2025-R2-tax-solution-NZ.htm
release: 2025-R2
extracted: 2026-02-07
title: "Support for taxes in New Zealand—Early Adopter"
---

# Support for taxes in New Zealand—Early Adopter

[Set up taxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_taxes)

[Add a tax solution](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tax_solutions)

[Create tax objects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_Tax_Objects)

[Submit a tax return](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_tax_submissions)

Taxes

To facilitate tax calculation and reporting, we added a New Zealand tax solution to our list of standard tax solutions. The New Zealand tax solution provides an automated setup for the tax rates for domestic GST in New Zealand.

When you install the New Zealand tax solution in one or more entities, you can generate tax submissions using our manual tax submission process.

## Details

The New Zealand standard tax solution provides pre-configured tax details and tax schedules for New Zealand domestic GST that you can use in your company or entities. To take full advantage of this setup, you must create your own Contact tax groups, Item tax groups, and Tax schedule maps. [Learn more about creating custom tax objects for a tax solution](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_Tax_Objects).

When you create a tax submission in an entity using the New Zealand tax solution, you can track transactions that are included for a selected period and then run reports to extract the data needed for filing. After you complete your manual submission, you can mark the submitted transactions as filed.

Users must **Turn off tax detail filtering** and **Enable override of tax schedule on document entry** to use the New Zealand tax solution.

## How it works

### Step 1. Install a tax solution

1.  Go to **Taxes** > **Setup** > **Tax solutions** and select **Add**.
2.  For **Type**, select **Standard**.
3.  In the **Tax solution** dropdown, select **New Zealand GST - SYS**.
4.  Optionally, enter a **Description**.
5.  Select the **Status**.  
    The status is set as **Active** by default. You can change the status to **Inactive** if you want to hide the tax solution's associated tax objects from filter views.
6.  Select **Save**.

Download the [Update change log](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Update_standard_setup) to review a list of the tax objects included in the New Zealand standard tax solution.

### Step 2. Prepare a tax return

1.  Go to **Taxes** > **All** > **Tax submissions** and select **New tax submission**.
2.  Enter the information for your tax solution and select **Prepare tax data**.
3.  On the **Processing data offline** page, enter the start and end dates for the submission period.
4.  Optionally, select the checkbox to **Include late transactions**.
5.  Select **Continue**.

The tax records in the submission period are locked and your tax submission appears on the Tax submission list page. From that page, you can View, Edit, or Delete your tax submission. Deleting a tax submission in progress releases the locked records.

## What's the Early Adopter program?

The Early Adopter program provides New Zealand tax support to users of the Taxes application. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early Adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early Adopter participants are expected to respond periodically to surveys and provide input.

If you want to be considered for the Early Adopter program, let us know by filling out this [sign-up form](https://forms.office.com/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-M5WMWLTG4lMufjoPSTup7lUODc5QzBRWkcxRlRLOVFKU1dPUk83TVpGNi4u).

## Permissions and other requirements

| Subscription          | Taxes                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Regional availability | Australia New Zealand                                                                             |
| User type             | Business user with admin privileges                                                               |
| Permissions           | Taxes Tax solutions: List, View, Add, Edit, Delete Tax Submissions: List, View, Add, Edit, Delete |
