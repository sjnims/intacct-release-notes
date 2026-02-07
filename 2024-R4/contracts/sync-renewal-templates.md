---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-sync-renewal-templates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Sync renewal templates to contracts"
---

# Sync renewal templates to contracts

[Sync renewal or evergreen template changes to contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Sync_template_to_contracts)

[Renewal templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Renewal_templates_contracts)

[Evergreen templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Evergreen_templates)

Contracts

When you edit a renewal or evergreen template, you now have the option to sync your updates to scheduled renewals associated with that template.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-renewal-template.png)

Previously, changes to a renewal or evergreen template didn’t automatically update your scheduled renewals. If you wanted to make an adjustment, you had to edit each contract individually. With this enhancement, you can push updates from the template to associated contracts, saving time and improving efficiency.

## Details

-   Only changes to the **Renewal action**, **Days**, **Contract end date**, or **Recurring billing period end date** fields in a renewal or evergreen template can initiate a sync.  
    
    The Renewal action field is only applicable if your company is subscribed to Intacct Advanced CRM Integration.
    
-   Syncing updates the trigger date on in-progress contracts that use the template. Syncs act one-way, from template to contract.
    
-   During the sync, the template and associated contracts are locked to prevent concurrent changes.
    
-   When a sync is complete, you'll receive an email notification.
    

## How it works

You can sync updates immediately after saving changes to the template or at a later time. You also have the option to sync individual contracts.

[Update a template](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-sync-renewal-templates.htm#)

1.  Go to **Contracts** > **Setup** > **Templates** and select **Renewal** or **Evergreen**.
    
2.  Select **Edit** next to a template that's in use by one or more in-progress contracts.
    
3.  Modify the **Renewal action**, **Days**, **Contract end date**, or **Recurring billing period end date** fields.
    
    Only changes to these fields affect scheduled renewals.
    
    The Renewal action field is only applicable if your company is subscribed to Intacct Advanced CRM Integration.
    
4.  Select **Save**.
    
    A popup appears with the following options:
    
    -   Select **Sync** to start the sync immediately.
        
    -   Select **Do not sync** if you do not want to sync now. You still have the option to sync all or some contracts at a later time.  
        
    -   Select **Cancel** to continue editing the template.
        

[Sync to all contracts at a later time](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-sync-renewal-templates.htm#)

If you chose **Do not sync** after updating the template, you can sync to all contracts at a later time:

1.  Go to **Contracts** > **Setup** > **Templates** and select **Renewal** or **Evergreen**.
    
2.  Select **View** next to the template you updated.
    
3.  Select **More actions** > **Sync to contracts**.
    
    This option does not appear if there are no changes to sync.
    
4.  Select **Sync** to confirm and start the sync.
    

[Sync an individual contract](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-sync-renewal-templates.htm#)

If you chose **Do not sync** after updating the template, or if a sync was unsuccessful, you can choose to sync individual contracts:

1.  Go to **Contracts** > **All** > **Contracts**.
    
2.  Select **Edit** next to a contract that's associated with the updated template.
    
3.  Sync with the template:
    
    -   For Termed contracts, go to the **Renewals** tab and select **Sync with template** below the Trigger date field.
        
    -   For Evergreen contracts, select **Sync with template** below the Evergreen template field.
        
    
    This option does not appear if there are no changes to sync.
    
4.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Contracts |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business |
| Permissions | Contracts                                                                                                                                                                                                               Contracts: List, View, Add, Edit, Post                                                                                                                                                                                                                   Renewal templates: List, View, Add, Edit                                                                                                                                                                                                                   Evergreen templates: List, View, Add, Edit |
