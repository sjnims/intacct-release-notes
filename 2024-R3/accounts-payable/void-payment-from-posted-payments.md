---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-void-payment-from-posted-payments.htm
release: 2024-R3
extracted: 2026-02-07
title: "Void a payment directly from the Posted payments page"
---

# Void a payment directly from the Posted payments page

[Void a posted payment](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Void_AP_posted_payment)

Accounts Payable

Save time by voiding posted payments directly from the Posted payments page.

Previously, the method you used to void a payment depended on the payment method. That might require voiding the payment from the Check, Bank, or Credit card register report, or from Manual payments.

Now, the Void link is conveniently available on the Posted payments page, where you typically view the completed payments. No Cash management permissions are required to void the payment.

![The Posted payments page shows a void link for non-voided payments, and selecting the link brings up the Void payment pop-up.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-ap-void-from-posted-payments-us.png)

## Details

-   The **Void** link for a payment is available when you are viewing the list from the entity where you created the payment.
-   The **Void** link does not appear for transactions that were previously voided.
-   From the popup, you can reverse bills (where allowed) at the same time you void the associated payment.
-   You can still void transactions from the Check register or the Bank register report.

## How it works

1.  In the entity where the payment was created, go to **Accounts Payable > **All** > Payments > Posted** **payments**.
2.  Filter the columns to find the payment you want to void.
3.  Select **Void** next to the payment.
4.  Enter a **Void the payment on date**.
5.  Enter a **Memo** to record the reason for voiding the transaction.
6.  Select **Submit**.

## Permissions and other requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Posted payments: Void |
