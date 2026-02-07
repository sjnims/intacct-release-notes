---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Purchasing/2024-R2-po-automation-ea-continues.htm
release: 2024-R2
extracted: 2026-02-07
title: "Early Adopter program continues for Automated transaction matching for Purchasing workflows"
---

# Early Adopter program continues for Automated transaction matching for Purchasing workflows

Let Sage Intacct create draft vendor invoices for you and match them to existing purchasing transactions, with Automated transaction matching for Purchasing workflows.

We're continuing our Early Adopter program as we add enhancements. With this release, we're launching support for multiple transaction definition mappings per entity. Interested in discovering how automated transaction matching can make your workflow more efficient? [Apply to become an Early Adopter](https://forms.office.com/r/tTthb1cGKs).

With automated transaction matching, you define how incoming purchasing documents map to existing source transactions in a one-time setup. Then, instead of converting purchasing transactions to vendor invoices, you let Sage Intacct match incoming vendor invoices using the following flow:

1.  You email or upload vendor invoice documents for automated processing.
    
2.  Sage Intacct uses artificial intelligence (AI) to detect the vendor and match the vendor invoice to a purchasing transaction.
    
3.  The system creates a draft vendor invoice for you with the source document attached.
    
4.  You validate the draft transaction against the vendor invoice, make corrections as necessary, and then post.
    
5.  Your corrections are fed back to the AI engine where it updates the machine learning model to improve future matches.
    

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R4-images/2023-R4-po-automation.png)

As you review drafts, you have the option to change the match to a different purchase transaction or change the draft transaction to an AP bill.

## Details

-   Automated transactions appear in a new Automated transactions list, which is available in the Accounts Payable menu.
-   You can change the source transaction match for a draft transaction at any time before you post it.
-   For transactions that do not belong in the Purchasing workflow, such as rent or utility bills, you can select **Change to AP** bill to move the transaction to Accounts Payable.
-   If you want Sage Intacct to create all future transactions for a vendor as AP bills, you can set **Change to AP** bill as a preference.
-   Sage Intacct automatically detects files that were previously uploaded and flags them as duplicates, bringing them to your attention.

## How it works

### Email a vendor invoice

Forward one or many documents to the Sage-provisioned email address for the entity where you want it to be created. Automated transaction matching uses the same mailboxes that were set up for you when you enabled AP Automation, so you do not have to learn new email addresses.

Sage Intacct analyzes the emailed document, creates a draft vendor invoice for the vendor, and adds the new transaction to the new Automated transactions list.

### Upload a vendor invoice

Upload new purchasing transactions in the Automated transactions list instead of the Bills list.

1.  Go to **Purchasing** > **All** > **Automated transactions**.
2.  Select **Upload** on the Automated transactions list to upload up to 30 vendor invoices at one time.
    
    Uploaded vendor invoices appear in the list immediately while Sage Intacct analyzes the data.
    
3.  Select **Refresh** to update the list and see when the draft transaction is complete and ready for review.

### Review draft transactions

1.  Go to **Purchasing** > **All** > **Automated transactions**.
2.  Select **Edit** next to the draft vendor invoice on the Automated transactions list.
    
    If you have split view enabled in your personal preferences, you can view the original vendor invoice alongside the draft transaction for easy comparison.
    
3.  Review the draft details.
    -   To change the transaction match, select **Change**, then select a different source transaction from this vendor in the popup.
    -   Edit header information and adjust line items as needed.
    -   To move the transaction to the Accounts Payable workflow, select **Change to AP bill**.
4.  **Post** the transaction.
    

## Requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 AP Automation                                                                 Sage Cloud Service |
| --- | --- |
| Regional availability | Early Adopter participants in the United States, only |
| User type | Upload transactions for automated transaction matching                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Email documents for transaction matching                                                                                                                                                                                                               Anyone to whom you provide with the Sage-provisioned email address.                                                                                                                                                                                                       View, edit, and post automated transactions                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Move a draft transaction to the Accounts Payable workflow                                                                                                                                                                                                               Business user |
| Permissions | Purchasing permissions (to view or edit the emailed transactions)                                                                                                                                      Automated transactions: List                                                                                                                                                                                                       Purchasing transactions: View, Edit                                                                                                                                  Accounts Payable permissions                                                                                                                                      Automated transactions: List (optional)                                                                     Bills: Add (to change a draft transaction to an AP bill) |
| Configuration | Enable Advanced workflow selected.                                                                     Enable draft mode selected for the top level and each entity.                                                                     Automate transaction matching for Purchasing workflows enabled.                                                                     Enable Line-level matching in the Purchasing configuration for Automated transaction matching. |
