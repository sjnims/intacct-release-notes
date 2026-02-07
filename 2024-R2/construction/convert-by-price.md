---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Construction/2024-R2-convert-by-price.htm
release: 2024-R2
extracted: 2026-02-07
title: "Updated support for price conversion"
---

# Updated support for price conversion

Using purchase or sales order workflows, you can now override the default conversion type for non-inventory items. This ensures you can easily bill for delivered or received services and other non-inventory items, and automatically draw down an approved blanket purchase or sales order.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-pur-convertprice.png)

## Details

When setting up and managing blanket purchase or sales orders you'll complete the following tasks:

-   Configure Order Entry and Purchasing to enable conversion by price for non-inventory items.
-   Choose whether to allow override on conversion type for pre-existing non-inventory transactions.

Price conversion is not supported in recurring non-inventory transactions (the balance remaining can be manually calculated).

Once price conversion is selected, it cannot be deactivated.

## How it works

### Enable line-item override within transactions

1.  Go to **Purchasing** or **Order Entry** > **Setup** > **Configuration**.
    
2.  In the Enable functionality section, select **Enable price conversion**.
    
     Once price conversion is selected, it cannot be deactivated.
    
3.  Select **Enable override on transaction conversion type**.
    
     This option is selected by default.
    
4.  Select **Save**.
    

### Override a line item on a purchase or sales transaction

1.  Go to **Purchasing** or **Order Entry** > **Transactions** and choose a transaction type.
    
2.  Select a transaction then click **Convert** to choose an available conversion type from the pop-up list.
    
3.  In the Entries table select an item line and change the conversion type.
    

## Requirements

| Subscription | Purchasing or Order Entry |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United Kingdom (EA)                                                                                                                                                                                                                   United States |
| User type | To configure:                                                                                                                                                                                                                Business user with admin privileges                                                                                                                                                                                                       To convert transactions:                                                                                                                                                                                                                Employee user |
| Permissions | Administration (to configure):                                                                                                                                                                                                               Application subscriptions: Configure                                                                                                                                                                                                       Purchasing or Order Entry (to convert transactions):                                                                                                                                                                                                               List, View, Add, Edit, Delete |
| Configuration | Enable price conversion override when you configure:                                                                                                                                                                                                               Order Entry                                                                                                                                                                                                                   Purchasing |
