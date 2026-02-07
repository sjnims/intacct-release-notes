---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm
release: 2024-R4
extracted: 2026-02-07
title: "Manual lettrage for General Ledger transactions for France"
---

# Manual lettrage for General Ledger transactions for France

[Set up lettrage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_lettrage)

[Match transactions using lettrage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=match_transactions_using_lettrage)

[Lettrage activity report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=lettrage_activity_report)

General ledger

Manually match the debit and credit transactions for your designated General Ledger accounts to ensure compliance with your internal processes.

## Details

Use the new Lettrage page to manually match corresponding debit and credit transaction lines using an assigned lettering sequence. This matching feature is for transactions created directly in General Ledger that are not automatically matched like the ones created in Accounts Payable and Accounts Receivable. Lettrage must be enabled for individual accounts, so you can specify which ones use it.

[![Lettrage page showing two matched transactions.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage.png)

Use the new Lettrage activity report in General Ledger to generate comprehensive reports with match results. Depending on how you filter the report, it shows the following information: 

- Transaction activity that has been matched
- Transaction activity that's unmatched
- Both matched and unmatched activity

[![Example of the Lettrage activity report.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage-report_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage-report.png)

Run the report for matched transactions to review and validate the transactions that have been matched and to see the relationship between offsetting debits and credits. Run the report for unmatched transactions to see which transactions represent the remaining, unreconciled balance of the accounts.

## How it works

To use manual lettrage for GL transactions, you first need to set up your document sequence in Company and then enable the lettrage feature in the General Ledger Configuration page and for individual accounts.

### Setup

[1\. Create a document sequence](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm#)

Create a document numbering sequence to use for the lettering codes. You can create 1 sequence to use for all accounts, or you can create multiple sequences and select one for each account.

Use a length that ensures the codes do not get reused within a fiscal year. For example, select the following options when you create the document sequence:

- Sequence type: Alpha
- Primary sequence maximum: zzz
- Primary sequence: aaa

[![Document sequence information page. The primary sequence maximum is zzz, and the primary sequence is aaa.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage-sequence_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-gl-fr-lettrage-sequence.png)

1.  Go to **Company** \> **Setup** \> **Settings** \> and select the **+** beside **Document sequence**.
2.  Enter a **Sequence ID**, which is used to identify the sequence in dropdown lists.

    The sequence ID cannot be changed after you save the sequence.

3.  Enter a **Sequence name**.
4.  Select a **Sequence type**.

    The sequence type cannot be changed after you save the sequence.

5.  Enter the **Primary sequence maximum**.

    The default maximum for numeric and alpha sequences is 16 numbers or letters, but you can change it.

    When the end of the sequence is reached, you receive an error message and must start a new sequence.

6.  Enter the **Primary sequence**.

    The primary sequence cannot be changed after you save the sequence.

7.  The **Next primary sequence** is automatically entered, but you can change it.
8.  Add any other settings that you need.
9.  Select **Save**.

See the [field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Company/Document_numbering/document-sequences-for-ids.htm#Field-by) for more information about what to enter in each field.

[2\. Enable lettrage in Configure General Ledger](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm#)

1.  Go to **General Ledger** > **Setup** \> **Configuration**.
2.  In the Account settings section, select **Enable lettrage**.
3.  In the **Lettrage sequence** field, select the document sequence that you created.

    This is the default sequence for all accounts, but you can select a different one when you edit an account.

4.  Select **Save**.

[3\. Enable lettrage for individual accounts](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm#)

Determine which accounts require lettrage, and then enable it for those accounts.

1.  Go to **General Ledger** > **All** \> **Accounts** \> **General Ledger accounts**.
2.  Find the account that you're configuring for lettrage and select **Edit**.
3.  Select **Enable lettrage for this account**.
4.  Optionally, select a **Lettrage sequence**.

    If you do not select a sequence here, the lettrage sequence selected in Configure General Ledger is used instead.

5.  Select **Save**.

### Select and match transactions

[1\. Select transactions to match](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm#)

1.  Go to **General Ledger** > **All** \> **Lettrage**.
2.  In the **Search for transactions** section, select an **Entity**.
3.  Select an **Account**.

    Only the accounts for which you've enabled lettrage appear in the dropdown list.

4.  Under **Matching status**, choose which transactions you want to view.
    - You can accept the default selection, **Not matched**.
    - Or select **Add or edit**, and then select **Matched** to view those transactions as well.
    - In the **Selected items** list, you can select the **x** to remove an item.
    - Select **Done** when you're finished.

5.  Select a **Filter transactions by** option.
    - If you select **Reporting period**, select the period and enter an **As of date**.
    - If you select **Custom date range**, enter a **Start Date** and **End date**.
6.  Select **Show more filters** to see additional fields.
7.  Enter any additional filtering options.
8.  Select **View results**.

The transactions list appears at the bottom of the page.

[2\. Match the selected transactions](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/General_Ledger/2024-R4-lettrage.htm#)

1.  Select 2 or more transactions to match.

    The total debit and credit amounts of the selected transactions must be equal to match them.

    For example, you can select 1 transaction with a debit amount of $800 and 2 transactions with credit amounts of $300 and $500.

    The total debit and credit amounts of your selected transactions appear above the transaction list.

2.  Select **Match transactions**.

The **Matching letter** is filled in based on the document sequence, and the **Total matched** field above the transaction list is updated.

You can select transactions that are matched, and then select **Unmatch transactions**. To unmatch transactions, you must select all the ones that were included in the original match.

For example, if you matched an $800 debit to credits of $300 and $500, you cannot unmatch only the $300 credit. You have to unmatch them both at the same time.

### View the Lettrage activity report

1.  Go to **General Ledger** > **All** \> **Reports** \> **Lettrage activity**.
2.  Enter your filtering and formatting settings.
3.  Select an option for generating the report.

    You can view it now, print it to save it as a PDF file, or export it.

    You can also process and store it to view later or add it to your dashboard or memorized reports list.

## Permissions and other requirements

| Subscription          | General Ledger                                                                    |
| --------------------- | --------------------------------------------------------------------------------- |
| Regional availability | France                                                                            |
| User type             | Business user with admin privileges to enable Business to match transactions      |
| Permissions           | General Ledger Lettrage: Run Lettrage activity (report): Run                      |
| Configuration         | Lettrage must be enabled in Configure General Ledger and for individual accounts. |
| Restrictions          | Company or entity must have the operating country set to France.                  |
