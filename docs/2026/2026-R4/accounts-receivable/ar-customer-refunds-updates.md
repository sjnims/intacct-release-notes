---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Receivable/2026-R4-ar-customer-refunds-updates.htm
release: 2026-R4
extracted: 2026-11-13
title: "Updates to Customer refunds"
---

# Updates to Customer refunds

[Void a customer refund](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Void_a_customer_refund)

[View and print customer refunds](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=View_customer_refunds_list)

Accounts Receivable

This release includes the following updates to improve your experience with customer refunds in Accounts Receivable.

These ideas came from you

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Accounts_Receivable/2026-R4-ar-customer-refunds-updates.htm#)

| Subscription          | Accounts Receivable               |
| --------------------- | --------------------------------- |
| Regional availability | All regions                       |
| User type             | Business                          |
| Permissions           | Customer refunds: List, View, Add |

## Void refunds that have a linked bill

When you void refunds created in Accounts Receivable, the linked bill is also reversed if it's in Draft or Posted state. This means that you do not have to make any manual adjustments in Accounts Payable or request additional permissions.

### Good to know

When you void a refund, the linked bill is reversed if it is in **Draft** or **Posted** state, even if you do not have the bill reversal permission.

If the linked bill is going through an approval process, you have to wait until the approval process is complete before you can void the refund that generated it.

When you void a refund, the status of the refund changes to **Voided**, the status of the linked bill changes to **Reversed**, and an entry is added to the audit trail.

## View linked vendors from refund records

When you open a refund record, from the Customer dropdown list select the **View** link to go to the linked vendor, without having to navigate away from the refund.

## Issue customer refunds for VAT/GST/tax-enabled companies

When you issue customer refunds in tax-enabled companies, the related bill is created without tax implications and the customer is refunded the full tax-inclusive credit amount in Accounts Receivable. This applies to adjustments, credit notes, and negative invoices.

### How it works

When you create a customer refund in Accounts Receivable, a linked bill is created in Accounts Payable, with the **Transaction has tax implications** checkbox _not_ selected. That means that when the bill is processed, the full amount of the transaction, including the tax paid, is returned to the customer.
