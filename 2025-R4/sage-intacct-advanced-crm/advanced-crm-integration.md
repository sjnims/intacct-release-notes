---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Sage_Intacct_Advanced_CRM/2025-R4-advanced-crm-integration.htm
release: 2025-R4
extracted: 2026-02-07
title: "Sage Intacct Advanced CRM Integration updates"
---

# Sage Intacct Advanced CRM Integration updates

[Configure Intacct: AR payments sync](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=AdvancedCRM_Configure_Sales_Transactions)

[Configure Salesforce: AR payments sync](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=AdvancedCRM_Configure_AR_payment_sync)

[Standard field mapping for AR payments and AR payment details](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=AdvancedCRM_Standard_Field_Mapping_For_AR_payments)

[Price book for renewals](https://www.intacct.com/ia/docs/help_action/Default.htm#cshid=AdvancedCRM_SFDC_renewals_price_book)

Sage Intacct Advanced Crm

We've made some updates to the Sage Intacct Advanced CRM Integration.

## Multicurrency and overpayments with AR payments integration

We’ve expanded Advanced CRM Integration AR Payments functionality to support multicurrency transactions and overpayments. These enhancements allow users to process payments in different currencies and manage overpayments with greater accuracy and flexibility.

## Key benefits

With multicurrency support, users can now create and sync payments in currencies different from the invoice currency, ensuring accurate financial reporting and compliance with international standards.

Overpayments are now automatically detected and handled, allowing excess funds to be stored as customer credits or applied to future invoices. These features reduce manual adjustments and improve the integrity of AR records.

## What's changed

Two new Salesforce objects—`AR_Payment` and `AR_Payment_line`—have been introduced to support detailed payment tracking. Users can now enter both the payment currency and the translated base amount.

Overpayment fields such as `Overpayment Amount`, `Overpayment Location Id`, and `Overpayment Department` have been added to capture and sync excess payments. Sync logic has been updated to support these enhancements, including validations and mapping configurations in both Salesforce and Intacct.

## Example of multi-currency and overpayment

A user receives a payment of EUR 150 for an invoice issued in USD. In Salesforce, they enter the payment in EUR and provide the translated base amount in USD.

The system syncs this to Intacct, which applies the payment using the correct exchange rate.

## Requirements

| Subscription          | Sage Intacct Advanced CRM Integration                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                            |
| User type             | Business user with admin privileges                                                                                                                    |
| Implementation        | Requires: Subscription in Intacct Configuration and setup in Intacct Configuration and setup in Salesforce Admin rights in both Intacct and Salesforce |
| Notes                 | Additional subscriptions are required if you want to use the following with the Advanced CRM Integration: Contracts Projects                           |
| Restrictions          | Only one currency per payment is supported. Overpayments must be for a single invoice and customer.                                                    |
