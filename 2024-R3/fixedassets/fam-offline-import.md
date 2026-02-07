---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/FixedAssets/2024-R3-fam-offline-import.htm
release: 2024-R3
extracted: 2026-02-07
title: "Import assets offline and other improvements"
---

# Import assets offline and other improvements

[Import assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_asset)

[About the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service_overview)

Fixed Assets Management

The import service now supports offline processing, allowing you to start an import and continue with other tasks while it runs in the background. Additionally, previously, we recommended importing no more than 500 assets at a time to avoid long wait times. Now, the recommended limit has been increased to batches of up to 15,000 assets.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-FAM-offline-import.png)

We also added the ability to ignore rows in import templates and link existing attachments to imported assets.

## Details

Importing assets is now automatically an offline process.

- Data validation occurs only after the import is processed because the service is offline.
- When an offline import job finishes, you'll receive an email with a summary of the results. The email also includes an attachment that contains the successfully imported assets and the assets with errors.
- You can fix errors directly in the import service workspace or in your source file. If there are a large number of errors, we recommend fixing them in your source file and reimporting.

### Other improvements to the import service

- Ignore rows for import by adding a hashtag (#) at the start of the row, the same way it works in CSV imports. Use this feature to write notes to yourself in the template or add examples that you do not want to import.
- Import assets with attachments by adding the attachment's ID in the Attachment ID column during import. The attachment must already exist in Sage Intacct.

## How it works

The following is a high level workflow for how to import assets. For more detailed instructions, see the Sage Intacct Help Center.

1. Go to **Company** > **Setup** > **Import data**.
2. Download the Assets template.
3. Add your data to the template.
4. Add your file to the import service.
   1. Select the **Import template** sheet.
   2. Select **Load all**.

5. Map your columns to the fields in Intacct.
6. Map your field values to match the Intacct requirements for each field.

   The import service extracts the file data into a workspace. Assets are added to the Add headers sheet and depreciation rules are added to the Add lines sheet.

7. Review your data and select **Import**.

   When the offline process is complete, you will receive an email notification with a summary of the results. You can fix errors directly in the import service workspace or in your source file.

8. To fix errors in the import service workspace:
   1. Select the **Errors** sheet that corresponds to your import.

      If you performed multiple imports with errors, then there will be multiple error sheets. Each sheet is titled with the date and time of import.

   2. Select **Transfer**.  
      The data moves to the Add headers and Add lines sheets so you can work on correcting it.
   3. View the errors and fix your data as needed.
   4. Select **Import**.

## Permissions and other requirements

| Subscription          | Company Fixed Assets Management                                                           |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                               |
| User type             | Business                                                                                  |
| Permissions           | Company Company setup checklist: Run Fixed Assets Management Asset: List, View, Edit, Add |
