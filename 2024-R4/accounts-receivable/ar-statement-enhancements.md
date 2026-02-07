---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Receivable/2024-R4-ar-statement-enhancements.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements to Accounts Receivable statements"
---

# Enhancements to Accounts Receivable statements

[Accounts Receivable statements](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ar_statements)

[Edit a printed document templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_printed_document_templates)

Accounts Receivable

This idea came from you

Remove the need for customers to perform manual calculations by adding a running balance to your custom statement templates.

Currency symbols now display alongside amounts by default, adding clarity to foreign-currency statements.

![A custom statement shows a balance column following the debit and credit columns.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-ar-statement-enhancements-us.png)

## Details

-   Add a running balance to your existing custom templates using the merge field <<PRENTRY\_BALANCE>>.
-   The running balance for Accounts Receivable statements is supported in printed document templates only.
-   Standard statement templates (those with a document owner of Intacct) do not include running balances.

## How it works

### Update your custom templates for statements

1.  Go to **Customization Services** > **Printed doc templates**.
    
2.  Download the custom Accounts Receivable statement template that you want to update.
    
3.  In Microsoft Word, edit the template to make the following changes:
    
    1.  Add a column to the statement entries table for the running balance.
        
    2.  Using the Sage Intacct Printed Document Template Toolbar for Microsoft Word, add the <<PRENTRY\_BALANCE>> merge field in the table cell of the new column.
        
4.  In Sage Intacct, edit the printed document templates entry for the statement.
5.  Select **Choose file** to upload the Word document that you updated.
6.  Select **Save**.
    
7.  Test the statement by generating a printed document statement in Accounts Receivable.
    
    For Printed document template, be sure to select the custom template you updated.
    
    Preview the statement for any customer to verify that the running balance looks as you expect. If necessary, edit the Word document, upload it again, and re-test.
    

### Generate statements using the updated template

1.  Go to **Accounts Receivable** > **All** > **Invoices** > **Print or email** > **Statements**.
    
2.  Set the time period and filters as you want them.
3.  For **Printed document template**, select the name of the custom template you updated.
4.  Select **View**.
5.  Adjust the selections in the Print column as needed.
6.  Select **Print or email** to generate the PDFs.

## Permissions and other requirements

| Subscription | Accounts Receivable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Customization Services to implement running balance                                                                                                                                      Printed document templates: List, View, Add, Edit, Delete                                                                                                                                  Accounts Receivable to generate statements                                                                                                                                      Print or email statements: Run |
