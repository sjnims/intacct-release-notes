---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Construction/2024-R4-wip-management.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements in work in progress (WIP) management"
---

# Enhancements in work in progress (WIP) management

[WIP management overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_reports)

[Set up WIP management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[Create a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_wip_report)

[Edit a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_wip_report)

[Post a WIP schedule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=post_wip_report)

CONSTRUCTION

## New fields

WIP schedules include the following new fields:

-   **PM fields updated**
    
    Shows the date and time that information was last updated in any of the following fields:
    
    -   PM forecast cost to complete
    -   PM forecast cost at completion
    -   PM forecast pct complete (%)
    -   PM forecast contract value
-   **CFO fields updated**
    
    Shows the date and time that information was last updated in any of the following fields:
    
    -   CFO forecast cost at completion
    -   CFO forecast contract value
    -   CFO forecast pct complete (%)
    -   CFO forecast cost to complete
-   **Overbilled or underbilled**
    
    If the amount billed is more or less than the amount earned to date, this field shows the difference (calculated based on the whole history of the project). Underbilled amounts are shown as a positive number (for example, 10,000), overbilled amounts are shown as a negative number (for example, −10,000).
    
-   **Customer**
    
    Shows the customer associated with the project.
    
-   **Project manager**
    
    Shows the project manager assigned to the project.
    
-   **Location**
    
    Shows the location associated with the project.
    
-   **Department**
    
    Shows the department associated with the project.
    
-   **Class**
    
    Classes can be used to create and filter project reports. [Learn more about classes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_Viewing_Class_Information).
    
-   **Project status**
    
    The project status can be used to prevent certain transactions from occurring, or to track projects. [Learn more about project statuses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Project_Status).
    
-   **Project type**
    
    The project type is a user-created tag used to categorize and report on projects. [Learn more about project types](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_Editing_and_Viewing_a_Project_Type).
    

[![WIP schedule page with new fields circled](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-new-fields_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-new-fields.png)

## Improved fields

We've expanded the range of values that are allowed in some fields, as follows:

-   **CFO forecast pct complete (%):** 0 to 110%
-   **Estimated pct complete (%):** −200% to 200%:
-   **PM forecast pct complete (%):** −200% to 200%:
-   **CFO forecast gross profit margin pct (%):** −200% to 200%:
-   **Gross profit pct of cost (%):** −200% to 200%:
-   **Gross profit pct of contract (%):** −200% to 200%:

[![WIP schedule page with improved fields circled](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-improved-fields_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-improved-fields.png)

## Overbilled and underbilled amounts are now shown for the job to date

On WIP schedules, we've changed the **YTD over billing** and **YTD under billing** fields to **Job to date overbilled** and **Job to date underbilled**.

For any existing WIP schedule that is posted and includes an **End of year WIP schedule**, the field labels are automatically updated, but the values in the fields are not (they still show year to date amounts). To update the values in the fields to show job to date amounts, do the following for each WIP schedule:

1.  Go to **Projects** > **All** tab > **WIP management**.
2.  Select the schedule ID.
3.  Select **Edit**.
4.  Revert the posting:
    1.  Select **Revert posting**.
    2.  Select **Revert**.
5.  Unfinalize projects:
    1.  Select all the projects in the WIP schedule.
        
        [![Edit WIP schedule page showing all projects selected](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-select-projects_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-select-projects.png)
        
    2.  Select **Unfinalize**.
        
        [![Edit WIP schedule page with the Unfinalize button circled](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-unfinalize_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-wip-unfinalize.png)
        
    3.  Select **Save**.
        
        Saving updates **Job to date overbilled** and **Job to date underbilled** values.
        
6.  Finalize projects:
    1.  Select the schedule ID.
    2.  Select **Edit**.
    3.  Select all the projects in the WIP schedule.
    4.  Select **Finalize**.
7.  Select **Post**.

## Permissions and other requirements

| Subscription | Construction |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     United States |
| User type | Business user                                                                 Project manager |
| Permissions | Projects                                                                                                                                      Projects: List, View, Add, Edit                                                                     WIP management: List, View, Add, Edit, Delete, Post |
