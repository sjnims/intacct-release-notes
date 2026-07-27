---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-ap-customer-refunds.htm
release: 2026-R3
extracted: 2026-07-27
title: "Streamline customer refund processing in Accounts Payable"
---

# Streamline customer refund processing in Accounts Payable

[Customer refunds overview](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_of_customer_refunds)

[About bill approvals](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_about_bill_approvals)

[About vendor approvals](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_vendor_approvals)

accounts payable

Vendors and bills created from customer refunds can now follow standard Accounts Payable vendor and bill approval workflows. You can also more easily identify and process customer refund payments using new filtering and visibility options in Pay bills.

If approval review is not required, you can configure customer refund vendors and bills to skip approvals.

## Key benefits

- **Apply approval controls**: Include customer refund vendors and bills in standard approval workflows.

- **Reduce unnecessary approval steps**: Allow vendors and bills related to customer refunds to skip approvals when review is not required.

- **Identify customer refund transactions more easily**: Filter and sort customer refund bills and payments on the Pay bills and Print checks pages to streamline payment processing.

![The Pay bills page with the new filter for Document source with Customer refunds selected.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-ap-pay-bills-document-source.png)

## Good to know

### Approvals

- You can configure customer refund vendors and bills to bypass vendor and bill approval workflows.

- Payment approvals still apply and cannot be bypassed.

### Processing

- Customer refund vendors and bills continue to follow standard Accounts Payable validation and payment processing requirements.

- Bills generated from customer refunds cannot be recalled or edited in ways that change financial values after processing.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions, excluding France                                                                                                                                                                                                                      |
| User type             | Set up bill and vendor approvals Business user with admin privileges Create and process bills created from customer refunds Business Employee                                                                                                      |
| Permissions           | Set up bill and vendor approvals Administration Application subscriptions: List, View Process bills created from customer refunds Accounts Payable Pay bills: Run                                                                                  |
| Configuration         | To skip approvals for vendors and bills created from customer refunds, enable the following options in Accounts Payable: Skip bill approval for bills created from customer refunds Skip vendor approval for vendors created from customer refunds |
| Restrictions          | Customer refunds are not supported in transactions that use cash basis tax capture.                                                                                                                                                                |
