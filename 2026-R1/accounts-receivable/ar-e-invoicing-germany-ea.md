---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-e-invoicing-germany-ea.htm
release: 2026-R1
extracted: 2026-02-07
title: "E-Invoicing for Germany—Early Adopter"
---

# E-Invoicing for Germany—Early Adopter

[Configure E-Invoicing](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=configure_e-invoicing)

[Send an e-invoice](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=send_an_e-invoice)

[Submit e-invoices](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=E-invoicing_email_bills)

[Upload bills for automated processing](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Upload_bills_automation)

[Review and post draft bills](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=E-invoicing_email_bills)

Accounts Receivable

Sage Intacct now supports E-Invoicing for Germany. This feature helps businesses to stay compliant with evolving regulations while streamlining invoice processing.

## Key benefits

Germany has mandated that businesses must be able to send and receive invoices electronically (e-invoicing) in the ZUGFeRD format. ZUGFeRD is a hybrid e-invoicing file format that uses a human-readable PDF file along with an embedded machine-readable XML file to automate data processing. This new feature allows you to send and receive ZUGFeRD e-invoices in entities where the operating country is Germany.

With this feature, you can do the following:

- Set up e-invoicing for your German entities.
- Send e-invoices in the ZUGFeRD format from Accounts Receivable or Order Entry.
- Receive e-invoices in the ZUGFeRD format in Accounts Payable, with or without AP Automation.

## How it works

[Configure E-Invoicing, and enable German entities to send e-invoices](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-e-invoicing-germany-ea.htm#)

1. Go to **Company** > **Admin** > **Subscriptions** and subscribe to E-Invoicing.
2. Select **Configure** next to E-Invoicing.
3. Select **Enable e-invoicing** and save.

   ![Configure E-Invoicing page, with Enable e-invoicing option highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ar-configure-e-invoicing.png)

4. Go to **Company** > **Setup** > **Entities** and enable your German entities to use e-invoicing.

   ![Entity information page, with Enable e-invoicing option highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ar-configure-e-invoicing-2.png)

   After e-invoicing has been enabled for an entity, it cannot be turned off.

[Send an e-invoice](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-e-invoicing-germany-ea.htm#)

During this first phase, you can only send e-invoices one at a time, and only to VAT-enabled entities.

1. Send the invoice from Accounts Receivable or Order Entry.
2. To email an e-invoice, select **Email**, enter the required information, and select **OK**.

   ![Print or email page, showing the 2 available delivery methods, Print, or Email](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-ar-configure-e-invoicing-3.png)

3. To print an e-invoice, select **Print** to generate a ZUGFeRD file that you can then save and send.

   It can take some time to generate the ZUGFeRD file.

[Receive e-invoices](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-e-invoicing-germany-ea.htm#)

You can process ZUGFeRD e-invoices by uploading or emailing the invoice.

- To upload an invoice:
  1. Go to **Accounts Payable** > **All** > **Automated transactions**.
  2. Select **Upload**.
  3. Drag and drop the invoice, or browse to the invoice and select it.

- To email an invoice to the email address configured with your E-Invoicing subscription:
  1. Ensure that you send draft bills to the email address that was set up when you subscribed to E-Invoicing.
     1. Go to **Company** > **Admin** > **Subscriptions**.
     2. Select **Configure** next to E-Invoicing.
     3. In the Service mailbox configuration section, find the email address for the entity and send draft bills to that address.

  2. Review and post draft bills.
     1. Go to **Accounts Payable** > **All** > **Bills**.
     2. On the View menu, select **Draft Bills**.
     3. Find the bill you want to review and update.
     4. Select Edit at the end of the row.
     5. Review bill details and edit them as necessary.
     6. Submit or post the bill.

If you are subscribed to AP automation, Intacct populates additional fields that are generally not available in ZUGFeRD document, such as GL Account, Location, and Department.

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.office.com/r/LsNPm4HrZ0) today.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Company E-Invoicing                                                                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Germany                                                                                                                                                                                                                                                           |
| User type             | Business user with admin privileges                                                                                                                                                                                                                               |
| Permissions           | Administration Application subscriptions: List, View, Configure Accounts Payable Bills: List, View, Add, Edit, Post, Delete Automated transactions: Vie Accounts Receivable Invoices: List, View, Add, Edit, Post, Delete Company Entities: List, View, Add, Edit |
| Restrictions          | Operating country of the entity must be Germany to enable e-invoicing.                                                                                                                                                                                            |
