---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Company_and_Administration/2025-R2-import-service.htm
release: 2025-R2
extracted: 2026-02-07
title: "Sage Intacct import service—General availability"
---

# Sage Intacct import service—General availability

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

[About the workspace](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_import_workspace)

[About templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_available_templates)

[Load and map your data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_add_data)

[Data validation and correction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_find_and_fix_errors)

company and Administration

Importing data is a critical function for accountants and partners, and we’re making it easier than ever with the new import service. Instead of sending your data into a "black box" and waiting for error reports via email, you now have a dedicated import workspace that provides real-time visibility and control.

The new import service provides the following benefits:

-   **Expanded capabilities:** Import from multiple tabs, use formulas, and add extra columns.
    

-   **Real time error handling:** Errors are displayed on the page, at the field level, and easy to understand and correct before finalizing your import.
    

-   **Intuitive interface:** You can use find/replace to correct errors, search for specific values, and filter by errors.
    

With an intuitive, spreadsheet-like interface, you can import files, see errors at the field level, and make corrections on the spot, eliminating frustration and saving time. The new import service is now generally available for a limited set of import types. It redefines the way that you manage imports ensuring efficiency, accuracy, and ease of use.

The import service is only currently available for use from the Company Setup Checklist page. Permissions to this page are required to use the import service at this time.

## Details

On the Company Setup Checklist page, you’ll see a **New import service** link at the top of the page. Select the link to open the import service workspace.

![" "](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-importservice-welcome.png)

1.  Import service **help topics**.
    
    If you have questions about the import service, use these links to find answers.
    
2.  Links to **Create** for available imports.
    
    You can start the Create process from the welcome page. Select Create to add new records to Intacct.
    
3.  Links to **Update** lines for available imports.
    
    You can update existing records withe the Update process. Select Update for the import you want to work on.
    
    Create and update are now two separate processes in the import service. When updating existing information, only include the records to be updated in the import file.
    
4.  **Templates** available for imports.
    
    Download a template for the import that you want to work on. Add you data to the template and then follow the [import process](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Company_and_Administration/2025-R2-import-service.htm#How).
    

The following imports and templates for these imports are available for use:

| Intacct application | Available imports |
| --- | --- |
| Accounts Payable | Vendors |
| Accounts Receivable | Customers |
| Company | Classes                                                                                                                                                                                                                               Departments                                                                                                                                                                                                                               Locations |
| General Ledger | Chart of accounts                                                                                                                                                                                                                               Statistical accounts |
| Fixed Asset Management | Assets |

## How it works

The following is a high-level workflow for how to use the import service. For more detailed instructions, see the Sage Intacct help center.

### Before you begin

The import service provides templates for your use. You can also use spreadsheets that already contain the information you want to import.

[Download a template](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_service_download_templates) or [use your own existing Excel or CSV file](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_use_your_own_spreadsheets).

### The import service workflow

1.  Go to **Company** > **Setup** > **Import data**.
    
2.  Select **New import service** at the top of the Company Setup Checklist.
    
3.  Select the Intacct area to import into.
    
4.  [Upload your file to the import service workspace](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_add_data).  
    
    If your file has tabs, select a tab to import first. The import service only imports information one tab at a time.
    
5.  [Map fields and field values in your spreadsheet to Intacct fields](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_map_fields).  
    
    Mapping fields and the values that populate those fields is key to getting your information into the right fields in Intacct.
    
6.  [Validate or correct data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_find_and_fix_errors) as needed.  
    
    When all errors are resolved on your import sheet, you can import the data into Intacct.  
    
    Below is an example of an error message that you might see in the import service before import.
    
    ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-importservice-error-examples.png)
    
7.  Select **Import** to import the data into Intacct.
    

## Permissions and other requirements

| Subscription | Company |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Company Setup Checklist: Run |

You'll also need permission to access specific Intacct application areas.
