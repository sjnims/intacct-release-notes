---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Cash_Management/2025-R2-sepa-file-updates.htm
release: 2025-R2
extracted: 2026-02-07
title: "Support for HSBC SEPA bank files"
---

# Support for HSBC SEPA bank files

[Bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

Cash Management

Save time and pay vendors and employees electronically in Sage Intacct with a new bank file format. We now support a SEPA bank payment file for use with HSBC bank accounts.

## How it works

To start using SEPA bank files with HSBC, first set up the checking accounts and vendors you'll need use to process payments.

### Step 1. Set up checking accounts for bank file payments

1.  Go to **Cash Management** > **All** > **Checking** to add or edit an account.
    
2.  Go to the **Bank file** tab for the account.
    
3.  Select **Enable bank file payments**.
    
    Sage Cloud Services must be enabled for this option to appear.
    
4.  Select the appropriate **Bank file format**.
    
5.  Enter your HSBC account details.
    
6.  Enter the bank address.
    
7.  Save your changes.
    

### Step 2. Set up vendors for bank file payments

1.  Go to **Accounts Payable** > **All** > **Vendors** to edit vendors.
    
2.  Edit the vendors that you want to pay with bank files.
    
3.  Go to the **Bank file** tab.
    
4.  Select **Enable bank file payments**.
    
5.  Enter the vendor's account details.
    
6.  Save your changes.
    

### Step 3. Optionally, set up employees

1.  Go to **Time** or **Expenses** > **All** > **Employees** to edit employees.
    
2.  Edit the employees that you want to pay with bank files.
    
3.  Go to the **Bank file** tab.
    
4.  Select **Enable bank file payments**.
    
5.  Enter the employee's account details.
    
6.  Save your changes.
    

### Step 4. Pay bills and generate payment files

1.  Select **ACH or bank file** as the payment method whenever you pay vendors and employees using the HSBC account.
    
2.  Follow the bank file payment workflow to generate, upload, and confirm the payment.
    

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Cash Management                                                                 Sage Cloud Services                                                                 Time and Expenses |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts Payable                                                                                                                                                                                                               Vendors: List, View, Add, Edit, Bank details, Unmask bank details                                                                                                                                                                                                       Cash Management                                                                                                                                                                                                               Checking accounts: List, View, Add, Edit                                                                                                                                                                                                       Time and Expenses                                                                                                                                                                                                               Employees: List, View, Add, Edit, Bank details, Unmask bank details |
| Configuration | Bank files are enabled in the following places:                                                                                                                                                                                                               Sage Cloud Services subscription configuration                                                                                                                                                                                                                   Checking account for EUR currency payments                                                                                                                                                                                                                   Vendors                                                                                                                                                                                                                                                                                            Employees |
