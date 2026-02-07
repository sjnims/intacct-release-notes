---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-customer-refunds-ga.htm
release: 2025-R3
extracted: 2026-02-07
title: "Record customer refunds—General availability"
---

# Record customer refunds—General availability

[Customer refunds](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ar_customer_refunds)

Accounts Receivable

This idea came from you

We're excited to announce that the ability to record customer refunds is now generally available to all customers.

Customer refunds streamline your refund management process, ensuring that the refunds that you initiate outside of Sage Intacct are accurately documented and the refunded credits are cleared. Eliminate the tedious step of creating balancing adjustments for refunded credits. Instead, record the amount refunded and pay available credits simply by selecting them.

## Key benefits

- **Increased reporting accuracy**: Up-to-date customer balances keep your financial reports on track.
- **Tidier books**: Close out credits easily and effectively, maintaining clean and organized financial records.
- **Easily resolve inactive accounts**: Efficiently refund and zero out accounts for customers who have credit balances with no planned future invoices.
- **Refund audit trail**: Provide a clear audit trail for all refunds, enhancing transparency and accountability.

## How it works

### Recording customer refunds

On the new Customer refunds page, record a refund using the record transfer payment method. Enter the amount you refunded and match it to the customer's available credits. Select from the customer's available advances, adjustments, overpayments, or negative invoices, applying amounts partially or in full.

Upon posting, Sage Intacct automatically clears the selected credits, keeping the customer account up to date.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ar-customer-refunds-create-callouts-us.png)

[Customer refund descriptions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-customer-refunds-ga.htm#)

1. Select the **Customer** to view credits available to refund.
2. Select a **Credit currency** to show credits with the same transaction currency.
3. For customers with many credits available, sort and filter columns to find the credits you want to refund.
4. Available credits show customer advances, adjustments, overpayments, or negative invoices that have a remaining balance.

   For each credit, Intacct shows the credit type, transaction amount, and credits available. Drill down into the transaction for more details.

5. You can refund a partial amount by overriding the **Amount to refund** for the selected credit.

### Customer refunds list

Review and manage both draft and posted refunds on the Customer refunds list. Drill down into refund details and from there, drill down into the credits that were refunded.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ar-customer-refunds-list-us.png)

## Good to know

- Customer refunds support the Record transfer payment method only.
- Credits supported include AR adjustments, negative invoices, overpayments, and advances.
- Sorting and filtering options help you find credits quickly and easily.
- You can refund a credit in full or in part.
- Invoices that include positive line items are not available for refund, even if the net amount is negative.
- At this time, only base currency to base currency refunds are supported.
- Customer refunds are supported by CSV import and REST API.

## Set it up

[Step 1: Add a journal and document sequence for refunds](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-customer-refunds-ga.htm#)

- If you do not have a journal for recording customer refunds, create one now.
- Create a numeric document sequence for Sage Intacct to use when generating refund numbers.

[Step 2: Enable customer refunds and assign user permissions](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Receivable/2025-R3-ar-customer-refunds-ga.htm#)

1. Go to **Accounts Receivable** > **Setup** > **Configuration**.
2. In Enable functionality, select **Enable recording of customer refunds**.
3. Under Account Settings, select a journal for **Customer refunds**.

   This option is available only after you select **Enable recording of customer refunds**.

4. Optionally, update the Summary frequency for Customer refunds.
5. In Document sequencing, select the **Customer refunds** dropdown and then select the document sequence you created.
6. Select **Save**.
7. Grant permissions to users.

   As needed, grant **Customer refunds**: **List**, **View**, **Add**, **Post**, and **Void** permissions to users.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                                                                                                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                                    |
| User type             | Enable customer refunds: Business user with admin privileges Record and manage customer refunds: Business                                                                                                                                                                                                                                      |
| Permissions           | Accounts Receivable Customer refunds: List, View, Add, Post, Void                                                                                                                                                                                                                                                                              |
| Configuration         | Enable Customer refunds in Accounts Receivable configuration.                                                                                                                                                                                                                                                                                  |
| CSV import            | Use the Customer refunds CSV template to import refunds of advances, AR adjustments, customer advances, negative invoices, and overpayments To import a refund for a customer advance using CSV, you must have document sequencing for AR advances enabled, and the advance must be created after you assign a document sequence for advances. |
| Restrictions          | Customer refunds are not supported in transactions that use cash basis tax capture.                                                                                                                                                                                                                                                            |
