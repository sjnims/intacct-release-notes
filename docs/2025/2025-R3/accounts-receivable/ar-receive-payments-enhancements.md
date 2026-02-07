---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-receive-payments-enhancements.htm
release: 2025-R3
extracted: 2026-02-07
title: "Enhancements to how you apply credits"
---

# Enhancements to how you apply credits

We’re excited to introduce a set of enhancements designed to streamline how you apply credits when receiving a payment. These updates are based on your feedback and are designed to reduce clicks, simplify workflows, and improve overall usability.

## Key benefits

- Save time by applying a credit to multiple invoices in a single payment, eliminating the need to post separate transactions for each invoice.
- Forego the math and let Sage Intacct determine how to apply credits across multiple invoices, using the waterfall method.
- Stay efficient while working from the Advances or AR adjustments list, where you can now receive a payment at the same time that you apply credits.
- Easily apply a credit that exceeds the value of a single invoice, as long as multiple invoices are selected.

## Apply credits with more flexibility in Receive payments

We've added a new **Apply credits** button to Receive payments. You can use it to select credits that you want Intacct to distribute across your selected invoices, using the waterfall method.

[![The Apply credits button on Receive payment opens the Credit details page, which shows the available credits for this customer](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-ar-credits-button-receive-payment_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-ar-credits-button-receive-payment.png)

### Example

Say that your customer has a credit in the amount of 1000 and has made a payment in the amount of 200, which will fully pay their 3 open invoices that total 1200. It does not matter to you which credits are applied to which invoice.

To quickly record the payment in Receive payments—New!, you would do the following:

1. Add the 3 invoices in the amounts of 300, 400, and 500.
2. Add the amount received and update any other payment details.
3. Select **Apply credit**, which opens the Credit details page.
4. Select the credit for 1000.
5. Select **Save** and return to the Receive payment page.

   Intacct automatically distributes the credits across the 3 selected invoices.

6. Select **Post** and the payment is complete.

### Good to know

- **Apply credits** is available when you receive a payment from a single customer.
- The total credits that you select must not exceed the sum amount of the selected invoices.
- You can override the credit distribution amounts before you post.
- You can receive payment for any amount up to the total invoice amount minus the value of the selected credits.
- If you prefer to control which credit is applied to which invoice, you can apply credits by selecting them for each invoice individually, as before. Choose the method that works best for your workflow.

## More options when applying a credit from the Advances list

To make your workflow more efficient, we've enhanced the **Apply more** option on AR advances to allow you to do the following:

- Apply the advance to multiple invoices
- Receive payment on the remaining invoice balance

### Example

Say that your customer previously paid an advance in the amount of 200 and has invoices for in the amounts of 150 and 175. You want to apply the advance to the open invoices, along with the customer's payment of 125.

1. On the AR advances list, select **Apply more** for the advance.
2. Select and add the invoices that you want to apply the advance to.
3. Intacct opens the Receive payments page, where you can see that the system automatically distributed the advance between the two invoices.
4. Under Payment information, enter the **Amount received** from the customer, and then select **Post**.

The invoices are paid in their entirety and the advance is fully applied.

### Good to know

- When you select multiple invoices, the advance is applied to the invoices using the waterfall method.
- You can override the credit distribution amounts before you post.
- You can receive payment for any amount up to the total invoice amount minus the value of the advance.

## Apply multiple adjustments to invoices from AR adjustments list

Apply multiple adjustments for a customer simply by selecting the transactions in the AR adjustments list. You can even receive payment at the same time that you apply the credits, without leaving the AR adjustments list.

![Select rows for the credits that you want to apply, then select the Apply credits button.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-ar-apply-multiple-adjustments.png)

### Example

Say you have a customer who has several unapplied credits that you want to clear.

1. On the AR adjustments list, select the credits that you want to apply, and then select **Apply credits**.
2. Select the invoices that you want to apply the credits to, and then add them to the Receive payments page.

   Intacct automatically distributes the credits across the selected invoices.

You then have the option to adjust how the credits are applied or to add a customer payment. However, because you’re concerned only with clearing the credits, you select **Post**.

### Good to know

- Selected credits must be for the same customer and use the same currency.
- When you select multiple invoices, credits are applied to the invoices using the waterfall method.
- You can override the credit distribution amounts before you post.
- You can receive payment for any amount up to the total invoice amount minus the value of the selected credits.
- The selection box appears only for Posted and Partially paid adjustments.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                               |
| User type             | Business                                                                                  |
| Permissions           | Manage payments: List, View, and Add Receive Advances: List, View Adjustments: List, View |
