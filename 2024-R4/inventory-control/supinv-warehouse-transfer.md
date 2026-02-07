---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Inventory_Control/2024-R4-supinv-warehouse-transfer.htm
release: 2024-R4
extracted: 2026-02-07
title: "Supplies Inventory is now generally available"
---

# Supplies Inventory is now generally available

[About Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about-supplies-inventory)

[Set up Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set-up-supplies-inventory)

SUPPLIES INVENTORY

Supplies Inventory, introduced earlier this year to early adopters, provides a convenient way to manage employee requests for items needed to run your business. After receiving valuable early adopter feedback, we're releasing the full functionality of Supplies Inventory for everyone.

Supply items are inventory type items that your business requires to operate, such as administrative items (copy paper, pens, coffee), furniture and equipment (chairs, desks, computers).

In addition to the core supplies management and replenishment capabilities of Supplies Inventory, we've added warehouse transfers to ensure a more complete end-to-end supplies workflow.

## Details

Your supplies manager can easily review and fulfill incoming supplies requests. After setup is complete, your supplies manager can use the supplies workbench to complete the following activities: 

- Review incoming requests and evaluate reorder needs based on most-needed items.
- Create new purchase orders or transfer in-stock items between warehouses.
- Replenish the in-house availability of most-requested items.

![Supplies workbench page](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-supplies-workbench.png)

## Subscription options

There are two ways to subscribe to Supplies Inventory, the choice is yours:

- If you currently use Inventory Control to purchase items that you sell, you can enable Supplies Inventory within your Inventory Control application. Use the additional functionality to track items you use to operate your business.
- If you only want to order supplies items to support your business operations, you can subscribe to Supplies Inventory, which includes limited Inventory Control functionality.

## Considerations

Whichever subscription option you choose, there are specific configuration settings required in General Ledger, Purchasing, and Inventory Control.

- Supplies Inventory requires advanced workflows. There are important configuration steps required to support the added features you'll use with [advanced workflows](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Standard_and_advanced_workflows).
- When switching to advanced workflows, any existing inventory item type records are automatically updated to use the standard cost method, and require that you identify a unit of measure.

- Existing item records are also assigned a system-generated GL group (the original GL account selection is removed automatically). To change system-generated GL groups, create new item GL groups, and then update each item record with the new item GL group.
- Assigned cost method cannot be changed within an item record. If you need to change an item's cost method, first duplicate the item record and create a new one. Then, deactivate the pre-existing item record.

## How it works

You'll first complete configuration steps in General Ledger and Purchasing, and then subscribe to or enable Supplies Inventory in Inventory Control.

- In General Ledger and Purchasing, configure Vendor and Employee [dimensions.](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm)
- In Purchasing, enable [deliver-to contacts](https://www.intacct.com/ia/docs/en_US/help_action/Purchasing/Setting_up_Purchasing/configure-purchasing.htm) at the header level and line level.

### Subscribe to Supplies Inventory or Inventory Control

1.  Go to **Company > Admin > Subscriptions**, then find **Inventory Control and Supplies Inventory** in the Subscriptions list.
2.  Select **View options**.
3.  Select **Inventory Control** or **Supplies Inventory**.
4.  At the prompt, select **Subscribe**. Depending on the scope of your existing data configurations, it can take a few minutes to launch the Inventory Control configuration page.
5.  Complete the initial configuration steps in Inventory Control:
    1.  Select **Enable advanced workflow**.
    2.  Select **Enable Supplies Inventory**.
    3.  Select **Vendor** and **Employee** dimensions.

6.  Select **Save**.

### Additional configuration steps

The following is an overview of the remaining configuration steps. Refer to the related topic Help links for specific details.

1.  Create transaction definitions for supplies purchase orders and direct shipments.
2.  Create supplies items in Inventory Control.
3.  Depending on your company workflow requirements, you can also set up purchasing approval policies.

### Change your subscription

You can choose to cancel or change your subscription. To see available subscriptions, first cancel your current Inventory Control or Supplies Inventory subscription, then you'll be able to choose to subscribe to the alternate application.

When you cancel either subscription, existing supplies transactions are saved to the GL but do not appear in reports. Additionally,

- If you switch from Supplies Inventory to Inventory Control, your supplies items are available when you enable Supplies Inventory.
- If you switch from Inventory Control to Supplies Inventory, your supplies items are available, but marked as inactive. You'll need to reset your supplies items to active.

## Permissions and other requirements

| Subscription                       | Inventory Control or Supplies Inventory Purchasing                                                                                                                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Canada United States                                                                                                                                                                                                                                                         |
| User type                          | To request supplies: Business user with admin privileges Business Employee Project Manager Warehouse To manage supplies requests: Business Warehouse                                                                                                                         |
| Permissions                        | Purchasing Purchasing transactions: List, View, Add, Edit Inventory Control Request supplies: Edit Manage supplies: Edit                                                                                                                                                     |
| Configuration                      | To set up Supplies Inventory, you'll need to: Configure item GL groups Configure a transaction definition for supplies purchase orders and, if required, for supplies direct shipments Add supplies items (supplies items cannot be converted from existing inventory items) |
| Dependencies or other requirements | Requires advanced workflow Requires nightly MIV updates Prevents negative inventory transactions                                                                                                                                                                             |
