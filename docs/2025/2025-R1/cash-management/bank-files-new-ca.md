---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Cash_Management/2025-R1-bank-files-new-ca.htm
release: 2025-R1
extracted: 2026-02-07
title: "New formats for Canadian bank file payments"
---

# New formats for Canadian bank file payments

[Bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

Cash Management

Save time and pay Canadian vendors and employees electronically in Sage Intacct with new bank file formats. We now support bank file payments for the following Canadian banks:

- Central One Credit Union
- Desjardin Bank
- National Bank
- ATB Financial

## How it works

To start using bank file payments with this bank, first set up the checking accounts and vendors you'll need use to process payments.

### Step 1. Set up Canadian checking accounts for bank file payments

1. Go to **Cash Management** > **All** > **Checking** to add or edit an account.
2. Go to the **Bank file** tab for the account.
3. Select the appropriate **Bank file format** and enter account details.
4. Enter a 4-digit **FSN** (file sequence number) to start the bank file sequence with your bank.

   [About the FSN](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Cash_Management/2025-R1-bank-files-new-ca.htm#)

   This number is like a check sequence number.
   - If your company has been using an integration to process Canadian bank files, enter the next file number in the sequence. Include leading zeroes to make it a 4-digit sequence.
   - If your company is new to using bank files for Canada, this number will be 0001.

### Step 2. Set up vendors for bank file payments

1. Go to **Accounts Payable** > **All** > **Vendors** to edit vendors.
2. Edit vendors you want to pay with bank files.
3. Go to the **Bank file** tab.
4. Select **Enable bank file payments**.
5. Enter the vendor's account details.
6. Fill in any remaining fields as desired in other tabs.
7. Save your changes.

### Step 3. Optionally, set up employees

1. Go to **Time & Expenses** > **All** > **Employees** to edit employees.
2. Edit employees you want to pay with bank files.
3. Go to the **Bank file** tab.
4. Select **Enable bank file payments**.
5. Enter the employee's account details.
6. Fill in any remaining fields as desired in other tabs.
7. Save your changes.

### Step 4. Pay bills and generate payment files

1. Select **ACH or bank file** as the payment method whenever you pay Canadian vendors and employees.
2. Follow the bank file payment workflow to generate, upload, and confirm the payment.

## Requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services Time and Expenses                                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada                                                                                                                                                                                                                            |
| User type             | Business                                                                                                                                                                                                                          |
| Permissions           | Accounts Payable Vendors: List, View, Add, Edit, Bank details, Unmask bank details Cash Management Checking accounts: List, View, Add, Edit Time and Expenses Employees: List, View, Add, Edit, Bank details, Unmask bank details |
| Configuration         | Bank files are enabled in the following places: Sage Cloud Services subscription configuration Checking account for CAD payments Vendors with Canadian bank details Employees with Canadian bank details                          |
