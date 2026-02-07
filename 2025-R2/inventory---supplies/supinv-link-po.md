---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Inventory___Supplies/2025-R2-supinv-link-po.htm
release: 2025-R2
extracted: 2026-02-07
title: "Streamline your supplies workflow"
---

# Streamline your supplies workflow

[About Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about-supplies-inventory)

[Link a supplies request to a purchase order](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Supplies-link-po)

SUPPLIES INVENTORY

Order linking allows organizations to place bulk orders with suppliers to accommodate the need for different product delivery dates, or to keep extra supplies on hand for multiple departments. When a requested item is not stock with a specific supplier, the supplies manager can choose to allocate items from an existing purchase order for a different supplier. Linking requests to standing purchase orders can save costs with volume purchasing, and speed up your procurement efficiency.

## Details

The new supplies link purchase order functionality reduces the amount of manual data entry and expedites the fulfillment of supplies requests. It also helps you to:

-   Identify purchase orders with surplus quantities currently on order.
    
-   Allocate items on pre-order to higher priority requests.
    
-   Unlink requests when items are no longer needed.
    

For example, your supplies manager might create a purchase order for items required for a specific initiative, such as materials for an upcoming series of outreach programs. As programs roll out, supplies requests are submitted from different regions at different times. Each regional supplies request can be linked to the pre-existing order. The number of items needed at each requesting region is allocated against the total available in the purchase order.

![Link PO window for a supplies requisition](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-supplies-link-po.png)

## How it works

1.  Go to **Inventory Control** \> **All** \> **Supplies Inventory** \> **Workbench**.
    
2.  Select one or more supplies requisitions with a line status of New request.
    
    If an order's line status displays a "Needs..." state, review the request and update the required fields.
    
    Transactions created in all entities appear on the Workbench. To link a request to an open purchase order, select requests created in the active entity.
    
3.  Select **Action** > **Link PO**.
    
    If there are open purchase orders available with quantities to allocate, the Link PO window displays a list of matching purchase orders.  
    
    [Why are there no purchase orders to link?](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Inventory___Supplies/2025-R2-supinv-link-po.htm#)
    
    -   There are no purchase orders matching item quantity available.
        
    -   There are no purchase orders for the current warehouse.
        
    -   There are no purchase orders created in the same entity.
        
    
4.  On the list of available purchase orders, enter the **Quantity to link** to a specific purchase order.
    
    The **Quantity remaining** column indicates unallocated quantities.
    
5.  Select **Post link**.
    
6.  At the Done prompt, select **OK**.
    
    In the Supplies workbench table, the **Sourced quantity** column updates to reflect the total number of linked items.
    

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory                                                                  Purchasing |
| --- | --- |
| Regional availability | Canada                                                                                                                                                                                                                   United States |
| User type | Business                                                                 Warehouse |
| Permissions | Inventory Control                                                                                                                                                                                                               Manage supplies: Edit |
| Restrictions | Link PO can only be completed for transactions within the same entity.                                                                 Link PO can only be performed for individual transaction line items. |
