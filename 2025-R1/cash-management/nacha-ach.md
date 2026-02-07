---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Cash_Management/2025-R1-nacha-ach.htm
release: 2025-R1
extracted: 2026-02-07
title: "Generate NACHA compliant payment files"
---

# Generate NACHA compliant payment files

[Transition to the NACHA ACH format](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Transition_to_nacha_ach_file)

[Bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

Cash Management

Use NACHA compliant file formats to improve the efficiency and security of the payment files that you upload to your bank. You can now generate NACHA compliant ACH payment files in Sage Intacct using the Bank file payment menu.

This release, we added the following NACHA-compliant files:

- NACHA - Balanced with EOF marker
- NACHA - Balanced without EOF marker
- NACHA - Unbalanced with EOF marker
- NACHA - Unbalanced without EOF marker

## How it works

1. Enable bank files if they're not already set up.
   1. Subscribe to Sage Cloud Services.
   2. Enable bank files in the Sage Cloud Services subscription.

2. Update your checking account, vendor, and employee records to use bank files and enter account details.
3. Assign permissions to users to process bank file payments.

Then, generate, upload, and confirm the ACH payment file using the Bank file menu options.

## Permissions and other requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services Time and Expenses                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                                                                                                                                                                     |
| User type             | Business user                                                                                                                                                                                                                     |
| Permissions           | Accounts Payable Vendors: List, View, Add, Edit, Bank details, Unmask bank details Cash Management Checking accounts: List, View, Add, Edit Time and Expenses Employees: List, View, Add, Edit, Bank details, Unmask bank details |
| Configuration         | Bank files are enabled in the following places: Sage Cloud Services subscription configuration Checking account for ACH payments Vendors with ACH bank details Employees with ACH bank details                                    |
