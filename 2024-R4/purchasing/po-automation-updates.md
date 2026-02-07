---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Purchasing/2024-R4-po-automation-updates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Enhancements to AP Automation with Purchasing—Early adopter"
---

# Enhancements to AP Automation with Purchasing—Early adopter

Get the most out of your AI solutions. Let Sage Intacct create draft vendor invoices for you and match them to existing Purchasing transactions with automated Purchasing transactions and document matching.

We're continuing the Early adopter program for AP Automation with Purchasing, an add-on to AP Bill Automation. This release brings the following enhancements.

## Drilldown link to matching documents

When you match or change the matched document for a transaction, you can now drill down to view the document to match. This lets you view details on potential matches without leaving your spot.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-Matched-PO-drilldown.png)

## System default transactions

Now, system default Purchasing transactions are view-only. Change the transaction type before you enter transaction details and post them.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-read-only-SYS-PO.png)

## Support for standard workflows

Purchasing Automation now supports companies that use a standard transaction workflow.

To change the workflow later, turn off Purchasing automation before switching workflows. Then, reconfigure the document matching to automate your new transaction definitions.

If you have pending transactions, move them through to the end of the workflow before you change your workflow settings. Pending transactions might become inactive when you change workflows.

## Top level mapping is no longer required

You no longer need to enter a document match for the top level. This is especially useful when all of your transactions are entered at the entity level and you do not need a top level configuration.

If a transaction is sent to an entity that does not have an automated mapping, Intacct creates the transaction as a system default transaction. Change the transaction type to another type of Purchasing transaction or a bill and then review the details before you post it.

## Line-level matching change

To utilize line-level matching with automated Purchasing transactions, talk to your account manager or Channel Executive. This option now requires an extra step to turn it on.

## What is the Early adopter program?

The Early adopter program provides the new automated transaction matching functionality to users of AP Automation and Purchasing. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to respond to periodic surveys and provide feedback on new features.

This Early Adopter program is now closed. Check the release notes to find out when this feature becomes generally available.

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable Sage Cloud Service                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                              |
| User type             | Upload transactions for automated transaction matching Business, Platform, Project manager, or Warehouse user View, edit, and post automated transactions Business, Platform, Project manager, or Warehouse user Move a draft transaction to the Accounts Payable workflow Business user |
| Permissions           | Accounts Payable Automated transactions: List Bills: Add (to change a draft transaction to an AP bill) Purchasing (to view or edit the emailed transactions) Purchasing transactions: View, Edit, Add                                                                                    |
| Configuration         | Enable draft mode selected for the top level and each entity. Enable Automate transaction matching for Purchasing workflows.                                                                                                                                                             |
| Other requirements    | Have used the Purchasing application for at least 6 months before becoming an Early Adopter.                                                                                                                                                                                             |
