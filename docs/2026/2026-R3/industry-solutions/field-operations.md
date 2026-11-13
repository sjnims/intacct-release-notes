---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Industry_Solutions/2026-R3-field-operations.htm
release: 2026-R3
extracted: 2026-11-13
title: "Enhancements in Sage Field Operations"
---

# Enhancements in Sage Field Operations

[About Sage Field Operations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=sage-field-operations)

INDUSTRY SOLUTIONS

Sage Field Operations provides field service teams with critical site details they need to improve productivity and deliver excellent customer service.

This release includes the following enhancements.

## Crew Time is now available

Schedule, assign, and manage time entries for an entire crew in a single action.

### Key benefits

- Reduce manual data entry and simplify field workforce management.
- Assignments created via a crew can subsequently be managed independently at the individual level.
- If an assignment is changed to a different employee, that assignment is detached from the crew and managed independently.

### How it works

1.  Set up one or more crews.

    You specify details about each crew including the crew name, its leaders and members, and optional details such as vendors or equipment that the crew commonly uses.

2.  Manage crews from the Dispatch Board or the Assignments tab.

    [Dispatch Board](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Industry_Solutions/2026-R3-field-operations.htm#)

    - Select a crew in the filter panel to view its members, equipment, and associated items.
    - Drag and drop an assignment onto the crew to create assignments for all crew members simultaneously.
    - Actions (Start, Suspend, Complete, Cancel) applied to the crew assignment apply to all members of the crew.
    - Canceling a crew assignment removes the assignment for all crew members.

    [Assignments tab](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Industry_Solutions/2026-R3-field-operations.htm#)

    - Select Job, Work Order, or Miscellaneous assignment type.
    - Choose a Crew instead of an individual employee — the form is identical to standard assignment entry.
    - Use Save and New to efficiently enter multiple crew time entries in sequence.

## Automatically notify technicians when work order statuses change

Keep technicians informed of schedule changes as they happen, without the need to check schedules or interrupt work in the field.

### Key benefits

- When the status of a work order changes, the assigned field technicians are automatically notified by email.
- You can specify which work order statuses trigger an automatic email notification to field technicians.

### How it works

1.  Go to Work Orders settings.
2.  In **Enable Auto Notifications**, select **Yes**.
3.  In **Auto Notification Statuses**, select the statuses for which email notifications will be sent.

## Associate purchase orders directly with a job

Simplify the creation and item receipt process.

### Key benefits

- You don't need to create extra work orders just to allow for a job association.
- On the Job page, a new Purchase Orders tab lets you review all purchase orders for a job, including those associated via work orders tied to the job.
- Receive items on purchase orders in Sage Field Operations, or convert in Sage Intacct in the same way purchase order items are received for work orders and inventory.

### How it works

1.  In Sage Intacct, set up a shipping transaction definition for jobs (in **Purchasing** > **Transaction Definitions**).
2.  In Sage Field Operations, go to **Admin** > **Settings** > **Connections**.
3.  Select the shipping transaction definition for jobs as the **Purchase Order Receiver Transaction Definition - Job**.
4.  Create purchase orders associated with jobs from Purchase Order Manager or from the new Purchase Orders tab on the Jobs page.

## Issue parts directly from a stocking location to a job

On the Manage Parts window you can now issue inventory directly to a job, so you don't need to create work orders.

### Key benefits

- Material costs accumulate against the job in Sage Intacct in real time.
- You can specify the job category, cost code, and cost type.
- Issuing parts automatically creates an inventory transaction to update your inventory data.
- Items can be issued back from a job to the original location.

### How it works

1.  In Sage Intacct, set up a transaction definition to use for issuing parts to jobs. For the transaction definition, the template type must be Order and the workflow category must be Transfer.
2.  In Sage Field Operations, go to **Settings** > **Connections** > **Sage Intacct**.
3.  In the Inventory Control section, select the transaction definition for issuing parts to jobs as the **Inventory Transfer to Job Transaction Definition**.

    You can now issue parts directly to jobs.

## Handle transactions and work order dimensions at the entity level

Gain greater control over how financial records are managed across your organization.

You use a new **Transaction Management** setting (in **Admin** > **Settings** > **Connections**) to set the level at which you create transactions. This setting also applies to work order dimensions, if you use them.

### Key benefits

- Transactions created in an entity use the transaction definitions for the entity. At the top level, these transactions get pulled in for reference, but use the top level transaction definitions.
- When creating new work order dimension records or updating existing ones, changes are made at the selected entity level.

## Learn about Sage Field Operations

For more information, talk to your [Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

You can also check out the following resources:

- [Sage Field Operations user guides](https://support.operix.com/hc/en-us/articles/13116278587917)—Create a free account to log in and review the user guides.
- [Sage Field Operations web page](https://www.sage.com/en-us/products/sage-field-operations/)

## Permissions and other requirements

| Subscription          | Sage Field Operations Sage Intacct Construction (to use jobs)                           |
| --------------------- | --------------------------------------------------------------------------------------- |
| Regional availability | Canada United States                                                                    |
| Permissions           | Available features are based on users' role and user-based permissions in Sage Intacct. |
