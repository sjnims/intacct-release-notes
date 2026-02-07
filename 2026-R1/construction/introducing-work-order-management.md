---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Construction/2026-R1-introducing-work-order-management.htm
release: 2026-R1
extracted: 2026-02-07
title: "Introducing Work Order Management and the work order dimension"
---

# Introducing Work Order Management and the work order dimension

[Work Order Management overview](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Work_order_management_overview)

[Set up Work Order Management and the work order dimension](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_set_up_work_orders)

[Create work orders](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_create_work_orders)

construction

Manage service-related work orders at scale with the new Work Order Management application and work order dimension.

## Key benefits

- **Streamline your workflow**: Track service work orders in a dedicated application built to handle a high volume of shorter-duration jobs.
- **Enhance efficiency**: Reference specific work orders on transactions within Sage Intacct, and post all the way to General Ledger.
- **Optimize system performance**: Separate small-scale work orders from complex construction projects.
- **Easily sync**: Synchronize work order information with your integrated field service operations solution.

## How it works

### Enable work orders

To enable Work Order Management and the new work order dimension, complete the following steps:

1.  Your system administrator must subscribe to and configure the new **Work Order Management** application: **Company** > **Admin** > **Subscriptions** > **Applications**. 

If you subscribe to Construction, the Work Order Management subscription is available by default. To enable Work Order Management without a Construction subscription, [contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

1.  Enable the **Work order** dimension in General Ledger: **General Ledger** > **Setup** \> **Configuration**.
2.  Enable the **Work order** dimension in the applications where you want to track work order transactions, such as Projects, Accounts Payable, or Time: \[**Application name**\] > **Setup** > **Configuration**.

### Configure Work Order Management

Set up the basics for your Sage Intacct work orders. Go to **Work Order Management** > **Setup** > **Configuration** and select options for the following fields:

- **Work order ID sequence**: Determines how to number new work orders.
- **Enable work order fields**: External reference fields to track on work orders, such as Service site and Amount billed.

### Customize service-related attributes

Set up work order types, call types, problem codes, and work order states specific to your business. Go to **Work Order Management** > **Setup** and select the work order object to customize:

- **Work order types**: The main category for the service request. For example, Service or Small Job.
- **Work order call types**: A subcategory for a service request. For example, Preventative Maintenance or Warranty.
- **Work order problem codes**: A subcategory that describes the source of the service issue. For example, Parts or Electrical.
- **Work order states**: Identifies the current status of the work associated with a service request. For example, In progress, Completed, or On hold.

### Create a work order

Users can create work orders at the top level or for a specific entity.

1.  Go to **Work Order Management** > **All** > **Work orders**.
2.  Select **Add**.
3.  Complete the fields shown.
4.  Select **Save**.

    ![Work order information page showing work order fields](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-work-order-information.png "Work order information page showing work order fields")

### Track work order transactions

Users can track work order transactions in the applications where you've enabled the work order dimension. For example, if you enable the work order dimension in Time, employees can track hours against a work order directly from their timesheets.

![Timesheet page showing work order hours](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-work-order-timesheet-entry.png "Timesheet page showing work order hours")

## Good to know

- When transactions with work order dimensions are posted, work order values are carried through the workflow like any standard dimension.
- Users with the appropriate permissions can create customers, employees, and custom views, and generate reports within the Work Order Management application.

## Permissions and other requirements

| Subscription          | Construction                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                                                     |
| User type             | Business Construction Manager Employee Project Manager                                                                                                                                                                                                                                                                                                                                                                                            |
| Permissions           | Work Order Management Work orders: List, View, Add, Edit, Delete Work order types: List, View, Add, Edit, Delete Work order call types: List, View, Add, Edit, Delete Work order problem codes: List, View, Add, Edit, Delete Work order state: List, View, Add, Edit, Delete                                                                                                                                                                     |
| Configuration         | To use Work Order Management and the work order dimension, you must complete the following setup: Subscribe to and configure Work Order Management: Company > Admin > Subscriptions > Applications. Enable the Work order dimension in General Ledger: General Ledger > Setup > Configuration. Enable the Work order dimension in each application where you want to track work order transactions: \[Application Name\] > Setup > Configuration. |
| Implementation        | If you subscribe to Construction, the Work Order Management subscription is available by default. To enable Work Order Management without a Construction subscription, contact your Sage Intacct account manager.                                                                                                                                                                                                                                 |
