---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-po-transaction-matching-intl.htm
release: 2024-R3
extracted: 2026-02-07
title: "Automated transaction matching in all regions—Early adopter"
---

# Automated transaction matching in all regions—Early adopter

[Automated transaction matching for Purchasing workflows](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=EA_TOC_PO_auto_match)

Purchasing

Streamline your Purchasing workflow by letting Sage Intacct create draft transactions from incoming vendor invoices and match them to existing purchase transactions. This Early Adopter Program is now available in all regions.

## Details

With automated transaction matching for Purchasing workflows, you define how incoming purchasing documents map to existing source transactions in a one-time setup. Then, instead of converting purchasing transactions to vendor invoices, you let Sage Intacct match incoming vendor invoices, using the following flow:

1.  You email or upload vendor invoice documents for automated processing.
    
2.  Sage Intacct uses artificial intelligence (AI) to detect the vendor, and match the vendor invoice to a purchasing transaction.
    
3.  The system creates a draft vendor invoice for you, with the source document attached.
    
4.  You review the draft transaction, validating it against the vendor invoice and making corrections as necessary, and then post.
    
5.  Your corrections are fed back to the AI engine, where it updates the machine learning model to improve future matches.
    

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R4-images/2023-R4-po-automation.png)

  
As you review drafts, you have the option to change the match to a different purchase transaction or change the draft transaction to an AP bill.

This is a closed Early adopter program. If you would like to be considered for the Early adopter program, [sign up](https://forms.office.com/r/tTthb1cGKs) today.

## How it works

-   Automated transactions appear in a new Automated transactions list, which is available in the Accounts Payable menu.
-   You can change the transaction match for a draft transaction at any time before you post it.
-   For transactions that do not belong in the Purchasing workflow, such as rent or utility bills, you can select **Change to** **AP** bill to move the transaction to Accounts Payable.
-   If you want Sage Intacct to create all future transactions for a vendor as AP bills, you can set **Change to** **AP** bill as a preference.
-   Sage Intacct automatically detects files that were previously uploaded and flags them as duplicates, bringing them to your attention.

### Email a vendor invoice

Forward one or many documents to the Sage-provisioned email address for the entity where you want it to be created. Automated transaction matching uses the same mailboxes that were set up for you when you enabled AP Automation, so you do not have to learn new email addresses.

Sage Intacct analyzes the emailed document, creates a draft vendor invoice for the vendor, and adds the new transaction to the new Automated transactions list.

### Upload a vendor invoice

Upload new purchasing transactions in the Automated transactions list, instead of the Bills list.

1.  Go to **Accounts Payable** or **Purchasing** > **All** > **Automated transactions**.
2.  Select **Upload** on the Automated transactions list to upload up to 30 vendor invoices at one time.
    
    Uploaded vendor invoices appear in the list immediately while Sage Intacct analyzes the data.
    
3.  Select **Refresh** to update the list and see when the draft transaction is complete and ready for review.

### Review draft transactions

1.  Go to **Accounts Payable** or **Purchasing** > **All** > **Automated transactions**.
2.  Select **Edit** next to the draft vendor invoice on the Automated transactions list.
    
    If you have split view enabled in your personal preferences, you can view the original vendor invoice alongside the draft transaction for easy comparison.
    
3.  Review the draft details.
    -   To change the transaction match, select **Change**, then select a different source transaction from this vendor in the popup.
    -   To move the transaction to the Accounts Payable workflow, select **Change to** **AP** **bill**.
    -   Edit header information and adjust line items as needed.
4.  **Post** the transaction.
    

## What is the Early adopter program?

The Early adopter program provides the new automated transaction matching functionality to users of AP Automation and Purchasing. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to periodically respond to surveys and provide feedback on new features.

This is a closed Early adopter program. If you would like to be considered for the Early adopter program, [sign up](https://forms.office.com/r/tTthb1cGKs) today.

## Permissions and other requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 Sage Cloud Service |
| --- | --- |
| Regional availability | Early adopter participants in all supported regions |
| User type | Upload transactions for automated transaction matching                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       View, edit, and post automated transactions                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Move a draft transaction to the Accounts Payable workflow                                                                                                                                                                                                               Business user |
| Permissions | Accounts Payable permissions                                                                                                                                      Automated transactions: List                                                                     Bills: Add (to change a draft transaction to an AP bill)                                                                                                                                  Purchasing permissions (to view or edit the emailed transactions)                                                                                                                                      Purchasing transactions: View, Edit, Add |
| Configuration | Enable Advanced workflow selected.                                                                     Enable draft mode selected for the top level and each entity.                                                                     Automate transaction matching for Purchasing workflows enabled. |
