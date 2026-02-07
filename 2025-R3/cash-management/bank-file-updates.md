---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Cash_Management/2025-R3-bank-file-updates.htm
release: 2025-R3
extracted: 2026-02-07
title: "New NACHA payment file formats"
---

# New NACHA payment file formats

[Transition to the NACHA ACH file format](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Transition_to_nacha_ach_file)

[About bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_payment)

Cash Management

Save time and pay vendors and employees electronically in Sage Intacct with new bank file formats. We now support NACHA bank payment files that include the ID numbers for vendors and employees being paid.

New file formats include:

-   NACHA - Balanced without EOF marker incl ID number
    
-   NACHA - Balanced with EOF marker incl ID number
    
-   NACHA - Unbalanced with EOF marker incl ID number
    
-   NACHA - Unbalanced without EOF marker incl ID number
    

## How it works

To start using ACH bank files that have ID numbers included, first set up the checking accounts you'll need use to process payments.

[Step 1. Add or edit checking accounts for bank file payments](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Cash_Management/2025-R3-bank-file-updates.htm#)

1.  Go to **Cash Management** > **All** > **Checking** to add or edit an account.
    
2.  Go to the **Bank file** tab for the account.
    
3.  Select **Enable bank file payments**.
    
    Sage Cloud Services must be enabled for this option to appear.
    
4.  Select the appropriate **Bank file format**.
    
5.  Enter your bank account details.
    
6.  Save your changes.
    

[Step 2. Pay bills and generate payment files](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Cash_Management/2025-R3-bank-file-updates.htm#)

1.  Select **ACH or bank file** as the payment method whenever you pay vendors and employees using the account you set up in step 1.
    
2.  Follow the bank file payment workflow to generate, upload, and confirm the payment.
    

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Cash Management                                                                 Sage Cloud Services                                                                 Time and Expenses |
| --- | --- |
| Regional availability | United States |
| User type | Business |
| Permissions | Accounts Payable                                                                                                                                                                                                               Vendors: List, View, Add, Edit, Bank Details, Unmask Bank Details                                                                                                                                                                                                       Cash Management                                                                                                                                                                                                               Checking accounts: List, View, Add, Edit                                                                                                                                                                                                       Expenses                                                                                                                                                                                                               Employees: List, View, Add, Edit, Bank Details, Unmask Bank Details                                                                                                                                                                                                       Time                                                                                                                                                                                                               Employees: List, View, Add, Edit, Bank Details |
| Configuration | Bank files are enabled in the following places:                                                                                                                                                                                                               Sage Cloud Services subscription configuration                                                                                                                                                                                                                   Checking account for USD currency payments                                                                                                                                                                                                                   Vendors                                                                                                                                                                                                                                                                                            Employees |
