---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-joint-check-payment-method.htm
release: 2025-R2
extracted: 2026-02-07
title: "Introducing joint checks for Accounts Payable"
---

# Introducing joint checks for Accounts Payable

[Joint checks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_joint_checks_in_AP)

Accounts Payable

If you handle bills from vendors who subcontract portions of their work and you need to pay both parties, you'll love the joint checks payment method, now available to all Accounts Payable subscribers.

With joint checks, you can add 1 or more joint payees to a bill and issue two-party checks to them. You can make payments to joint payees at either the bill level or line level.

[Example](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-joint-check-payment-method.htm#)

Say you receive a bill from a vendor, All Pro Construction, who used 3 different subcontractors to complete the work. After you create the bill, you add each subcontractor as a joint payee. The **Joint payee print as** field shows who each check is paid to, which by default is the primary vendor AND the subcontractor.

When you pay the bill using Joint check as the payment method, you specify the amount to pay to each joint payee.

![Payee details for a bill in the amount of 16200, with a line for each joint payee and a different amount to pay entered on each line](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-joint-checks-ex-2-us.png)

Because this bill has 3 joint payees and you entered an amount to pay for each one, Intacct generates 3 payment requests. When you print checks, 3 checks are printed. The payee name printed on each check reflects the corresponding **Joint payee print as** name from the bill.

![A check in the amount of 3400, to All Pro Construction AND Metro Drywall Experts](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-joint-checks-ex-3-us.png)

## Details

### Setting up joint payees

To get started, enable joint checks in the Accounts Payable Configuration, at the top level. You can deactivate joint checks up until the point when you make your first joint payment.

After you enable joint checks, Sage Intacct adds the following to existing pages:

- A **Joint payee** tab is added to bills after they’re created
- The **Joint** check payment method is added to Pay bills
- **Joint payee** columns are added where payments are listed, such as on the Payment requests list, in Posted payments, and in the Check register
- The **Joint payee print as** column is added for Payment request lists and on the Print checks page

You can then set up a joint payment by adding one or more add joint payees to a saved bill.

![The Joint payee column and the Joint payee print as column appear on the Joint payees tab on a bill](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-joint-checks-payees.png)

When setting up joint payees, note the following:

- Each joint payee on a bill must be unique.
- By default, **Joint payee print as** uses the format <primary vendor\> AND <joint payee>. You can override this value as needed.
- You cannot add joint payees on Purchasing documents, such as those converting a subcontract or purchase order into an invoice.
- After you initiate a payment to a joint payee, you cannot delete the joint payee from the bill.
- CSV import does not support joint payees for bills. Add joint payees after the bill is imported.

### Paying bills with joint checks

Pay joint payees by selecting **Joint** check as a payment method in Pay bills. When you select this payment option, Intacct does the following:

- Filters the list of bills to show only bills with joint payees.
- Adds a **Payee details** link appears next to each bill, for paying joint payees at the bill level
- Adds a **Payee line details** link in the Line details drill down, for paying joint payees at the line level.

The Amount to pay field on the Pay bills page summarizes the amounts that you enter in Payee details or Payee line details.

[![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-joint-checks-pay-bills_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ap-joint-checks-pay-bills.png)

When paying using joint checks, note the following:

- Editing the summarized **Amount to pay** on the Pay bills page overrides the joint payment details you added on other pages and assigns the pay amount to the primary vendor.
- Credits and discounts are not supported for joint payments.
- Payments that use the Joint check payment method generate one payment request per joint payee per bill.
- Joint check payments cannot be merged in the outbox.
- Joint checks do not support foreign-to-base currency transactions, where the bill currency is different from the bank currency.
-  If you select a bill for payment that has joint payees, but you do not choose the Joint check payment method, the amount is paid to the primary vendor only.
- Joint checks are not available when using Pay by entity.

## How it works

### Step 1: Enable joint checks

1.  Go to **Accounts Payable > **Setup\***\* **> Configuration\*\*.
2.  Under Enable functionality, select **Enable joint checks**.
3.  Select **Save**.

The joint payee tab is now available on bills that have been posted or saved as drafts.

### Step 2: Create a bill with joint payees

1.  Create a bill for the primary vendor.
2.  Save the bill as a draft or post it.

    If your company uses bill approvals, save the bill as a draft. Then, submit it after you add the joint payees. Otherwise, the bill will go through approval twice: first when you create it, and a second time when you add the joint payees.

3.  On the Bills list, select **Edit** next to the bill.
4.  Select the Joint payee tab.

    If you do not see the Joint payee tab, this means that the Joint check payment method is not enabled for your company.

5.  For **Joint payee**, enter the name of the secondary payee that you want to appear on the check, alongside the vendor.

    **Joint payee print as** shows how the check will be issued when you pay the bill. The print as format is Vendor AND joint payee.

6.  To issue additional checks to other joint payees when you pay the bill in the future, enter each Joint payee on a new line.

    Later, when you pay the bill, you'll enter the amount to pay each joint payee, either at the bill level or the line level.

7.  Select **Submit**, **Post**, or **Draft**.

### Step 3: Pay a bill to joint payees

1.  Go to **Accounts Payable > **All\***\* **> Pay bills\*\*.
2.  Apply a filter to load bills
3.  Select **Joint checks** as the Payment method.

    Sage Intacct filters the list of bills to show only the ones that are set up with joint payees.

4.  Select the remaining payment information, such as **Bank**, **Currency**, **Exchange rate type**, and **Payment** date.
5.  Select the bill you want to pay.
6.  To assign payment amounts at the bill level:
    1.  Select **Payee details** next to the bill.
    2.  Enter the **Amount to pay** for each joint payee that you want to issue payment to.

        Line 1, which shows no joint payee, is paid to the vendor alone.

        Payments that you make based on the total bill amount, instead of at the line level, are distributed across line items in order.
7.  To assign payment amounts at the line level:

8.  Select **Line details** next to the bill.
9.  Select **Payee line details** next to the line you want to pay.

    The Payee line details page lists the joint payees that you set up for this bill.

10. For each joint payee that you want to pay, enter the **Amount to pay** for this line only.

    Line 1, which shows no joint payee, is paid to the vendor alone.

11. Select **Save** to return to Bill details.

    To make payment to a joint payee on another line, select **Payee line details** for that line and repeat the process.

12. Select **Save** to return to Pay bills.

    The amounts you assigned to joint payees at the line level or bill level are summarized upstream. Editing an upstream amount removes the detail that you entered on the payee line detail or payee details and assigns the pay amount only to the primary vendor.

13. Select **Pay now** or **Add to outbox**.

Intacct generates a payment request for each joint payment or vendor payment that you specified. Joint payments cannot be merged in the outbox.

After the payment requests are approved, print the checks.

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                     |
| User type             | Business                                                                                                        |
| Permissions           | To add joint payees to a bill: Bills: List, View, Add, Edit To pay a bill that has joint payees: Pay bills: Run |
| Configuration         | Enable joint checks in Accounts Payable Configuration.                                                          |
