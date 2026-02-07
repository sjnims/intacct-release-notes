---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Tax/2024-R3-tax-German-tax-support.htm
release: 2024-R3
extracted: 2026-02-07
title: "Support for taxes in Germany"
---

# Support for taxes in Germany

[Taxes application overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Taxes_application)

[Set up standard tax solution](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_taxes)

[Update a standard VAT or GST setup](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Update_standard_setup)

[Submit taxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Submit_taxes)

[About GoBD data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_gobd_data_export)

[About DATEV data export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_DATEV_data_export)

Taxes

For multinational companies, we understand the importance of being compliant with the country tax requirements for your international subsidiaries and offices.

To facilitate tax calculation and reporting, we added a German tax solution to our list of standard tax solutions. The Deutsche Umsatzsteuer tax solution provides an automated setup for the tax rates for domestic VAT in Germany.

Using the Deutsche Umsatzsteuer tax solution in one or more entities lets you access several other tax and compliance features exclusive to Germany. Generate tax submissions using Sage Regulatory Reporting and electronically submit your German taxes via ELSTER. Create custom reports for your VAT transactions, and export your accounting date in GoBD and DATEV formats for external auditors and tax consultants.

## Deutsche Umsatzsteuer standard tax solution

The Deutsche Umsatzsteuer tax solution setup automates domestic tax rates for Germany.

You can use the Deutsche Umsatzsteuer tax solution with a single jurisdiction company or in an entity of a multi-entity company. This gives international companies the flexibility to set up separate entities in any region supported by a standard tax solution, to create custom tax solutions for other regions, and to use Avalara AvaTax. An entity can have only one tax solution.

## UStVA German tax submission through ELSTER

You can create tax reports for domestic taxes in Germany using Sage Regulatory Reporting. The offline process generates a UStVA return that you can use to submit domestic taxes electronically through ELSTER for your company.

When you create a new tax submission in the Taxes application, Sage Intacct sends the data to Sage Regulatory Reporting to be prepared. The source data for the submission includes taxable transactions with transaction dates between the start date of the first tax submission and the last date of the most recently closed period that hasn't already been submitted.

## Tax and accounting compliance exports

Export your accounting data in GoBD and DATEV formats.

### GoBD export

The GoBD data export compiles master data and transactional data for the period defined by the user. This allows companies operating in Germany to provide an on-demand response to German tax authority requests. The export format is compliant with and audit-ready for import to the tax inspector's software.

For more information on this export, see the [GoBD data export for Germany](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/General_Ledger/2024-R3-gl-german-gobd.htm) release note.

To access this compliance report, go to **General Ledger > All tab > Reports > GoBD export**. You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level.

### DATEV export

The DATEV export allows companies to securely exchange financial and accounting data between different software applications. It is used by accountants, tax consultants, and related businesses. The DATEV export is a zipped file that contains DATEV-format CSV files for vendors and customers, General Ledger entries, and General Ledger accounts.

For more information on these reports, see the [DATEV data export for Germany](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/General_Ledger/2024-R3-gl-german-datev.htm) release note.

To access this compliance report, go to **General Ledger > All tab > Reports > DATEV export**. You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level.

## Permissions and other requirements

| Subscription          | Taxes                                                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Germany                                                                                                                                                                                                                 |
| User type             | Business user with admin privileges                                                                                                                                                                                     |
| Permissions           | Company Entities: List, View, Add, Edit, Delete General Ledger Reports > GoBD export: Run Reports > DATEV export: Run Taxes Tax Solutions: List, View, Add, Edit, Delete Tax Submissions: List, View, Add, Edit, Delete |
