---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/General_Ledger/2024-R1-close-into-account.htm
release: 2024-R1
extracted: 2026-02-07
title: "Simplified creation of GL accounts"
---

# Simplified creation of GL accounts

It's now faster to set up closing accounts. When you set up an account as a closing account, you specify the account it closes to (the Close To Account). When you create the Close To Account, you need to create it as a non-closing account. The first time you set up an account to close to it, its period end closing type is automatically changed to **"Closed To" Account**.

![.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-gl-closing-account.png)

Similarly, when importing a chart of accounts, you set the Close To Account as a non-closing account (enter **N** in the **Period end closing type** field). When you import, Intacct automatically assigns the correct period end closing type to the Close To Account.

If you have existing import spreadsheets for your chart of accounts, make sure that your Close To Account has an **N** in the **Period end closing type** field. Previously, you needed to enter **R** in this field.

You need to create your Close To Account before you create any closing accounts. When importing, you do this by putting the Close To Account before the closing accounts in your import spreadsheet.

For example, to use the Retained Earnings account as your Close To Account, set it up as a non-closing account, and put it before your closing accounts.

![.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-gl-COA-import.png)

## Requirements

| Subscription | General Ledger |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Accounts: List, View, Add, Edit |
