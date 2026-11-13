---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Company_and_Administration/2026-R4-import-service.htm
release: 2026-R4
extracted: 2026-11-13
title: "More imports available in the Sage Intacct import service"
---

# More imports available in the Sage Intacct import service

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

[About the workspace](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_import_workspace)

[About templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_available_templates)

[Load and map your data](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_add_data)

[Data validation and correction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_find_and_fix_errors)

[Create vs. update records in the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_create_vs_update)

company & Administration

Bring more of your data into Sage Intacct with additional imports now available through the import service. The expanded coverage lets you use the same streamlined import experience across more business processes and data types.

## Key benefits

- **Expanded import coverage:** Access more data imports through our import service.

- **Consistent import experience:** Use the same guided workflow across supported import types.

- **Improved data quality:** Review mapping and validation results before committing changes.

- **Greater efficiency:** Reduce the time spent preparing and importing data.

## What's changed

The following imports have been added to the import service. View all available imports at [About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview).

Early Adopter and General availability imports are available to all users with permissions for the corresponding Intacct areas. **Beta** imports are available only to users enrolled in the Beta program. Our Beta program is currently closed (see [below](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Company_and_Administration/2026-R4-import-service.htm#_bm)).

### Accounts Payable

| Import      | Create | Update | Status    |
| ----------- | ------ | ------ | --------- |
| Adjustments | Yes    | Yes    | NEW: Beta |

### Accounts Receivable

| Import           | Create | Update | Status    |
| ---------------- | ------ | ------ | --------- |
| Adjustments      | Yes    | Yes    | NEW: Beta |
| Customer refunds | Yes    | Yes    | NEW: Beta |
| Payments         | Yes    | Yes    | NEW: Beta |

### Cash Management

| Import                   | Create | Update | Status    |
| ------------------------ | ------ | ------ | --------- |
| Credit card transactions | Yes    | Yes    | NEW: Beta |

### Consolidations

| Import            | Create | Update | Status    |
| ----------------- | ------ | ------ | --------- |
| Ownership periods | Yes    | Yes    | NEW: Beta |

### Contracts

| Import | Create | Update | Status    |
| ------ | ------ | ------ | --------- |
| Usage  | Yes    | Yes    | NEW: Beta |

### Depository Management

| Import              | Create | Update | Status    |
| ------------------- | ------ | ------ | --------- |
| Depository accounts | Yes    | Yes    | NEW: Beta |

### Fixed Asset Management

| Import               | Create | Update | Status                   |
| -------------------- | ------ | ------ | ------------------------ |
| Asset classification | Yes    | Yes    | NEW: Generally available |

### Projects

| Import            | Create | Update | Status    |
| ----------------- | ------ | ------ | --------- |
| Project resources | Yes    | Yes    | NEW: Beta |
| Task resources    | Yes    | Yes    | NEW: Beta |

### Purchasing

| Import                     | Create | Update | Status    |
| -------------------------- | ------ | ------ | --------- |
| PO Transaction Definitions | Yes    | Yes    | NEW: Beta |

## Good to know

We resolved an intermittent issue that prevented the file upload button from appearing in the import service. The change made to resolve this issue also affects how file uploads work. You can now upload multiple files to the same import service worksheet. Previously, each worksheet was limited to one file.

If an import service worksheet already contains records and you upload another file to it, the import service adds the new records below the existing ones. It does not replace, merge, or update the records that are already there.

To keep imports easier to review and manage, consider using a separate worksheet for each file.

If you have an existing import worksheet where the file upload option is not available, contact Sage Intacct Support for assistance.

## The import service beta enrollment is closed

Enrollment in the import service beta is currently closed.

Organizations already enrolled in the beta can continue using the service. We are not accepting new enrollments at this time.

## Permissions and other requirements

| Subscription          | Company                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                         |
| User type             | Business                                                                                                                            |
| Permissions           | Company Setup Checklist: Run You also need permission to access the specific applications of Intacct where you want to import data. |
