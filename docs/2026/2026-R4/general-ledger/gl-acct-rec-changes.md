---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/General_Ledger/2026-R4-gl-acct-rec-changes.htm
release: 2026-R4
extracted: 2026-11-13
title: "Updates to GL account reconciliations"
---

# Updates to GL account reconciliations

[Set up GL account reconciliations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_lettrage)

[Match transaction lines using GL account reconciliations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=match_transactions_using_lettrage)

General Ledger

We've improved General Ledger (GL) account reconciliations to make it easier to match transactions confidently and have full visibility into the timing of reconciliation activity.

## Key benefits

- **Easier transaction matching:** Additional information in the Transactions list helps you identify and match transactions with confidence.

- **Simpler setup:** You no longer need to worry about enabling GL account reconciliation for Order Entry and Purchasing offset accounts.

- **Better reporting:** You can now add the match date to custom reports.

## What's changed

The following enhancements have been added.

### New columns added to Transactions list

The following columns are now available in the Transactions list on the GL account reconciliations page.

- **Customer:** The customer associated with the transaction.

- **Vendor:** The vendor associated with the transaction.

- **Document number:** The bill or invoice number for the originating transaction. This field is available only for entities with the operating company set to France.

### Automatic handling of offset accounts in Order Entry and Purchasing

Sage Intacct now automatically prevents users from enabling GL account reconciliations for offset accounts used in Order Entry and Purchasing transactions that post to Accounts Payable or Accounts Receivable.

You no longer need to tag these accounts manually as General Ledger account alternatives to prevent reconciliation conflicts.

### Match date available for reporting

You can now access the Match date field in the following reporting tools:

- **GL account reconciliations reporting object used by the Custom Report Writer (CRW):** Create reconciliation reports that include match timing alongside match codes.

- **Reporting object API:** Include match dates in external reporting tools and integrations.

## Permissions and other requirements

| Subscription          | General Ledger                  |
| --------------------- | ------------------------------- |
| Regional availability | All regions                     |
| User type             | Business                        |
| Permissions           | GL account reconciliations: Run |
