---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-tax-partial-exemption-UK-France.htm
release: 2024-R2
extracted: 2026-02-07
title: "Partial exemption enhancements for France and the United Kingdom"
---

# Partial exemption enhancements for France and the United Kingdom

Capturing the appropriate taxes can be challenging when a portion of a purchase is exempt from taxation. With our this enhancement, you can set partial exemption percentages at the tax detail level for entities operating in France or the United Kingdom. Then you can apply those partial exemptions to line items in Accounts Payable and Purchasing transactions.

## Details

When you make an expenditure that qualifies for a tax credit, you can recover a percentage of the taxes paid on that expenditure. This is known as partial exemption.

When you enable partial exemption for an entity, you can set the exemption credit percentage for tax details used by the enabled entities. Setting partial exemption rates for tax details gives you control of partial exemption percentage rates across multiple entities.

Enabling partial exemption by entity and defining percentages in the tax details lets you do the following:

-   Only enable partial exemption in entities that make exemption-qualifying purchases.
-   Use different partial exemption rates for a tax detail across different entities.
-   Use the same partial exemption rate for a tax detail across multiple entities.

When you enter a bill in an entity enabled for partial exemption, each line item displays the **Partly exempt** checkbox. Select the checkbox only if the item qualifies for partial exemption. Intacct applies the partial exemption rate for the associated tax detail.

You can only enter Bills with partial exemption line items at the entity level. If you're working at the top level, partial exemption line items do not apply.

You can also configure partial exemption so that it's checked by default in all transaction lines.

Previously, companies operating in the United Kingdom could only set partial exemption percentages at the entity level. With this enhancement, you can leave the entity setting as the default, or you can set different percentages for each tax detail. If you already enabled partial exemption for your company, the exemption you set at the entity level is used by default until you set percentages at the tax detail level.

## How it works

When your organization is configured for partial exemption and you enter a bill in the Accounts Payable application, you can mark line items as **Partly exempt**. Sage Intacct automatically handles the following details of managing the partial exemption:

-   Calculates the recoverable and non-recoverable portions of the input taxes.
    
-   Captures the recoverable amount for reporting in your tax return.
    
-   Expenses the non-recoverable amount to the General Ledger account for the line or to a partial exemption General Ledger account if one was specified during configuration.
    

Use the following steps to enable partial exemption in an entity:

1.  Go to **Company > Entities > Edit** for the selected entity.
    
2.  On the entity information page, check **Enable partial exemption**.
    
3.  Optional: select **Default partial exemption on** to check all line items in a transaction as partially exempt.
    
4.  Optional: Use the dropdown list to set an **Unrecoverable tax account**.
    
5.  UK entities only: Set the effective date and percent value for the default partial exemption for an entity.
    
6.  Select **Save**.
    

![Screenshot of partial exemption enablement for a UK entity](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-partial-exemption-setup-uk.png)

After you have enabled partial exemption for an entity, you can configure partial exemption for tax details.

1.  In the Accounts Payable, Purchasing, or Taxes application, go to **Setup > Tax > Details**.
    
2.  Select **Edit** next to the tax detail to set the partial exemption percentages.
    
3.  Set a **Default partial exemption** percentage.
    
4.  Optional: Select specific entities that have partial exemption enabled and set custom percentages for each entity.
    
5.  Select **Save**.
    

![Screenshot of partial exemption tax detail configuration for a UK entity](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-partial-exemption-setup-details-uk.png)

For more information, see [Set up partial exemption](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_partial_exemption) and [Enter partial exemption](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enter_partial_exemption).

## Requirements

| Subscription | Accounts Payable                                                                 Purchasing                                                                 Taxes |
| --- | --- |
| Regional availability | Australia, entity only (as Reduced Input Tax Credit)                                                                                                                                                                                                                   Canada (as Input Tax Credit)                                                                                                                                                                                                                   France                                                                                                                                                                                                                   United Kingdom |
| User type | Business user with admin privileges |
| Permissions | Company                                                                                                                                                                                                               Entities: List, View, Add, Edit                                                                                                                                                                                                       Accounts Payable, Purchasing, Taxes                                                                                                                                                                                                               Bills: List, Add, Edit, Post, Delete                                                                                                                                                                                                                   Purchasing transactions: List, Add, Edit, Post, Delete                                                                                                                                                                                                                   Tax detail: List, View, Add, Edit |
| Configuration | Partial exemption is enabled in each applicable entity.                                                                                                                                                                                                                    Partial exemption is configured for each tax detail.                                                                                                                                                                                                                   Entities must have a standard tax solution for one of the supported regions to enable partial exemption.                                                                                                                                          Partly exempt is selected on each line item.                                                                       Transactions with partly exempt line items can only be entered at the entity level. |
