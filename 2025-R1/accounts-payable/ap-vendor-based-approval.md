---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Accounts_Payable/2025-R1-ap-vendor-based-approval.htm
release: 2025-R1
extracted: 2026-02-07
title: "Introducing vendor-based approval for bill routing"
---

# Introducing vendor-based approval for bill routing

[Vendor\-based Approval](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Vendor_based_approval)

Accounts Payable

Does your organization assign approval responsibilities for bills based on the vendor? If so, you're going to love the new vendor\-based approval rule type for bill approval policies.

When you add the vendor\-based approval rule type to your bill approval policy, you have the option to assign a bill approver to each vendor, in the vendor record. Then, when a bill is submitted, Sage Intacct routes the bill to the assigned approver's queue for review.

If you have both a vendor-based approval and a Value Approval - Transaction department rule type present in your bill approval policy, departmental approval is overridden for bills from vendors who have a bill approver assigned.

## Details

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-ap-vendor-based-rule-us.png)

- Add the Vendor\-based approval rule type to your bill approval policy in Accounts Payable configuration.
- The Bill approver field appears in the vendor record after you add the vendor\-based approval rule type and save your configuration.

  ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-ap-vendor-based-approver.png)

- Assign bill approvers by editing vendor records directly or by updating vendor records using CSV import.
- Any unrestricted business or employee user with Approve bills: List permissions can be selected as a bill approver.
- You can assign a user group as a bill approver provided all members of the group are unrestricted and have the appropriate permissions. Only one user in the group is required to approve a bill.

When multiple rule types are present in your bill approval policy, they execute as follows:

- If your bill approval policy includes multiple rules, rules are executed in the order you list them.
- If a bill is submitted for a vendor that does not have an assigned approver, the bill is automatically approved for that rule and Sage Intacct proceeds to the next approval rule.
- If you have both a Value Approval - Transaction Department rule set and a Vendor\-based Approval rule type present in your bill approval policy, Intacct executes the rules as follows:
  - For bills from vendors with assigned bill approvers, Vendor\-based Approval executes and Value Approval - Transaction Department is bypassed. This allows you to create bills for vendor\-based approval that are allocated across multiple departments.
  - For bills from vendors that do not have assigned bill approvers, Value Approval - Transaction Department executes and Vendor\-based Approval is bypassed.

## How it works

### Step 1. Setup

1. If you’re already using bill approvals, add the vendor\-based approval rule type to your existing bill approval configuration.

    If you are not yet using bill approvals, learn how to enable the option and create your bill approval policy.

2. Grant **Approve** bills**: List** permission to the users who you want to assign as Bill approvers.

### Step 2. Assign bill approvers

1. Go to **Accounts Payable** > **All tab** > Vendors.
2. Select **Edit** next to the vendor you want to update.
3. Select the Additional information tab.
4. In the Bill details section, select a user or user group from the Bill **approver** list.
5. Select **Save** or **Submit**.

    If you have vendor approval enabled, this change takes effect after the vendor update is approved.

### Step 3. Approve bills

The process for the vendor\-based approval rule is similar to that for other bill approval rules.

1. A user submits a bill.
2. Sage Intacct begins executing the bill approval rules you defined in your bill approval policy.
3. When the approval workflow reaches the Vendor\-based approval rule, Sage Intacct checks to see whether a bill approver is assigned to the vendor.
    - If an approver is assigned, the bill is added to the approver's queue.

      Approvers that have notifications configured will receive an email notifying them that the bill is awaiting approval.

    - If no approver is assigned, the bill is auto-approved and the next approval rule is executed.

      If there are no more approval rules, the bill state changes to posted.

4. The approver reviews the bill and either approves or declines it.
    - If the approver declines the bill, the bill state is changed to Declined.
    - If the approver approves the bill, the bill state changes to Posted or Partially approved, depending on whether there are additional rule types after Vendor\-based approval.

      Value Approval - Transaction Department rule types are bypassed for bills from vendors with assigned bill approvers.

5. After all approval rules are complete, submitters who are configured for bill approval notifications are notified if the bill was approved.

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                        |
| User type             | Setup: Business user with admin privileges Approvals: Business Employee                                                                                                                                                            |
| Permissions           | Accounts Payable Approve bills: List Vendors: List, Edit                                                                                                                                                                           |
| CSV import            | Add the Vendor-based approval rule to your Bill approval policy before you download the Vendor import template to assign bill approvers. Users and user groups that you specify in the BILLAPPROVERID column must be unrestricted. |
