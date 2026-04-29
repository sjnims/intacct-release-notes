---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Inventory___Supplies/2026-R2-INV-Item-record-attachments.htm
release: 2026-R2
extracted: 2026-04-29
title: "Centralized inventory item attachments"
---

# Centralized inventory item attachments

This idea came from you

Increase operational efficiency with centralized item reference documentation. Now upload, store, and view item-related attachments such as images, specification sheets, Material Safety Data Sheet (MSDS) files, and installation guides. These attachments are accessible directly from an item record or through APIs, improving item identification, operational accuracy, and cross-team communication.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-INV-item-attachment.png)

## Key benefits

-   **Reduce item identification errors**: Clearly distinguish similar items with images and reference documents. Teams can confidently validate items selected during order entry, picking, receiving, and shipping—helping prevent incorrect shipments, returns, and rework.
    
-   **Speed up operational workflows**: Eliminate time spent searching for files. Purchasing, warehouse, and customer support teams can quickly access the item documentation they need to make decisions and respond to inquiries.
    
-   **Support regulatory compliance requirements and audit readiness**: Store MSDS and other regulatory documents in one central location, making it easier to meet safety requirements and prepare for ensuring readiness for audits.
    

## How it works

Centralized attachments ensure everyone works from the same, up-to-date item information, reducing confusion caused by scattered or outdated files.

1.  Create or edit an item record (**Inventory Control** > **Setup** > **Items**).
    
2.  On the General tab in the **Attachment** field, choose a file from the dropdown list, or
    
    add an item attachment.
    
3.  Select **Save**.
    

When the item is added to a transaction, the attachment is available for reference throughout the transaction workflow.

If you have the correct permissions assigned, you can manage the folder structure for item attachments (**Company** > **Setup** > **Attachments**).

## Permissions and other requirements

| Subscription | Inventory Control                                                                 Order Entry                                                                 Purchasing |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                    Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                    United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business                                                                 Employee                                                                 Warehouse |
| Permissions | Attachments: List, View, Edit                                                                 Items: List, View, Add, Edit, Delete |
| Configuration | Enable advanced workflow on the Configure Inventory Control page.                                                                 Folders can help organize item attachments. See Add, edit, and delete attachment folders. |
| Restrictions | Employee users can only list and view item attachments.                                                                                                                                                                                                                   Requires advanced workflow.                                                                                                                                                                                                                   To remove item attachments, users need permission for the item record. |
