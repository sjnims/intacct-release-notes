---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-dynamic-accounts.htm
release: 2025-R1
extracted: 2026-02-07
title: "Automatic reclassification of regularization accounts"
---

# Automatic reclassification of regularization accounts

[About regularization accounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_regularization_accounts)

[Set up regularization accounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_regularization_accounts)

[Reclassify regularization accounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=reclassify_regularization_accounts)

General Ledger

To comply with regional reporting requirements, you can now set up regularization accounts. A regularization account is an account that can be classified as either an asset or a liability on the balance sheet.

The account classification depends on the account balance at the time that the financial report is run. If the account's balance does not match its normal balance, the account is eligible to be reclassified.

## Details

When you designate an account as a regularization account, you must also specify its reclassification account. Intacct can then use that information to create the journal entries to handle the reclassification, along with the reversing entries for the following period.

For example:

- Bank account 1120 is a regularization account. Account 2220 is selected as the reclassification account for account 1120.
- When you run the new GL regularization account reclassification report, it shows that account 1120 has a negative balance.
- You have the option to create a draft journal entry that moves the balance from account 1120 to account 2220.

  At the same time, a second draft journal entry is created that automatically reverses the reclassification entry on the first day of the next reporting period.

- After you post the journal entry, account 2220 contains the balance, which is reflected in the Liabilities section of the balance sheet.

Use this feature only if it’s required to meet your regional compliance guidelines.

## How it works

After setting up regularization accounts, run the GL regularization account reclassification report to see which regularization accounts are eligible for reclassification. You'll then have the option to create the journal entries to move the balances from the original accounts to the reclassification accounts.

![Account information page with Regularization account checkbox selected and a Reclassification account selected. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-gl-reclassification-account.png)

### Step 1. Enable regularization accounts

1. Go to **General Ledger** > **Setup** > **Configuration**.
2. Select **Enable regularization**.
3. Select the **Regularization account reclassification journal**.

    Each time that an account is automatically reclassified, the account balance is moved from the original account to the account that it's reclassified to. Those entries will be posted to this journal.

4. Select **Save**.

### Step 2. Designate individual regularization accounts

1. Go to **General Ledger** > **All** > **Accounts** > **General Ledger accounts**.
2. Find the account.
3. Select **Edit**.
4. Select **Regularization account**.
5. Select the **Reclassification account**.

    When the original account is reclassified due to its balance, this is the account that the balance is moved to. In other words, the original account is reclassified to this account.

6. Select **Save**.

### Step 3. Run the reclassification report

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-gl-regularization-acct-reclass-report.png)

1. Go to **General Ledger** > **All** > **Reports** > **GL regularization account reclassification report**.
2. Enter a **Reporting period** and **As of date**.
3. Use the options in the **Filters** section to filter the report.
    - Only the accounts designated as Regularization accounts are included in the report, regardless of the filter selections.
    - If you're working in an organization with multiple base currencies, you must select a **Location**.

4. In the Format section under **Show dimension values**, the location ID and account ID are selected by default. You can add the department ID and name along with the location and account names.
5. Run the report.

    If you view or print the report, you'll have the option to create draft journal entries to move the account balance from the regularization accounts to their reclassification accounts.

    If you're going to process and store the report or create a memorized report, you can select **Auto-create draft JE when offline**. The journal entries are then automatically created for you in a draft state when the report is generated.

    [To run the report immediately](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-dynamic-accounts.htm#)
    1. Select **View** or **Print**.
    2. Review the report data to determine which accounts will be reclassified.
    3. Select **Create JE** to create the draft journal entries.

    [To run the report later](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-dynamic-accounts.htm#)
    1. In the Journal entry creation section, select **Auto-create draft JE when offline** to create draft journal entries for accounts that are eligible for reclassification.

        If you do not select this option now, you'll need to rerun the report to create the journal entries automatically or you can manually create them.

    2. Select one of the following options:
        - Process & store
        - Memorize

### Step 4. Post the journal entries

If you created draft journal entries, there will be two of them. One transaction moves the balances to the reclassification account, and the other reverses that transaction on the first day of the next reporting period.

1. Go to **General Ledger** > **All** > **Journal entries**.
2. Find the regularization account reclassification journal that's selected in Configure General Ledger.
3. Select **View transactions**.
4. Find one of the draft transactions and select **Edit**.
5. Select **Post**.
6. Repeat these steps for the other transaction.

## Permissions and other requirements

| Subscription          | General Ledger                                                                                                                                        |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                           |
| User type             | Business                                                                                                                                              |
| Permissions           | General Ledger Accounts: List, View, Add, Edit GL regularization account reclassification report: Run Journal entries: List, View, Add, Edit, Reverse |
