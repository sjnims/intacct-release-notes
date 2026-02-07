---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-tax-France-tax-support.htm
release: 2024-R2
extracted: 2026-02-07
title: "Support for taxes in France"
---

# Support for taxes in France

For multinational companies, we understand the importance of being compliant with the country tax requirements for your international subsidiaries and offices.

To facilitate tax calculation and reporting, we added TVA Française to our list of standard tax solutions. The TVA Française tax solution provides an automated setup for the tax rates for domestic VAT in France. Using the TVA Française tax solution in one or more entities lets you access several other features exclusive to France, such as cash basis VAT capture and partial exemption. You can create tax submissions through Sage Regulatory Reporting and export your taxable transactions in the Accounting entries file (FEC) format.

## TVA Française standard tax solution

The TVA Française tax solution setup automates domestic tax rates for France.

![Screenshot of TVA - Francaise tax solution configuration page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-tva-francaise-solution-fr.png)

You can use the TVA Française tax solution with a single jurisdiction company or in an entity of a multi-entity company. This gives international companies the flexibility to set up separate entities in any region supported by a standard tax solution, to create custom tax solutions for other regions, and to use Avalara AvaTax. An entity can have only one tax solution.

## CA3 VAT return for France tax submission

You can create tax reports for domestic taxes in France using Sage Regulatory Reporting. The offline process generates a CA3 VAT return that you can use to submit domestic taxes for your company.

When you create a new tax submission in the Taxes application, Intacct sends the data to Sage Regulatory Reporting to be prepared. The source data for the submission includes taxable transactions with transaction dates between the start date of the first tax submission and the last date of the most recently closed period that hasn't already been submitted.

## FEC file support for taxes in France

Export your accounting data for the year in FEC (Fichier des écritures comptables) format.

The Accounting entries file (FEC) custom report compiles all the data related to bookkeeping and all the entries that are booked during a fiscal year. This requirement is stipulated in France by article L.47A I of the Tax Procedure Code for tax audit notifications received after January 1, 2014.

![Screenshot of Accounting Entries File (FEC) configuration page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-FEC-fr.png)

This custom report includes the 18 fields required by the French tax administration. You can run a test report or a final report and export the report in the appropriate FEC format. After you run the final report, you cannot run it again. This restriction ensures the integrity of the data in the report in compliance with tax requirements in France.

To access this custom report, go to **General Ledger > All tab > Reports > Accounting entries file (FEC)**. You must have the TVA Française standard tax solution installed and configured at the company or entity level.

## Requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | France |
| Permissions | Company                                                                                                                                                                                                               Entities: List, View, Add, Edit, Delete                                                                                                                                                                                                       General Ledger                                                                                                                                                                                                               Reports > Accounting entries file (FEC): Run, Run Final                                                                                                                                                                                                       Taxes                                                                                                                                                                                                                Tax Solutions: List, View, Add, Edit, Delete                                                                                                                                                                                                                   Tax Submissions: List, View, Add, Edit, Delete |
| Dependencies or other requirements | To use the tax submission and FEC report, you must have the TVA Française standard tax solution installed and configured at the company or entity level. |
| Restrictions | An entity can  have only one tax solution. |
