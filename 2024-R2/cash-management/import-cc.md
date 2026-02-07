---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-import-cc.htm
release: 2024-R2
extracted: 2026-02-07
title: "Import credit card transactions for reconciliation—Early Adopter"
---

# Import credit card transactions for reconciliation—Early Adopter

Use the classic file import experience to reconcile your credit card accounts with imported bank transactions.

This import experience differs from the [bank transaction assistant file import](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-file-import-v1.htm) experience. You can use one method or the other, but not both at the same time.

## Details

Use the Bank reconciliation transaction template to import credit card transactions into Sage Intacct for reconciliation.

Designate charges with negative numbers and payments with positive numbers in your file.

Bank transactions from the import file automatically match against Intacct transactions using the account's applied rule set. After transactions automatically match, you can resolve unmatched transactions by manually matching any that remain or by creating additional transactions.

Keep in mind that if the account you're reconciling is connected to a bank feed, importing a bank file overrides any existing matching done by that bank feed, and bank feed transactions are removed.

## How it works

1.  Go to **Cash Management > All > Reconciliation > Credit card**.

    The Reconciliation page appears.

2.  Select the **Account to reconcile**.
3.  Enter the **Statement ending date** and **Statement ending balance** from your bank statement.
4.  Select **Import**.
5.  Use the **Bank reconciliation transaction template** to enter transactions.
6.  Select **Choose files** and select your file from your local device.
7.  Select **Done**.

Imported bank transactions appear on the Bank tab of the Reconcile credit card account page.

## Early Adopter program

The Early Adopter program provides qualified functionality to a specific set of customers. During this release, these early adopters will help us refine our offering to deliver the functionality that's critical for business controls.

The Early Adopter program is closely monitored. We work with the early adopters to ensure that we focus our time and attention on what matters most to you.

### Join the program

If you would like to consider being an early adopter, [fill out this request form](https://forms.office.com/pages/responsepage.aspx?id=fN0yPvZBLUmho8WOsCz0-BwrXoCBlM5Ar19fWkk7PB1UQU1NRVo1U0lDSFlWWkdBRzFQSFU5R1QzMy4u).

## Requirements

| Subscription          | Cash Management                                                      |
| --------------------- | -------------------------------------------------------------------- |
| Regional availability | All regions                                                          |
| User type             | Business user with admin privileges                                  |
| Permissions           | Cash Management Reconcile credit card: List, View, Add, Edit, Delete |
