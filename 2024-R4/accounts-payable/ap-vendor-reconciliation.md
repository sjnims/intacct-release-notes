---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-vendor-reconciliation.htm
release: 2024-R4
extracted: 2026-02-07
title: "Reconcile payments and credits to bills"
---

# Reconcile payments and credits to bills

[Set up vendor reconciliation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_vendor_reconciliation)

[Vendor reconciliation report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reports_vendor_reconciliation)

Accounts Payable

Easily see how payments and applied credits match to bills using the Vendor reconciliation report. At a glance, you can see not only how much you owe a vendor, but also how payments and credits were matched to bills.

The Vendor reconciliation report answers the following types of questions:

- Which credits and payments were applied to a given bill?
- Where was a given credit applied?
- Which transactions share a specified match sequence?
- What transactions remain partially matched or not matched at all?

[![The reconciliation report matches transactions using lettering sequences, helping you evaluate how payments and credits were applied.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-ap-vendor-reconciliation-rpt_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-ap-vendor-reconciliation-rpt.png)

## Details

Match sequences are alpha document sequences used in the Vendor reconciliation report to show the relationship between bills and the credits or payments applied to them.

Sage Intacct assigns a match sequence to a bill when you apply a payment or a credit against it. All payment entries that relate to the bill use the same sequence, establishing a relationship between them. As long as the bill is in a partially paid state, match sequences display in lower case letters, indicating that the bill is not completely reconciled. After the bill is paid in full, the match sequences are changed to upper case letters.

In the case of a credit, such as an adjustment or an advance, a match sequence is assigned to the credit when it’s applied to a transaction. You can track how the credit is matched to transactions by looking at credit's balancing entries, also called contra entries. The credit entry and the credit balancing entries share the same match sequence. This sequence displays in lower case letters until the credit is fully applied.

You can filter the Vendor reconciliation report to show you transactions that are unmatched, partially matched, or fully matched. You can also filter the report for a given match sequence.

## How it works

### Set up vendor reconciliation

[Step 1: Define the Accounts Payable auto-match sequence](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-vendor-reconciliation.htm#)

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

[Step 2: Enable vendor reconciliation](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-vendor-reconciliation.htm#)

1. Go to **Accounts Payable > **Setup\***\***> Configuration\*\*.
2. In the Document Sequencing section, select **Enable vendor reconciliation**.
3. For **AP match sequence**, select the alpha document sequence you created in a previous step.

   Only alpha document sequences display in the list of selectable options. If you do not see the sequence that you created, check the sequence again to confirm that the Sequence type is set to alpha.

4. Select **Save**.

[Step 3: Assign permissions to run the Vendor reconciliation report](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-vendor-reconciliation.htm#)

Assign Accounts Payable **Vendor reconciliation: Run** permissions to users who need to review and post incoming transactions.

Follow the procedure that matches your configuration: Either [assign permissions to a role](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_roles) or [assign permissions to specific users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_users).

### Run the Vendor reconciliation report

1. Go to **Accounts Payable > **All** > Reports > Vendor reconciliation**.
2. Select a reporting period.
3. Choose the vendors that you want to include in the report.
   1. If you want to restrict the report to a single vendor, set the From vendor and To vendor to the vendor name.
   2. Select the Include all vendors checkbox to include transactions from vendors with zero balances.
   3. Select Include Zero balance vendors with activity to include accounts with zero balances only if these vendors had activity during the selected time period.
4. If you want to examine the reconciliation for a particular match sequence only, enter it into **Match sequence**.
5. To view only the transactions that are not fully reconciled, select the following:
   1. Under Matches to display, choose **Select**.
   2. Select **Unmatched** and **Partially matched**.
   3. Select **Done**.
6. Set the Sort by order.

   In addition to sorting by vendor or bill, you can also sort by match sequence.

7. Set any other filters that you need, such as **Location** or **Currency**.
8. Select **View**.

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                                                                                        |
| User type             | Business                                                                                                                                                                                                           |
| Permissions           | Accounts Payable Vendor reconciliation: Run                                                                                                                                                                        |
| Configuration         | Enable Vendor reconciliation and define an AP match sequence in Configure Accounts Payable.                                                                                                                        |
| Restrictions          | Sage Intacct begins assigning match sequences to transactions after you enable Vendor reconciliation. Payments and credits that you applied to bills before enabling the feature are not assigned match sequences. |
