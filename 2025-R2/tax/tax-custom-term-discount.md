---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Tax/2025-R2-tax-custom-term-discount.htm
release: 2025-R2
extracted: 2026-02-07
title: "Use custom discounts for Canadian Sales Tax"
---

# Use custom discounts for Canadian Sales Tax

[Configure custom discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_custom_discounts)

[Capture tax on term discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=capture_tax_term_discounts)

Taxes

Customers using the standard tax solution for Canada can now use custom discounts in their taxable Accounts Receivable transactions.

## Details

Custom discounts let you enter a discount for invoices where no term discount was selected or override a term discount when it's no longer applicable. Previously, we blocked custom discounts for companies using a Taxes application tax solution. Now, if you use the Canadian Sales Tax solution, you can use custom discounts in Accounts Receivable transactions for terms that calculate by line-item excluding taxes. This gives you the flexibility to manage complex term discount situations.

## How it works

### Step 1. Enable custom discount

1.  Go to **Accounts Receivable** > **Setup** > **Configuration**.
2.  In **Enable functionality**, select **Enable custom discount**.

    To turn off the setting, deselect the checkbox.

3.  Select **Save**.

### Step 2. Define terms

1.  Go to **Accounts Receivable** > **Setup** > **More** > **Terms**.
2.  Select **Add**, or select **Edit** for an existing term.
3.  Enter the discount and term information for the term.
4.  In the **Discount** section for **Calculate based on**, select **Line-items total, excluding taxes**.

    You cannot change the calculation method for a term that's in use or that has been used in a transaction.

5.  Select **Save**.

To see the applied discount, run a General Ledger report or subledger report. You can also view it by selecting the payment link in the header of the paid invoice.

## Limitations

When you create an invoice with a term discount, you can only use a custom discount to override a term that calculates based on the line-item total, excluding taxes.

If you apply a custom discount to a partial payment, then you cannot use a term discount in that transaction.

If you make a partial payment and then pay off the invoice using a term discount, you cannot apply a custom discount.

## Permissions and other requirements

| Subscription          | Accounts Receivable Taxes                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| Regional availability | Canada                                                                                                 |
| User type             | Business                                                                                               |
| Permissions           | Accounts Receivable Invoices: List, View, Add, Edit, Post, Delete Terms: List, View, Add, Edit, Delete |
