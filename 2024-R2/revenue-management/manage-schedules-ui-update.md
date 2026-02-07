---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Revenue_Management/2024-R2-manage-schedules-UI-update.htm
release: 2024-R2
extracted: 2026-02-07
title: "New filters and layout changes in the Manage Revenue Schedules page"
---

# New filters and layout changes in the Manage Revenue Schedules page

This idea came from you

We're thrilled to announce exciting updates to the **Manage Revenue Schedules** page! We've listened to your feedback, and revamped the user interface to improve your experience.

## What's new

### New dimension or dimension group filters

Search smarter and find revenue schedules faster using the new dimension or dimension group filters. You can either enter a single dimension or a dimension group in these fields. For example, enter either an item or an item dimension group in the **Item or Item group** field.

The following are all possible dimension or dimension group filters. The dimensions that you see are based on your subscriptions and your General Ledger dimension configuration.

-   Customer or customer group
-   Contract or contract group
-   Location or location group
-   Department or department group
-   Class or class group
-   Item or item group
-   Project or project group

### New layout for the **Filters** section

As there are now so many filter options, we updated the layout to use four columns instead of two. Now you can quickly scan across the page to locate desired filters.

Bonus: The **Filters** section automatically collapses when you preview revenue recognition schedule entries. You can now see the beginning of the filtered results list without having to scroll first.

![Filters section of the Manage Revenue Schedules page.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-rm-mrs-page.jpg)

### New column filters in the Filtered schedules section

Many of the columns in the **Filtered schedules** section now have a filter capability. Use the column filters to further refine the revenue recognition schedules on which you want to act.

For example, say you are looking for a particular line number on a particular transaction. Enter the line number and part of the transaction number in the applicable column filter fields.

![Shows the Filtered Schedules grid with columns filtered by Line number and Source transaction.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-rm-col-filters.png)

## What's changed

-   We made the following field or option label changes:
    
    | Old label | New label |
    | --- | --- |
    | Post revenue from a schedule | Post |
    | Place a schedule on hold | Hold |
    | Resume a schedule from hold | Resume |
    | Terminate all or part of a schedule | Terminate |
    | Mark an item as delivered | Deliver |
    | Include open period schedules | Include unscheduled project revenue |
    | Apply filters | Preview entries |
    
-   We removed the View all schedules **Action option.** Use the new [Revenue recognition schedules list](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Revenue_Management/2024-R2-rev-schedules-list.htm) to view and maintain your revenue schedules.
-   We removed the Terminated and Completed **Revenue schedule status** filters as there is no action to take on terminated or completed schedules. Use the new [Revenue recognition schedules list](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Revenue_Management/2024-R2-rev-schedules-list.htm) to view all terminated or completed schedules.
-   As stated, we changed the label for **Apply filters** to **Preview entries**. We also moved the button to the top of the page, which is more consistent with product standards. After setting the desired filters, always select the P**review entries** button to retrieve the related results.

## Requirements

| Subscription | Standard revenue recognition for Order Entry or Accounts Receivable |
| --- | --- |
| Regional availability | All regions |
| Permissions | General Ledger                                                                                                                                                                                                                    Revenue recognition schedule: List, Edit |
| Restrictions | Only Business users can act upon revenue schedules.                                                                 Employee, Project Manager, and Warehouse users can only list and view revenue schedules. |
