---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Accounts_Payable/2025-R4-ap-payment-ids-for-advances.htm
release: 2025-R4
extracted: 2026-02-07
title: "Add auto-generated payment IDs to AP advances"
---

# Add auto-generated payment IDs to AP advances

[AP advances](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ap_advances)

[Document sequences for auto-numbering IDs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Document_Sequence_Redirect)

Accounts Payable

You can now configure Accounts Payable to generate a unique payment ID for AP advances. This unique ID allows you to more easily reference and trace AP advances in lists and reports.

## Key benefits

- **Improved traceability**: Intacct shows the Payment ID in standard views of the Advances list and on the detail page for posted advances. This allows you to easily filter the Advances list using the Payment ID and match the payment more quickly during bank reconciliation.
- **More detailed reporting**: The Payment ID appears in the following standard report columns:
  - In the Check Register report and AP Ledger, the Payment ID appears in the Document number column.
  - In the AP Aging report, the Payment ID appears in the Bill column.
  - In all three reports, if the Check number and Reference number columns are empty, the Payment ID appears here.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-ap-payment-id.png)

## How it works

1.  Go to **Accounts Payable** > **Setup** > **Configuration**.
2.  Select the dropdown option for **Advance** in the Document sequencing section.
3.  Select **Add** to create a new document sequence or choose an existing sequence.
4.  Select **Save**.

After you assign a document sequence, Sage Intacct creates Payment IDs for new advances when you post them. Existing posted advances are unaffected.

## Permissions and other requirements

| Subscription          | Accounts Payable Administration                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                  |
| User type             | Business user with admin privileges                                                                                                          |
| Permissions           | To set up Payment IDs: Administration Application subscriptions: List, View, Configure To create advances: Accounts Payable AP advances: Add |
