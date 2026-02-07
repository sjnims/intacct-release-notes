---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-T5018-for-CAN.htm
release: 2024-R2
extracted: 2026-02-07
title: "T5018 for Canada—Early adopter"
---

# T5018 for Canada—Early adopter

If you operate a Canadian company or entity that's required to report payments made to contractors, you can now generate a T5018 XML file in Sage Intacct when you join our Early adopter program. With T5018 information in Intacct, you can quickly and easily file your T5018 with the Canadian Revenue Agency (CRA).

## Details

The T5018, also known as the Statement of Contract Payments, captures the payments that you make to contractors and subcontractors in the construction industry. If construction activities and payments account for more than 50% of your business income, the CRA expects you to file a T5018 slip.

The CRA provides guidelines to determine if you need to file a T5018 slip and which vendors you need to include. Based on their guidelines, you can enable T5018 for applicable vendors. Payments that you make to T5018-enabled vendors are automatically included in the XML file for the financial year in which payment occurred.

## What's included in the T5018 XML file

- Your payer information
- Vendor details, such as the vendor business number or social insurance number (SIN)
- Vendor contact information
- Total amount you paid to the vendor during the reporting period

## How it works

1.  Enable T5018 in Configure Accounts Payable.

    You can enable T5018 for your entire company or for individual entities. If you create all vendors at the top level, enable T5018 at the top level.

2.  Assign run permissions for T5018 to the users who will run the report.
3.  Enable T5018 in the vendor record for each vendor that you want to include.

    For each vendor, include either a business number or Social Insurance Number (SIN).

4.  Go to **Accounts Payable** > **All** > **Reports** > **T5018** > **T5018 report** to run the report.

    Review the report to verify that the amounts are as you expect. You are now ready to export your XML file.

5.  Go to **Accounts Payable** > **All** > **Reports** > **T5018** > **Export T5018 form**.
6.  Export to XML.
7.  Use the data captured to file your T5018 with the CRA.

## Join the Early Adopter program

If you would like to consider being an early adopter, talk to your [Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Requirements

| Subscription          | Accounts Payable Taxes                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada                                                                                                                       |
| Permissions           | T5018 report for Canada: Run                                                                                                 |
| Configuration         | Accounts Payable: Enable T5018                                                                                               |
| Restrictions          | The T5018 is for companies or entities that operate in Canada. Advances are included in the T5018. Credits are not included. |
