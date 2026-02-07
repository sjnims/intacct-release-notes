---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Projects_and_Grants/2025-R4-project-taxes-purchasing.htm
release: 2025-R4
extracted: 2026-02-07
title: "Create default purchasing tax schedules for projects and tasks"
---

# Create default purchasing tax schedules for projects and tasks

[Tax schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tax_schedules_vat)

Projects

You can now assign a default tax schedule for purchasing on a project. If needed, you can override that tax schedule at a task level.

The project location determines the appropriate tax solution for currency and taxes. Assigned taxes automatically fill purchasing line items hierarchically for the project and task.

Add and edit permissions are necessary for the relevant project objects to be able to set or override tax schedules. This requirement ensures that only authorized users can make these changes.

## Key benefits

- Tax schedule options for the project location are provided by your company Tax Solutions configuration.
- You can set a default purchasing tax schedule for a project, task, and cost type.
- You can override an existing project tax schedule and set a new schedule for a task and cost type, as needed.
- Purchasing line items are prefilled hierarchically with the assigned tax schedule for the project, task, and cost type.
- The tax schedule for linked tasks prefills automatically with the tax schedule selected for the project.

New purchasing entries use this tax schedule default if vendor and item tax mapping is not already set up. If you have set up vendor and item mapping, that pairing is used by default.

## What's new

The Additional information tab and Task information page have new options for setting a default purchasing tax schedule.

Only the tax schedules available for the project location are shown.

### Additional information tab

The **Additional information** page has the following new options:

- **Tax Setting:** Shows tax schedule options for the project location.
- **Purchasing tax schedule**: Select an available tax schedule from the dropdown list. The selected tax schedule is applied to all tasks for the project automatically, unless a task is set to override it. Tasks that override the project tax schedule show their assigned tax schedule.

![The Tax settings section of the Additional info tab with a Purchasing tax schedule selected in the dropdown menu.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-proj-purch-tax-sched-default-1_457x485.png "Additional info tab")

### Task information page

The **Task information** page now has the following new options:

- **Tax settings**: Shows the purchasing tax schedule for the project.
- **Purchasing tax schedule**: Shows the default tax schedule for the project. This option is read-only until you select the Override default purchasing tax schedule checkbox.
- **Override default purchasing tax schedule**: Select this checkbox to choose a different default tax schedule for the task. This option overrides the assigned project tax schedule for this task. If left blank, the tax schedule assigned to the project is used.

![The Task information page with the Override default purchasing tax schedule checkbox selected and a different purchasing tax schedule selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-proj-purch-tax-sched-default-2_458x351.png "Task infomration ")

## What you need

- [An assigned location for the project](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Location_Information)
- [Tax solutions configured for your company](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tax_solutions). Simple Tax and Advanced Tax are not currently supported for this feature.
- [Item and vendor set to taxable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_tax_groups_vat). This detail is necessary even if the item and vendor are not mapped to a tax schedule.

## How it works

1.  Go to **Purchasing** > **Setup** > **Configuration** > **General configuration** > **Tax**.
2.  Select **Enable override tax schedule of document entity** if it is not already selected.
3.  Ensure that your project has an assigned location.
4.  Follow the step-by-step instructions to [Create default purchasing tax schedules for projects and tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Proj-purch-tax-sched-task).

## Permissions and other requirements

| Subscription          | Projects and Grants Purchasing Taxes                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                  |
| User type             | Business user with admin privileges Project Manager                                                                                                                                            |
| Permissions           | Projects Projects: List, View, Add, Edit Tasks: List, View, Add, Edit Purchasing Tax detail: List, View, Add, Edit Tax schedule: List, View, Add, Edit Tax schedule map: List, View, Add, Edit |
