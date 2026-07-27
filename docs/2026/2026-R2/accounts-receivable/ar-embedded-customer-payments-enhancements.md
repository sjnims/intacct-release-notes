---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-embedded-customer-payments-enhancements.htm
release: 2026-R2
extracted: 2026-04-29
title: "Enhancements to embedded Customer Payment Services—Early Adopter"
---

# Enhancements to embedded Customer Payment Services—Early Adopter

[Configure Accounts Receivable](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configuring_Accounts_Receivable)

[Edit an email template](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Email_templates_platform_services)

[Create an invoice—Accounts Receivable](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_ar_invoice)

Accounts Receivable

Accelerate cash flow by offering a self-service payment option to your customers with the new embedded Customer Payment Services feature. If you’ve subscribed to an inbound payment service provider, you can allow your customers to pay invoices electronically through a secure link in invoices that you email to them. This embedded payment experience is powered by Fortis and other payment providers, and is designed to streamline your receivables process.

[Learn more about this payment service (1:43)](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-embedded-customer-payments-enhancements.htm#)

## Key benefits

This integration delivers several advantages for your accounts receivable team:

- **Faster payments**: Customers can pay multiple invoices directly from invoiceemails, helping you collect payments faster.
- **Improved accuracy**: Automated payment tracking and reconciliation reduce manual errors and administrative overhead.
- **Enhanced visibility**: Real-time payment status updates and audit trails provide better control and transparency.
- **Customer and self-service convenience**: A secure payment experience improves customer satisfaction and reduces friction.
- **Easier setup**: Default email templates are provided, but you can create different templates based on the defaults if you wish.
- **More payment providers added**: Customers can now use Bridge for companies in France and Germany to make electronic payments.

## Easier setup for embedded Customer Payment Services

As soon as a subscription to a payment service provider becomes active, you can enable the customer portal on the Configure Accounts Receivable page.

When **Enable customer portal** is selected, Intacct automatically creates email templates to use when paying invoices sent from Accounts Receivable and Order Entry. These templates include tokens for payment link, invoice number, amount due, and due date. You can select the new templates on the Configure Accounts Receivable page in the Customer payments portal section.

If you want to create your own email template, you can copy a default template and edit the copy, then select the copy as the template to use when creating invoices.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ar-configure-customer-portal.png "Customer portal section of Configure Accounts Receivable page")

## Enable payment service provider selected by default on invoices

When you’re creating invoices, the **Enable payment service** checkbox in the Payment servicer section is selected by default. When the invoice is generated, the payment service is enabled for the invoice, provided the minimum and maximum requirements for payment services are met.

If required, you can turn off the **Enable payment service** setting on individual invoices, so that customer payment services are not available for that invoice.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ar-configure-payment-svc-provider-on-invoice.png)

## Companies in Australia can now use embedded Customer Payment Services

We've added Australia to the list of available countries that you can select when configuring the Customer Payment Services subscription for your company.

When you select a country while configuring your company, only the payment providers available in that country are shown.

## How it works

### Set up Customer Payment Services

1.  Subscribe to your preferred inbound payment service provider.

    1.  Go to **Company** > **Admin** > **Subscriptions**.
    2.  Scroll to Customer Payment Services and select **View options**.
    3.  Select the country for your company.
    4.  Find the payment service provider that you want to subscribe to and select **Configure**.
    5.  Set up your customer payment service account.

2.  Turn on the customer portal.

The **Pay Invoice Now** link becomes available on invoices that you email to customers, and payment activity is tracked in the Invoice and Payment history tabs.

### Optional customizations

- Turn off customer portals on the Configure Accounts Receivable page.

  1.  Go to **Accounts Receivable** > **Setup** > **Configuration**.
  2.  In the Customer portal section, clear the **Enable customer portal** checkbox.

- Turn off the payment service for individual invoices.

  1.  Go to **Accounts Receivable** > **All** > and select Add (circle) next to **Invoices**.
  2.  In the Payment servicer section, clear the **Enable payment service** checkbox.

- [Create your own email templates](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Email_templates_platform_services) based on the default templates to match your company branding and messaging.

### Use the payment service

1.  [Create the customer invoice](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_ar_invoice), ensuring that **Enable payment service** is selected.
2.  On the **Print or email documents** page, ensure that the required email template is selected, then send the invoice to your customer.

When your customer receives the invoice, they select the link in the email. They’re then redirected to the customer portal, where they can view their invoice. They can also see any other outstanding invoices, which they can select to pay at the same time if they wish. When they confirm which invoices to pay, they are taken to the payment provider's secure payment page, where they submit their payment.

When invoices are paid using the link, the payments automatically appear in the Posted payments list.

## What's the Early Adopter program?

The Early Adopter program is available to a select group of customers who test new features and provide feedback. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.office.com/r/LsNPm4HrZ0) today.

## Permissions and other requirements

| Subscription          | Accounts Receivable Customer Payment Services                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Australia Canada France Germany Republic of Ireland United Kingdom United States                                                                             |
| User type             | Business user with admin privileges                                                                                                                          |
| Permissions           | Accounts Receivable Invoices: List, View, Add, Edit Print or email invoices: Run Administration (for setup) Application subscriptions: List, View, Configure |
