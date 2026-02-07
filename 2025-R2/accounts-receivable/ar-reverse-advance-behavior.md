---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Receivable/2025-R2-ar-reverse-advance-behavior.htm
release: 2025-R2
extracted: 2026-02-07
title: "New warning when reversing a reconciled advance"
---

# New warning when reversing a reconciled advance

This idea came from you

We're introducing a new warning feature to enhance your control over reversing advances and help you avoid unintended changes to transactions that you've already reconciled against the bank.

When you try to reverse a customer advance, Sage Intacct notifies you that the transaction has already been reconciled. The notification allows you to make an informed decision on whether to proceed or cancel the operation.

![This advance has been reconciled. Do you want to void the advance? Select OK to reverse it or Cancel to keep it.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ar-reverse-reconciled-txn-warning.png)

This alert helps you maintain the integrity of your bank reconciliations while giving you the flexibility to manage those transactions effectively.

This release does not change rules about when you can reverse a bank reconciled transaction. Only the warning message is new.

## How it works

1. Go to **Accounts Receivable** > **All** > **Advances**.
2. Select **Reverse** next to an advance that has been reconciled against the bank.

    The new warning message appears, alerting you to the transaction's cleared state.

    This warning is the same notification that you currently see when you try to reverse a reconciled posted payment or manual deposit. We've expanded the notification to include cleared customer advances.

3. If you want to reverse the transaction despite its reconciled state, select **OK**.

    The reversal date you provide must be in an unreconciled period.

| Subscription          | Accounts Receivable                                       |
| --------------------- | --------------------------------------------------------- |
| Regional availability | All regions                                               |
| User type             | Business                                                  |
| Permissions           | Accounts Receivable Receive advances: List, View, Reverse |
