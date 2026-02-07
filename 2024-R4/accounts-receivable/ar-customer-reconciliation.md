---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Receivable/2024-R4-ar-customer-reconciliation.htm
release: 2024-R4
extracted: 2026-02-07
title: "Reconcile customer payments and credits to invoices"
---

# Reconcile customer payments and credits to invoices

[Set up customer reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_customer_reconciliation)

[Customer reconciliation report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reports_customer_reconciliation)

Accounts Receivable

Easily see how payments and applied credits match to invoices using the Customer reconciliation report. At a glance, you can see not only how much a customer owes, but also how payments and credits were matched to invoices.

The Customer reconciliation report answers the following types of questions:

- Which credits and payments were applied to a given invoice?
- Where was a given credit applied?
- Which transactions share a specified match sequence?
- What transactions remain partially matched or not matched at all?

[![The reconciliation report matches transactions using lettering sequences, helping you evaluate how payments and credits were applied.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-ar-customer-reconciliation-rpt_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-ar-customer-reconciliation-rpt.png)

## Details

Match sequences are alpha document sequences used in the Customer reconciliation report to show the relationship between invoices and the credits or payments applied to them.

Sage Intacct assigns a match sequence to an invoice when you apply a payment or a credit against it. All payment entries that relate to the invoice use the same sequence, establishing a relationship between them. As long as the invoice is in a partially paid state, match sequences display in lower case letters, indicating that the invoice is not completely reconciled. After the invoice is paid in full, the match sequences are changed to upper case letters.

In the case of a credit, such as an adjustment or an advance, a match sequence is assigned to the credit when it’s applied to a transaction. You can track how the credit is matched to transactions by looking at credit's balancing entries, also called contra entries. The credit entry and the credit balancing entries share the same match sequence. This sequence displays in lower case letters until the credit is fully applied.

You can filter the Customer reconciliation report to show you transactions that are unmatched, partially matched, or fully matched. You can also filter the report for a given match sequence.

## How it works

### Set up customer reconciliation

[Step 1: Define the Accounts Receivable auto-match sequence](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Receivable/2024-R4-ar-customer-reconciliation.htm#)

1. Go to **Company > Setup tab > Settings > Document sequence.**
2. From the Document sequence list, select **Add**.
3. Enter a **Sequence ID** and a **Sequence name**.
4. Select **Alpha** as the Sequence type.
5. If you want the maximum sequence to be shorter than 16 characters, override the default for **Primary sequence maximum**.

    This limits the number of increments allowed for the sequence. In general, you do not need to change the default.

6. For Primary sequence, enter **a**.

    This is the initial value that Sage Intacct will use for the matching code. The second sequence is b, the third c, and so on. After the sequence increments to z, the next sequence will be aa.

7. Optionally, define a Fixed prefix or Fixed suffix.

    Below the entry fields, you can preview how the sequence will appear in the report.

8. Select **Save**.

[Step 2: Enable customer reconciliation](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Receivable/2024-R4-ar-customer-reconciliation.htm#)

1. Go to **Accounts Receivable > **Setup\***\***> Configuration\*\*.
2. In the Document Sequencing section, select **Enable customer reconciliation**.
3. For **AR match sequence**, select the alpha document sequence you created in a previous step.

    Only alpha document sequences display in the list of selectable options. If you do not see the sequence that you created, check the sequence again to confirm that the Sequence type is set to alpha.

4. Select **Save**.

[Step 3: Assign permissions to run the Customer reconciliation report](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Receivable/2024-R4-ar-customer-reconciliation.htm#)

Assign Accounts Receivable **Customer reconciliation: Run** permissions to users who need to review and post incoming transactions.

Follow the procedure that matches your configuration: Either [assign permissions to a role](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_roles) or [assign permissions to specific users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_users).

### Run the Customer Reconciliation report

1. Go to **Accounts Receivable > **All** > Reports > Customer reconciliation**.
2. Select a reporting period.
3. Choose the customers that you want to include in the report.
    1. If you want to restrict the report to a single customer, set the **From customer** and **To customer** fields to the customer name.
    2. Select the Include all customers checkbox to include transactions from customers with zero balances.
    3. Select Include Zero balance customers with activity to include accounts with zero balances only if these customers had activity during the selected time period.
4. If you want to examine the reconciliation for a particular match sequence only, enter it into **Match sequence**.
5. To view only the transactions that are not fully reconciled, select the following:
    1. Under Matches to display, choose **Select**.
    2. Select **Unmatched** and **Partially matched**.
    3. Select **Done**.
6. Set the Sort by order.

    In addition to sorting by customer or invoice, you can also sort by match sequence.

7. Set any other filters that you need, such as **Location** or **Currency**.
8. Select **View**.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                             |
| User type             | Business                                                                                                                                                                                                                |
| Permissions           | Accounts Receivable Customer reconciliation: Run                                                                                                                                                                        |
| Configuration         | Enable customer reconciliation and define an AR match sequence in Configure Accounts Receivable.                                                                                                                        |
| Restrictions          | Sage Intacct begins assigning match sequences to transactions after you enable Customer reconciliation. Payments and credits that you applied to invoices before enabling the feature are not assigned match sequences. |
