---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-PO-automation.htm
release: 2024-R3
extracted: 2026-02-07
title: "Enhancements to Automated transaction matching—Early adopter"
---

# Enhancements to Automated transaction matching—Early adopter

[Automated transaction matching for Purchasing workflows](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=EA_TOC_PO_auto_match)

Purchasing

Let Sage Intacct create draft vendor invoices for you and match them to existing purchasing transactions, with Automated transaction matching for Purchasing workflows.

We're continuing our Early Adopter program as we add enhancements. With this release, we're launching the ability to remove matched documents and see all automated transactions in one list.

Interested in discovering how Automated transaction matching can make your workflow more efficient? If you would like to be considered for the Early adopter program, [sign up](https://forms.office.com/r/tTthb1cGKs) today.

[What is the Early adopter program?](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-PO-automation.htm#)

The Early adopter program provides the new automated transaction matching functionality to users of AP Automation and Purchasing. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to periodically respond to surveys and provide feedback on new features.

## See all automated transactions in one place

You'll now see all automated transactions for Accounts Payable and Purchasing in one list. Bills that were created with AP Automation will appear in both the Bills list and the Automated transactions list.

![List of automated transactions that includes both AP bills and Purchasing transactions.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-automated-txn-list-us.png)

## Remove the matched PO document

You can now remove the matched document for automated Purchasing transactions. This is useful when you need to process a vendor invoice but do not have a PO to match to. Select **Remove** to unlink the matched document.

![Callout of options to change or remove the matched transaction.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-PO-auto-remove-matched-doc-us.png)

## Support for multiple targets from a single transaction definition

You can now map multiple target transaction definitions to a single source definition in your Purchasing configurations. This is useful when the source transaction could be matched to more than one target transaction type. For example, a purchase order could match to a vendor invoice or a receiver document.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-multiple-td-mapping-po-automation.png)

At first, incoming transactions might be created with the first target definition mapped in your configurations. The AI learns as you edit and change the automated transactions to increase prediction confidence. Over time, the system will be able to predict the target transaction definition based on your match configurations and previous transactions.

## More options for partial conversion handling

Automated transaction matching now supports all settings for partial conversion handling, including **Close original and create back order**.

With this option, when an automated transaction is matched to a source transaction and the item quantity is less than the original transaction quantity, the system closes the original transaction and creates a new one for the remaining item quantity. This back order is created when you post the automated transaction.

[Example scenario](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Purchasing/2024-R3-PO-automation.htm#)

You upload a PDF of a vendor invoice. This PDF becomes a draft in the Automated transactions list. The vendor invoice requests payment for 5 of the 10 items that you ordered in the matched purchase order. When you post the automated vendor invoice, the matched purchase order is closed and the system creates a new purchase order for the remaining 5 items.

## Permissions and other requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 Sage Cloud Service |
| --- | --- |
| Regional availability | Early adopter participants in all supported regions |
| User type | Upload transactions for automated transaction matching                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       View, edit, and post automated transactions                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Move a draft transaction to the Accounts Payable workflow                                                                                                                                                                                                               Business user |
| Permissions | Accounts Payable permissions                                                                                                                                      Automated transactions: List                                                                     Bills: Add (to change a draft transaction to an AP bill)                                                                                                                                  Purchasing permissions (to view or edit the emailed transactions)                                                                                                                                      Purchasing transactions: View, Edit, Add |
| Configuration | Enable Advanced workflow selected.                                                                     Enable draft mode selected for the top level and each entity.                                                                     Automate transaction matching for Purchasing workflows enabled. |
