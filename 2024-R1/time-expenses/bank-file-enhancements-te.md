---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Time_Expenses/2024-R1-bank-file-enhancements-te.htm
release: 2024-R1
extracted: 2026-02-07
title: "Enhancements to bank file payments"
---

# Enhancements to bank file payments

This release brings the following enhancements to bank file payments for employee expense reimbursements.

## Import and update employees in bulk through CSV import

Save time by importing employee bank file information for multiple employees at a time through CSV import. Use the new CSV import template, **Update employees for bank file payment**, to update employees in bulk.

With this import template, you can do the following:

-   Enable employees for bank file payments
    
-   Add bank details for employee expense reimbursements
    
-   Update employee bank details
    

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-import-emp-bank-details_1501x497.png)

### How it works

1.  Go to **Company > Setup > Import data**.
    
2.  Select **Template**.
    
    A CSV download appears with field information and notes for each column of data.
    
3.  Enter employee bank file information and save a local copy.
    
    The required fields change depending on the country and bank file format used for the employee.
    
4.  Return to the Company Setup Checklist page.
    
5.  Select **Import** and upload the file that you created.
    

[Learn more about using the CSV import template to update employees.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_vendor_import)

## Filter by expense currency in Select to Pay

When you pay expense reimbursements with the payment method **ACH or bank file**, the expense currency that you select determines which banks you can use to pay the reimbursements from. This ensures that you pay the reimbursements with the correct file type for the currency selected.

For example, say that you select GBP as the expense currency when setting filters on the Select Expenses to Reimburse page. Only banks that use GBP currency are available to pay the reimbursement. If you change the expense currency filter, the list of available banks will update to match the new expense currency.

## Requirements

| Subscription | Company                                                                 Sage Cloud Services                                                                 Time and Expenses |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Company                                                                                                                                                                                                               Company setup checklist: Run                                                                                                                                                                                                       Time and Expenses                                                                                                                                                                                                               Select to reimburse: Run |
| Configuration | Bank files are enabled in the following places:                                                                                                                                                                                                               Sage Cloud Services subscription configuration |
