---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-unapply-credits-in-ap.htm
release: 2024-R3
extracted: 2026-02-07
title: "Unapply credits in Posted payments"
---

# Unapply credits in Posted payments

[Unapply credits](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Unapply_credits_in_AP)

Accounts Payable

This idea came from you

Improve workflow efficiency by unapplying credits from Posted payments, when the credits are applied without an associated payment.

You can unapply credits of all types, including the following:

- Advances
- Debit memo adjustments (vendor credits)
- Negative bills
- Negative line items applied from one bill to another bill

After you unapply a credit, the credit is available to apply to other bills.

## Unapply credits quickly

Credit entries, which previously did not appear in Posted payments, now show as a separate line item with an amount of 0. An **Unapply** link appears next to credit entries only.

![An Unapply link appears next to credit entries, and selecting Unapply opens the Void payment pop-up.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-ap-unapply-credits-posted-payments-us.png)

Selecting Unapply opens the Void payment date popup, where you provide the date when you are removing the credit. Where applicable, Sage Intacct also provides the option to reverse the bill.

## Review the credits applied to a payment

The Posted payment detail page now includes a new Credits applied tab that shows information about all credits included in a payment. Select the Credit no. to drill down further.

![The Credits applied tab in the payment detail lists the applied credits and provides a link to the credit.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-ap-unapply-credits-new-tab-us.png)

## Details

- Users with Posted payments: Void permissions can unapply credits.
- If payments were made against a bill either before or after you applied a credit, you can still unapply the credit, as long as you did not apply the payments simultaneously.
- Credits that you apply simultaneously for the same vendor and payment date are grouped in a single entry in Posted payments. You can view the details of all the credits in the Credits applied tab.
- When you select Unapply for a payment entry, all credits included in that entry are unapplied.
- To unapply credits that were applied along with a payment, you can void the payment directly from Posted payments.
- To reverse an applied credit, you must first unapply the credit on Posted payments. Then, you can reverse it in AP Adjustments.
- Credit-only payments do not trigger automatic payment notifications and the Email payment notice option is not available. If you need to provide a vendor with information about the credit amounts you applied, select **Print copy** on Posted payments to generate a PDF.

## Changes to existing behavior

| New behavior                                                                                                                                                                                                                                                                                                                                                                                                                                    | Old behavior                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Credits that you apply without an associated payment now appear in Posted payments as 0 amount transactions and include an Unapply option.                                                                                                                                                                                                                                                                                                      | Previously, you could not view these transactions.                                                                                                                                                           |
| You can now unapply advances and debit memo adjustments that were applied without an accompanying payment.                                                                                                                                                                                                                                                                                                                                      | Previously, you could not unapply advances, and you needed reverse debit memo adjustments to unapply them.                                                                                                   |
| Instead of reversing an AP adjustment that was applied to a bill without payment, now you can unapply it.                                                                                                                                                                                                                                                                                                                                       | Previously, you needed to reverse the credit to unapply it, and if the credit did not pay of the bill in its entirety, the transaction was reversed. To apply it to another bill, you needed to recreate it. |
| Unapplying credits is only supported on Posted payments.                                                                                                                                                                                                                                                                                                                                                                                        | Previously, you could unapply a negative bill by reversing it on the Bills list and limited cases, you could unapply a debit memo adjustment by reversing it on AP Adjustments.                              |
| When you import a paid or partially paid bill, Sage Intacct adds an entry to Posted payments. This entry corresponds to the historical debit memo Sage Intacct automatically creates for the paid portion of the bill. The Posted payments entry has the following characteristics: The amount is 0 because the entry reflects a credit. The payment method is the same as the default payment method that you configured for Accounts Payable. | Previously, Sage Intacct created the historical debit memos for partially and fully paid imported bills, but did not show corresponding entries in Posted payments.                                          |

## How it works

### Unapply a credit applied without accompanying payment

1.  Go to **Accounts Payable** > **All** > **Payments > Posted payments**.
2.  Select **Unapply** next to the credit.
3.  In **Void the payment on date**, enter the date when you want to remove the credit.
4.  Optionally, enter a **Memo** to describe the reason.
5.  Select **Submit**.

All credits applied in this entry are now removed from the bill and are available to apply to other bills. If the credit was created in error, you can now reverse it.

### Unapply a credit applied at the same time as a payment

To remove a credit that you applied alongside a payment, you need to void the payment.

1.  Go to **Accounts Payable** > **All** > **Payments > Posted payments**.
2.  Select **Void** next to the payment that includes the credit.
3.  Enter a **Void the payment on date**.
4.  Optionally, enter a **Memo** to describe the reason.
5.  Select **Submit**.

Sage Intacct voids the payment and unapplies the credits. You can now apply the credits to other bills.

### Reverse an applied credit

1.  Unapply the credit from Posted payments.
2.  Reverse the credit, provided it has not been applied to any other bills.

    Where you reverse the credit depends on the type of credit.
    - Debit memo adjustments: Reverse the credit from the AP Adjustments list.
    - Negative bills: Reverse or delete the bill from the Bills list.
    - Advances: Void the prepaid advance from the AP Advances list.

### View credits applied in a payment

1.  Go to **Accounts Payable** > **All** > **Payments > Posted payments**.
2.  Select **View** next to the payment.
3.  Select the **Credits applied** tab.
4.  Select the linked credit number to drill down to credit details.

## Permissions and other requirements

| Subscription          | Accounts Payable                  |
| --------------------- | --------------------------------- |
| Regional availability | All regions                       |
| User type             | Business                          |
| Permissions           | Posted Payments: List, View, Void |
