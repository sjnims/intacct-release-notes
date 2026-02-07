---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Receivable/2024-R3-edit-discount-when-receiving-payment.htm
release: 2024-R3
extracted: 2026-02-07
title: "Customize the discount when receiving payment"
---

# Customize the discount when receiving payment

[Configure custom discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure_custom_discounts)

[Apply discounts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Apply_ar_discounts)

[Import customer payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AR_import_customer_payments)

Accounts Receivable

This idea came from you

Sometimes you need to edit a discount on the fly. You've received a payment but it doesn't match the terms that you've set. You can now configure Accounts Receivable for custom discounts, allowing you to edit the discount at the time you receive a payment.

Previously, when customer remittance did not match the terms, you needed to create a debit or credit memo adjustment to compensate for the discrepancy. Now, you can dynamically adjust the discount as you receive payment, allowing you to more easily handle situations such as the following:

-   Remittance includes a rounding error
-   Customer missed the grace period
-   Customer took a smaller or larger discount than terms allow
-   Multiple payments were sent for a single invoice, meaning there is no single full payment against which to apply the term discount

Custom discounts are only available to companies that are not subscribed to Taxes.

## Example

Your customer submits payment for the invoice total minus a 1% discount. However, the customer sends the payment after the grace period has ended.

You determine that it is not worth your time to pursue the remaining 1% balance. When you receive payment, you apply a custom discount to compensate for the 1% loss. The invoice is recorded as paid in full.

## Details

-   Custom discounts are available when you record payments using **Receive payments - New!**.
-   To apply a custom discount, you must record a payment at the same time, though it can be a partial payment.
-   You can apply a custom discount each time you receive payment against an invoice, which means that you can accommodate multiple discounts on an invoice that the customer pays over several payments.
-   You can see the total amount of discounts previously applied to an invoice in the **Applied discount** field.

## Changes to Receive payments - New! 

To support custom discounts, the Invoices selected for payment section in Receive payments - New! is updated as follows:

[![Invoices selected for payment section showing Applied discount, Term discount, Apply term discount, and Discount to apply columns.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-ar-custom-discounts-us_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-ar-custom-discounts-us.png)

1.  **Applied discount**: When custom discounts are turned on, this column shows the total discounts previously applied to this invoice.
    
    **Applied discount** also appears in Invoice detail, in the section that shows the Term.  
    
2.  **Term discount**: Formerly named **Discount available**, this column shows the discount available for each invoice based on the terms selected on the invoice or carried over from the customer record. The calculation is based on the payment date you select.
    
3.  **Apply term discount**: Formerly named **Apply discount**, this checkbox functions differently depending on whether custom discounts are enabled.
    
    -   Without custom discounts: Sage Intacct deducts the available Term discount from the Payment amount, provided that the Payment amount is sufficient to cover the balance.
    -   With custom discounts: Sage Intacct copies the Term discount into Discount to apply.
4.  **Discount to apply**: When custom discounts are turned on, this column provides an editable field where you can enter a custom discount.
    

## How it works

1.  Go to **Accounts Receivable > **All** > Invoices** and select Add (circle) next to **Receive payments - New!**.
    
2.  Enter the payment information, including the **Customer**, **Amount received**, and **Payment method**.
3.  Select **Show** invoices.
4.  Select the invoice.
5.  Select **Add & close**.
6.  To apply the term discount, select **Apply discount**.
    
    When custom discounts are turned on, you can apply the term discount to a partial payment, at your discretion.
    
    If your setup is configured to apply discounts automatically, Sage Intacct copies the **Term discount** into **Discount to apply** whenever the payment amount is greater than or equal to the remaining balance.
    
7.  To add a custom discount, enter the value in **Discount to apply**.
8.  Enter a **Payment amount**.
9.  Select **Draft** or **Post** to save the payment.

## CSV import changes

To support custom discounts, we added a new field to the Accounts Receivable payments import template. We also added additional validation that affects all customers.

Review changes to CSV import validation even if you do not intend to use custom discounts, as the more stringent validation can affect term discount users.

For example, in the past, if you imported payment for a multiple-line invoice and included different DISCOUNTDATE values for each line, Sage Intacct used the first date you provided and discarded the rest. Now, this scenario generates an error.

### Validations

-   You can apply either a term discount or a custom discount to an invoice, but not both.
    
    Transactions that include both a DISCOUNTDATE and DISCOUNTTOAPPLY will generate an error.
    
-   Discounts are applied at the header level, rather than the line level.
    
    Whether you are providing a DISCOUNTDATE or a DISCOUNTTOAPPLY, all lines for the same transaction must contain the same discount value.
    
-   Accounts Receivable must be configured for custom discounts before you import a payment that includes a DISCOUNTTOAPPLY value.
    

[Example](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Receivable/2024-R3-edit-discount-when-receiving-payment.htm#)

If you are importing a payment for a 5-line invoice and you are applying the term discount, the DISCOUNTDATE must be the same for all lines. If a line includes a different date, it will generate an error.

## Setup

1.  Go to **Accounts Receivable** > **Setup** > **Configuration**.
    
2.  Under Enable functionality, select **Enable custom discounts**.
    
3.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Accounts Receivable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Manage payments: List, View, and Add |
| Configuration | Turn on Enable custom discounts in Configure Accounts Receivable |
| CSV import | Payments import template supports custom discounts in DISCOUNTTOAPPLY column. |
| Restrictions | Not available for companies subscribed to Taxes. |
