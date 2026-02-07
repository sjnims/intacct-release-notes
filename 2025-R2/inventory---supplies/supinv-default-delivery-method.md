---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Inventory___Supplies/2025-R2-supinv-default-delivery-method.htm
release: 2025-R2
extracted: 2026-02-07
title: "Autofill the supplies request delivery method"
---

# Autofill the supplies request delivery method

[About Supplies Inventory](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about-supplies-inventory)

[Request supplies](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=request-supplies)

SUPPLIES INVENTORY

As new requests are submitted for approval or processing, the delivery method ensures that requested items get delivered to the intended recipient efficiently. If all the supplies in a request are going to the same recipient or location, select a default delivery method to speed up order completion.

## Details

The default delivery method helps facilitate faster completion of supplies requests:

-   Use the default selection to pre-populate the delivery method for each new line item requested.
    

-   If you change the default delivery method at the header level, Sage Intacct only updates new lines and lines without a manual override of the delivery method.
    
-   You can manually change a specific line item's delivery method at any time.
    

### Do I need a shipping method or a delivery method?

For each supply request you specify both a shipping method and a delivery method:

-   **Shipping method**: How an item travels from its originating location to a receiving location. For example, a ground or air courier service.
    
-   **Delivery method**: How an item gets to the recipient's final destination. For example, if an item is shipped to a warehouse, the recipient could request to have it hand-delivered to their upstairs office.
    

## How it works

1.  Go to **Purchasing** \> **All** \> **Supplies Inventory** \> **Requisitions** and select Add (circle) next to **SYS-Supplies requisition.**
    
2.  In the requisition header, select a **Default delivery method**.  
    This selection will appear in the Delivery method field for each requested item.
    
    ![Default delivery method field on a Supplies requisition](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-supplies-DefaultDelivery.png)
    
    You can override the default delivery method for a specific line.
    
3.  Fill in the remaining request fields.
    
4.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory                                                                 Purchasing |
| --- | --- |
| Regional availability | Canada                                                                                                                                                                                                                   United States |
| User type | Business                                                                 Employee                                                                 Warehouse |
| Permissions | Inventory Control                                                                                                                                                                                                               Request supplies: Edit                                                                                                                                                                                                                   Manage supplies: Edit                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Purchasing transactions: List, View, Add, Edit |
| Restrictions | Only  a Business or Warehouse user with Manage supplies: Edit permission can edit a supplies purchase request in the supplies workbench. |
