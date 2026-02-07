---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/FixedAssets/2025-R4-fam-do-not-create-asset.htm
release: 2025-R4
extracted: 2026-02-07
title: "Skip asset creation on bill and invoice lines"
---

# Skip asset creation on bill and invoice lines

[Do not create an asset from a bill](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Do_not_create_asset_from_bill)

[Do not create an asset from a purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Do_not_create_asset_from_purchasing)

[Edit bills that created assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edits_bills_that_created_assets)

[Edit purchasing transactions that created assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_po_transactions_that_created_assets)

Fixed Assets Management

Gain more control over asset management with a new option to skip asset creation when it’s not needed.

![A bill showing the first entry row expanded and the Do not create asset option selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-fam-do-not-create-asset.png)

The Accounts Payable and Purchasing integrations for Fixed Assets Management automatically create assets from bills and purchasing transactions. However, sometimes asset creation is not appropriate, such as for returned items or leased assets. We've added the flexibility to choose when you want to create an asset, improving accuracy and streamlining workflows.

## Key benefits

- **Gain flexibility:** Decide, at the line level, whether to create an asset.
- **Improve accuracy:** Avoid unintended capitalization of returned items, low-cost expenses, and leased assets.
- **Save time:** Eliminate manual corrections, saving time for AP clerks and accountants.

## What's changed

Previously, the AP and Purchasing integrations created an asset automatically when an Asset GL account was associated with a bill or purchasing transaction line. Now, you can use the new **Asset creation** options to choose whether to create an asset for each line.

## How it works

1. Enter a bill or purchasing transaction line that's associated with an Asset GL account.
2. Expand the **Show details** section for the line.
3. For Asset creation, select **Do not create asset**.

You can also edit a transaction later to change the **Asset creation** option. However, any previously created assets will be deleted (provided they have no posted journal entries).

## Permissions and other requirements

| Subscription          | Fixed Assets Management Accounts Payable Purchasing                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                         |
| User type             | Business                                                                                                                                                                                                            |
| Permissions           | Fixed Assets Management Asset: List, View, Add Accounts Payable Bills: List, View, Add Purchasing Purchasing transactions: List, View, Add                                                                          |
| Configuration         | Enable Create assets from bills or Create assets from purchasing lines in Fixed Assets Management configuration. Select a GL account or item that's associated with an Asset GL account in an asset classification. |
| CSV import            | The Asset creation field is available when importing bills and purchasing transactions.                                                                                                                             |
