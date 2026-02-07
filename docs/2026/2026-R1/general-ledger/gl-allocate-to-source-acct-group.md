---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/General_Ledger/2026-R1-gl-allocate-to-source-acct-group.htm
release: 2026-R1
extracted: 2026-02-07
title: "Streamlined Dynamic Allocations setup for source data"
---

# Streamlined Dynamic Allocations setup for source data

[Dynamic allocations](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_allocations)

General Ledger

Dynamic (account) allocations are designed to pull source balances automatically and distribute them across dimensions, according to the calculation method set as the basis. When you create the account allocation definition, you specify the source and target account group, or what you want to allocate and where do you want to allocate it.

You can now use the source account group as the target for the allocation. This enhancement allows you to allocate the account balances across dimensions while maintaining the original account balance with one allocation definition.

## Key benefits

- Design complex scenarios such as expense allocations.
- Easily match allocations to reporting requirements and stakeholder expectations.

## How it works

We've added a **Use source account** checkbox in the Target entry section for the allocation destination. Select **Use source account** to use the account group selected in the Source pool section as your target destination.

![Target entry section of the Allocation information page.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-gl-dynamic-allocations.png)

## Permissions and other requirements

| Subscription          | Dynamic Allocations General Ledger                                                            |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                   |
| User type             | Business                                                                                      |
| Permissions           | General Ledger Account Allocation Definitions: List, View, Add, Edit Generate allocation: Add |
