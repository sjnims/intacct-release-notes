---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-tax-enhancements.htm
release: 2024-R2
extracted: 2026-02-07
title: "Updates and enhancements for taxes"
---

# Updates and enhancements for taxes

Thanks to your feedback, we made several updates and enhancements to our existing tax features. You can review the updates to the United Kingdom and France tax solutions in the update change log. If your company operates in South Africa, you can turn offset tax credit on and off as needed. You can edit the tax solution and details in draft bills, and you can override tax schedules in transactions for Construction.

## Tax solution updates

We responded to customer feedback with updates to our standard tax solution setups for the United Kingdom. We updated the tax submission to account for transactions that are using Reverse charge in partially exempt transactions.

You can refresh your standard tax setups with the available updates on the **Tax Solutions** page.

## More flexibility for offset tax credits in South Africa

The **Offset credits on sales and purchases for VAT reporting** checkbox is available for entities in South Africa. It controls whether returns to suppliers and credits to customers are reported in the adjustment fields or as offsets in the input and output VAT fields on the VAT201 Declaration.

Previously, enabling this option was permanent. Now, users can toggle the option on or off. When you change the option status, the new behavior is applied for reports on all existing and future transactions.

## Enhanced invoice printing for Canada

Our new printed invoice template for Canada lets you generate Accounts Receivable and Order Entry invoices so that they display the totals for PST and GST in the transaction currency rather than the base currency.

## Edit tax information for bills in draft state

To help support AP Automation for companies using the Taxes application, we no longer validate tax fields while bills are in a draft state.

This means that you can continue to work on a bill and save your progress before you select a tax solution or provide tax details. You can also change this information before you post the bill. The tax solution, tax details, and the vendor are validated when you post the bill. [Learn more about details and requirements for Accounts Payable draft bills](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Accounts_Payable/2024-R2-tax-validation-relaxed-ap-bills.htm).

## Requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | All supported regions (edit draft bills)                                                                                                                                                                                                                   Canada (printed document templates)                                                                                                                                                                                                                   France (tax solution updates)                                                                                                                                                                                                                   South Africa (offset tax credits)                                                                                                                                                                                                                   United Kingdom (tax solution updates) |
| User type | Business user with admin privileges |
| Permissions | Taxes                                                                                                                                                                                                               Tax solutions: List, View, Add, Edit, Delete                                                                                                                                                                                                                   Tax submission: List, View, Add, Edit, Delete |
