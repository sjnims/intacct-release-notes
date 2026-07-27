---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Inventory___Supplies/2026-R3-SUPINV-supplies-neg-inventory.htm
release: 2026-R3
extracted: 2026-07-27
title: "Manage supplies without blocking negative inventory"
---

# Manage supplies without blocking negative inventory

[About Supplies Inventory](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about-supplies-inventory)

inventory CONTROL

This idea came from you

No trade-off required. You can now use Supplies Inventory without restricting negative inventory sales transactions. With greater flexibility across all your inventory workflows, you can fulfill urgent requests faster without compromising inventory integrity.

This update introduces an additional adjustment issue option in the Supplies workbench. Now you can accommodate supply requests when there are timing gaps between the physical receipt and issue of supplies.

Supplies Inventory Adjust and issue transactions require supplies items to have a physical quantity available.

## What's changed

Previously, you couldn’t configure and use Supplies Inventory if your company allowed negative inventory sales transactions. With this new configuration flexibility and an exception-based workflow, you can bridge timing gaps between physical inventory movement and system transactions.

Use both workflows together to:

- Manage internal supplies with controlled stock levels.

- Allow negative inventory for items you sell.
- Issue supplies when inventory exists physically but has not yet been recorded.

## How it works

1.  Configure Inventory Control to enable Supplies Inventory.

2.  If enabled, clear the option, **Do not allow negative inventory globally**.

3.  Save your changes.

4.  Edit the **SYS-Supplies adj increase transaction definition** with your GL posting configuration.

To perform an adjustment issue transaction, select a new request in the Supplies workbench, then select **Adjust and issue.**

![Supplies Workbench adjust and issue menu option](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-supinv-adjust_626x248.png)

Intacct automatically creates both an adjustment transaction and an issue transaction.

Adjust and issue is an exception workflow. It is not intended to replace the standard receiving workflow, to correct inventory discrepancies, or create inventory that does not exist.

## Permissions and other requirements

| Subscription          | Inventory Control                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                    |
| User type             | Business                                                                                                                                                                                      |
| Permissions           | Configure Inventory Control Administration Application subscriptions: List, View, and Configure Issue supplies Inventory Control Manage supplies: Add, Edit                                   |
| Configuration         | When you change the configuration to prevent or allow negative inventory, in either Order Entry or Inventory Control, it's a global switch—you're changing the setting for both applications. |
| Restrictions          | Supplies Inventory can only be configured at the top level of a multi-entity environment. Adjustment issues cannot be created for tracked items.                                              |
