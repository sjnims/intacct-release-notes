---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Inventory_Control/2025-R1-INV-MIV-setting-change.htm
release: 2025-R1
extracted: 2026-02-07
title: "Ensuring inventory valuation accuracy"
---

# Ensuring inventory valuation accuracy

[Configuring Inventory Control](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_the_Inventory_Control_Application)

[Maintain Inventory Valuation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Maintain_inventory_valuation_overview)

INVENTORY control

When inventory costs are updated on an ongoing basis, your financial statements more accurately reflect the true state of your business. This enables you to make more informed decisions about current and future inventory profitability.

Why do costs change? Here are a few possibilities:

-   Changes to the cost of standard items
    
-   Adding actual landed costs to a purchase
    
-   Entering back-dated transactions

You can ensure that your inventory valuation remains accurate by enabling **Maintain inventory valuation (MIV) costing updates** to run nightly. When this option is enabled, Sage Intacct automatically checks for cost differences and ensures all related transactions which impact inventory valuation are processed correctly.

## Details

New subscribers to Inventory Control will see that MIV is pre-configured to automatically update nightly. This setting cannot be disabled.

Existing subscribers who modify their configuration settings will be advised to enable MIV, but this remains an optional setting.

## How it works

Configure Inventory Control to run MIV costing updates nightly.

1.  Go to **Inventory Control** \> **Setup** \> **Configuration** and go to the Accounting section.
    
2.  To enable Maintain inventory valuation (MIV) costing updates, select **Automatically run updates nightly**.
    
3.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Inventory Control or Supplies Inventory |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                                                                                                                                                     Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States                                                                                                                                                                                                       Supplies Inventory is currently only available in Canada and USA. |
| User type | To configure:                                                                 Business user with admin privileges |
| Permissions | Administration                                                                                                                                                                                                               Application subscriptions: Configure |
