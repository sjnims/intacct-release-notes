---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Cash_Management/2026-R1-cm-new-bank-file-format-HSBC.htm
release: 2026-R1
extracted: 2026-02-07
title: "New bank file format for HSBC SEPA"
---

# New bank file format for HSBC SEPA

[Bank files](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

[Pay a vendor](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_files_pay_bills)

[Reimburse an employee](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=bank-files-pay-employee-expenses)

Cash Management

Save time and pay vendors and employees electronically in Sage Intacct with a new bank file format. We now support an HSBC SEPA payment file that includes the bank account and vendor or employee address details in the file. The new SEPA file format supports payments in euro (EUR) currency for banks in France and the UK.

## How it works

To make use of the new file format, follow these steps:

1.  Set up the relevant account to use the new file format.
    
    1.  Go to **Cash Management** > **All** or **Setup** > **Accounts** and select the required account.
        
        This must be an account that uses euro (EUR) as currency.
        
    2.  On the Bank file tab, in the Enable setup section select **Enable bank file payments**, if not already selected.
    3.  In the Bank setup section, from the **Bank file format** dropdown list select the appropriate HSBC-SEPA file with address, and complete the rest of the fields that appear.
        
        ![Bank file tab of an account, with HSBC-SEPA v13 selected](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-cm-HSBC-SEPA-file.png)
        
2.  For vendors, in Accounts Payable, confirm that the vendor is set up to enable bank file payments.
    
    1.  Go to **Accounts Payable** > **All** or **Setup** > **Vendors** and select the vendor that you want to be able to pay using the new file format.
    2.  On the Bank file tab, in the Enable setup section ensure that **Enable bank file payments** is selected.
    3.  In the Bank file payments section, ensure that the correct payment country is selected, and that the vendor's payment information and address details are present.
3.  For employees, in Expenses, confirm that the employee is set up to enable bank file payments.
    
    1.  Go to **Expenses** > **All** or **Setup** > **Employees** and select the employee that you want to be able to pay using the new file format.
    2.  On the Reimbursement information tab, in the Enable setup section ensure that **Enable bank file payments** is selected.
    3.  In the Bank file payments section, ensure that the correct payment country is selected, and that the employee's payment information and address details are present.

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Cash Management                                                                 Sage Cloud Services                                                                 Time and Expenses |
| --- | --- |
| Regional availability | For accounts using EUR currency in the following countries:                                                                                                                                                                                                               France                                                                                                                                                                                                                   United Kingdom |
| User type | Business |
| Permissions | Accounts Payable                                                                                                                                                                                                               Vendors: List, View, Add, Edit, Bank details\*, Unmask bank details\*                                                                                                                                                                                                       Cash Management                                                                                                                                                                                                               Checking accounts: List, View, Add, Edit                                                                                                                                                                                                       Expenses                                                                                                                                                                                                               Employees: List, View, Add, Edit, Bank details\*, Unmask bank details\*                                                                                                                                                                                                       \*Required to access the vendor's or employee's account information for bank file payments |
| Configuration | Bank files are enabled in the following places:                                                                                                                                                                                                               Sage Cloud Services subscription configuration                                                                                                                                                                                                                   Checking account                                                                                                                                                                                                                                                                                            Vendors with euro bank details                                                                                                                                                                                                                   Employees with euro bank details |
