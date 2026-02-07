---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Purchasing/2025-R1-PO-remove-vat-validation.htm
release: 2025-R1
extracted: 2026-02-07
title: "Edit tax information in Purchasing draft transactions"
---

# Edit tax information in Purchasing draft transactions

Related information

[AP automation with Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_automated_transaction_matching_for_PO)

[Purchasing transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchasing_transactions)

PURCHASING

To support Purchasing automation for companies using the Taxes application, we no longer validate tax fields while Purchasing transactions are in a draft state.

This means that you can continue to work on a transaction and save your progress before you select a tax solution or provide a tax schedule. You can also change this information before you post the transaction. The tax solution, tax schedule, and the vendor are validated when you post the transaction.

## Details

If you have a subscription to the Taxes application and you create a Purchasing transaction, you can leave the tax solution field blank for draft transactions. If no tax solution is selected, then all dimension locations are available for you to select on the line level.

![Screenshot of a draft Purchasing transaction with boxes around the draft transaction status, empty tax solution field, and line item entry.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-PO-remove-vat-validation-draft.png)

You can save the transaction as a draft with only basic information. All that you need is a single line item with location and quantity. This lets you use Purchasing automation to create draft transactions with minimal information.

When you select a Tax solution, you then have the option to set other tax information like the Tax rate and Tax schedule. You can change this information, including the selected Tax solution, as long as the transaction is in the draft state.

You can change the Tax solution from a non-VAT tax solution (example: Advanced Tax) to a VAT or GST tax solution. You can also change the Tax solution from one VAT or GST tax solution to a different VAT or GST tax solution. You cannot change a Tax solution from a VAT or GST tax solution to a non-VAT tax solution.

## Permissions and other requirements

| Subscription | Purchasing                                                                 Taxes |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Purchasing                                                                                                                                      Purchasing transactions: List, View, Add, Edit, Delete                                                                     Tax Detail: List, View, Add, Edit, Delete                                                                     Tax Schedule: List, View, Add, Edit, Delete                                                                     Tax Schedule Map: List, View, Add, Edit, Delete |
