---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Inventory_Control/2025-R1-supinv.htm
release: 2025-R1
extracted: 2026-02-07
title: "End-to-end supplies item management"
---

# End-to-end supplies item management

[About Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about-supplies-inventory)

[Set up Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set-up-supplies-inventory)

SUPPLIES INVENTORY

When serving communities or clients, facilities need to have essentials on hand to operate their business efficiently. Many organizations stock supplies to ensure they are on hand, as needed. Now it just got easier to ensure both adequate stock, easy issuance, and that the supplies are being consumed and accounted for according to their intended purpose.

Supplies Inventory provides a convenient and efficient way to manage employee requests for items needed to run your business. Your supplies manager can easily review and fulfill incoming supplies requests and ensure accurate accounting as supplies are consumed.

The Supplies Inventory subscription also provides valuable insight into your purchasing and usage trends across locations and periods.

## Details

When you set up Supplies Inventory, you'll create the items that your business requires to operate. Supplies items can include administrative items (paper, pens, coffee), furniture (shelving, ladders, desks), and equipment (monitors, keyboards, cables).

Supplies items cannot be used in sales orders.

Your employees create requests when they need supplies, and the supplies manager uses the Supplies Workbench to complete the following workflow activities: 

-   Review incoming supplies requests and evaluate reorder needs based on most-needed items.
    
-   Create new purchase orders or transfer in-stock items between warehouses.
    
-   Replenish the in-house availability of most-requested items.
    

Need to route supplies requests to different departments? You can create duplicates of the system-generated supplies request transaction definition to support department-specific approval policies.

![Supplies workbench page](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-supplies-workbench.png)

## Subscription options

There are two ways to subscribe to Supplies Inventory. The choice is yours:

-   If you currently use Inventory Control to purchase items that you sell, you can enable Supplies Inventory within your Inventory Control application. Use the additional functionality to track items you use to operate your business.
    
-   If you only want to order supplies items to support your business operations, you can subscribe to Supplies Inventory, which includes some Inventory Control functionality.
    

## Considerations

Whichever subscription option you choose, there are specific configuration settings required in General Ledger, Purchasing, and Inventory Control.

-   Supplies Inventory requires advanced workflows. There are important configuration steps required to support the added features you'll use with [advanced workflows](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Standard_and_advanced_workflows).
    
-   When switching to advanced workflows, any existing inventory item type records are automatically updated to use the standard cost method, and require that you identify a unit of measure.
    

-   Existing item records are also assigned a system-generated GL group (the original GL account selection is removed automatically). To change system-generated GL groups, create new item GL groups, and then update each item record with the new item GL group.
    
-   Assigned cost method cannot be changed within an item record. If you need to change an item's cost method, first duplicate the item record and create a new one. Then, deactivate the pre-existing item record.
    

## How it works

You'll first complete the configuration steps in General Ledger and Purchasing, and then subscribe to or enable Supplies Inventory in Inventory Control.

-   In General Ledger and Purchasing, configure Vendor and Employee [dimensions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Dimensions_overview_basics).
    
-   In Purchasing, [enable deliver-to contacts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Purchase_Orders) at the header level and line level.
    

### Subscribe to Supplies Inventory or Inventory Control

1.  Go to **Company** \> **Admin** \> **Subscriptions**, then find **Inventory Control and Supplies Inventory** in the Subscriptions list.
    
2.  Select **View options**.
    
3.  Select **Inventory Control** or **Supplies Inventory**.
    
4.  At the prompt, select **Subscribe**. Depending on the scope of your existing data configurations, it can take a few minutes to launch the Inventory Control configuration page.
    
5.  Complete the initial configuration steps in Inventory Control:
    
    1.  Select **Enable advanced workflow**.
        
    2.  Select **Enable Supplies Inventory**.
        
    3.  Select **Vendor** and **Employee** dimensions.
6.  Select **Save**.
    

### Additional configuration steps

The following is an overview of the remaining configuration steps. Refer to the links to Help links in the Related information section for specific details.

1.  Create transaction definitions for supplies requests, purchase orders, and direct shipments.
    
2.  Create supplies items in Inventory Control.
3.  Depending on your company workflow requirements, set up purchasing approval policies for supplies requests.

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory                                                                 Purchasing |
| --- | --- |
| Regional availability | Canada                                                                                                                                                                                                                   United States |
| User type | To request supplies:                                                                                                                                                                                                               Business                                                                                                                                                                                                                   Employee                                                                                                                                                                                                                   Warehouse                                                                                                                                                                                                       To manage supplies requests:                                                                                                                                                                                                               Business                                                                                                                                                                                                                                                                                                                                                     Warehouse |
| Permissions | Purchasing                                                                                                                                                                                                               Purchasing transactions: List, View, Add, Edit                                                                                                                                                                                                       Inventory Control                                                                                                                                                                                                               Request supplies: Edit                                                                                                                                                                                                                   Manage supplies: Edit |
| Configuration | To set up Supplies Inventory, you'll need to:                                                                                                                                                                                                               Configure item GL groups                                                                                                                                                                                                                   Configure a transaction definition for supplies purchase orders and, if required, for supplies direct shipments                                                                                                                                                                                                                   Add supplies items (supplies items cannot be converted from existing inventory items) |
| Dependencies or other requirements | Requires advanced workflow                                                                 Requires nightly MIV updates                                                                  Prevents negative inventory transactions |
| Restrictions | These Inventory Control features are not available with a Supplies Inventory-only subscription:                                                                                                                                                                                                                Inventory Control transaction definitions                                                                                                                                                                                                                   Landed Costs                                                                                                                                                                                                                   Fulfillment |
