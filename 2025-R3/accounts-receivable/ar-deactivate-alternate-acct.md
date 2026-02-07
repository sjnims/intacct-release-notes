---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-deactivate-alternate-acct.htm
release: 2025-R3
extracted: 2026-02-07
title: "Deactivate alternative Accounts Receivable accounts"
---

# Deactivate alternative Accounts Receivable accounts

[Override the GL account in AR transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_override_GL_in_AR)

[Deactivate or delete an account](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Inactivate_delete_accounts)

Accounts receivable

You can now prevent accidental postings by deactivating alternative Accounts Receivable accounts that you no longer use. This applies even if the account has been used in a transaction or is the default account for a customer.

Previously, you received an error when deactivating an alternative account.

## How it works

When you deactivate an alternative account, it no longer appears in the list of Accounts Receivable accounts on the Invoice page. Therefore, the account can no longer be used in invoices.

You can deactivate an account even if existing open invoices were posted to the account. But you'll need to set the account to active to process additional transactions for the invoice, such as applying payments.

You still cannot deactivate an account if it's selected as the Accounts Receivable GL account on the Configure Accounts Receivable page. Select a different GL account on the configuration page before deactivating the alternative account.

## Permissions and other requirements

| Subscription | Accounts Receivable                                                                 General Ledger |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts: List, View, Edit |
