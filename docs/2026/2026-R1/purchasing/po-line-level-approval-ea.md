---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm
release: 2026-R1
extracted: 2026-11-13
title: "Line-level approvals for Purchasing"
---

# Line-level approvals for Purchasing

[About line-level approvals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_line_level_approvals)

[Set up line-level approvals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Set_up_line_level_approvals)

[Approve line level items](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Approve_line_level_items)

Purchasing

This idea came from you

Gain granular control and faster approvals by letting approvers act at the line level instead of only at the header. This feature ensures that each department, project, or location manager approves only what they own to reduce bottlenecks and improve accuracy.

As of April 10, 2026, this Early Adopter program is closed. Look forward to more information about this upcoming feature in future release notes.

## Key benefits

- **Granular approvals**: Approvers can approve or decline individual lines or the entire transaction.

- **Dimension‑based routing**: Route lines by Department, Project, or Location for precise accountability.

- **Clear visibility**: See per‑line status, including partial approvals or declines.

- **Flexible policies**: Combine header‑level and line‑level rules to match real workflows.

Enable notifications so approvers can act promptly. You can also delegate approvals for out-of-office scenarios.

## How it works

How you configure your approval policy matters. Approval rules are evaluated sequentially, one at a time, based on the order in which they appear in the policy.

Line‑level approval rules and value‑based approval rules do not work together as a combined rule. Each rule is applied independently to the transaction, and the current rule must be fully approved before the next rule is evaluated.

Example

Your approval policy includes:

- A line‑level approval rule that routes each line to the department manager

- A value‑based approval rule that requires approval when the total amount exceeds $100

If you create a purchase order for $150, it's first routed to the department manager for each line, based on the line‑level approval rule. After all line‑level approvals are completed, the purchase order is then routed to the value approver, based on the value approval rule.

The rules are processed in sequence. Configuring both rule types does not create a single, combined approval condition.

[Set up line-level approvals](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm#)

1.  Go to **Purchasing** > **Setup** > **Configuration**.

2.  Go to the Approvals section and make sure that Enable purchasing approval is selected.

3.  To create an Approval policy, select **Manage**.

4.  Either create a new approval policy or edit an existing one.

5.  Select the Purchasing transaction definition.

6.  For Rule type, select one of the following options:

    1.  Line level approval by Department

    2.  Line level approval by Location

    3.  Line level approval by Project

7.  Select **Save**.

8.  Close out of the Purchasing approval policies window.

9.  Select **Save** on the Configure Purchasing page.

[Approve a line item](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm#)

If your company uses both header-level and line-level approvals, approve transactions and line items in the transaction record.

You can approve transactions in the transactions list only when line-level approvals are not enabled.

1.  Go to **Purchasing** > **All** > **Approve transactions**.

2.  Select **View** next to the transaction that you want to approve.

3.  In the Entries section, select the line items to approve or decline.

## Join the Early Adopter program

As of April 10, 2026, this program is closed. Look forward to more information about this upcoming feature in future release notes.

## Permissions and other requirements

| Subscription                       | Purchasing                                                                                                                                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                                                                                                                                                                          |
| User type                          | Business user with admin privileges Employee Project Manager                                                                                                                                                                                         |
| Permissions                        | To enable line-level approvals for purchasingAdministration, Purchasing Application Subscriptions: List, View, and Configure. To approve line-level itemsPurchasing Approve purchase transaction: List Purchasing approval levels: Applicable levels |
| Configuration                      | Enable Purchasing approvals on the Configure Purchasing page.                                                                                                                                                                                        |
| Dependencies or other requirements | In Purchasing, enable these dimensions and assign a manager to each: Department Location Project                                                                                                                                                     |
| Restrictions                       | If your company uses both header-level and line-level approvals, approve transactions and line items in the transaction record, not in the Approve transactions list.                                                                                |
