---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm
release: 2026-R2
extracted: 2026-11-13
title: "Improved remittance support for bank files"
---

# Improved remittance support for bank files

[Configure bank file remittance information in Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_bank_file_remittance_ap)

[Create and manage email templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Creating_an_email_template)

[Field descriptions: Configuring Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Field_descriptions_ap_configuration)

accounts payable

Get more control over how remittance information is generated and delivered to vendors. This enhancement is designed for companies, in particular international ones, who do not use check payments and need clearer remittance communication for bank file payments.

## Key benefits

- **Clear remittance communication**: Send remittance details for bank file payments using dedicated Accounts Payable remittance emails and PDF attachments.

- **Flexible remittance configuration**: Control remittance email templates and PDF stubs separately for bank file payments, without affecting check remittance.

- **Company and entity logos**: Include company‑ or entity‑specific logos in remittance emails and PDFs where applicable.

  Learn more about [entity-specific logos](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Company_and_Administration/2026-R2-new-entity-level-logo.htm).

## What's changed

You can now configure Accounts Payable with dedicated options for bank file remittance, separate from traditional check remittance.

And, we added a dedicated **Remittance** section on the Configure Accounts Payable page with related options moved from the Enable functionality section. Learn more about [UI and label changes](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/User_Experience/2024-R4-ui-label-changes.htm).

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ap-bank-file-remittance.png)

The following are new capabilities:

- Set up custom remittance email templates specifically for bank file payments.

- Select configurable PDF remittance stubs (blank, with logo, or without logo).

- Apply settings on the company or entity level, including entity-specific logos.

If no bank file remittance configuration is set, Sage Intacct continues to use the existing default remittance behavior.

## How it works

[Set up remittance templates](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm#)

1.  Go to **Company** > **Setup** > **Settings** > **Email templates** > **Add**.

2.  Enter the necessary information.

3.  Select **AP remittance** for the Template type.

4.  Select **Save**.

[Configure bank file remittance information](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm#)

1.  Go to **Accounts Payable** > **Setup** \> **Configuration**.

2.  In the **Remittance** section, select an AP remittance email template for bank file payments.

    This template applies only to bank file payments and does not affect check remittance.

3.  Optionally, configure templates at the entity level to use [entity-specific logos](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Company_and_Administration/2026-R2-new-entity-level-logo.htm).

    Otherwise, the company-level template is used.

4.  Select the **Bank file remittance** PDF stub that you want to send with the email.

    The remittance PDF stub can be blank, with a logo, or without a logo.

5.  Select **Save**.

[Send bank file payments with remittance](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Payable/2026-R2-bank-file-remittance.htm#)

When you email a bank file using a configured remittance template, Sage Intacct determines the recipient based on the template settings.

If the template specifies a To address, Intacct sends the email to that address. If the template does not specify a recipient, Intacct sends the email to the vendor contact email.

1.  Create and post AP payments using the bank file payment method.

2.  When the payment is confirmed, Sage Intacct automatically applies the configured remittance email template and PDF stub.

    No manual selection is required at payment time.

3.  The remittance email is automatically sent to the vendor using the configured template and includes payment details for payments, bills, adjustments, and advances.

## Good to know

For Bank file payments with a configured email template, Sage Intacct does not create a history entry on the History tab of posted payments or payment copies when you take the following actions:

- Send a payment notification email

- Print payment copies

And, you can send payment notification emails from the Print payment copies page even if the vendor email address field is empty. Sage Intacct uses the email template **To address**. If the **To address** is empty, Sage Intacct uses "<noreply@intacct.com>".

## Permissions and other requirements

| Subscription          | Accounts Payable Cash Management Sage Cloud Services                                                                                                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                    |
| User type             | Business user with admin privileges Business                                                                                                                                                                                                                                                                   |
| Permissions           | To configure bank file remittance informationAdministration Application subscriptions: List, View, Configure To send bank file payments with remittanceAccounts Payable Pay Bills: Run To generate a bank fileCash Management Bank file generator: Run Bank files: List, View, Manage, Export, Confirm, Delete |
| Configuration         | Enable Bank file payments in checking accounts and vendor records.                                                                                                                                                                                                                                             |
