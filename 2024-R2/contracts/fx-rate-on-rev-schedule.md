---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Contracts/2024-R2-fx-rate-on-rev-schedule.htm
release: 2024-R2
extracted: 2026-02-07
title: "Improved insight into posted revenue exchange rates"
---

# Improved insight into posted revenue exchange rates

This idea came from you

For contracts in multi-currency companies, Intacct schedules revenue using the exchange rate associated with the contract line's exchange rate date. After the related billing is posted, any posted revenue amounts use the exchange rate associated with the invoice exchange rate date. Previously, the exchange rate associated with posted revenue was not easily viewable.

You can now access a revenue schedule's multi-currency values in one place, giving you a more accurate reflection of a revenue schedule's current value at a glance. Get this big picture view by including the posted exchange rate and the posted base amount data in your custom reports based on the **Contract revenue schedule entry** report object.

## What's new

We added the following fields to the **Contract revenue schedule entry** report object and to the **Revenue schedule** window in the user interface:

-   **Posted exchange rate**: Displays one of the following after the corresponding revenue is posted:
    -   If the associated billing is not posted, this field displays the exchange rate associated with the contract line's exchange rate date.
    -   After the associated billing is posted, this field displays the exchange rate from the associated invoice.
-   **Posted base amount**: Displays the posted revenue amount expressed in the associated location's base currency.

![Revenue schedules window with the Posted exchange rate and Posted base amount fields highlighted.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-con-fx-rate.jpg)

Include these fields in reports based on the **Contract revenue schedule entry** object built with the Custom Report Writer.

## Requirements

| Subscription | Contract revenue recognition |
| --- | --- |
| Regional availability | All regions, excluding France |
| Permissions | Contract: List, View |
| Dependencies or other requirements | The General Ledger application must be configured with Enable multi-currency subscription = true. |
| Data migration | All existing and past revenue schedules in multi-currency companies will now display data when applicable for Posted exchange rate and Posted base amount. |
