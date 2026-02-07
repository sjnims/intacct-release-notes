---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Tax/2025-R1-tax-box-report-ea.htm
release: 2025-R1
extracted: 2026-02-07
title: "Create customized tax reports—Early adopter"
---

# Create customized tax reports—Early adopter

[Define tax report boxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=define_custom_tax_report_boxes)

[Create a tax report format](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_custom_tax_report_format)

[Run a tax report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=run_custom_tax_report)

Taxes

You no longer need to calculate your VAT or GST tax returns outside of Sage Intacct to get insight into your upcoming tax burden. With our new tax report feature, you can define tax report boxes, add those defined boxes to a tax report template, and run a tax report from that template. This lets you calculate your tax burden for a defined period so you know what to expect before you start your tax submission. Or you can select a standard or custom tax solution and run a tax report on an existing tax submission.

## Details

The tax report feature gives you the flexibility to create powerful reports that match the box reports required by your tax authority. Creating these reports is a three-step process. First you define the boxes to include in the report, then you define the tax report format. After that, you can run the tax report whenever you want insight into your company's tax burden.

## How it works

### Step 1. Define the tax report boxes

Defining your boxes is the key to creating a robust tax report. You can set the tax details to be included in the box calculation, the calculation method, the transaction type, and how the box amount is displayed in the report. Our calculation field even lets you create a derived calculation box that pulls from previously defined boxes.

![Screenshot of Tax detail box definition page](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-box-report-ea-box-definition.png)

For example, you can create **Box 1** to display the net and tax amount for all credit transactions for a selected list of tax details. Then you can create **Box 2** to display the net and tax amount of all debit transactions for that same list of tax details. When you create **Box 3**, you can use the calculation field to define it as \[Box 1\] + \[Box 2\]. When you include Box 3 in your report, it will display the sum of the amounts for Box 1 and Box 2.

![Screenshot of tax detail box definition page with calculation box selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-box-report-ea-box-calculation.png)

The tax report boxes that you define are assigned to a tax solution. The Box ID that you use must be unique within that tax solution, but you can use the same Box ID in a different tax solution. For example, a tax solution can only have one Box 1, but each tax solution can have its own Box 1.

The Box ID is used to create the box calculations. You can also define a Box label that's different than the Box ID to use in the report.

### Step 2. Create the tax report format

After you define your tax report boxes for a tax solution, you can create a tax report template for that tax solution with the boxes you want to display in the report. You can also select the columns to appear in the detailed version of the report.

![Screenshot of tax report definition page with sample definitions for VAT 100 for the United Kingdom - VAT tax solution.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-box-report-ea-format.png)

### Step 3. Run the tax report

You can run the report against a tax submission, or you can specify start and end dates. Unlike a tax submission, the report does not require you to close your books and it does not lock transactions. Instead, you get a real-time snapshot of your box calculations to help you anticipate your tax submission amounts.

![Screenshot of the tax report run page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-box-report-ea-run.png)

You can run the report as a summary, or you can run a detail report that displays all the included transactions broken down by box. Using this detail report, you can drill down to the associated tax record, the General Ledger batch, and then to the transaction.

## What's the Early adopter program?

The Early adopter program provides the new tax report feature to users of the Taxes application. As an early adopter, you can influence how we develop the product to meet your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to respond periodically to surveys and provide input.

If you want to be considered for the Early adopter program, let us know by filling out this [sign-up form](https://forms.office.com/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-M5WMWLTG4lMufjoPSTup7lUQjlWQk5DVkVESkxTNkpZNFJaMThFTjIxQS4u).

## Permissions and other requirements

| Subscription          | Taxes                                                                      |
| --------------------- | -------------------------------------------------------------------------- |
| Regional availability | All regions                                                                |
| User type             | Business                                                                   |
| Permissions           | Taxes Tax reports: List, View, Add, Edit, Delete Reports, Tax reports: Run |
