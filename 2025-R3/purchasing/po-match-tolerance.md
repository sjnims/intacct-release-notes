---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-PO-Match-tolerance.htm
release: 2025-R3
extracted: 2026-02-07
title: "Gain clear visibility into match tolerance exceptions"
---

# Gain clear visibility into match tolerance exceptions

[Match tolerances overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Match_tolerances_overview)

[View transaction match tolerance exceptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=View_transactions_w_match_tolerance_exceptions)

[Resolve match tolerance exceptions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Resolve_match_tolerance_exceptions)

Purchasing

This idea came from you

In 2023 R3 we enabled match tolerance exception tracking on draft documents. You can now view a more complete history of tolerance exceptions, ensuring that you can more accurately track and resolve mismatches.

![Exceptions summary window](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-PO-MatchTolerance.png)

## What's match tolerance?

Match tolerance is a configurable control mechanism that compares purchase order details—quantity and price—to identify any discrepancies and ensure transactions fall within acceptable limits.

You can configure Purchasing to compare ordered quantities and unit prices to a specific percent tolerance. The comparison occurs when you convert from one purchase transaction to the next. If the quantity or unit price in any line item is not within the tolerance percent limit you set, Sage Intacct flags the converted to transaction as an exception. This ensures you can review and decide whether to allow the exception prior to issuing a payment of a vendor invoice.

## Key benefits

Greater visibility into when exceptions occur within a workflow helps you with the following:

-   Make sure reimbursements line up with what was approved.
    
-   Provide Accounts Payable or other departments in charge of finances better control of company spending.
    
-   Identify mistakes on receipts and vendor invoices that can be a sign of a broader business issue, and might indicate that it’s time to consider other vendors.
    

## How it works

Viewing exception history can help you decide how to handle variances in quantities or prices before posting transactions.

1.  Enable match tolerances in Purchasing.
    
2.  Configure the transaction definitions that you want to validate, with a quantity and/or price tolerance percentage.
    
3.  When a new draft transaction is created and the quantity or price differs from the source transaction, select View exceptions.
    
4.  You can choose whether to adjust, accept, or override the exceptions.
    

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Purchasing/2025-R3-PO-Match-tolerance.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Purchasing |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Purchasing transactions: List, Edit, Override exceptions |
| Configuration | Enable match tolerances is selected in Purchasing configuration |
| Dependencies or other requirements | Smart Events that are configured to update Purchasing transaction documents might impact your activity with match tolerances. |
| Restrictions | Overriding transaction exceptions is not supported through API or CSV update. |
