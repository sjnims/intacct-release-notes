---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Accounts_Payable/2024-R1-ap-submitters-notified-bill-approval.htm
release: 2024-R1
extracted: 2026-02-07
title: "Users now notified when bills that they submit are approved"
---

# Users now notified when bills that they submit are approved

Users who submit bills for approval now receive an email notification when the bill is approved or declined.

## Details

Previously, when a bill was submitted for approval, Sage Intacct sent the approval email notification to the user who drafted the transaction, but the submitter was not notified. If a transaction was drafted by the system through automation, this meant that no user was notified.

For example, say that you uploaded a bill to AP Automation. The system creates the draft bill for you. You review the draft and submit the bill for approval. Previously, you did not receive any notification if the bill was approved or declined. Now, you can configure your settings to ensure that you do.

## How it works

To verify that email notifications are sent to transaction submitters, make sure that **Enable notifications** is selected in the Accounts Payable configuration.

## Requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | To submit bills that were already created:                                                                                                                                                                                                               Bills: List, View, Add, Edit, Post |
| Configuration | Requires that AP bill approvals be enabled. |
