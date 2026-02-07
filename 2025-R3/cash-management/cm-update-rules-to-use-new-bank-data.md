---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Cash_Management/2025-R3-cm-update-rules-to-use-new-bank-data.htm
release: 2025-R3
extracted: 2026-02-07
title: "Improve bank transaction matching with more precise rules"
---

# Improve bank transaction matching with more precise rules

[Create a matching rule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_matching_rule)

[Create a creation rule for journal entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_creation_rule)

[Create a creation rule for credit card transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Creation_rule_cc_txn)

[Create an assignment rule](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_assignment_rule)

[View bank transactions on the Bank transactions list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_transactions)

Cash Management

Over time, banks have made additional bank data available from the banking cloud. You can now use even more fields from incoming bank transactions to tailor your matching and creation rules, or assignment rules. Use the wider range of fields to increase matching accuracy during reconciliations, and when automatically assigning customers to bank transactions.

In addition, when viewing bank transactions or creating new views, select from the expanded range of fields to customize how you view bank transaction lists.

## Details

The following new fields are now available for you to select when the selected data source is Bank transactions. These fields are available when you’re creating matching and creation rules or assignment rules. They’re also available when viewing bank transaction and creating new views.

- Payee ID
- Payee
- Payee address
- Payee city
- Payee state
- Payee postal code
- Payee account
- Category
- Subcategory
- Category ID
- Short description 1
- Short description 2
- Extended description
- Bank reference number

The new fields are available in addition to the existing fields if the bank has included them in their bank feeds.

## How it works

### Reconciliation rules

1. Go to either matching and creation rules or assignment rules.
    - For matching and creation rules, go to **Cash Management** > **Setup** > **Reconciliation rules** > **Matching and creation rules**.
    - For assignment rules, go to **Cash Management** > **Setup** > **Assignment rules**.

2. To add a new rule, select **Create**, or to edit an existing rule, find the rule in the list and select **More actions** > **Edit** at the end of the row.
3. When the selected data source is **Bank transactions**, the new fields are available.

    [![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-r3-cm-update-rules-to-use-new-bank-data_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-r3-cm-update-rules-to-use-new-bank-data.png)

4. Adjust the filters as required.

### Bank transaction views

1. Go to **Cash Management** > **All** > **Transactions** > **Bank transactions**.
2. From **Manage views**, select **Create new view**.
3. In Step 1 of the wizard, select the fields you want to use as column headings in your new view.

    This example shows all fields selected. Adjust the selection as required.

    [![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-cm-create-new-view_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-cm-create-new-view.png)

4. Complete the remaining steps of the wizard and select **Save**.
5. In the **All** menu select your newly created view.

The selected fields are used as column headings on the Bank transactions page. You can use them to filter the information in the **Advanced filters** dialog.

## Permissions and other requirements

| Subscription          | Cash Management Sage Cloud Services                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                     |
| User type             | Business                                                                                                                                                                        |
| Permissions           | Cash Management Checking accounts: List, View Savings accounts: List, View, Add, Edit Credit card accounts: List, View, Add, Edit Bank transactions: List, View, Add, Add, Edit |
