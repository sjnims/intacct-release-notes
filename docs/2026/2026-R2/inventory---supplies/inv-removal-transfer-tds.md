---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Inventory___Supplies/2026-R2-INV-removal-transfer-tds.htm
release: 2026-R2
extracted: 2026-04-29
title: "Track inventory transfers more securely"
---

# Track inventory transfers more securely

[Set up a warehouse transfer workflow](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_warehouse_transfer)

[Inventory Control transaction definitions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_Inventory_transaction_definitions)

INVENTORY cONTROL

Warehouse transfer transaction definitions provide more comprehensive inventory activity tracking compared to Inventory transfer transaction definitions. To ensure all customers are using warehouse transfer transaction definitions, later this year Inventory Transfer In/Out transaction definitions will stop being supported.

## Action required

If you currently use Inventory Transfer In/Out transaction definitions, switch your existing transaction definitions to the following system-generated warehouse transaction definitions as follows:

-   Instead of using **Inventory Transfer In**, use **SYS-Warehouse Transfer In**
    
-   Instead of using **Inventory Transfer Out** use **SYS-Warehouse Transfer Out**
    

You can also use the additional system-provided transaction definition to track the movement of inventory between warehouses:

-   Inventory Control: **SYS-Warehouse In Transit**
    

## How to switch

To start using Warehouse transfer transaction definitions, do the following:

1.  Go to **Inventory Control** > **Setup** > **Configuration** to enable **Warehouse transfers**, and if required in your workflow, enable in-transit transfers.
    
    This step automatically installs system-generated warehouse transaction definitions.
    
2.  Edit the GL posting details for SYS-Warehouse Transfer Out and SYS-Warehouse Transfer In transaction definitions.
    
3.  If required, define accounts for inter-entity transactions.
    
    Sage Intacct posts to the GL based on a combination of the accounts specified in SYS-Warehouse Transfer Out and SYS-Warehouse Transfer In transaction definitions and the accounts defined for inter-entity transactions.
    
4.  Grant users permission to use warehouse transfers.
    
5.  Deactivate your Inventory Transfer In/Out transaction definitions to prevent your team from using them:
    
    1.  Go to **Inventory Control** > **Setup** > **Transaction definitions**.
        
    2.  Find the inventory transfer transaction definition to deactivate, then select **Edit**.
        
    3.  In the Status field, select **Inactive**.
        
    4.  Select **Save**.
        

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                    Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                    United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges |
| Permissions | Administration                                                                                                                                                                                                               Application subscriptions: Configure                                                                                                                                                                                                       Inventory Control                                                                                                                                                                                                                Warehouse transfer: List, View, Add, Edit, Delete |
| Configuration | Enable warehouse transfers in Inventory Control |
| Restrictions | Warehouse transfers do not support negative quantities. |
