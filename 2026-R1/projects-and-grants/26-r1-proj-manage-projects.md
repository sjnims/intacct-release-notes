---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Projects_and_Grants/26-R1-proj-manage-projects.htm
release: 2026-R1
extracted: 2026-02-07
title: "Manage Projects"
---

# Manage Projects

[Set up Projects](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_projects_setup)

[Manage Projects](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Proj_manage_projects)

[Set Projects permissions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Proj_set_projects_permissions)

PROJECTS AND GRANTS

The new Manage Projects feature allows you to filter projects and update multiple project fields across several projects simultaneously with efficiency and ease.

## What's new

Manage Projects allows you to update any number of records across multiple projects in one simple procedure. With this new feature, you can:

-   Filter projects by criteria, such as status or date.
-   Select multiple projects and apply bulk edits intuitively using an interactive interface.
-   Execute updates as offline jobs with detailed logs for completion and error reporting.
-   Implement permission controls and validation checks to ensure optimum security.

![The Update fields option appears above the list of projects when you select the projects in the list that you want to update.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-proj-manage-projects_432x317.png "Manage Projects")

For example, at the end of the year you might want to change the status of projects that were completed in that year. To do this, you can filter for a completed status with an end date before the new year. Then select all the projects, change the status to inactive, and update the selected projects to the new status.

## Why the change

Previously, you were unable to update the records for multiple projects in a single procedure. The new Manage Projects feature solves this pain point and provides:

-   Streamlined project management.
-   Improved performance with faster load times.
-   Improved overall user experience.

## Key benefits

-   Enhanced scalability and improved project performance.
-   Increased productivity for Project Managers and Controllers.
-   Easily filter for projects that need to be updated.
-   Efficiently update any number of records across multiple projects with ease.

## Action required

To ensure optimum security, you need to set the Manage Projects permission for the desired user types and roles. The Manage Projects permission validates that the person attempting to make mass updates has the necessary privileges to edit the selected projects.

The Manage Projects permission can be assigned to the following user types:

-   Business user with admin privileges
    
-   Business user
    
-   Product Manager
    

The Business user and Product Manager also need access privileges for the projects that they’re updating.

For information on how to set the Product Manager permission, see the [Video: Assign permissions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Video_assign_per), or the help page for [Manage Projects.](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Proj_manage_projects)

## How it works

The new Manage Projects feature uses the following workflow:

1.  Go to **Projects > Setup > Projects**.
2.  Filter for a list the projects that need to be changed, then select the projects in the list.
3.  Select **Update fields**.
4.  Make the necessary changes to the desired fields and select **Save**.

For detailed instructions, see the help page for [Manage Projects](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Proj_manage_projects).

## Permissions and other requirements

| Subscription | Projects |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges                                                                 Business user                                                                 Construction Manager                                                                 Project Manager |
| Permissions | Projects:                                                                                                                                                                                                                Manage Projects permission                                                                                                                                                                                                                   List, View, Edit privileges |
| Dependencies or other requirements | Users must have access to the projects that they’re updating. |
