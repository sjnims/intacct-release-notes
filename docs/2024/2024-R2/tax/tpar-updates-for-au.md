---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-TPAR-updates-for-AU.htm
release: 2024-R2
extracted: 2026-02-07
title: "Updates to Taxable Payments Annual Report for Australia"
---

# Updates to Taxable Payments Annual Report for Australia

We improved our Taxable Payments Annual Report (TPAR) support with the following corrections and usability enhancements.

## Gross amount paid calculation

We adjusted how we calculate the **Gross amount paid** to align with Australian Tax Office (ATO) requirements.

The following amounts are included in the **Gross amount paid** calculation:

- Payments made against bills during the reporting period, not including any credits applied
- Advances paid to the vendor to the vendor during the reporting period, whether or not they were applied

The following amounts are not included in the **Gross amount paid** calculation:

- Bill payments that were voided during the reporting period
- Advances that were voided during the reporting period
- Adjustments that were created and credit that was applied during the reporting period
- Total tax withheld, as entered in the vendor information record

[Example of how advance payments affect **Gross amount paid**](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-TPAR-updates-for-AU.htm#)

Let's say you pay an advance payment to a vendor in June, at the end of the 2023 fiscal year. Then, you apply that advance to a payment in August, at the beginning of the 2024 fiscal year.

When you run the TPAR for FY23, you'll see that the advance payment is included in the **Gross amount paid** to the vendor. When you run the TPAR for FY24, the advance amount is not included in the **Gross amount paid**, because no cash was involved in the application of the credit.

[Example of how a voided payment affects **Gross amount paid**](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-TPAR-updates-for-AU.htm#)

Say you make a payment to a supplier during the TPAR reporting period. Then, after the reporting period ends, you void the payment you made.

When you run the TPAR, you'll see that the **Gross amount paid** still includes the payment in the total for that vendor. That's because this value reflects the total amount paid during the date range that you selected. When you run the TPAR next year, the voided payment is subtracted from that year's **Gross amount paid**.

## Default value change for Statement by a supplier

The **Statement by a supplier** field, found on the TPAR tab of the vendor information record, now defaults to **No** instead of **Yes**. Since the majority of vendors do not provide a statement by a supplier, a default of **No** increases the efficiency of your data entry.

## TPAR export file Early Adopter program

It's not too late to join our Early Adopter program for the Export TPAR file option. This option exports the TPAR file in a format that's ready to upload to the ATO.

If you want to file your TPAR online and you are not an Early Adopter, you need to reformat report data manually after exporting it from the report page.

As an Early Adopter, you can have Sage Intacct generate the preformatted export file for you. The validation checks run when the file is created alert you to corrections you need to make before filing.

Interested in trying it out? [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager) to find out more.

## Requirements

| Subscription                       | Accounts Payable Taxes                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia                                                                                                     |
| User type                          | Business                                                                                                      |
| Permissions                        | Taxable payments annual report (TPAR): Run                                                                    |
| Configuration                      | Accounts Payable: Enable TPAR report                                                                          |
| Dependencies or other requirements | Requires Australia GST tax solution.                                                                          |
| Restrictions                       | The TPAR is for companies or entities that operate in Australia. Grant payments are not included in the TPAR. |
