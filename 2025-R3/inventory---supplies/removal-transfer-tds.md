---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Inventory___Supplies/2025-R3-Removal-transfer-tds.htm
release: 2025-R3
extracted: 2026-02-07
title: "Track inventory transfers more securely"
---

# Track inventory transfers more securely

[Set up a warehouse transfer workflow](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_warehouse_transfer)

[Inventory Control transaction definitions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_Inventory_transaction_definitions)

[Configure Inventory Control](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_the_Inventory_Control_Application)

INVENTORY cONTROL

Ensure more complete inventory tracking with Warehouse Transfer transaction definitions. These more robust transaction definitions are provided with every new installation of Inventory Control. They deliver more comprehensive inventory activity tracking compared to the existing Inventory Transfer In/Out transaction definitions.

We encourage all customers who are currently using Inventory Transfer In/Out transaction definitions to start using SYS-Warehouse transfer in, -transfer out, and -in transit transaction definitions.

Inventory Transfer In/Out transaction definitions will not be supported in 2026.

As of the R2 release earlier this year, Inventory Transfer In/Out transaction definitions are not included with new Inventory Control subscriptions.

## How it works

To start using Warehouse transfer transaction definitions, do the following:

1.  Configure Inventory Control to enable **Warehouse transfers**, and if required in your workflow, in-transit transfers.
    
2.  Edit system-generated warehouse transaction definitions.
    
3.  For multi-currency companies, define accounts for inter-entity transactions.
    
4.  Grant users permission to use warehouse transfers.
    

## Action required

If you currently use Inventory Transfer In/Out transaction definitions, switch your existing transaction definitions as follows:

-   Instead of using, **Inventory Transfer In**, use **SYS-Warehouse Transfer In**
    
-   Instead of using, **Inventory Transfer Out** use **SYS-Warehouse Transfer Out**
    

You can also use the additional system-provided transaction definition to track the movement of inventory between warehouses:

-   Inventory Control: **SYS-Warehouse In Transit**
    

Set your Inventory Transfer In/Out transaction definitions to inactive to prevent your team from using them (Inventory Control > Setup > Transaction Definitions > Edit).

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Inventory___Supplies/2025-R3-Removal-transfer-tds.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Inventory Control |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                    Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                    United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges |
| Permissions | Warehouse transfer: List, View, Add, Edit, Delete |
| Configuration | Enable Warehouse transfers in Inventory Control |
| Restrictions | Warehouse transfers do not support negative quantities. |
