---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-customer-refunds.htm
release: 2026-R2
extracted: 2026-04-29
title: "Process customer refund payments through Accounts Payable"
---

# Process customer refund payments through Accounts Payable

This release introduces a new way to process customer refunds by integrating Accounts Receivable and Accounts Payable workflows. You can now create refunds in Accounts Receivable that generate linked bills in Accounts Payable for payment processing. This approach helps enforce segregation of duties while making customer refunds easier to track and manage.

## Key benefits

- Stronger internal controls through clear segregation of duties.
- Separate refund creation from payment processing by allowing Accounts Receivable users to create refunds and Accounts Payable users to issue payments.
- Refunds processed through Accounts Payable are fully linked, making it easier to track refund status, related bills, and payments across applications.

## What's changed

- You can now process customer refunds in Accounts Payable, in addition to recording refunds that have been paid outside of Sage Intacct.
- We've added a **Customer refunds** section in the Configure Accounts Receivable page, and amended customer and vendor records to support refund payment processing.
- When you process a refund through Accounts Receivable, Intacct automatically creates a linked Accounts Payable bill that mirrors the refund.
- Accounts Receivable users continue to control refund creation, while Accounts Payable users manage the disbursement of funds using existing pay bills workflows. You can view and track refunds from both Accounts Receivable and Accounts Payable, with links between refunds, bills, and payments.

## How it works

[Set up Accounts Receivable](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-customer-refunds.htm#)

1.  Go to **Accounts Receivable** > **Setup** > **Configuration**.
2.  In the Customer refunds section, select one or both of the following:

    - **Record paid refunds**.

      This option allows you to record refunds that are made outside of Intacct.

      This option was previously in the Accounting settings section.

    - **Process refund payments in Accounts Payable**.

      This option allows you to process refunds within Intacct, as described below.

3.  In the **GL account** dropdown list, select the offset general ledger account in which refund payments are processed.
4.  In the **Summary frequency** dropdown list, select how often Intacct creates and processes auto-summaries of transactions.
5.  In the **Journal** dropdown list, select the journal in which refunds are recorded.
6.  In the **Document sequence** dropdown list, select the document sequence to use to assign document numbers to refunds.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ar-configure-customer-refunds-1.png "Screenshot showing the Customer refunds section of the Configure Accounts Receivable page")

[Set up customers](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-customer-refunds.htm#)

You can set up your customers to create an auto-generated vendor, link to an existing vendor, or block refunds for a specific customer.

To create an auto-generated vendor:

1.  Go to **Accounts Receivable** > **All** > **Customers**.
2.  Find the customer you want to edit.
3.  On the Refunds tab select **Auto-generated vendor**.

    Intacct creates a new vendor that will be used for any refunds you process for that customer.

    You can only delete this auto-generated vendor if no refunds have been processed for the customer.

The next time you view the Refunds tab on the customer record, the **Linked vendor** box shows the name of the linked vendor.

To link a customer to an existing vendor:

1.  Go to **Accounts Receivable** > **All** > **Customers**.
2.  Find the customer you want to edit.
3.  On the Refunds tab in the **Linked vendor** dropdown list select the vendor you want to use when processing refunds for that customer.

To block refunds for a single customer:

1.  Go to **Accounts Receivable** > **All** > **Customers**.
2.  Find the customer you want to edit.
3.  On the Refunds tab select **Block refunds for this customer**.

    You cannot select this option while there are any refunds in progress.

![Refunds tab of a customer](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-ar-configure-customer-refunds-2.png)

[Add a refund for processing in Accounts Payable](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-customer-refunds.htm#)

1.  Go to **Accounts Receivable** > **All** > **Payments** and select Add (circle) next to **Refunds**.

2.  Select the customer.

    The Available credits list updates to show credits that have balances available to refund.

3.  Optionally, change the Pay to contact, provide a reference, or upload an attachment.
4.  Enter the date when you want to refund the customer.
5.  In the Payment method dropdown list, select **Process in AP**.
6.  If your company has multi-curency transactions enabled, enter currency information.

    Intacct filters the list of credits to match the Credit currency you select.

7.  Select the credits to refund.
8.  Adjust the **Refund amount** for any credits that you’re partially refunding.
9.  Select **Post** or **Draft**.

[Process refunds](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Accounts_Receivable/2026-R2-ar-customer-refunds.htm#)

After you issue a refund, it appears as a bill to be paid. Follow your usual Pay bills workflow to issue the payment.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable Administration                                                                                                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                       |
| User type             | Business user with admin privileges                                                                                                                                                                                                                                               |
| Permissions           | Set up customer refunds Administration Application subscriptions: List, View, Conf Users: List, View, Edit, Permissions To create a customer refund Accounts Receivable Customer refunds: List, View, Add, Edit, Void To process a refund payment Accounts Payable Pay bills: Run |
| Restrictions          | Customer refunds are not supported in transactions that use cash basis tax capture.                                                                                                                                                                                               |
