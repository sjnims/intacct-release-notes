---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-standalone-invoices-ea.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhancements to AP Automation with Purchasing—Early adopter"
---

# Enhancements to AP Automation with Purchasing—Early adopter

AP Automation with Purchasing now supports automated standalone vendor invoices and line-level document matching as an Early adopter program.

If you'd like to be considered for the Early adopter programs for standalone vendor invoices and line-level matching, [sign up](https://forms.office.com/r/JqPgvXzaym) today.

## Standalone automated transactions

Now you can configure transaction definitions to create automated transactions without an existing source transaction to match. Automated standalone transactions are useful when you receive vendor invoices that do not have purchase orders or purchase requisitions to go with them. These could be utility bills, service charges, or frequently purchased items with a preferred vendor.

With this feature, you can do the following:

-   Configure transaction definitions to automate standalone transactions for cases when there's no source transaction to match.
    
-   Change the transaction type for incorrect predictions, which feeds back to the ML to improve future predictions.
    
-   Get the benefits of both document matching and standalone transactions. You can set up both options, or only use one or the other.
    

### How it works

1.  Go to **Purchasing > Setup  > Configuration**.
    
2.  In the Automation settings section, select **Automate standalone transactions**.
    
3.  Select the **Entity name** and **Target** transaction definitions to automate for standalone transactions.
    
4.  Select **Save**.
    

## Line-level document matching

You can decide whether you want to match Purchasing transactions at the header level or the line level. When you enable line-level matching, line items populate using data from the vendor document, rather than the source transaction. Line-level document matching is continuing as an Early Adopter program this release.

[Learn more about line-level document matching](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automated_txn_line_level_vs_header_level_matching).

## What is the Early adopter program?

The Early adopter program provides automated standalone vendor invoices to users of AP Automation with Purchasing. As an early adopter, you can influence how we develop the product so that our product meets your business needs.

The Early adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early adopter participants are expected to respond periodically to surveys and provide input.

If you'd like to be considered for the Early adopter programs for standalone vendor invoices and line-level matching, [sign up](https://forms.office.com/r/JqPgvXzaym) today.

## Permissions and other requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 Sage Cloud Service |
| --- | --- |
| Regional availability | All regions |
| User type | Upload transactions for Purchasing automation                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       View, edit, and post automated transactions                                                                                                                                                                                                               Business, Platform, Project manager, or Warehouse user                                                                                                                                                                                                       Move a draft transaction to the Accounts Payable workflow                                                                                                                                                                                                               Business user |
| Permissions | Accounts Payable permissions                                                                                                                                      Automated transactions: List                                                                     Bills: Add (to change a draft transaction to an AP bill)                                                                                                                                  Purchasing permissions (to view or edit the emailed transactions)                                                                                                                                      Automated transactions: List                                                                     Purchasing transactions: View, Edit, Add |
| Configuration | Enable draft mode selected for the top level and each entity.                                                                     Automate Purchasing transactions and document matching enabled.                                                                     Document sequencing assigned to transaction definitions |
