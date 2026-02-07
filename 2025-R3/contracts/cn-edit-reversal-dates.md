---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Contracts/2025-R3-cn-edit-reversal-dates.htm
release: 2025-R3
extracted: 2026-02-07
title: "Edit reversal dates on AR payments"
---

# Edit reversal dates on AR payments

[Edit a payment reversal date](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_ar_payment_reversal_date)

[Configure Accounts Receivable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Accounts_Receivable)

Contracts

Contracts users can now edit the reversal date on invoices generated from contracts. With this update, you can correct reversal dates, improving accuracy and streamlining the AR workflow while maintaining consistency between AR and Contracts.

## Key benefits

-   **Greater flexibility:** Change the reversal dates for payments, without calling Support for assistance.
-   **Seamless experience:** Contracts functionality is now better aligned with Accounts Receivable, for a more consistent experience.
-   **Improved accuracy:** Reversal date changes are reflected in contract transaction history with reclass logic that maintains accurate financial data.

## What's changed

The **Enable edit of reversal dates** setting is now available in Accounts Receivable Configuration for Contracts users.

![Accounts Receivable configuration page showing the Enable edit of reversal dates setting.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-cn-edit-reversal-dates.png)

After enabling it, you can edit the reversal date on posted payment reversal transactions from the Posted Payments list. If an associated invoice was created from a contract, Intacct reclasses the contract and updates its Transaction History to reflect the new reversal date.

## Permissions and other requirements

| Subscription | Accounts Receivable                                                                 Administration                                                                 Contracts |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | To edit configuration:                                                                                                                                                                                                               Business user with admin privileges                                                                                                                                                                                                       To edit a reversal date:                                                                                                                                                                                                               Business |
| Permissions | Accounts Receivable (to edit reversal date)                                                                                                                                                                                                               Posted payments: List, View, Edit reversal                                                                                                                                                                                                       Administration (to edit configuration)                                                                                                                                                                                                               Application subscriptions: Configure |
| Configuration | Enable edit of reversal dates setting must be turned on in Account Receivable configuration. |
| Dependencies or other requirements | Reversal dates cannot be in the future. |
