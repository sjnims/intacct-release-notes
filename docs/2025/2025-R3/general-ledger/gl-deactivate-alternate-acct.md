---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/General_Ledger/2025-R3-gl-deactivate-alternate-acct.htm
release: 2025-R3
extracted: 2026-02-07
title: "Deactivate alternative AP and AR accounts"
---

# Deactivate alternative AP and AR accounts

[Deactivate or delete an account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Inactivate_delete_accounts)

[Override the GL account in AP transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_override_GL_in_AP)

[Override the GL account in AR transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_override_GL_in_AR)

General ledger

You can now prevent accidental postings by deactivating alternative Accounts Payable and Accounts Receivable accounts that you no longer use. This applies even if the account has been used in a transaction or is the default account for a customer or vendor.

Previously, you received an error when deactivating an alternative account.

## How it works

When you deactivate an alternative account, it no longer appears in the list of AP or AR accounts on the Bill, AP Adjustment, and Invoice pages. Therefore, the account can no longer be used in these transactions.

You can deactivate alternative accounts even if existing unpaid bills or open invoices were posted to the account. But you'll need to reactivate the account before posting transactions against the bills or invoices.

You still cannot deactivate an account if it's used as the default GL account on the Configure Accounts Payable or Configure Accounts Receivable page. Select a different GL account on the configuration page before deactivating the alternative account.

## Permissions and other requirements

| Subscription          | General Ledger                             |
| --------------------- | ------------------------------------------ |
| Regional availability | All regions                                |
| User type             | Business                                   |
| Permissions           | General Ledger  Accounts: List, View, Edit |
