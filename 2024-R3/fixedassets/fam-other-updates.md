---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/FixedAssets/2024-R3-fam-other-updates.htm
release: 2024-R3
extracted: 2026-02-07
title: "Other updates in Fixed Assets Management"
---

# Other updates in Fixed Assets Management

[Asset field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Asset_field_descriptions)

[AP bill integration](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_bill)

[Purchasing integration](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_purchasing_transactions)

[Fixed Assets Management permissions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Fixed_assets_permissions)

Fixed Assets Management

This release brings the following updates to improve your experience.

## User interface updates

### Links added to fields

We added links to a few fields, allowing you to easily access more information from within the Fixed Assets Management application:

-   On the Assets list and View Asset page, the Source field is now a link. Selecting the value opens the associated AP bill in a popup.
    
-   On the Post Depreciation and View Depreciation Schedule pages, the GL batch IDs are now links. Selecting one opens the associated journal entries in a popup.
    

### Field added to Depreciation Rules sections

We added the Journal posting rule ID field to the Depreciation Rules section on the View Asset and View Classification pages. This change means you no longer need to go to Configuration to find this information.

### Depreciable cost updates

We removed the Depreciable cost field and replaced it with the Asset cost, Salvage value, and Use salvage value fields. This change was made because the Depreciable cost calculation can vary for each schedule depending on whether the salvage value is used. Here are the specific updates:

On the View Depreciation Schedule page:

-   We added summary tiles for Asset cost and Salvage value.
    
-   We added the Asset cost, Salvage value, and Use salvage value fields to the Summary section.
    
-   We removed the Depreciable cost field from the summary tiles and summary section.
    

On the View Asset page:

-   We added summary tiles for Asset cost and Salvage value.
    
-   We removed the Depreciable cost tile.
    

## Custom field support for AP and Purchasing integrations

Custom field values on AP bills are now copied over to assets created from those bills, provided the ID and data type of the custom fields on the AP bill detail and asset match. Previously, custom field values were not copied to the asset.

This also applies to assets created from purchasing transactions, provided the ID and data type of the custom field on the purchase order transaction detail, AP bill detail, and asset match.

## Permissions updates

We updated permissions for the Employee user type. Now, only Business users can perform the following actions:

-   Create depreciation rules
    
-   Edit assets
    
-   Place an asset in service
    
-   Place an asset back in review
    
-   Post depreciation
    
-   Dispose of an asset
    
-   Place an asset back in service
    

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View                                                                                                                                                                                                                   Classification: List, View |
