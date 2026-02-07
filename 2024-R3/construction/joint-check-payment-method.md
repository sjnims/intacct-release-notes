---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Construction/2024-R3-joint-check-payment-method.htm
release: 2024-R3
extracted: 2026-02-07
title: "Pay your two-party Construction bills with the new joint checks payment method"
---

# Pay your two-party Construction bills with the new joint checks payment method

[Joint Checks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Ab_TOC_JointChecks)

[Joint checks (8:19)](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Construction/2024-R3-joint-check-payment-method.htm#)

Construction

You spoke and we listened!

You can now use the new joint check payment method to pay your downstream two-party Construction vendors.

Construction subscription is needed. Contact your Sage Intacct account manager to enable your Construction subscription. Regional support for Construction is limited to the United States, Canada, and Australia.

## Details

Construction companies can use multiple subcontractors to complete some or all of their project. On occasion, those subcontractors can hire another company to complete their contracted work on a project. To avoid unexpected liens against their project for unpaid secondary and tertiary vendors, companies create joint checks to pay their downstream subcontractors.

With the new joint check payment method, Construction contractors can now create and track joint checks for joint payees on Accounts Payable (AP) bills without using a complicated workaround.

You can now allocate the AP bill to joint payees by selecting the joint payee at the bill level using the Payee details to add the amount. Or, use the Payee line details link on each AP bill entry line to allocate the pay amount for that joint payee.

-   Enable at the top level only when you configure AP (you can turn off at any time).
    
-   Enabling the joint check feature adds joint payee columns to lists and reports.
    
-   You can add one or more joint payees on the bill after you save the bill.
    
-   You cannot delete joint payees from an AP bill after a creating a joint payee payment.
    
-   Each joint payee on the bill must be unique (case and spaces matter!).
    

When using the Joint check payment method:

-   Only AP bills with joint payees display in the Pay bills list.
    
-   Intacct creates only one check per bill per joint payee.
    
-   No merge payments in Outbox are created for joint payees.
    
-   Joint payee does not support credits or discounts.
    

After assigning amounts to joint payees at the line level or the bill level, the amounts are summarized upstream. Editing an upstream amount removes the detail that you entered on the payee line detail or payee details and assigns the pay amount only to the primary vendor.

## Example

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-constr-joint-checks.png)

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-constr-joint-check-payees.png)

## How it works

Enabling Joint checks is easy.

When you configure AP, select the joint check feature for eligible AP bills.

This option only appears if you have a Construction subscription.

1.  Go to **Accounts Payable >** **All** **> Bills**. Edit the AP bill to add joint payees.
2.  Go to **Accounts Payable >** **All** **> Pay Bills.**
3.  Select a joint check **Payment method** to pay Construction bills. If your company has not created any joint checks, you can delete joint payees on the AP bill until you post a check for the joint payee.

The options available to you in the Payment method list are based on your configuration. If your company recently added a new payment method and you do not see it in the list, contact your admin to find out when configuration is complete.

5.  Select the Construction AP bill you want to pay.

You cannot add joint payees on Purchasing documents, such as those documents that convert a Purchasing subcontract or purchase order into a Purchasing invoice.

7.  Use *Payee details* to enter an amount to pay to the joint payee on the bill. Or use **Payee line details to** enter an amount to pay on the line of the bill. After assigning amounts to joint payees at the line level or the bill level, the amounts are summarized upstream. Editing an upstream amount removes the detail that you entered on the payee line detail or payee details and assigns the pay amount only to the primary vendor.

## Permissions and other requirements

| Subscription | Accounts Payable                                                             Construction |
| --- | --- |
| Regional availability | Australia                                                             Canada                                                             United States                                                             United Kingdom (EA) |
| User type | Business |
| Permissions | Bills: Run                                                             Pay bills: Edit |
