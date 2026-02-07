---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-void-payment-behavior.htm
release: 2025-R2
extracted: 2026-02-07
title: "New warning when voiding a reconciled transaction"
---

# New warning when voiding a reconciled transaction

[Troubleshoot void payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Troubleshoot_void_payments)

Accounts Payable

This idea came from you

We're introducing a new warning feature to enhance your control over voiding payments and help you avoid unintended changes to transactions that you've already reconciled against the bank.

When you try to void a reconciled payment, manual payment, or AP advance, Sage Intacct notifies you that the transaction has already been reconciled. The notification allows you to make an informed decision on whether to proceed or cancel the operation.

![This payment has been reconciled. Do you want to reverse the reconciliation? Select OK to reverse it or Cancel to keep it.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-void-reconciled-txn-warning.png)

This alert helps you maintain the integrity of your bank reconciliations while giving you the flexibility to manage those transactions effectively.

This release does not change rules about when you can void a bank reconciled transaction. Only the warning message is new.

## How it works

1. Go to **Accounts Payable** > **All** > **Posted payments**.
2. Select **Void** next to a payment that has been reconciled against the bank.

    The new warning message appears, alerting you to the transaction's cleared state.

3. If you want to void the transaction despite its reconciled state, select **OK**.

    The reversal date you provide must be in an unreconciled period.

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                        |
| User type             | Business                                                                                                           |
| Permissions           | Accounts Payable Posted payments: List, View, Void AP advances: List, View, Void Manual Payments: List, View, Void |
