---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Platform_Services/2026-R1-platform-reversals-ar-ap.htm
release: 2026-R1
extracted: 2026-11-13
title: "Smart Rules and Smart Events support for AP and AR reversals"
---

# Smart Rules and Smart Events support for AP and AR reversals

[Add or edit a Smart event to automate a process](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_Smart_Event)

[Validate data with Smart rules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Use_smart_rules)

[Reverse a paid bill](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=reverse-paid-bill)

[About deleting or reversing an invoice—Accounts Receivable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enabling_reversal_unpaid_invoice)

platform services

**March 6, 2026**: This feature has been temporarily reverted. We are working on improvements and will let you know when this feature becomes available.

Smart rules and Smart events that invoke actions based on bills, invoices, or AP/AR adjustments now support reversal behavior.

## What's changed

Previously, reversals didn’t trigger Smart rules or Smart events. However, you might need to perform a reversal—say on a bill. When you reverse the bill, Sage Intacct creates a reversal record. Now if the reversal record meets your Smart rule or Smart event conditions, rules or events associated with the record object get triggered.

Because reversal operations add reversal records, the Smart rules or Smart events triggered can only occur with an **Add** event. If you edit an existing reversal record, there's no Smart rule or Smart event triggered.

Smart rule and Smart event warnings are not supported for reversal operations.

## Permissions and other requirements

| Subscription          | Platform Services or Customization Services to create Smart rules and Smart events Accounts Payable or Accounts Receivable for reversals                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                                                                                                                                  |
| User type             | Business                                                                                                                                                                                                                                                     |
| Permissions           | Create Smart rules and Smart events: Permissions to the Platform Services or Customization Services application Bills: List, View, Add, Edit, Post, Reverse Invoices: List, View, Add, Edit, Post, Reverse Adjustments: List, View, Add, Edit, Post, Reverse |
