---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Company_and_Administration/2025-R4-import-service.htm
release: 2025-R4
extracted: 2026-02-07
title: "Updates to the Sage Intacct import service"
---

# Updates to the Sage Intacct import service

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

[About the workspace](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_import_workspace)

[About templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_available_templates)

[Load and map your data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_add_data)

[Data validation and correction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_find_and_fix_errors)

[Create vs. update records in the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_create_vs_update)

company and Administration

The Sage Intacct import service provides a structured, user-friendly workflow for importing data into Intacct. You can preview, validate, and correct data in the import service before finalizing the import—ensuring accuracy and reducing errors.

![" "](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-importservice-welcome.png)

1. Select **Create** to add new records for available imports.
2. Select **Update** to change existing records.
3. You can download **Templates** for available imports.
4. **Help topics** for the import service.

    If you have questions about the import service, use these resources to find answers.

## Key benefits

- **Expanded capabilities:** Use spreadsheets with multiple tabs, use columns of calculations in your spreadsheets, and then skip those calculation columns during import.
- **Real time error handling:** Any errors that the import service encounters are displayed in your worksheet at the field and line level with easy to understand error messages.
- **Intuitive interface:** The import service worksheet tools allow you to quickly find and replace specific values, filter by errors, and copy and paste the correct information into the worksheet all before importing.

## ID updates

Some Intacct applications allow you to update the ID of an existing record. For example, you can change General Ledger account numbers, both for primary and subaccount numbers. The import service supports updates to IDs for these areas of Intacct.

To update an ID, only two fields are required:

- The record number of the ID to be updated
- The ID, such as a statistical account number.

For more information about how to update IDs of existing records, see [Create vs. update records in the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_create_vs_update)

## Join our Limited Beta program

We invite you to explore the new capabilities of our imports in limited beta.

Your insights are incredibly valuable. By signing up via the form linked below, you'll not only get early access but also have the opportunity to directly shape the future of this feature. After you try it out, we'd love to hear your feedback!

[Sign up for limited beta access here](https://forms.office.com/r/YpJwRySAAL).

## Added and updated imports

The following imports have been updated. View all available imports at [About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview).

### Company

| Import   | Create | Update                | Status               |
| -------- | ------ | --------------------- | -------------------- |
| Classes  | Yes    | Update NEW: ID update | General availability |
| Contacts | Yes    | Yes                   | NEW: Open beta       |

### General Ledger

| Import                         | Create | Update                | Status               |
| ------------------------------ | ------ | --------------------- | -------------------- |
| Chart of accounts              | Yes    | Update NEW: ID update | General availability |
| General Ledger journal entries | Yes    | No                    | New: Open beta       |
| Statistical accounts           | Yes    | Update NEW: ID update | General availability |

### Accounts Payable

| Import | Create | Update   | Status       |
| ------ | ------ | -------- | ------------ |
| Vendor | Yes    | NEW: Yes | Limited beta |

For details about how Open beta and Limited beta are defined, see [Open and limited betas](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_open_beta).

## Permissions and other requirements

| Subscription          | Company                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                 |
| User type             | Business                                                                                                                                    |
| Permissions           | Company Setup Checklist: Run You’ll also need permission to access the specific applications of Sage Intacct where you want to import data. |
