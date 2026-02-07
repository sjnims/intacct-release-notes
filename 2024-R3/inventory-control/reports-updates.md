---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Inventory_Control/2024-R3-reports-updates.htm
release: 2024-R3
extracted: 2026-02-07
title: "Enhanced reporting options"
---

# Enhanced reporting options

[About Inventory utilities](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=inventory-utilities)

[Download an Inventory utilities report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=download-inventory-utl-report)

[Inventory valuation report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=running_Inventory_Valuation_Reports)

INVENTORY CONTROL

Inventory utilities help you keep track of inventory changes to quantity and value, and identify potential discrepancies. Recent report enhancements include the date a GL entry was entered and any transactions which do not have a corresponding quantity or value entry.

## Details

Generate more valuation detail in your reports: 

- **Transactions Posting to the GL** and **Inventory Valuation** reports: The **Creation date** column in each report provides insight into any transactions which were back-dated (reflecting a different date from the transaction's document date).

- **Running Average Cost** report: The **Unmatched** column helps you identify transactions without a match, such as an incoming transaction to increase quantity without a corresponding value. If there is no corresponding match, the Unmatched column displays **Yes**.

## How it works

Keep an eye on transactions impacting inventory valuations by generating inventory utilities reports regularly.

1.  Select **Inventory Control** > **Setup** > **Inventory Utilities**.
2.  Select the **GL subledger reconciliation** tab.
3.  In the Transactions Posting to GL report section select **Download**. You can access the report from your downloads folder.

Investigate inventory trends and identify exceptions with a regularly scheduled review of your inventory valuation report:

1.  Go to **Inventory Control > **All** > Reports > Inventory > Valuation**.
2.  On the Inventory valuation page set filters then select **View**.

    The report displays all results for the default reporting period. Learn more about Inventory valuation filters and formatting.

## Permissions and other requirements

| Subscription          | Inventory Control                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                       |
| User type             | To configure reports: Business user with Full admin privileges To generate reports: Employee user |
| Permissions           | Inventory Control: List, View, Add, Edit, Delete                                                  |
