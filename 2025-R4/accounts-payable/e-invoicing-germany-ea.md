---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Accounts_Payable/2025-R4-e-invoicing-germany-ea.htm
release: 2025-R4
extracted: 2026-02-07
title: "E-Invoicing for Germany—Early Adopter"
---

# E-Invoicing for Germany—Early Adopter

[Configure E-Invoicing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=configure_e-invoicing)

[Send an e-invoice](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=send_an_e-invoice)

[Submit bills by email using E-Invoicing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=E-invoicing_email_bills)

Accounts Payable

Sage Intacct now supports E-Invoicing for Germany. This feature helps businesses to stay compliant with evolving regulations while streamlining invoice processing.

## Key benefits

Germany has mandated that businesses must be able to send and receive invoices electronically (e-invoicing) in the ZUGFeRD format. ZUGFeRD is a hybrid e-invoicing file format that uses a human-readable PDF file along with an embedded machine-readable XML file to automate data processing. This new feature allows you to send and receive ZUGFeRD e-invoices in entities where the operating country is Germany.

With this feature, you can do the following:

- Set up e-invoicing for your German entities.
- Send e-invoices in the ZUGFeRD format from Accounts Receivable or Order Entry.
- Receive e-invoices in the ZUGFeRD format in Accounts Payable through AP Automation.

## How it works

[Configure E-Invoicing and enable German entities to send e-invoices](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Accounts_Payable/2025-R4-e-invoicing-germany-ea.htm#)

1. Go to **Company** > **Admin** > **Subscriptions** and subscribe to E-Invoicing.
2. Select **Configure** next to E-Invoicing.
3. Select **Enable e-invoicing** and save.

    ![Configure E-Invoicing page, with Enable e-invoicing option highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-ar-configure-e-invoicing.png)

4. Go to **Company** > **Setup** > **Entities** and enable your German entities to use e-invoicing.

    ![Entity information page, with Enable e-invoicing option highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-ar-configure-e-invoicing-2.png)

    After e-invoicing has been enabled for an entity, it cannot be turned off.

[Send an e-invoice](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Accounts_Payable/2025-R4-e-invoicing-germany-ea.htm#)

During this first phase, you can only send e-invoices one at a time.

1. Send the invoice from Accounts Receivable or Order Entry.
2. To email an e-invoice, select **Email**, enter the required information, and select **OK**.

    ![Print or email page, showing the 2 available delivery methods, Print, or Email](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-ar-configure-e-invoicing-3.png)

3. To print an e-invoice, select **Print** to generate a ZUGFeRD file that you can then save and send.

    It can take some time to generate the ZUGFeRD file.

[Receive e-invoices](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Accounts_Payable/2025-R4-e-invoicing-germany-ea.htm#)

You can [receive ZUGFeRD e-invoices with AP Automation](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Payable/2025-R3-zugferd-ap-automation.htm).

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, please log a support case or contact your account manager.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Company E-Invoicing                                                                                                                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Germany                                                                                                                                                                                                                               |
| User type             | Business user with admin privileges                                                                                                                                                                                                   |
| Permissions           | Administration Application subscriptions: List, View, Configure Accounts Payable Bills: List, View, Add, Edit, Post, Delete Accounts Receivable Invoices: List, View, Add, Edit, Post, Delete Company Entities: List, View, Add, Edit |
| Restrictions          | Operating country of the entity must be Germany to enable e-invoicing                                                                                                                                                                 |
