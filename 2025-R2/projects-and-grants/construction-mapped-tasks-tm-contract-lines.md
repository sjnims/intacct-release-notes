---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Projects_and_Grants/2025-R2-construction-mapped-tasks-TM-contract-lines.htm
release: 2025-R2
extracted: 2026-02-07
title: "Duplicate mapped tasks for time and materials project contract lines"
---

# Duplicate mapped tasks for time and materials project contract lines

[Map time and materials tasks to Construction project contract lines](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Map_time_material_tasks_)

[Set up time and materials billing for Construction project contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Setup_time_materials_b)

[Training: Construction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=On_demand_training_co)

Projects

You now have the ability to duplicate task mapping for time and materials project contract lines. This feature enables you to quickly standardize and copy tasks across projects, saving time over manual entry for time and materials projects.

## Details

We've added an option to Retain task mapping for Time and Material project contract lines on the Duplicate project contract window.

The task mapping on project contract lines is copied from the source project contract to the target project contract. This mapping is copied when the source project contract line is a Time and Materials billing type.

## How it works

### Before you begin

-   Set up the template project with all project tasks already associated with it. Use the template project to set up a project contract template for any other project contracts with task mapping.
-   Set up a target project with the same contract, same contract lines, and same project lines mapped to the same tasks.

### Step 1. Verify the source project contract line tasks you want to duplicate

1.  Go to **Projects** > **Project Contracts** > **Edit** your selected Project contract.
    
2.  Scroll to the Project contract lines section.
    
3.  Select a line ID link to open the Project contract line.
    
4.  Open the Tasks tab and verify you want to duplicate these tasks.
    
    ![Project contract line tasks](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-pcl-tasks.png)
    
5.  Close the Project contract line page.
    

### Step 2. Duplicate the project contract

1.  In the source Project contract, select **Duplicate**.
2.  On the Duplicate project contract page, select **Retain task mapping for Time and Material project contract lines**, and then select **Duplicate**.
    
    ![Duplicate project contract screen with Retain task mapping for Time and Material project contract lines checkbox  selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-task-mapping.png)  
    
3.  In the Project contract window, enter the new **Project contract ID** and **Project contract name**.
4.  In Project, enter the target project that's receiving the duplicated tasks.
5.  Enter **Customer** and **Contract date**, and then select **Save**.
6.  In Project contracts, select **Edit** next to the target project contract.
7.  In the Project contract lines section, select the **line**.
8.  In the Project contract line page, open **Tasks**.
9.  Verify that the mapped tasks were duplicated on the target project contract line.

## Permissions and other requirements

| Subscription | Projects application: Project Costing and Billing                                                                 Construction |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges                                                                 Project Manager |
| Permissions | Projects Generate Invoices                                                                                                                                                                                                               Run: allows users to generate a Pre-Bill report                                                                                                                                                                                                                   Add: allows users to create an invoice                                                                                                                                                                                                       The Project Manager user type can create draft invoices only. Edit and delete: allows the Project Manager user type to add, change, or delete only their own draft project invoices.                                                                  The Business user type can create and post invoices.The Business user type can edit invoices created by other user types. |
