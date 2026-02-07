---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Inventory___Supplies/2026-R1-SUPINV-replace-and-reserve.htm
release: 2026-R1
extracted: 2026-02-07
title: "Flexible selection and reservation of supplies"
---

# Flexible selection and reservation of supplies

Does one of your team members need an out-of-stock item fast? This update provides you and your team more control and confidence when requesting and ordering supplies items.

When you do not have enough of a requested supplies item, you can now set up substitutions for priority items. Additionally, you can create an automatic reservation order, which ensures that items on a supplies purchase order are prioritized for delivery to the requester.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-supinv-substitute-item.png)

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-supinv-reserve-combo.png)

## Key benefits

-   **Maintain productivity**: Flexible supplies item substitutions mean fewer delays when items are out of stock.
-   **Protect priority needs**: Limited supplies are safeguarded for the intended recipient.
-   **Improved order management**: Automatic reservations prevent order mix-ups and ensure that supplies requests are filled as intended.

## What's changed

With this enhancement, you can better meet employee demand with item substitutions for your supplies items. Additionally, with the Reserve PO option, you avoid the potential for reassignment of purchased supplies items when they arrive.

## How it works

When creating a new supplies request, requesters can select a substitute for out-of-stock items. Supplies managers can also choose to issue a supplies substitution when filling requests, or create a reserved purchase order.

[Set up a substitute supplies item](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Inventory___Supplies/2026-R1-SUPINV-replace-and-reserve.htm#)

1.  Go to **Inventory Control** > **Setup** > **Items.**
    
2.  Select a supplies item.
    
3.  On the Cross references tab, in the **Alternate item ID** field, select a substitute supplies item.  
    Only a supplies item can be selected as a supplies item substitute.
    
4.  Select **Save**.
    

Substitute items can be selected when creating or editing a supplies request.

[Create a supplies request with a substitute item](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Inventory___Supplies/2026-R1-SUPINV-replace-and-reserve.htm#)

1.  Go to **Purchasing** > **Supplies Inventory** > **Requisitions** and create a new supplies request.
    
2.  In the Entries table, select an item you want to order.  
    If there's no stock on hand, the Quantity on hand column is blank.
    
3.  Select **Action** > **Substitute**.
4.  Select a substitute item, if one is available.  
    Only items with available substitutions display.
5.  Complete the requisition details, and submit.
    

[Fill a supplies request with a substitute item](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Inventory___Supplies/2026-R1-SUPINV-replace-and-reserve.htm#)

1.  Go to **Inventory Control** > **Supplies Inventory** > **Workbench**.
    
2.  Open a supplies request in Edit mode.
    
3.  In the Entries table, if there's an item with no Quantity on hand, select **Action** > **Substitute**.
    
4.  Select a substitute item, if one is available.  
    Only items with available substitutions display.
    
5.  Complete the requisition details, and post.
    

[Create a reserved purchase order](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Inventory___Supplies/2026-R1-SUPINV-replace-and-reserve.htm#)

1.  Go to **Inventory Control** > **Supplies Inventory** > **Workbench**.
    
2.  Find the supplies request that you want to fill, and then select **Action** > **Reserve PO**.
    
3.  Complete the purchase order transaction.
    
4.  When items arrive, the ordered supplies can only be issued to the employee who requested them.
    

Received items can be unreserved so that they can be available for other requests.

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                    United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business                                                                 Warehouse |
| Permissions | Inventory Control                                                                                                                                                                                                               Items: Add, Edit, Delete, List View                                                                                                                                                                                                                                                                                                                                                     Manage supplies: Edit |
| Configuration | Enable Supplies Inventory in Inventory Control, or subscribe to Supplies Inventory. |
