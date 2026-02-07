---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Accounts_Receivable/2025-R1-ar-statement-enhancements.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhancements to AR statements"
---

# Enhancements to AR statements

[Install and configure the Sage Intacct Printed Document Toolbar](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Install_and_configure_doc_template_toolbar)

Accounts Receivable

Sage Intacct is dedicated to enhancing your experience with Accounts Receivable statements. Last release, we introduced running balances and currency symbols. This time, we’re excited to announce support for custom fields in templates and more convenient processing for large statement runs.

## Custom field support

Custom AR statement templates now support custom fields for the following objects:

| Object        | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| Customer      | Custom fields are supported in the statement header.                                          |
| Invoice       | Header-level custom fields for invoices are supported in the statement's PRENTRY table.       |
| AR adjustment | Header-level custom fields for AR adjustments are supported in the statement's PRENTRY table. |

Because statements focus on header-level details, line-level custom fields are not supported.

### How it works

1. Go to **Customization Services** or **Platform Services** > **All tab** > **Printed doc templates**.
2. Download the custom Accounts Receivable statement template that you want to update.
3. In Microsoft Word, use the Sage Intacct Printed Document Template Toolbar for Microsoft Word to add the custom fields to your template and save changes.
4. In Sage Intacct, edit the printed document templates entry for the statement.
5. Select **Include custom fields**.
6. Select **Choose file** to upload the Word document that you updated.
7. Select **Save**.
8. Test the statement by generating a printed document statement in Accounts Receivable.

    For Printed document template, be sure to select the custom template you updated.

    Preview the statement for any customer to verify that the running balance looks as you expect. If necessary, edit the Word document, upload it again, and re-test.

## Increased capacity for large AR statement runs

Now, when you select many statements to print or email, Sage Intacct processes the statements through the job queue. This means you can move on to the next job activity without delay. For printed statements, you can then return to print the PDF when it's convenient for you.

After processing is complete, you can view the results as follows:

- For print statements, go to **Accounts Receivable** > **Reports** > **My stored reports** to view the PDF output.
- For emailed statements, go to **Company** > **Admin** > **History and reports** > **Email delivery history** to review for errors.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                        |
| User type             | Business                                                                                                                                           |
| Permissions           | Accounts Receivable: Print or email statements: Run Customization services or Platform services: Printed Document Templates: List, View, Add, Edit |
