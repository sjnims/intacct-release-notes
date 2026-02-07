---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Inventory_Control/2024-R1-IC-show-qty-w-value.htm
release: 2024-R1
extracted: 2026-02-07
title: "Include quantities with a value in the Valuation report summary"
---

# Include quantities with a value in the Valuation report summary

A new checkbox, Show quantities with a value in the summary, has been added to the Inventory Valuation report page.

![Section of the Inventory Valuation report page with the Show quantities with a value in the summary checkbox.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-inventory-valuation-rpt.png)

If you select this checkbox, the summary includes transactions that affect only the value of the item. For example, you have a receipt for 10 items, which increases quantity, and an invoice for 5 items, which increases value. The transaction information for all 15 items is reflected in the summary.

If the checkbox is cleared, only the transaction information for the 10 items that increase quantity is reflected in the summary. The details section of the report always includes transactions that impact the item's quantity and value. Therefore, you might have a discrepancy between the summary section and the details section if the checkbox is cleared.

## Requirements

| Subscription | Inventory Control |
| --- | --- |
| Regional availability | Any region except France |
| User type | Business, Employee, Warehouse |
| Permissions | Inventory Control                                                                                                                                                                                                               Inventory Valuation: Run |
