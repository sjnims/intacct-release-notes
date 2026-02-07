---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/FixedAssets/2024-R2-fixed-assets-updates.htm
release: 2024-R2
extracted: 2026-02-07
title: "Other updates in Fixed Assets Management"
---

# Other updates in Fixed Assets Management

This release brings the following updates to improve your experience.

## User interface updates

We made the following changes to the Assets default list view:

-   Added the Attachment column. Select the paperclip icon to view files attached to the asset.
    
-   Added the When created column, which displays the date the asset record was created.
    
-   Updated the default sort order to show the most recently created assets at the top of the list. It now sorts by the When created date in descending order.
    
-   Removed the Serial number and Asset tag columns to create more space for other columns.
    

Additionally, we made the following changes:

-   For the Asset Classifications default list view, we added GL account ID columns.
    
-   On the View Asset and View Asset Classification pages, the GL accounts are now links. Select one to open the GL account details in a popup.
    
-   For the Post Depreciation default list view, we removed the GL batch key column and added the GL batch ID column.
    

## Daily depreciation disposal calculations

We updated our daily depreciation calculations to comply with laws governing fixed assets and depreciation in France and other regions.

Before, when you disposed of an asset under the daily method, the asset did not depreciate in the month of disposal. Now, a new entry is added to the depreciation schedule and an additional depreciation expense GL batch is created to account for the partial accumulated depreciation in the month of disposal.

For example, an asset that's disposed on October 10th has 10 days of accumulated depreciation for the month of October. The depreciation schedule updates with an entry to reflect these 10 days of depreciation in October.

![Depreciation schedule entries list with two entries for October](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-fam-daily-dispose-schedule.png)

Additionally, we updated Disposal GL batches. If the Disposal and Gain or Loss GL accounts are same for the asset, only one journal entry is created for the account in the Disposal GL batch.

## Updates to the import service

The import service received a number of updates in this release:

-   A new look and feel
    
-   A workspace that remembers your previous imports
    
-   The ability to map field values
    
-   Separate header and line sheets
    
-   The option to hide empty columns
    
-   Enhancements to the AI's intelligence
    

[Learn more about the import service](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_Service-overview).

## Fiscal year rollover for document sequences

Fixed Assets Management now supports rolling over Asset ID sequences each fiscal year. No more worrying about running out of sequences or manually resetting them at the start of each fiscal year.

To support this feature, after an asset is created you can no longer edit the year of its acquisition date. If a change is needed, delete the asset and create a new one with the correct year.

Contact your account manager to enable this feature.

[Read more about it in the Fiscal year rollover for document sequences release note](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Company_and_Administration/2024-R2-doc-sequence-fiscal-year-rollover.htm).

## Requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business user |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Assets: List, View, Add                                                                                                                                                                                                                   Asset classifications: List, View                                                                                                                                                                                                       Company                                                                                                                                                                                                               Company setup checklist: Run                                                                                                                                                                                                                   Document sequences: List, View, Add, Edit, Delete |
