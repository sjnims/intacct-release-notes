---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm
release: 2026-R2
extracted: 2026-04-29
title: "Improved remittance support for bank files"
---

# Improved remittance support for bank files

Get more control over how remittance information is generated and delivered to vendors. This enhancement is designed for companies, in particular international ones, who do not use check payments and need clearer remittance communication for bank file payments.

## Key benefits

- **Clear remittance communication**: Send remittance details for bank file payments using dedicated Accounts Payable remittance emails and PDF attachments.

- **Flexible remittance configuration**: Control remittance email templates and PDF stubs separately for bank file payments, without affecting check remittance.

- **Company and entity logos**: Include company‑ or entity‑specific logos in remittance emails and PDFs where applicable.

## What's changed

You can now configure Accounts Payable with dedicated options for bank file remittance, separate from traditional check remittance.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ap-bank-file-remittance.png)

New options include the following:

- Set up custom remittance email templates specifically for bank file payments.

- Select configurable PDF remittance stubs (blank, with logo, or without logo).

- Apply settings on the company or entity level, including entity-specific logos.

If no bank file remittance configuration is set, Sage Intacct continues to use the existing default remittance behavior.

## How it works

[Configure bank file remittance information](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm#)

1.  Go to **Accounts Payable** > **Setup** \> **Configuration**.

2.  In the **Remittance** section, select or create an AP remittance email template for bank file payments.

    This template applies only to bank file payments and does not affect check remittance.

3.  Optionally, configure templates at the entity level for entity-specific logos.

    Otherwise, the company-level template is used.

4.  Select the **Bank file remittance** PDF stub that you want to send with the email.

    The remittance PDF stub can be blank, with a logo, or without a logo.

5.  Select **Save**.

[Send bank file payments with remittance](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm#)

When you email a bank file or ACH payment using a configured remittance template, Sage Intacct determines the recipient based on the template settings.

If the template specifies a To address, Intacct sends the email to that address. If the template does not specify a recipient, Intacct sends the email to the vendor contact email.

1.  Create and post AP payments using the bank file payment method, such as ACH.

2.  When the payment is confirmed, Sage Intacct automatically applies the configured remittance email template and PDF stub.

    No manual selection is required at payment time.

3.  The remittance email is automatically sent to the vendor using the configured template and includes payment details for payments, bills, adjustments, and advances.

## Good to know

When a remittance email template is configured, Sage Intacct uses the template settings to send remittance emails for ACH and bank file payments.

## Permissions and other requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services                                                                                                                                                                                                                                                              |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                       |
| User type             | Business user with admin privileges Business                                                                                                                                                                                                                                                                      |
| Permissions           | To configure bank file remittance information Administration Application subscriptions: List, View, Configure To send bank file payments with remittance Accounts Payable Pay Bills: Run To generate a bank file Cash Management Bank file generator: Run Bank files: List, View, Manage, Export, Confirm, Delete |
| Configuration         | Enable Bank file payments in checking accounts and vendor records.                                                                                                                                                                                                                                                |
