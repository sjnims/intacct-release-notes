---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Inventory_Control/2024-R2-supplies-inventory.htm
release: 2024-R2
extracted: 2026-02-07
title: "Supplies inventory—Early adopter"
---

# Supplies inventory—Early adopter

Employees can enter requisitions for items designated as supplies inventory, such as office or program supplies, or computer equipment. The supplies manager can easily process requests and monitor status using the workbench.

This streamlined ordering process provides you with the ability to:

- Track supplies requisitions
- Gain insights into usage trends and cost insights across periods
- Manage inventory levels and reorder when needed to avoid availability delays

[![Supplies workbench page. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-supplies-workbench_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-supplies-workbench.png)

## Details

When employees create a supplies request, it can be fulfilled immediately or routed through an approval process. The supplies manager can fulfill the order by completing one of the following tasks:

- Issue items directly from the available inventory
- Create a purchase order if an item is not available internally
- Create a direct shipment purchase from the vendor to the employee

## How it works

### Request supplies

1. Go to **Purchasing** > **All** > **Supplies inventory** and select the **+** next to **Requisitions**.
2. Enter the required fields.
3. In the Entries section, enter the **Item ID**. If you are unsure of which item to select:
    1. Select the generic supply item ID: **SYS-supplies-item**.
    2. Select **Show details**.
    3. Enter a detailed **Item description**.

    The person who fulfills your request can then select the correct item ID.

4. Select **Post** to submit the requisition or select **Draft** to save it if you are not ready to submit it.

For more details, see [Request supplies](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=request-supplies) in the Help Center.

### Fulfill a supplies requisition

This is a brief overview of the process. For more details, see [Fulfill supply requisitions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=fulfill-requisitions) in the Help Center.

1. Go to **Inventory Control** or **Purchasing** \> **All** \> **Supplies inventory** > **Workbench**.

    The list breaks out the requisitions by individual items. For more information, see [About the Supplies workbench](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=supplies-workbench).

2. Select one of the requisitions to view it.
3. Select **Edit**.
4. In the Entries section, make sure that the correct **Item ID** is selected.

    See the **Item description** if they generic supply item placeholder is selected.

5. Complete the other fields as needed.
6. Select **Post**.

    You're returned to the workbench.

7. For the requisition that you reviewed, select **Action** at the end of the row.
8. Depending on the item's availability, select one of the following options:
    - Select **Issue** if the item is available in stock.
    - Select **Create PO** to create a purchase order for the item.
    - Select **Direct ship** to create a purchase order and have the item shipped directly to the employee.

Sort by the Item name column to group the items. You can select multiple items to issue them, create a purchase order, or a direct shipment. When you select multiple items, use the buttons above the grid to select an action.

## What is the Early Adopter program?

The Early Adopter program provides qualified functionality to a specific set of customers who use the Order Entry and Inventory Control applications. During this release, these early adopters will help us refine our offering to deliver the functionality that is critical for business controls.

The Early Adopter program is closely monitored. We work closely with the early adopters to ensure that we focus our time and attention on what matters most to you.

If you would like to be considered for the Early Adopter program, please [sign up](https://sageintacctpm.omnidek.com/public-form/ab9d5d98-7a83-4d9b-9d4c-1261150b5ecf/Early%20Adopter%20-%20Supplies%20Inventory_) today.

## Requirements

| Subscription          | Inventory Control                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States Canada                                                                                                  |
| User type             | To request supplies:  Business Employee Project manager Warehouse To manage supplies requisitions: Business Warehouse |
| Permissions           | Inventory Control Request supplies: Edit Manage supplies: Edit                                                        |
| Configuration         | See Set up supplies inventory.                                                                                        |
