---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-wip-management-import.htm
release: 2025-R3
extracted: 2026-02-07
title: "New import service for work in progress (WIP) management"
---

# New import service for work in progress (WIP) management

[Import work in progress (WIP) schedule information](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=import_wip_schedule_info)

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

CONSTRUCTION

Importing data to WIP schedules is more efficient, more accurate, and easier with the new import service. Instead of sending your data into a "black box" and waiting for error reports via email, you now have a dedicated import workspace that provides real-time visibility and control.

With an intuitive, spreadsheet-like interface, you can import files, see errors at the field level, and make corrections on the spot, eliminating frustration and saving time.

## Key benefits

- **Expanded capabilities:** Import from multiple tabs, use formulas, and add extra columns.
- **Real time error handling:** Errors are displayed on the page, at the field level, and easy to understand and correct before finalizing your import.
- **Intuitive interface:** You can use find/replace to correct errors, search for specific values, and filter by errors.

## How it works

[Step 1. Prepare the import file](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-wip-management-import.htm#)

1.  Go to **Projects** > **All** > **WIP schedules**.
2.  Select a Report ID.
3.  Select **More actions**, and then select **Download import template**.

    An XLS file is downloaded to your default downloads folder.

4.  Open the template and fill in the information that you need to import.

    The second row of the template explains the type of information required for each field.

5.  Save the import file as XLS, XLSX, or CSV.

[Step 2. Import the file](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-wip-management-import.htm#)

1.  Begin the import in one of the following ways:

- **To import from a specific WIP schedule:**

1.  Go to **Projects** > **All** > **WIP schedules**.
2.  Select the schedule that you're going to update.
3.  Make sure you select the WIP schedule that matches the period in your import file.
4.  Select **More actions** > **Import WIP project user entries**.

- **To import from the Company Setup Checklist page:**
  1.  Go to **Company** > **Setup** > **Import data**.
  2.  Select **New import service**.
  3.  For the WIP schedule project in the WIP Management section, select **Update**

When importing from the Company Setup Checklist page, the Period End Date in the import file determines the WIP schedule that the data will be imported into.

3.  Select the import file
4.  Use the import service to import data.

    [View detailed instructions for using the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_add_data)

    The WIP projects grid is updated to reflect the values that you imported. If you imported a CFO forecast value, the overbilling, underbilling, and profit amounts are recalculated.

## Permissions and other requirements

| Subscription          | Construction Projects                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| Regional availability | Australia Canada United Kingdom United States                                  |
| User type             | Business Project Manager                                                       |
| Permissions           | Projects Projects: List, View, Add, Edit WIP management: List, View, Add, Edit |
