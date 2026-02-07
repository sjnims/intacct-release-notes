---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-po-automation-ga.htm
release: 2025-R1
extracted: 2026-02-07
title: "AP Automation with Purchasing—General availability"
---

# AP Automation with Purchasing—General availability

[AP Automation with Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_automated_transaction_matching_for_PO)

[Set up and configure AP Automation with Purchasing (5:04)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-po-automation-ga.htm#)

[Automating purchasing transactions using AP Automation with Purchasing (7:19)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-po-automation-ga.htm#)

Purchasing

Streamline the process of drafting and matching incoming purchasing transactions with Purchasing automation, an add-on to AP Automation. AP Automation with Purchasing drafts the incoming vendor invoice and matches it to any previous documents, such as the purchase order or receiver.

## Details

You define how incoming Purchasing documents map to existing source transactions in a one-time setup. Then, instead of converting Purchasing transactions to vendor invoices, you let Sage Intacct match incoming vendor invoices, using the following flow:

1.  You email or upload vendor invoice documents for automated processing.
2.  Sage Intacct uses artificial intelligence (AI) to detect the vendor and match the vendor invoice to a Purchasing transaction.
3.  The system creates a draft vendor invoice for you, with the source document attached. Line items populate based on the matched source transaction.
4.  You review the draft vendor invoice, validating it against the source document and making corrections as necessary, and then post.
5.  Your corrections are fed back to the AI engine, where it updates the machine learning model to improve future matches.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R4-images/2023-R4-po-automation.png)

As you review drafts, you have the option to change the match to a different Purchasing transaction or change the draft transaction to an AP bill or another transaction type.

## How it works

- Automated transactions appear in a new Automated transactions list, which is available in the Accounts Payable and Purchasing menus.
- Incoming transactions are created as vendor invoices by default, and you can change the transaction type as needed before posting.
- You can change the transaction match for a draft transaction at any time before you post it.
- For transactions that do not belong in the Purchasing workflow, such as rent or utility bills, you can select **Change to** **AP** bill to move the transaction to Accounts Payable.
- If you want Sage Intacct to create all future transactions for a vendor as AP bills, you can set **Change to** **AP** bill as a preference on the vendor record.
- Sage Intacct automatically detects files that were previously uploaded and flags them as duplicates, bringing them to your attention.

### Step 1. Email or upload vendor invoice documents

#### Email a vendor invoice

Forward one or many documents to the Sage-provisioned email address for the entity where you want it to be created. Purchasing automation uses the same mailboxes that were set up for you when you enabled AP Automation, so you do not have to learn new email addresses.

Sage Intacct analyzes the emailed document, creates a draft vendor invoice for the vendor in Purchasing, and adds the new transaction to the Automated transactions list.

#### Upload a vendor invoice

Upload new Purchasing transactions in the Automated transactions list, instead of the Bills list.

1.  Go to **Accounts Payable** or **Purchasing** > **All** > **Automated transactions**.
2.  Select **Upload** on the Automated transactions list to upload up to 30 vendor invoices at one time.

    Uploaded vendor invoices appear in the list immediately while Sage Intacct analyzes the data.

3.  Select **Refresh** to update the list and see when the draft transaction is complete and ready for review.

### Step 2. Review automated transaction drafts

1.  Go to **Accounts Payable** or **Purchasing** > **All** > **Automated transactions**.
2.  Select **Edit** next to the draft vendor invoice on the Automated transactions list.

    If you have split view enabled in your personal preferences, you can view the original vendor invoice alongside the draft transaction for easy comparison.

3.  Review the draft details.
    - To change the transaction match, select **Change**, then select a different source transaction from this vendor in the popup.
    - To move the transaction to the Accounts Payable workflow, select **Change to** **AP** **bill**.
    - Edit header information and adjust line items as needed.
4.  **Post** the transaction.

## Draft transaction validation changes

We updated how draft transactions are validated against security settings and tax details to ensure that draft transactions are created correctly.

Learn more about how transaction validations have changed this release for the following areas:

- [Security settings in transaction definitions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-PO-Relax-SecuritySetting.htm)
- [Tax information in draft transactions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-PO-remove-vat-validation.htm)

## Early adopter enhancements to AP Automation with Purchasing

The following enhancements to AP Automation with Purchasing are available to early adopters only for R1:

- [Standalone automated transactions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-standalone-invoices-ea.htm#Standalone): Automate standalone transactions for cases when there is no existing purchase document to match with.
- [Line-level transaction matching](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-standalone-invoices-ea.htm#Line): Populate line items in the vendor invoice using data from the vendor document, rather than the matched source transaction.

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable Sage Cloud Service                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                              |
| User type             | Upload transactions for automated transaction matching Business, Platform, Project manager, or Warehouse user View, edit, and post automated transactions Business, Platform, Project manager, or Warehouse user Move a draft transaction to the Accounts Payable workflow Business user |
| Permissions           | Accounts Payable permissions Automated transactions: List Bills: Add (to change a draft transaction to an AP bill) Purchasing permissions (to view or edit the emailed transactions) Automated transactions: List Purchasing transactions: View, Edit, Add                               |
| Configuration         | Enable draft mode selected for the top level and each entity. Automate Purchasing transactions and document matching enabled. Document sequencing assigned to transaction definitions                                                                                                    |
| Restrictions          | Not available for the following companies: Avalara AvaTax enabled for sales tax HIPAA compliance required                                                                                                                                                                                |
