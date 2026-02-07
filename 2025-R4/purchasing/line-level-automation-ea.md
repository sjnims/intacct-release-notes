---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Purchasing/2025-R4-line-level-automation-ea.htm
release: 2025-R4
extracted: 2026-02-07
title: "Line-level matching enhancements for AP Automation with Purchasing—Early Adopter"
---

# Line-level matching enhancements for AP Automation with Purchasing—Early Adopter

[Compare header-level to line-level transaction matching](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automated_txn_line_level_vs_header_level_matching)

[Turn on line-level transaction matching](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Turn_on_line_level_matching)

[Convert multiple documents into a single Purchasing transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Convert_multiple_documents_into_transaction_ns)

Purchasing

We're continuing the Early Adopter program for line-level matching with new enhancements this release. Line-level document matching introduces a more precise way to automate transaction processing with AP Automation with Purchasing.

## Key benefits

- Increases the accuracy of transaction data by using the vendor document as the source of truth.
- Flags discrepancies in quantity or price between the automated transaction and source transaction, allowing you to quickly identify and resolve line entry mismatches.
- Helps reduce manual corrections and improves automated transaction draft accuracy.

## What's new

This release we've enhanced line-level matching with the following updates.

### View exceptions in line entries

View a summary of exceptions when there are discrepancies between matched transaction lines. For example, the purchase order has an item price of $5, but the vendor invoice charged you $8 for that item.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-po-match-tolerances.png)

1.  Select **View exceptions** to see the discrepancy summary when AI flags lines that do not match.
2.  Edit the automated transaction lines or override the exceptions as needed.

### Add lines from a source transaction

Add line entries when AI does not extract all line entries from the vendor document. You can add lines from the matched source transaction or other source documents.

[Step 1. Enable conversions for multiple source documents](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Purchasing/2025-R4-line-level-automation-ea.htm#)

1.  Go to **Purchasing** > **Setup** > **Configuration**.
2.  In the Enable functionality section, select **Enable conversions for multiple source documents**.
3.  **Save** your changes.

[Step 2. Add lines to an automated transaction](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Purchasing/2025-R4-line-level-automation-ea.htm#)

1.  Go to **Purchasing** > **All** > **Automated transactions**.
2.  Select **Edit** next to the transaction.
3.  Add a new line entry to the automated transaction.
4.  Select **Show details**.
5.  Select the **Source document ID** for the transaction that you want to add lines from.
6.  Select the lines to add to the automated transaction.
7.  **Save** your changes.

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

If you want to be considered for the Early Adopter program, [complete this form](https://forms.office.com/r/JqPgvXzaym) today.

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable AP Automation Sage Cloud Service                                                                                                                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                     |
| User type             | Upload transactions for Purchasing automation Business, Platform, Project manager, or Warehouse user View, edit, and post automated transactions Business, Platform, Project manager, or Warehouse user Move a draft transaction to the Accounts Payable workflow Business user |
| Permissions           | Accounts Payable (to change a draft transaction to an AP bill) Bills: Add Purchasing (to view or edit the automated transactions) Automated transactions: List Purchasing transactions: View, Edit, Add, Delete, Override exceptions                                            |
| Configuration         | Select Enable draft mode for the top level and each entity Select Automate transactions with document matching Select Enable line-level matching Select Enable conversions for multiple source documents                                                                        |
