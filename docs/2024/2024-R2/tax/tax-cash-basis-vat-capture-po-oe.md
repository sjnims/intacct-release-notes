---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Tax/2024-R2-tax-cash-basis-VAT-capture-PO-OE.htm
release: 2024-R2
extracted: 2026-02-07
title: "Cash basis VAT capture for France"
---

# Cash basis VAT capture for France

Capture taxes for VAT reporting at the point of payment with cash basis VAT capture. This enhanced functionality works with our existing invoice basis VAT capture, letting you select how and when to capture taxes for each line in a transaction.

## Details

By default, the Taxes application captures VAT or GST at the time an invoice or bill is issued, a process known as invoice basis tax capture. In entities using a French tax solution, you can choose instead to capture VAT or GST at the time an invoice or bill is paid. This process is known as cash basis tax capture.

Supported transaction types that have VAT or GST implications include a new column where you can mark a line item for cash basis tax capture. Simply select the **Capture payment tax** checkbox on the applicable line item of a transaction. When you post the transaction to create the bill or invoice, Intacct generates tax records for any unchecked line items. Line items marked with **Capture payment tax** generate tax records when the line items are paid off.

![Screenshot of AP transaction with callouts for TVA Francaise tax solution and Capture payment tax checkbox (English)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-capture-payment-tax-en.png)

Transactions with a mix of invoice and cash basis tax capture can be reported over multiple tax submissions. You can capture tax on full or partial payment transactions.

Reverse charge is only supported in transactions that don't use cash basis VAT. You cannot create mixed transactions containing both reverse charge and cash basis VAT lines.

The following transaction types are supported for cash basis tax capture:

- Accounts Payable bill
- Accounts Payable adjustment
- Accounts Receivable invoice
- Accounts Receivable adjustment
- Order Entry sales invoice
- Purchasing vendor invoice

When you check Capture payment tax in a Purchasing or Order Entry transaction, that selection carries over to the associated taxable Accounts Receivable or Accounts Payable transaction.

Cash basis tax capture is separate from the accrual, cash and accrual, and cash accounting methods used in the General Ledger.

## How it works

Mark a line item for cash basis tax capture when you create a supported transaction.

Enter VAT in an Accounts Payable transaction using the following steps:

1. Go to **Accounts Payable > **All\***\* and select the + sign beside**Bills\*\*.
2. Enter the header information.
3. Add the line items.

   For each line item, enter the **Account**, the **Transaction amount**, and select the appropriate **Tax detail**. When you select a **Tax detail**, Intacct displays the rate percent for that tax detail, and then calculates the tax based on the selected tax detail.

4. To use cash basis tax capture instead of the default invoice basis tax capture, select the **Capture payment tax** checkbox.

## Requirements

| Subscription          | Taxes                                                                                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                                                                                                                                                                              |
| Permissions           | Accounts Payable AP bills: List, View, Add, Edit Adjustments: List, View, Add, Edit Accounts Receivable AR invoices: List, View, Add, Edit Adjustments: List, View, Add, Edit Order Entry Order Entry transactions: List, View, Add, Edit Purchasing Purchasing transactions: List, View, Add, Edit |
