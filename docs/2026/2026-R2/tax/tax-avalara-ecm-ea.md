---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Tax/2026-R2-tax-avalara-ecm-ea.htm
release: 2026-R2
extracted: 2026-04-29
title: "Exemption Certificate Management integration with Avalara—Early Adopter"
---

# Exemption Certificate Management integration with Avalara—Early Adopter

Sage Intacct's integration with Avalara's Exemption Certificate Management (ECM) brings ECM visibility into Sage Intacct. You can confirm customer exemption status, request missing certificates, and stay audit-ready without switching between systems. This integration helps reduce billing delays, improves accuracy, and simplifies exemption workflows.

![Avalara Tax subscription configuration page with a section for Exemption Certificate Management (ECM) and the Enable Exemption Certificate Management (ECM) box checked.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-tax-avalara-ecm-ea-enable.png)

## Key benefits

- **Integration with Avalara ECM** reduces the need to toggle between applications to manage certificates or update customer records.

- **Automatic bulk sync** of customer records when you enable ECM in Intacct, reducing manual setup and maintenance.

- **Automatic update** of customer records in Avalara ECM when you create or update Intacct customer records after the initial enablement bulk sync.

- **Exemption visibility** directly from the Intacct customer record, including jurisdiction, exemption reason, effective dates, and certificate status.

- **Certificate request workflow** that allows users to send exemption certificate invitation emails to customers who have expired or soon-to-be expired certificates in Intacct.

## How it works

After you subscribe and configure your ECM service in Avalara AvaTax, you can monitor and coordinate most ECM activities from within Sage Intacct. Here's how it works.

1.  Enable ECM in the Avalara Tax subscription section within Sage Intacct.

2.  Upon enablement, active customer records in Intacct are automatically bulk synced to Avalara ECM.

3.  A new **Exemption Certificate Management (ECM)** section is available in the customer record in Intacct.

4.  From the customer record, users can:

    - View exemption certificate statuses and details.

    - Open and view or print certificate images that they've imported into Avalara ECM (PDF or JPG).

    - Send exemption certificate invitation emails to customers.

    - Unlink expired certificates from customers (relinking must be done in Avalara ECM).

5.  When customer details are updated in Intacct, the corresponding Avalara ECM record is automatically updated.

## Good to know

- Customer records must have an email address to be synced with Avalara ECM, and only active customers are synced during the enablement bulk sync.

- New certificates are added and validated in Avalara ECM, not directly in Sage Intacct.

- If a certificate is unlinked from a customer in Intacct, it cannot be relinked from Intacct and must be relinked in Avalara ECM.

- Certificate request emails are generated using a template that you can customize in Avalara ECM. Certificate request emails can only be sent for certificates with the status 'Expired' or 'Expiring Soon.'

## What's the Early Adopter program?

The Early Adopter program is available to a select group of customers who test new features and provide feedback. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.office.com/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-M5WMWLTG4lMufjoPSTup7lUN0QyN0RIQVozR09VOFBFQkpBWUc3VTFWMi4u) today.

## Permissions and other requirements

| Subscription                       | Order Entry Taxes                                                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | United States                                                                                                                                                                         |
| User type                          | Business                                                                                                                                                                              |
| Permissions                        | Accounts Receivable Customers: List, View, Add, Edit, Delete Company Application subscriptions: List, View, Subscribe, Configure Order Entry Customers: List, View, Add, Edit, Delete |
| Configuration                      | Enable ECM in the Avalara AvaTax subscription configuration page.                                                                                                                     |
| Dependencies or other requirements | Subscribe and configure your ECM service in Avalara AvaTax before you enable ECM in Sage Intacct.                                                                                     |
| Restrictions                       | Certificate linking and validation actions are performed in Avalara ECM.                                                                                                              |
