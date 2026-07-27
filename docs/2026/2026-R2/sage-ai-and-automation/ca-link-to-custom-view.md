---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Sage_AI_and_Automation/2026-R2-ca-link-to-custom-view.htm
release: 2026-R2
extracted: 2026-04-29
title: "Link to custom views from tasks in Close Workspace"
---

# Link to custom views from tasks in Close Workspace

[Close Workspace overview](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_close_workspace)

[Create a custom task template](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_custom_close_task_template)

[Edit a custom task template](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=close_task_templates_list)

[Edit a task within a checklist template](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=edit_task_within_checklist_template)

Sage AI and Automation

Improve the efficiency of your close process by including a link to a custom view in custom task templates. When employees are working on their tasks, they can select the link to go directly to that view.

Custom views are created on list pages in Sage Intacct so that the list includes the specific information needed. The custom view must be made public to add it to a task template.

![Navigation link section of a task template record. The Custom view option is selected. ](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-cw-custom-view.png)

## Key benefits

As employees work through tasks to complete the close process, they gain the following benefits from this enhancement:

- **Faster access to relevant data:** Go directly to a custom view that’s already filtered and organized to fit the current task.

- **Reduced navigation:** Eliminate extra selects and uncertainty regarding which view is best for the current task.

- **More consistent workflows:** Work from the same set of focused, task-specific information that everyone else uses.

## How it works

You can link to a custom view that has been made public. You can add the link to a custom task template or to a custom task that has already been added to a checklist template. Then when employees view their tasks, they can select the link to go directly to the custom view.

Transaction definitions are an exception for this feature. Pages that list transactions created from transaction definitions support custom views, but you cannot link to them from a task.

### Add a link to a task template

1.  Go to **Close Workspace** > **Setup** > **Templates for Close Workspace** > **Task templates**.

2.  Select **Add** to create a new custom task template, or find an existing one in the list and select **Edit**.

3.  If you're creating a new task template, fill in the required information. See [Create a custom task template](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=create_custom_close_task_template) for more information.

4.  In the Navigation link section under Link type, select **Custom view**.

5.  In the **List** field, select the list page where the custom view was created.

6.  Select the **Custom view**.

7.  Select **Save**.

### Add a link to a checklist template task

1.  Go to **Close Workspace** > **Setup** > **Templates for Close Workspace** > **Checklist templates**.

2.  Find the checklist that contains the task and select **Edit**.

3.  Under Close tasks, find the custom task and select Edit.

4.  In the Navigation link section under Link type, select **Custom view**.

5.  In the **List** field, select the list page where the custom view was created.

6.  Select the **Custom view**.

7.  Select **Save**.

## Permissions and other requirements

| Subscription                       | Sage Intacct Close Automation                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                          |
| User type                          | Business                                                                                             |
| Permissions                        | Sage Intacct Close Automation Task templates: List, View, Edit Checklist templates: List, View, Edit |
| Dependencies or other requirements | The custom view must be public.                                                                      |
