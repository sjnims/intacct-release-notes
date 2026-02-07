---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Order_Entry/2025-R3-oe-rm-summaries.htm
release: 2025-R3
extracted: 2026-02-07
title: "Summarize OE revenue recognition entries"
---

# Summarize OE revenue recognition entries

[Summarize revenue recognition schedule entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revenue_summaries)

Order Entry

You can now summarize revenue recognition postings to the General Ledger on a daily, weekly, or monthly basis. This new capability reduces posting volume, improves performance, and makes reconciliation and audit processes faster and easier.

## Key benefits

- **Streamline period-end close:** Summarized entries make it easier to review and reconcile revenue data, helping you close the books faster.
- **Improve performance:** Reduce the number of journal entries posted to the GL, improving overall performance.
- **Scale with confidence:** Grow your business without large transaction volumes slowing down your financial processes.
- **Flexible configuration:** Choose from daily, weekly, monthly, or per-entry summarization to fit your business needs.

## What's changed

### New summary frequency setting in Revenue Management

A new **Summary frequency** setting in Revenue Management lets you define how entries are grouped when posted to the GL. You can choose between daily, weekly, monthly, or one-per-entry summarization. Entries with the same document type, currency, and location will be combined into a single journal entry based on GL posting date and your chosen frequency.

The default option, **One per entry**, maintains the previous behavior and creates a separate journal entry for each revenue recognition entry.

![Revenue Management configuration page showing the Summary frequency setting.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-cn-summary-frequency.png)

### New summary frequency column in Order Entry

We added a new column in the Documents configuration tab of Order Entry configuration. It shows the summary frequency for transaction definitions that post revenue. This column reflects the setting you defined in Revenue Management configuration.

![Documents configuration tab in Configure Order Entry showing the Rev rec summary frequency column.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-rm-rev-rec-frequency.png)

### New revenue summaries list in Order Entry

Review all summarized revenue entries with the new Revenue Summaries list in Order Entry. This list includes posting dates, amounts, and links to the corresponding journal entries.

![The revenue summaries list.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-rm-revenue-summaries.png)

### Additional custom reporting options

Custom reports now include the following relationships for the **Revenue recognition schedule entry** data source:

- Deferred revenue GL journal entry
- Sales revenue GL journal entry
- Exchange gain loss GL journal entry

This gives you visibility into which journal entry is associated with each schedule entry.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Order_Entry/2025-R3-oe-rm-summaries.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription          | Standard revenue recognition for Order Entry Customization Services or Platform Services                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                 |
| User type             | Business user with admin privileges Business                                                                                                                                                                               |
| Permissions           | Administration Application subscriptions: List, View, Configure General Ledger Journal entries: View Order Entry Revenue summaries: List Customization Services or Platform Services Custom reports: List, View, Add, Edit |
