---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-bridge-new-payment-service-provider-EA.htm
release: 2026-R2
extracted: 2026-04-29
title: "New payment service provider: Bridge—Early Adopter"
---

# New payment service provider: Bridge—Early Adopter

[Configure Accounts Receivable](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Accounts_Receivable)

[Create an invoice—Accounts Receivable](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_ar_invoice)

Accounts Receivable

Accelerate cash flow by offering a self-service payment option to your customers with the new embedded Customer Payment Services feature. If you’ve subscribed to an inbound payment service provider, you can allow your customers to pay invoices electronically through a secure link in invoices that you send electronically. In this release we've added Bridge to the list of available payment providers that your customers can use to pay invoices electronically.

See also the other [enhancements to the embedded Customer Payment Services](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-embedded-customer-payments-enhancements.htm) Early Adopter program.

## How it works

### Set up customer payments

1.  Turn on the customer portal.

    1.  Go to **Accounts Receivable** > **Setup** > **Configuration**.
    2.  In the Customer portal section, select **Enable customer portal**.
    3.  Select the email templates to use for invoices and Order Entry invoices.

2.  Subscribe to your preferred inbound payment service provider.

    1.  Go to **Company** > **Admin** > **Subscriptions**.
    2.  Scroll to Customer Payment Services and select **View options**.
    3.  Select the country for your company.
    4.  Next to **Configure Customer Payments powered by: Bridge** select **Configure**.
    5.  Set up your customer payment service account.

The **Pay Invoice Now** link becomes available on invoices that you email to customers, and payment activity is tracked in the Invoice and Payment history tabs.

### Use Bridge as the payment service provider

1.  When [creating the customer invoice](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_ar_invoice), select **Accept payment electronically**.
2.  Select **Bridge** as your payment service.
3.  Email the invoice to your customer.

    Your customer can then select the link in the email to send their payment.

When they pay their invoice using the link, the payment automatically appears in the Posted payments list.

## What's the Early Adopter program?

The Early Adopter program is available to a select group of customers who test new features and provide feedback. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.office.com/r/LsNPm4HrZ0) today.

## Permissions and other requirements

| Subscription          | Accounts Receivable Customer Payment Services                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | France Germany                                                                                                                                               |
| User type             | Business user with admin privileges                                                                                                                          |
| Permissions           | Accounts Receivable Invoices: List, View, Add, Edit Print or email invoices: Run Administration (for setup) Application subscriptions: List, View, Configure |
