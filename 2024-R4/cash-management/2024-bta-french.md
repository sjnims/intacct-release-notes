---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Cash_Management/2024-bta-french.htm
release: 2024-R4
extracted: 2026-02-07
title: "Bank transaction assistant now available in France"
---

# Bank transaction assistant now available in France

[Process customer payments using Bank transaction assistant](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Receive_bulk_payments_bank_txns)

cash management

If your company is doing business in France and using the TVA Française standard tax solution, you can now use Bank transaction assistant.

## Details

Streamline your Accounts Receivable receive payments workflow while accelerating your reconciliation process with the Bank transaction assistant workflow.

Easily and quickly assign customers to bank transactions and then receive multiple payments for multiple customers, all from the Bank transactions list. After you receive payments, the posted payments in Sage Intacct and the bank transactions automatically match for reconciliation.

For multi-entity, multi-currency companies, receive advances and payments at the entity level.

Use this feature with our new [Bank transaction assistant file import](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Import_bank_transactions) experience. Imported transactions appear on the Bank transaction list.

[![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R3-images/2023-R3-cm-customers-and-payments_thumb_0_48.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R3-images/2023-R3-cm-customers-and-payments.png)

## How it works

### Step 1: Assign customers to bank transactions

To receive a payment, first assign a customer to bank transactions. Automate this process by creating an assignment rule.

[Set up assignment rules](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Cash_Management/2024-bta-french.htm#)

Use information from the bank transaction description to create an assignment rule that automatically assigns customers to bank transactions. For example, you might want all bank transactions with a description of "ABC" to be assigned to customer "ABC, inc."

Assignment rules run when the following events happen:

- A bank feed brings in new bank transactions.
- You import bank transactions using the Bank transaction assistant file import experience.
- You save the rule.

Assignment rules are similar to matching and creation rules in that you need to filter for the transactions you want to act on, but assignment rules are not included in rule sets. Just associate the assignment rule with the bank account of your choice.

![A screenshot of an assignment rule with three numbers calling out different features of the rule.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R3-images/2023-R3-assignment-rule.png)

1. Select the **Customer** and **Bank account**.
2. The data source, field, operator, and value default for you on the first line.

   This filter targets only bank transactions with a transaction type of Credit.

   The data source, field, and operator default for you on the second line. This filter targets bank transactions that contain a description of your choice, which you enter in the Value column.

3. When you have your filters in place, select **Preview** to check the accuracy of your assignment rule.

[Manually assign customers](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Cash_Management/2024-bta-french.htm#)

You can also assign customers to bank transactions manually from the Bank transaction page.

1. Go to **Cash Management > **All** > Transactions > Bank transactions**.
2. From the **View** menu, select **Cash in**.

   The Bank transactions list refreshes with payment transactions.

3. Select transactions that do not have a customer and choose **Assign to customer**.

   The Assign transactions to customers page appears.

4. For each transaction, select a **Customer**.

   Create an assignment rule when you are manually assigning customers by entering an **Assignment mapping value**. For example, if you have a customer, ACME customer, you can enter identifying data from the bank transaction description here. The rule is automatically created when you **Save**. Learn more [about assignment rules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_assignment_rules).

5. Select **Save**.

### Step 2: Receive payments in bulk

When a bank transaction has a customer assigned, you can receive a payment or create an advance. You can also receive payments in bulk. If there's no invoice for the customer, you can create an advance using the new AR advances template.

You need the Cash Management permission to **Receive payments from bank transactions**.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2023/2023-R3-images/2023-R3-receive-a-payment.png)

1. Select the **Cash in** view to view only unmatched bank credits.
2. Select transactions that are assigned to a customer and select **Receive payments**.
3. The **Payment application** will vary depending on your business needs.

   For example, you might want to target oldest invoices first and then search for more recent invoices. Or, you might want to match by amount.

4. You can **Create advances for transactions with no invoice**.

   You might want to do this after you already previewed results and found no available invoices for which to receive a payment.

   To create an advance, select or create an **Advance template**.

   [What's an Advance template?](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Cash_Management/2024-bta-french.htm#)

   Advance templates enable you to quickly create advances based off bank data during the receive payment workflow. However, unlike the other reconciliation transaction templates, advance templates are only used in this workflow and cannot be used in creation rules.

5. Select **Preview payment application** to preview whether there are invoices available to match to the bank payment.
6. If there are invoices available, they appear in the table.
7. Select **Post** to create a posted payment and match transactions for reconciliation.

## Requirements

| Subscription          | Cash Management Accounts Receivable                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France Australia Canada South Africa United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| User type             | Business user with admin permissions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Permissions           | Cash Management To assign a customer to a bank transaction Bank Transactions: List, View To create an assignment rule Bank transaction assignment rules: List, View, Add To receive a payment for a bank transaction Receive payment from bank transaction: Add                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Restrictions          | Not available for the following use cases: If the bank transaction currency does not match the currency of the invoice. If invoices have a terms discount assigned. If the invoice has a negative line item that is not applied, unless configured in Accounts Receivable to apply negative lines automatically. If Accounts Receivable payment and advance summary frequencies are set to user-specified. In a multi-entity, multi-currency company: You can only receive a payment at the top level if all of the following currencies match: the currency of the bank account, the currency of the owning entity of the bank account, the currency of the owning entity of the customer record, and the invoice currency. Within an entity, the bank transaction currency must match the currency of the invoice to receive a payment. Credits and negative invoices are not applied during the payment application process. |
