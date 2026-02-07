---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Consolidation/2024-R1-account-override.htm
release: 2024-R1
extracted: 2026-02-07
title: "Edit accounts to override and related translation rate tables"
---

# Edit accounts to override and related translation rate tables

You can now edit the translation rate table associated with an account to override and even remove the account itself for any given book, regardless of whether you've already consolidated.

![You can now remove GL accounts from the Accounts to override tab and change the relevant translation rate table.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-CONS-GC-accts-to-override_640x426.png)

## Details

If you previously consolidated the book, then you'll need to re-consolidate after changing the translation method rate or changing an account on the **Accounts to override** tab. Your changes to the **Accounts to override** tab will take effect after you re-consolidate.

## How it works

1.  Go to **Global Consolidation > **Setup** >** and then select **Books**.
2.  Select the book to which you want to add a GL account.

    The **Book Setup** page is shown.

3.  Review the translation methods you're using in the **Multi-currency** section.
    - If the balance sheet account currency translation method is **Ending Spot Rate**, Intacct defaults to the **Ending Spot Rate** for all new GL accounts.
    - If instead you need the historical rate method for non-monetary accounts, such as fixed assets, long term assets, patents, and other deferred revenue or expenses accounts, move to the **Accounts to override** section, and find the account you just added.
4.  Navigate to the **Accounts to override** section.
5.  Select the **+** to add a row for a new GL account.
6.  In the new row, select the GL account you want to add.
7.  Select the **Rate Type** down arrow and then select the translation method you want to apply to this new account.

    Optionally, you can also click the **Rate Table** down arrow and select a custom rate other than the default Intacct Daily Rate.

8.  If you chose a custom rate from the Rate Table column, select an expiration date for the custom rate in the Use rate table until column.
9.  Select **Save**.

## Requirements

| Subscription          | Global Consolidation                |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Manage Books: List, View, and Add   |
