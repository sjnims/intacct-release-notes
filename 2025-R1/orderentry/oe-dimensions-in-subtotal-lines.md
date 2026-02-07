---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/OrderEntry/2025-R1-OE-dimensions-in-subtotal-lines.htm
release: 2025-R1
extracted: 2026-02-07
title: "View dimension distributions in subtotal lines"
---

# View dimension distributions in subtotal lines

[Configure Order Entry](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_the_Order_Entry_Application)

[Dimensions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Dimensions_overview_basics)

Order entry

When you assign dimensions to transaction line items, all dimension details can now be automatically carried over to subtotal lines for entity-level transactions. This eliminates the need for manual entry of dimension information on subtotal lines.

![View dimension distributions in subtotal lines](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-OE-dimensions.png)

Dimension amounts distribute automatically in proportion to the line-item amounts in an entity-level transaction. In this example, the subtotal discount line of $25 is split automatically across 2 dimensions according to the line-item distribution. These values are posted to AR and GL.

## Details

Configure Order Entry to include entity-level dimension distributions in subtotals automatically. This setting ensures that each line item's distributions display Entries table on the Transaction details page, and any required tax distributions display in the corresponding Entries table on the Posting details tab.

## How it works

1.  Select an entity-level company then go to **Order Entry** \> **Setup** \> **Configuration** and select **Distribute subtotals at the entity level**.
    
2.  Select **Save**.
    
3.  Select and view a posted entity-level sales transaction.
    
4.  Select a line item with assigned dimensions, and then select **Show details**.  
    The dimension information displays.
    
5.  To view additional transaction details, select **Posting details**.  
    The proportional distribution of dimension values posted to AR and GL displays.
    

## Permissions and other requirements

| Subscription | Order Entry |
| --- | --- |
| Regional availability | All regions |
| User type | To configure dimensions:                                                                                                                                                                                                                Business user with admin privileges |
| Permissions | Order Entry                                                                                                                                                                                                               OE transaction definitions: List, View, Add, Edit                                                                                                                                                                                                                   Sales transactions: List, View, Add |
| Restrictions | If Use line-item dimensions in subtotals is not selected at the top level, subtotal dimension amounts must be entered manually in the original transaction. |
