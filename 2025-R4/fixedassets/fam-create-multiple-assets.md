---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/FixedAssets/2025-R4-fam-create-multiple-assets.htm
release: 2025-R4
extracted: 2026-02-07
title: "Create multiple assets from a bill or invoice line"
---

# Create multiple assets from a bill or invoice line

[Create assets from bills](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_bill)

[Create assets from purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assets_from_purchasing_transactions)

[Edit bills that created assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edits_bills_that_created_assets)

[Edit purchasing transactions that created assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_po_transactions_that_created_assets)

Fixed Assets Management

Gain efficiency by creating multiple assets from a single bill or purchasing transaction line.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-fam-create-multiple-assets.png "A bill showing the first entry row expanded and the option to create multiple fixed assets selected.")

Assets are often purchased in bulk and entered on one line, but they need to be tracked and depreciated separately. We've added the option to generate multiple assets from a single transaction line, saving time and ensuring accurate asset tracking.

## Key benefits

-   **Manage assets accurately:** Track and depreciate each asset individually, even when purchased in bulk.
    
-   **Reduce manual work:** Eliminate workarounds like manual creation of assets and journal entries.
    
-   **Save time:** Automate asset creation and reduce errors.
    

## What's changed

Previously, you could only create one asset per bill or purchasing transaction line. Now, with the new **Create multiple fixed assets** option, you can specify how many assets to generate (up to 20 per line). The transaction line amount is then evenly distributed across the created assets.

## How it works

1.  Create a bill or purchasing transaction line that is associated with an Asset GL account.
    
2.  Expand the **Show details** section for the line.
    
3.  For Asset creation, select **Create multiple assets**.
    
4.  Enter the **Number of assets** (between 2 and 20) and a name for the assets.
    

You can edit the transaction later to choose a different **Asset creation** option or change the **Number of assets** field. However, any previously created assets will be deleted (provided they have no posted journal entries) and, if applicable, recreated.

## Permissions and other requirements

| Subscription | Fixed Assets Management                                                                 Accounts Payable                                                                 Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Add                                                                                                                                                                                                       Accounts Payable                                                                                                                                                                                                               Bills: List, View, Add                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Purchasing transactions: List, View, Add |
| Configuration | Enable Create assets from bills or Create assets from purchasing lines  in Fixed Assets Management configuration.                                                                                                                                                                                                                   Select a GL account or item that's associated with an Asset GL account in an asset classification. |
| CSV import | The Asset creation and Number of assets fields are available when importing bills and purchasing transactions. |
| Restrictions | The maximum number of assets you can create from a single line is 20. |
