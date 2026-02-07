---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/FixedAssets/2024-R2-purchasing-integration.htm
release: 2024-R2
extracted: 2026-02-07
title: "Create assets from purchasing transactions"
---

# Create assets from purchasing transactions

Streamline your data entry process by creating assets directly from purchasing transactions such as vendor invoices.

Assets are automatically created at the time of their acquisition. Each line in a transaction can generate 1 asset. Only transactions that post to Accounts Payable can create assets.

![Vendor Invoice showing the new fields for the Fixed Assets Management integration](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-fa-purchasing-integration.png)

## Details

-   Sage Intacct checks if the items in a transaction are associated with an asset classification. This association is defined in the transaction definition's posting configuration.
    
-   If a match is found, you provide a name for the new asset on that line item.
    
-   When the transaction posts, it creates an AP bill, which then generates an asset. You can review the asset to add additional details.
    
-   The new asset is automatically tagged as a dimension on the transaction, bill, and posted journal entries.
    

## How it works

### Turn on the integration

1.  Go to **Fixed Assets Management** > **Setup** > **Configuration**.
2.  Select **Edit**.
3.  In the **Sage Intacct app integrations** section, select **Create assets from bills**.
    
    The Purchasing integration requires the AP integration to be enabled first.  
    
4.  Select **Create assets from purchasing transactions**.
    
5.  Select **Save**.
6.  In your transaction definition, for each Item GL group that you want to use for creating assets, verify that the **GL account** selected is assigned as an Asset GL account in an asset classification.
    

### Create an asset from a purchasing transaction

1.  Go to **Purchasing** > **All** > **Transactions** and select Add (circle) next to your transaction type.
    
2.  Select an item that's associated with an asset classification.
    
3.  In the **Name of acquired asset** field, provide a name for the new asset on the line item.
    
4.  **Optional:** Select **Include tax in asset cost**.
    
    This field appears if you are subscribed to the Taxes application.
    
5.  **Post** the transaction.
    

## Requirements

| Subscription | Fixed Assets Management                                                                 Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Administration                                                                                                                                                                                                               Application subscriptions:	Configure                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Purchasing transactions: List, View, Add, Edit, Delete                                                                                                                                                                                                       Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Add, Edit, Delete |
| Configuration | Requires the AP integration to be enabled in Fixed Assets Management configuration. |
| Restrictions | Assets cannot have required custom fields.                                                                                                                                                                                                                   Transactions must post to AP to create assets.                                                                                                                                                                                                                   Reversals, conversions, and recurring transactions are not supported with this integration.                                                                                                                                                                                                                   Transaction line items for assets cannot be negative or associated with an allocation.                                                                                                                                                                                                                   After the transaction is created, you cannot edit it. If you need to make a change, delete the transaction and create a new one. |
