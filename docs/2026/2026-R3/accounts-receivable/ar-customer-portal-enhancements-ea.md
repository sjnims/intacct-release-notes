---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Receivable/2026-R3-ar-customer-portal-enhancements-EA.htm
release: 2026-R3
extracted: 2026-07-27
title: "Enhancements to embedded Customer Payment Services—Early Adopter"
---

# Enhancements to embedded Customer Payment Services—Early Adopter

[CSV import: Accounts Receivable invoices](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AR_Invoices)

[Customer refunds](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_of_customer_refunds)

[Receive payments](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Receive_payments)

Accounts Receivable

Accelerate cash flow by offering a self-service payment option to your customers directly from their invoices. This embedded payment experience is designed to streamline your receivables process with services powered by Fortis and other payment providers.

In this release, we've introduced additional capabilities to make your receivables processing even more efficient:

- Invoices you import through CSV file can now be enabled for electronic payment processing, allowing invoice creation at scale.

- Customer refunds and partial payments are now supported through the Fortis payment service, eliminating the need for outside processing and preventing duplicate payments.

## Key benefits

Customer Payment Services delivers several advantages for your accounts receivable team:

- **Faster payments:** Customers can pay directly from invoice emails, helping you collect payments faster.
- **Improved accuracy:** Automated payment tracking and reconciliation reduce manual errors and administrative overhead.
- **Enhanced visibility:** Real-time payment status updates and audit trails provide better control and transparency.
- **Customer convenience:** A secure payment experience improves customer satisfaction and reduces friction.

## Imported invoices can now be paid electronically

You can now enable electronic customer payments for invoices you import into Intacct, giving your customers the same efficient self-service payment option as for manually created invoices. Simply bulk import invoices as you have done in the past, and the electronic payment option is available to your customers the same as for invoices that have been input manually.

### How it works

1.  [Download an updated blank Accounts Receivable invoices template from the Company Setup Checklist](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Uploading_AR_Invoices).

2.  To enable electronic payment for an invoice, enter the value `T` in the `ENABLEEP` field.

This is not a required field. If no value is entered, its value will default to `F`, making electronic payment for that invoice unavailable.

## Expanded capabilities for Fortis subscribers

If you use Fortis as your payment provider, you can now process customer refunds and receive partial invoice payments directly within Intacct. No additional setup is required to make use of these expanded capabilities.

### Customer refund processing

When creating a customer refund, you can now select **Electronic payment** as the payment method. Select the payment provider and the relevant document numbers, and the refund request is automatically sent to Fortis for processing against the customer's original payment method. You can check the processing status of the refund in the **Customer refunds** screen.

### Partial payment processing

Your customers can now make partial invoice payments electronically. When your customer pays a portion of the invoice amount, Intacct automatically prevents duplicate payments during processing. After processing is complete, Intacct records the partial payment and allows your customer to pay only the remaining invoice balance electronically.

## What's the Early Adopter program?

The Early Adopter program is available to a select group of customers who test new features and provide feedback. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.cloud.microsoft/pages/responsepage.aspx?id=fN0yPvZBLUmho8WOsCz0-IhiHBMJdtVPpFrxgMGpn-hUMVFGNjBSOVBGS0xPVUtRM0lEM0tJQkRCRi4u&lang=en-US) today.

## Permissions and other requirements

| Subscription          | Accounts Receivable Customer Payment Services                                                                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Electronic payment for imported invoices: Australia Canada France Germany Republic of Ireland United Kingdom United States Expanded Fortis capabilities: United States                                                |
| User type             | Business user with admin privileges                                                                                                                                                                                   |
| Permissions           | To set up Customer Payment Services Administration Application subscriptions: List, View, Configure To use Customer Payment Services Accounts Receivable Invoices: List, View, Add, Edit Print or email invoices: Run |
