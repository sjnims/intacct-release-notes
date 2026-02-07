---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Sage_Intacct_Advanced_CRM/2024-R3-advanced-crm-data-migration-tool.htm
release: 2024-R3
extracted: 2026-02-07
title: "Advanced CRM Integration migration tools"
---

# Advanced CRM Integration migration tools

[Data migration tool](https://www.intacct.com/ia/docs/en_US/salesforce/Default.htm#cshid=AdvancedCRM_Intacct_data_migration_tool)

[Bulk update tool](https://www.intacct.com/ia/docs/en_US/salesforce/Default.htm#cshid=AdvancedCRM_Intacct_bulk_update_tool)

Sage Intacct Advanced Crm

Transitioning from the original CRM Integration offered by Intacct to the Sage Intacct Advanced CRM Integration can be daunting, especially when it comes to transferring your data. We've created some tools to help make this transition easier.

The following tools are specifically for implementers of the Sage Intacct Advanced CRM Integration. These tools are intended for use when migrating data from the original CRM Integration to the Advanced CRM Integration.

## Data migration tool

The Data migration tool allows you to selectively migrate your Intacct records to Salesforce. The tool helps you to:

- Compare Intacct records with Salesforce records, and then migrate your data without manually comparing records, ensuring your Salesforce data is up-to-date and reflects your Intacct information.
- Avoid mistakes by reviewing matches before updating Salesforce.
- Migrate large volumes of data quickly with batch processing.

### How it works

1. Log in to Salesforce as an administrator and go to the **Intacct Mass Synchronization** tab.
2. Select the **Data Migration** tab.
3. **Select an object** from the dropdown.
4. Select how many **Items per page** you want to review,
5. **Select an entity** to filter your Intacct data by entity.
6. Narrow down the Intacct records that you want to see using the Filter options.
7. Review the table of Intacct records and their potential matches in Salesforce. Based on how well the data matches, you can take the following actions:
    - From the **Quick Action** column for a specific record, you can create a new Salesforce record or update an existing record.

      OR

    - Select **Open** to view a detailed comparison of the Intacct and Salesforce data. The controls in this area allow you to choose specific records to copy, or to copy all the records to Salesforce.

      **OR**

    - Select all the records that you want to copy to Salesforce and select **Process selected records**.

## Bulk update tool

The Bulk update tool is here to simplify that process. The tool automates the process of transferring field values from your original implementation to the Advanced CRM Integration, making the transition smoother.

The Bulk update tool is available on the Intacct Mass Synchronization page in Salesforce. It allows you to:

- Filter specific object records based on your criteria.
- Map field values from other fields within the same record or even related records.
- Update your filtered records with the mapped values.

The Bulk update tool helps you save time by quickly updating large numbers of records at once. It also eliminates the need for manual data entry, which helps streamline your transition to the Advanced CRM Integration.

### How it works

1. Log in to Salesforce as an administrator and go to the **Intacct Mass Synchronization** tab.
2. Select the **Bulk Update** tab.
3. Use the **Select an object** dropdown to select the Salesforce object you want to update.
4. Use the **Filters** section to specify which records you want to update.
5. In the **Mappings** section, select which fields you want to update and where to get the values from. Add as many mappings as needed.
6. After you have configured your filters and mappings, select **Process filtered records**.

    You will receive an email with the results of the update.

## Permissions and other requirements

| Subscription          | Sage Intacct Advanced CRM Integration                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                            |
| User type             | Business user with Admin privileges The Sage Intacct admin can authorize other users after the integration has been configured.                        |
| Implementation        | Requires: Subscription in Intacct Configuration and setup in Intacct Configuration and setup in Salesforce Admin rights in both Intacct and Salesforce |
