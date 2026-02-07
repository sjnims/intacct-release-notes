---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Cash_Management/2025-R2-cm-reclass-credit-card-txn.htm
release: 2025-R2
extracted: 2026-02-07
title: "Reclassify GL account for credit card transactions and edit non-financial information"
---

# Reclassify GL account for credit card transactions and edit non-financial information

[Reclassify credit card transactions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reclassify_credit_card_transactions)

[Reclassifying transactions in Sage Intacct](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reclassifying_transactions)

cash management

Reclassify the GL account for credit card transactions that are reconciled or are in a Paid or Partially paid state, as long as the period is open. And, you can now edit non-financial information in Paid credit card transactions.

## Details

Reclassify top-level transactions from the top level and entity-level transactions from within the entity. However, you cannot reclassify across entities. In a multi-entity, multi-currency company, always reclassify transactions at the entity level.

Credit card transactions need to originate from Cash Management to be eligible for reclassification. The following scenarios are not available to reclassify:

- The transaction originates from paying a bill in Accounts Payable.
- The transaction is associated with an employee expense report.

For Paid credit card transactions, you can edit the Reference number, Payee, Description, Attachment, and line item Memo fields.

## How it works

### Step 1: Enable reclassification

1.  Go to **Cash Management** > **Setup** > **Configuration**.
2.  Select **Enable reclassification for credit card transactions**.
3.  Select **Save**.

### Step 2: Grant permissions

1.  Go to **Company** > **Admin** > **Users, roles & groups** then select **Users**.
2.  Find the user and select **Subscriptions**.
3.  Find Cash Management and select **Permissions**.
4.  For Credit card transactions, enable **Reclass**.
5.  Select **Save**.
6.  Select **Save** again.

### Step 3: Reclassify transactions

1.  Go to **Cash Management** > **All** > **Transactions** > **Credit card transactions**.
2.  Select **Edit**.
3.  Select **Reclassify**.
4.  Select **Save**.

## Permissions and other requirements

| Subscription          | Cash Management                                                                |
| --------------------- | ------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                    |
| User type             | Business                                                                       |
| Permissions           | Cash Management Credit card accounts: List, Edit, View, Reclassify             |
| Configuration         | Enable reclassification for credit card transactions in Cash Management        |
| Restrictions          | Currently, you can only reclassify the GL account on credit card transactions. |
