---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Payable/2025-R3-ap-approval-delegation.htm
release: 2025-R3
extracted: 2026-02-07
title: "Delegate bill approvals when an approver is out of office"
---

# Delegate bill approvals when an approver is out of office

[Set up approval delegation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_bill_approval_delegation)

[Delegate your approval responsibilities](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delegate_your_bill_approvals)

Accounts Payable

This idea came from you

You can now maintain uninterrupted bill approvals when an approver is unavailable with approval delegation. Whether due to vacation, leave, or other absences, bill approval delegation ensures that bills continue to move through the approval workflow without delay.

## Key benefits

-   Maintains seamless bill approval workflows during the planned or unplanned absence of an approver.
-   Eliminates delays and the need for manual intervention in the approval process.
-   Allows delegation to both individuals and user groups, for flexible coverage.
-   Supports compliance and accountability with audit trails and delegation logs.
-   Provides visibility into delegation activity through custom reporting tools.
-   Allows configuration through both the user interface and the API.

## How it works

An administrator enables delegation and selects delegates in the Bill approval settings section of Configure Accounts Payable.

When an individual approver is going to be out of office, the approver turns on delegation in their preferences and specifies the time period when they’ll be away.

During the out-of-office time period, new bill submissions are routed to the delegate for review. The delegation ends automatically when the out-of-office period expires. After that point, newly submitted bills are routed to the original approver.

## Good to know

-   To act as a delegate, a user or all members of a user group must have the Approve bills: List permission.
-   Delegation settings and changes are tracked in the audit log for transparency.
-   Delegation is not currently supported for value-based approvers.
-   A vendor\-based approval that's assigned to a user group cannot be delegated.
-   If a delegate is also out of office, Intacct attempts rerouting up to three times before returning the request to the original approver.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Accounts_Payable/2025-R3-ap-approval-delegation.htm#)

To request a follow-up on 2025 Release 3 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Setup:                                                                                                                                                                                                               Business user with admin privileges                                                                                                                                                                                                       Activate delegation for an out of office time period:                                                                                                                                                                                                               Employee                                                                                                                                                                                                                   Business                                                                                                                                                                                                                   Project Manager                                                                                                                                                                                                                   Warehouse |
| Permissions | Accounts Payable                                                                                                                                                                                                               Approve bills: List |
