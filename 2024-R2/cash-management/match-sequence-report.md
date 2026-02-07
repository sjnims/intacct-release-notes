---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Cash_Management/2024-R2-match-sequence-report.htm
release: 2024-R2
extracted: 2026-02-07
title: "Run a reconciliation match sequence report"
---

# Run a reconciliation match sequence report

We recently introduced match sequences to bring visibility into your bank and credit card reconciliation matches. Now, you can run a pre-built custom report to see which Sage Intacct transactions matched to which bank transactions.

## Details

Run the new Detail of Reconciliation Matches report from the Custom report area. Set parameters for the bank account ID, the GL account, or look up matches by a specific sequence. You can also group by sequence number for easy visibility into which Intacct transactions matched with which bank transactions.

In the report, you can view both the bank transaction and Intacct transaction, along with any available transaction details like Description or Bank record number. You can customize the report to get just the detail you want.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-cm-match-sequence-report.png)

## How it works

### Install the package

1.  Go to either **Customization services** or **Platform services** and select **Custom packages**.
2.  In the **Package library**, search for the package **Reconciliation Matches**, and select **Install**.

### Run the report

1.  Go to either **Customization services** or **Platform services** and select **Custom reports**.
2.  Select to **Run** the **Detail of Reconciliation Matches** report.

## Requirements

| Subscription                       | Customization services or Platform services Cash Management                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------ |
| Regional availability              | All regions                                                                                |
| Permissions                        | Customization services or Platform services: Custom reports: View, List, Add, Edit, Delete |
| Dependencies or other requirements | Accounts need to be assigned a match sequence.                                             |
