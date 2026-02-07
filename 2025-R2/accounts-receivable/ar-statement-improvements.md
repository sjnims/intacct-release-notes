---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Receivable/2025-R2-ar-statement-improvements.htm
release: 2025-R2
extracted: 2026-02-07
title: "External credits included in entity-level AR statements"
---

# External credits included in entity-level AR statements

[Accounts Receivable statements](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ar_statements)

Accounts Receivable

Align entity-level AR statement balances with your AR Ledger and AR Aging reports by showing credits that you applied from other entities.

## Details

When you select **Show external credits** in AR statement filters, Sage Intacct includes any adjustments and negative invoices owned by other entities that were applied during the selected period.

![AR statement with payment of 200.00 that reads External credit applied from E300 CM-0018-AR to 210 INV0291](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ar-statement-ext-credits.png)

Adjustments and negative invoices appear on the statement using the following format:

- External credit applied from <entity ID> <adjustment or negative invoice number> to <location ID> <invoice number>

Previously, all external credits applied to transactions in the entity showed in the reports but only advances and overpayments showed in AR statements run at the entity level.

The Show external credits option appears in on the Print or email statements page at the entity level.

## How it works

1. In the entity where you want to generate the statement, go to **Accounts Receivable** > **All** > **Invoices** > **Print or email** > **Statements**.
2. Set your Delivery options.
3. Select a time period.
4. In Filters, select **Show external credits**.

   This option appears at the entity level, only.

   ![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-ar-statement-improvements-option-us.png)

5. Select any additional filters needed, such as the **Statement type**, **Customer**, and options of what to show in the statement.
6. Select format options.
7. Select **View**.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                |
| --------------------- | -------------------------------------------------- |
| Regional availability | All regions                                        |
| User type             | Business                                           |
| Permissions           | Accounts Receivable Print or email statements: Run |
