---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-bank-file-updates-ca.htm
release: 2024-R2
extracted: 2026-02-07
title: "Introducing Canadian bank file payments"
---

# Introducing Canadian bank file payments

Save time and pay Canadian vendors and employees electronically in Sage Intacct with new bank file formats. We now support bank file payments for the following Canadian banks:

- Royal Bank of Canada
- Scotiabank
- TD Bank
- Bank of Montreal

[Learn more about electronic bank file payments in Sage Intacct.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

## How it works

To start using bank file payments, first set up the accounts you'll need to process the payments.

1.  [Set up a Canadian checking account for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_account_setup).
    1.  Enter the account banking details on the **Bank file** tab.
    2.  Enter a 4-digit **FSN** (file sequence number) to start the bank file sequence with your bank.

        This number is like a check sequence number.
        - If your company has been using an integration to process Canadian bank files, you'll enter the next file number in the sequence. Make sure to include leading zeroes to make it a 4-digit sequence.
        - If your company is new to using bank files for Canada, this number will be 0001.

2.  [Set up vendors for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_vendor_setup).

    You can use the [Vendor Update for Bank Files template](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_vendor_import) to enable and update vendor bank information in bulk.

3.  If you pay employee expense reimbursements in Sage Intacct, [set up employees for bank file payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=bank-file-employee-setup).

Then, you'll select **ACH or bank file** as the payment method whenever you pay Canadian vendors and employees. Follow the bank file payment workflow to generate, upload, and confirm the payment.

## Requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services Time and Expenses                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada                                                                                                                                                                                                                            |
| User type             | Business user                                                                                                                                                                                                                     |
| Permissions           | Accounts Payable Vendors: List, View, Add, Edit, Bank details, Unmask bank details Cash Management Checking accounts: List, View, Add, Edit Time and Expenses Employees: List, View, Add, Edit, Bank details, Unmask bank details |
| Configuration         | Bank files are enabled in the following places: Sage Cloud Services subscription configuration Checking account for CAD payments Vendors with Canadian bank details Employees with Canadian bank details                          |
