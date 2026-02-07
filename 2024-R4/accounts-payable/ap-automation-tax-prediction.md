---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-automation-tax-prediction.htm
release: 2024-R4
extracted: 2026-02-07
title: "AP Automation support for tax solutions"
---

# AP Automation support for tax solutions

[Tax handling in AP Automation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_automation_tax_handling)

Accounts Payable

AP Automation now populates tax information for companies that use the Taxes application. This means that less manual data entry is needed before posting in order to capture the transaction tax.

AP  Automation, an add-on feature to Accounts Payable, streamlines your data entry process to save you time and money. Intacct automatically creates draft bills from bill documents that you email or upload to Sage Intacct. Bill details are automatically populated for you, using data from the original document and the vendor information record.

For companies that do not use the Tax application, tax details continue to populate as a separate line on the transaction.

## Details

When you upload or email a bill and the predicted location is a taxable location, AI determines the header-level tax information for the transaction.

![ ""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-APBA-tax-predictions.png)

## How it works

Tax-related fields are populated in the following way:

1.  The **Transaction has tax implications** option is selected when the predicted location has an assigned tax solution.
2.  **Tax solution** is derived from the predicted location.
3.  The **Inclusive tax** option is selected when the previous bill for the vendor had inclusive tax.
4.  Line entries display the **Transaction tax** when the original document has tax information for each line.

When you review the automated transactions, verify the line entries and tax information, then select the **Tax details** for each line before you post.

## Permissions and other requirements

| Subscription          | Accounts Payable Taxes                                                          |
| --------------------- | ------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                     |
| User type             | Business                                                                        |
| Permissions           | Accounts Payable Bills: List, View, Add, Edit                                   |
| Configuration         | Contact your account manager or Channel Executive to start using AP Automation. |
