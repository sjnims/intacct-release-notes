---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Sage_Intacct_Advanced_CRM/2025-R2-advanced-crm-integration.htm
release: 2025-R2
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

## Complete quote to cash workflow

The Sage Intacct Advanced CRM Integration now supports a complete quote-to-cash workflow between Salesforce and Intacct, enabling seamless synchronization of transactions. This integration ensures that payments and invoices generated in Salesforce are accurately recorded in Intacct for full financial visibility, enabling a streamlined and efficient cash management process.

This new workflow simplifies the payment process, ensures accurate financial records, and provides seamless reporting across both platforms.

## Details

You can now present invoices and receive payments directly within Salesforce, using its comprehensive customer 360 experience.

Payment records can be created manually or automatically in Salesforce, and when a sales invoice payment is received, it syncs to Intacct along with all related information. Bi-directional sync ensures that any updates in Intacct are reflected back to Salesforce.

New objects and fields in Salesforce make it easy to manage and track payments, while configuration options in Intacct allow for detailed mapping and synchronization settings.

## How it works

**Request access:**

Contact your account manager or submit a support ticket to request access to AR Payments for the Advanced CRM Integration.

At this time, there are some limitations to AR Payments in the Advanced CRM Integration:

- The transaction currency and payment currency must be in the same currency.
- Over-payments are not currently supported.

In Intacct:

1.  Enable AR payment synchronization:
    1.  Log in to Intacct as an administrator.
    2.  Go to **Company** > **Admin** > **Subscriptions** > **Advanced CRM Integration** and select **Configure**.
    3.  On the _Settings_ tab, in the _Order Entry integration > Payments_ section, select the **AR payments synchronization** checkbox.
    4.  **Save** your changes.

2.  Set up field mapping:
    1.  Select the links for AR payments and AR payment details.
    2.  Map necessary Intacct fields to the corresponding Salesforce fields.
    3.  **Save** your changes.

In Salesforce:

1.  Set up Payment and Payment detail mappings:
    1.  Log in to Salesforce as an administrator.
    2.  Select the App Launcher and select Intacct.
    3.  Go to Intacct **Synchronization > Payments** and create new mappings for payment and payment details.
    4.  **Save** your changes.

2.  Create and sync payment jobs:
    1.  Set up a schedule for payment record syncs based on the configured mappings.

## Other updates

We've added the option to select a different price book for contract renewals in Salesforce. This new option provides flexibility for contract renewals, ensuring the pricing reflects the current business needs.

To select a new price book for contract renewal:

1.  Log in to Salesforce as an administrator.
2.  Select the App Launcher and select Intacct.
3.  Go to **Renewals > Price Book** and enter the name of an active price book. Only one price book can be selected.
4.  **Save** your changes.

## Permissions and other requirements

Specific fields and objects might vary depending on your Salesforce and Intacct configurations.

| Subscription          | Sage Intacct Advanced CRM Integration                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                            |
| User type             | Business user with admin privileges Your Sage Intacct admin can authorize other users after the integration has been configured.                       |
| Implementation        | Requires: Subscription in Intacct Configuration and setup in Intacct Configuration and setup in Salesforce Admin rights in both Intacct and Salesforce |
| Notes                 | Additional subscriptions are required if you want to use the following with the Advanced CRM Integration: Contracts Projects                           |
