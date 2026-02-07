---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Contracts/2025-R2-cn-other-updates.htm
release: 2025-R2
extracted: 2026-02-07
title: "Other updates to Contracts"
---

# Other updates to Contracts

[Contract field descriptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contract_fbf)

[Contract list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contracts_list)

[Configure contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_contracts)

Contracts

We added quick shortcuts to pay contract invoices and generate invoices, as well as a new setting to improve evergreen contracts renewals.

## Quick pay shortcut

We added a **Pay** link to the Billing transaction history section on contracts (which is now on the new [Contract summary tab](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Contracts/2025-R2-contract-summary-tab.htm)).

![Contract summary tab of a contract with a Pay link displayed in the Contracts billing transaction history section](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-cn-pay-link.png)

Select the link to go directly to the Order Entry payments page and pay the contract invoice, without leaving the Contracts application. The Pay link appears only when the invoice has a total due amount greater than 0, helping you take action and save time.

## Generate invoices shortcut

We added a **Generate invoices** link to the Contracts list.

![Contracts list showing the generate invoices links.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-cn-generate-invoices.png)

This link opens the Generate Invoices page with the contract filter pre-filled, so you can quickly invoice a specific customer.

## Relax GL posting date rules for evergreen contracts

We added a new configuration setting to help prevent evergreen contract renewal failures caused by closed periods, scheduling delays, or date mismatches.

![Evergreen contracts section of the contracts configuration page showing the Relax GL posting date rules settings.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-cn-relax-gl.png)

When enabled, if a new contract line's start date falls in a closed period during evergreen renewal, this setting automatically adjusts the GL posting date. Intacct uses the earliest date in the open period as the GL posting date instead, eliminating the need for a manual data fix.

This setting also enables the following functionality for evergreen contract lines:

-   The GL posting date field can be edited.
    
-   For multi-currency companies, the exchange rate date will match the GL posting date.
    
-   Billing and revenue schedules will start on the GL posting date (similar to termed contract lines).
    
-   If a new contract line’s start date is before the Go-live date and the entity is locked, the GL posting date will be either the company's open books date or the go-live date, whichever comes first.
    

These enhancements reduce operational overhead, so you can manage renewals with more confidence.

### How it works

1.  Go to **Contracts** > **Setup** > **Configuration**.
    
2.  In the Evergreen contracts section, select **Relax GL posting date rules**.
    
3.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Contracts |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business user with admin privileges (for evergreen setting)                                                                 Business |
| Permissions | Administration (for evergreen setting)                                                                                                                                                                                                               Application subscriptions: List, View, Configure                                                                                                                                                                                                       Contracts                                                                                                                                                                                                               Contract: List, View                                                                                                                                                                                                       Order Entry (for quick pay shortcut)                                                                                                                                                                                                               Payments: Add |
| Configuration | To use the new evergreen setting, the Evergreen term type must be enabled in Configure Contracts. |
