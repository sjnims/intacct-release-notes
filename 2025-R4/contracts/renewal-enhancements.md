---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Contracts/2025-R4-renewal-enhancements.htm
release: 2025-R4
extracted: 2026-02-07
title: "Contract renewal enhancements"
---

# Contract renewal enhancements

This release introduces improvements to contract renewals that simplify management, increase transparency, and reduce manual work.

## New automatic renewal process

We’ve simplified how contract renewals are handled. Instead of separate jobs for each contract, renewals now run as bulk actions that you can easily track. The process checks daily for contracts due for renewal.

![Bulk action runs list in Contracts](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-cn-bulk-action-runs.png)

The following bulk actions are part of the new renewal process:

-   **Automatic contract renewals:** Renews eligible contracts.
    
-   **Automatic contract expirations:** Updates contracts to **Not renewed** if they’re past their renewal date and not set to renew.
    
-   **Internal renewal notifications:** Sends internal emails as defined in renewal templates.
    
-   **Customer renewal notifications:** Sends customer emails as defined in renewal templates.
    

Go to **Contracts** > **All** > **Bulk action runs** to view the results and any errors for these runs. It’s now easier to see when renewals happen and troubleshoot any issues.

## Control automatic renewals with new settings

We've made it easier to manage automatic contract renewals with new configuration options. Previously, the ability to pause renewals was tied to the **Allow import or creation of contracts with past end dates** implementation setting. Now, there's a dedicated setting available after setup that provides more flexibility, making renewal management clearer and more intuitive.

![Contracts configuration showing new renewals section.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-cn-configure-renewals.png)

A new **Renewals** section in Contracts configuration includes two settings:  

-   **Automatic contract renewals:** Choose between **On** (default) or **Off**. When turned on, contracts renew automatically as scheduled.
    
-   **Renewal catch-up period (days):** Defines how many days past the trigger date a contract can be renewed automatically. The default is 7 days and the maximum is 999 days.
    

By default, entities inherit these settings from the top level, but you can override them at the entity level for finer control.

## Simplified renewal template management

Previously, if you edited the following fields on a renewal or evergreen template, you had to perform a manual sync to update the trigger date on associated contracts:

-   Renewal action (only applicable to Intacct Advanced CRM Integration and renewal templates)
    
-   Days
    
-   Contract end date (only applicable to renewal templates)
    
-   Recurring billing period end date (only applicable to evergreen templates)
    

Now, manual syncs are no longer needed. When you update a template, your changes are automatically applied to all associated contracts. Contracts will always renew based on the latest settings from the template, eliminating manual steps and ensuring consistency.

## Permissions and other requirements

| Subscription | Contracts                                                                 Administration |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges (to edit new renewal settings)                                                                 Business                                                                 Employee                                                                 Project Manager                                                                 Warehouse |
| Permissions | Contracts                                                                                                                                                                                                               Renewal templates: List, View, Add, Edit                                                                                                                                                                                                                   Evergreen templates: List, View, Add, Edit                                                                                                                                                                                                                   Bulk action runs: List, View                                                                                                                                                                                                       Administration (to edit new renewal settings)                                                                                                                                                                                                               Application subscriptions: Configure |
| Dependencies or other requirements | The new renewal behavior takes effect after the next scheduled renewal run, or immediately after you update Contracts configuration. |
