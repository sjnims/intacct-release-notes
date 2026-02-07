---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Tax/2025-R4-tax-term-discounts-GA.htm
release: 2025-R4
extracted: 2026-02-07
title: "Support for term discounts for taxes—General availability"
---

# Support for term discounts for taxes—General availability

[Capture tax on term discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=capture_tax_term_discounts)

Taxes

Customers using a standard or custom tax solution in the Taxes application can capture taxes on term discounts in their Accounts Receivable and Order Entry transactions.

You can create new terms or modify existing terms with a new calculation method for the discount.

![Screenshot of the Discount section of the AR terms information setup page with a callout box around the calculation method radio buttons.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-tax-ar-term-discount-ga-setup.png)

## Details

Requirements for applying term discounts and calculating taxes on those discounts can vary between regions. Now, you can set the calculation method for your Accounts Receivable and Order Entry terms to meet the requirements of your operating country.

The calculation method determines how the term discount is applied in the transaction.

-   **Line-items total, excluding taxes:** This method applies the discount to the line items only, excluding any taxes for that item. The discount is not applied to other subtotal charges like shipping.
    
-   **Line-items total, including taxes:** This method applies the discount to the line total, including the item amount and the taxes on that amount. The discount is not applied to other subtotal charges like shipping.
    
-   **Invoice total, including taxes and added charges:** This method applies the discount to the invoice total, including all line items, taxes, shipping, and other charges. This method is the default selection.
    

The following table shows how tax records are captured for each discount calculation method.

| Calculation method | Discount | Tax | Tax records |
| --- | --- | --- | --- |
| Line-items total, excluding taxes | Applied on line-item net amount | No discount applied | No adjusting tax record created |
| Line-items total, including taxes | Applied on line-item gross amount | Calculated on net amount after discount | Adjusting tax record created |
| Invoice total, including taxes and added charges | Applied on invoice total (net + tax + other charges) | Calculated on net amount after discount | Adjusting tax record created |

Term discounts can be applied in the following transaction types:

-   Accounts Receivable: Invoices, Recurring invoices
    
-   Order Entry: Transactions posting to Account Receivable
    

## How it works

1.  Go to **Accounts Receivable** **Setup** > **More** > **Terms**.
    
2.  Under **Discount** > **Calculated based on**, select the appropriate calculation method for the term discount.
    

When you create an Accounts Receivable or Order Entry transaction, you can select a pre-defined term under **Payment terms**. When you apply a payment to that transaction, you can select the **Apply term discount** checkbox.

This is how the payment is applied for each term discount calculation method:

[Line-items total, excluding taxes](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Tax/2025-R4-tax-term-discounts-GA.htm#)

You post an invoice that has a line item with a base amount of £1000, and a tax detail rate of 20% for a tax amount of £200. You apply a term with a 10% discount for line-items total, excluding taxes.

When you apply the payment and select the **Apply term discount** checkbox, the discount is calculated on the line-item base amount excluding taxes. This results in a discount of £100. That discount is applied to the net amount before taxes. No adjusting tax record is created.

[Line-items total, including taxes](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Tax/2025-R4-tax-term-discounts-GA.htm#)

You post an invoice that has a line item with a base amount of £1000, and a tax detail rate of 20% for a tax amount of £200. You apply a term with a 10% discount for line-items total, including taxes.

When you apply the payment and select the **Apply term discount** checkbox, the discount is calculated on the line-item base amount and the tax amount. This results in a discount of £120. That discount is then distributed between the base amount and the tax amount. In this example, a discount of £100 is distributed to the base line, and £20 to the tax line. An adjusting tax record is created.

![Screenshot of the invoice details page for a line-items total including taxes term discount with a callout box around the discount section.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-tax-ar-term-discount-radio2.payment.png)

[Invoice total, including taxes and extra charges](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Tax/2025-R4-tax-term-discounts-GA.htm#)

You post an invoice that has two line items. Line item 1 has a base amount of £1000, and a tax detail rate of 20% for a tax amount of £200. Line item 2 has a base amount of £50 and a tax exempt tax detail. You apply a term with a 10% discount for the invoice total, including taxes and added charges.

When you apply the payment and select the **Apply term discount** checkbox, the discount is calculated on the invoice total. This results in a discount of £125. That discount is then distributed between the line items and the tax amounts. In this example, a discount of £100 is distributed to the first line, £5 to the second line, and £20 to the tax line. An adjusting tax record is created.

![Screenshot of the invoice details page for an invoice total, including taxes and added charges term discount with a callout box around the discount section.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-tax-ar-term-discount-radio3.payment.png)

Term discounts are only applied when the payment is made in full. You cannot apply a term discount to a transaction with a credit or partial payment.

## Permissions and other requirements

| Subscription | Accounts Receivable                                                                 Order Entry                                                                 Taxes |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts Receivable                                                                                                                                                                                                               AR Terms: List, View, Add, Edit, Delete |
| Restrictions | You cannot use term discounts for taxes in the following cases:                                                                                                                                                                                                                Custom term discounts                                                                                                                                                                                                                   Transactions using Cash-basis tax capture                                                                                                                                                                                                                   Transactions with a negative balance on the line or invoice total (for example, credits and partial payments)                                                                                                                                                                                                                   Terms with penalties |
