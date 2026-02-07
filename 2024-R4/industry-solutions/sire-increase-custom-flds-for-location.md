---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Industry_solutions/2024-R4-SIRE-increase-custom-flds-for-location.htm
release: 2024-R4
extracted: 2026-02-07
title: "Location dimension supports up to 100 custom fields"
---

# Location dimension supports up to 100 custom fields

[Sage Intacct Real Estate](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=si-real-estate)

[Custom fields](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_custom_fields)

Sage Intacct real estate

To better support integration between Sage Intacct and Sage Intacct Real Estate, we've increased the maximum number of custom fields for the Location dimension. You can now add up to 100 custom fields.

The allotment of custom fields is shared with the Entity dimension, so you can add up to 100 custom fields combined for the 2 dimensions.

## How it works

To add a custom field for the Location dimension: 

1.  Depending on your subscriptions, do one of the following:
    
    -   Go to **Platform Services** > **All** \> **Object customization**, then select the **+** icon beside Custom fields.
        
    -   Go to **Customization Services** > **All** \> **Object customization**, then select the **\+** icon beside Custom fields.
        
2.  From the **Object** dropdown list, select **Location**, and then select **Next**.
    
3.  Select the data type for your custom field, and then select **Next**.
    
4.  Enter a **Label** that helps users understand what type of data they need to enter in the field.
    
5.  Define the data type field characteristics.
    
    The options will vary slightly based on the data type that you selected.
    
6.  Select **Next**.
    
7.  Choose deployment options.
    
    Deployment options indicate whether the field is required and where you want it to appear in Intacct.
    
    [Deployment option fields](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Industry_solutions/2024-R4-SIRE-increase-custom-flds-for-location.htm#)
    
    | Field | Description |
    | --- | --- |
    | Field is required | Makes the field required. Depending on the field type, the user must enter a value or select an option  for the object to be saved. |
    | Field is hidden | Hides the field so that it is not displayed on the page. This option is primarily used by developers. |
    | Field is inactive | Hides and deactivates the field, but retains any data previously saved in the field. Select this option if you're no longer using the field, but you want to retain data previously entered in the field. |
    | Section where field appears | Specifies the section to which  the field will be added. You can add a field to an existing section or create your own section.                                                                                         To add the field to an existing section:                                                                                                                                                                                                                                                                                                                                                                                In the Section where field appears field, enter the name of the section exactly as it appears on the page.                                                                                                                                                                                                                                                                                           In the  Tab where field appears field, select the tab on which the section appears.                                                                                                                                                                                                                                                                               To add the field to a new section:                                                                                                                                                                                                                                                                                                                                                                                In the  Section where field appears field, enter the name that you want to use for the section.                                                                                                                                                                                                                                                                                           In the  New tab where field appears  field, select an existing tab or enter a new name to place the section on a new tab. |
    | Tab where field appears | Specifies the tab on which the field appears. You can select an existing tab or enter the name of a new tab |
    
8.  Select **Done**.

## Permissions and other requirements

| Subscription | Customization Services or Platform Services                                                                                                                                                                                                                   Sage Intacct Real Estate |
| --- | --- |
| Regional availability | Canada                                                                                                                                                                                                                   United States |
| User type | Business |
| Permissions | Administration |
