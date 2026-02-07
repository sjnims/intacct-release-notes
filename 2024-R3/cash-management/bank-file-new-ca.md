---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Cash_Management/2024-R3-bank-file-new-ca.htm
release: 2024-R3
extracted: 2026-02-07
title: "New formats for Canadian bank file payments"
---

# New formats for Canadian bank file payments

[Bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

Cash Management

Save time and pay Canadian vendors and employees electronically in Sage Intacct with new bank file formats. We now support bank file payments for the following Canadian banks:

-   Canadian Imperial Bank of Commerce (CIBC)
-   RBC accounts that were previously with HSBC

[Learn more about electronic bank file payments in Sage Intacct.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

## How it works

To start using bank file payments with this bank, first set up the accounts you'll need to process the payments.

1.  [Set up a Canadian checking account for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_account_setup).
    
    1.  Go to the **Bank file** tab.
        
    2.  Select the file format and enter account details.
        
    3.  Enter a 4-digit **FSN** (file sequence number) to start the bank file sequence with your bank.
        
        [About the FSN](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Cash_Management/2024-R3-bank-file-new-ca.htm#)
        
        This number is like a check sequence number.
        
        -   If your company has been using an integration to process Canadian bank files, you'll enter the next file number in the sequence. Include leading zeroes to make it a 4-digit sequence.
            
        -   If your company is new to using bank files for Canada, this number will be 0001.
            
        
2.  [Set up vendors for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_vendor_setup).
    
3.  If you pay employee expense reimbursements in Sage Intacct, [set up employees for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=bank-file-employee-setup).
    

Then, you'll select **ACH or bank file** as the payment method whenever you pay Canadian vendors and employees. Follow the bank file payment workflow to generate, upload, and confirm the payment.

**Note for CIBC**: For your first file, try uploading the generated file as-is with your bank. If CIBC does not accept the file, rename the file to follow CIBC conventions as outlined below.

`clientdefinedname.CIBC1464.P.dat`

## Requirements

| Subscription | Accounts Payable                                                                 Cash Management                                                                 Sage Cloud Services                                                                 Time and Expenses |
| --- | --- |
| Regional availability | Canada |
| User type | Business user |
| Permissions | Accounts Payable                                                                                                                                                                                                               Vendors: List, View, Add, Edit, Bank details, Unmask bank details                                                                                                                                                                                                       Cash Management                                                                                                                                                                                                               Checking accounts: List, View, Add, Edit                                                                                                                                                                                                       Time and Expenses                                                                                                                                                                                                               Employees: List, View, Add, Edit, Bank details, Unmask bank details |
| Configuration | Bank files are enabled in the following places:                                                                                                                                                                                                               Sage Cloud Services subscription configuration                                                                                                                                                                                                                   Checking account for CAD payments                                                                                                                                                                                                                   Vendors with Canadian bank details                                                                                                                                                                                                                   Employees with Canadian bank details |
