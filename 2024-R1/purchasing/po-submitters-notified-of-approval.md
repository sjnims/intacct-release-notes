---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Purchasing/2024-R1-po-submitters-notified-of-approval.htm
release: 2024-R1
extracted: 2026-02-07
title: "Users now notified when Purchasing transactions that they submit are approved"
---

# Users now notified when Purchasing transactions that they submit are approved

Users who submit Purchasing transactions for approval now receive an email notification when the transaction is approved or declined.

## Details

Previously when a transaction was submitted for approval, Sage Intacct sent the approval email notification to the user who drafted the transaction, but the submitter was not notified. If a transaction was created automatically by the system, this meant that no user was notified.

For example, say that you uploaded a transaction through AP Automation. The system creates the draft Purchasing transaction for you. You review the draft and submit the transaction for approval. Previously, you did not receive any notification if the transaction was approved or declined. Now, you can configure your settings to ensure that you do.

## How it works

To verify that email notifications are sent to transaction submitters, make sure that **Email notifications** is enabled in the Purchasing configuration.

## Requirements

| Subscription          | Accounts Payable Purchasing                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| Regional availability | All regions                                                                   |
| User type             | Business                                                                      |
| Permissions           | To submit bills that were already created: Bills: List, View, Add, Edit, Post |
| Configuration         | Requires that Purchasing transaction approvals be enabled.                    |
