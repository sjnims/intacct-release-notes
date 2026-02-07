---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-transaction-allocations.htm
release: 2024-R4
extracted: 2026-02-07
title: "Transaction allocations for assets"
---

# Transaction allocations for assets

[Set up transaction allocations for assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_allocations_for_assets)

[Apply an allocation to an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Apply_allocation_to_asset)

[About transaction allocations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Allocations_overview)

Fixed Assets Management

We're excited to announce that allocations are now supported for assets. Allocations allow you to distribute asset-related transactions across multiple dimensions.

For example, now you can automatically allocate 50% of a depreciation expense to the Marketing department and the remaining 50% to the Human Resources department.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-fam-allocation.png)

Previously, to allocate asset transactions, you had to edit the journal entries manually and assign the allocation rule in the General Ledger. This caused inconsistencies between the General Ledger and Fixed Assets Management applications. Now, you can simply assign the allocation to the asset and it will automatically carry over to any journal entries for that asset—improving both efficiency and accuracy.

## Details

- The allocation field automatically appears on all assets.
- You can change an asset's allocation when the asset is in the Ready for Review or In Service states. Changes apply to all future transactions.
- You can assign additional dimensions on the asset as long as they are not already defined in the allocation.

### Restrictions

- Allocations are not supported for companies subscribed to the Taxes application.
- The Location dimension must be the same on each line of the allocation definition. Additionally, the Location dimension on the asset must match the one used in the allocation definition.
- Custom allocations are not supported.
- Allocation definitions must be created in the entity where they’ll be used.

## How it works

To use allocations, your company must be properly configured, and you need to define transaction allocations in advance. Then, assign the allocation to the asset.

[Set up transaction allocations for assets](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-transaction-allocations.htm#)

1.  Enable allocations in the General Ledger.
    1.  Go to **General Ledger** > **Setup** > **Configuration**.
    2.  Select **Enable transaction allocation in journal entry**.
    3.  Select **Save**.
2.  Optional: If you plan to create assets from bills, enable allocations in Accounts Payable.
    1.  Go to **Accounts Payable** > **Setup** > **Configuration**.
    2.  Select **Enable allocation in bill entity**.
    3.  Select **Save**.
3.  Optional: If you plan to create assets from purchasing transactions, enable allocations in **Purchasing**.
    1.  Go to **Purchasing** > **Setup** > **More** > **Transaction definitions**.
    2.  Edit the transaction definition that you’ll use to create assets.
    3.  Select **Enable allocations**.
    4.  Select **Save**.
4.  Go to **General Ledger** > **Setup** > **Allocations** > **Transaction allocations**.
5.  Create one or more transaction allocations.

    Do not add the Asset dimension in your definitions.

[Apply an allocation to an asset](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-transaction-allocations.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
2.  Create or edit an asset.
3.  In the Summary section, select an **Allocation**.
4.  Select a **Location** dimension that matches the one used in the allocation definition.
5.  Optional: Add additional dimensions that are not already defined in the allocation.
6.  Select **Save**.

## Permissions and other requirements

| Subscription          | Fixed Assets Management Company General Ledger Accounts Payable Purchasing                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                                                                                                                                                                           |
| User type             | Business user with admin privileges Business                                                                                                                                                                                            |
| Permissions           | Administration Application subscriptions: List, View, and Configure Company Transaction allocations: List, View, Add, Edit Fixed Assets Management Asset: List, View, Add, Edit Purchasing PO transaction definitions: List, View, Edit |
| Configuration         | Enable allocations in the General Ledger and, if applicable, in Accounts Payable and Purchasing.                                                                                                                                        |
| Restrictions          | Not available for companies subscribed to the Taxes application.                                                                                                                                                                        |
