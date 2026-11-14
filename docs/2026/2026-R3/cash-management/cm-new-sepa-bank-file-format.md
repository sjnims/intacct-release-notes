---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Cash_Management/2026-R3-cm-new-sepa-bank-file-format.htm
release: 2026-R3
extracted: 2026-11-13
title: "New bank file formats for SEPA"
---

# New bank file formats for SEPA

[About bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_payment)

[Pay a vendor](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_files_pay_bills)

[Reimburse an employee](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=bank-files-pay-employee-expenses)

Cash Management

Save time and pay vendors and employees electronically in Sage Intacct with new bank file formats to support SEPA Version 9.0. These new file formats map the debtor and creditor addresses to the SEPA v09 hybrid format. The new SEPA file formats supports payments in countries that transact in euro (EUR) currency.

## How it works

To make use of the new file format, update your checking accounts to select the new file.

1.  Go to **Cash Management** > **All** or **Setup** > **Accounts** and select the required account.

    This must be an account that uses euro (EUR) as currency.

2.  On the Bank file tab, in the Enable setup section select **Enable bank file payments**, if not already selected.

3.  In the Bank setup section, from the **Bank file format** dropdown list select one of the following file formats:

    - Generic-SEPA-09 incl Debtor name - Single Payments

    - Generic-SEPA - Single Payments

    - Generic-SEPA-09

    - Generic-SEPA-09 incl Debtor name

    - BOI - SEPA-09

4.  Complete the rest of the fields that appear.

5.  Edit and verify the bank file details for your vendor and employee records.

## Permissions and other requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services Time and Expenses                                                                                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | For accounts in countries that transact in EUR currency.                                                                                                                                                                                                                                                            |
| User type             | Business                                                                                                                                                                                                                                                                                                            |
| Permissions           | Accounts Payable Vendors: List, View, Add, Edit, Bank details\*, Unmask bank details\* Cash Management Checking accounts: List, View, Add, Edit Expenses Employees: List, View, Add, Edit, Bank details\*, Unmask bank details\* \*Required to access vendor or employee account information for bank file payments |
| Configuration         | Enable bank files in the following areas: Sage Cloud Services subscription configuration Checking account Vendors with EUR bank account details Employees with EUR bank account details                                                                                                                             |
