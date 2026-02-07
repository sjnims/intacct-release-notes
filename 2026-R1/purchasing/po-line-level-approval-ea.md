---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm
release: 2026-R1
extracted: 2026-02-07
title: "Line-level approvals for Purchasing—Early Adopter"
---

# Line-level approvals for Purchasing—Early Adopter

This idea came from you

Gain granular control and faster approvals by letting approvers act at the line level instead of only at the header. This feature ensures that each department, project, or location manager approves only what they own to reduce bottlenecks and improve accuracy.

## Key benefits

- **Granular approvals**: Approvers can approve or decline individual lines or the entire transaction.
- **Dimension‑based routing**: Route lines by Department, Project, or Location for precise accountability.
- **Clear visibility**: See per‑line status, including partial approvals or declines.
- **Flexible policies**: Combine header‑level and line‑level rules to match real workflows.

Enable notifications so approvers can act promptly. You can also delegate approvals for out-of-office scenarios.

## How it works

[Set up line-level approvals](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm#)

1.  Go to **Purchasing** > **Setup** > **Configuration**.
2.  Go to the Approvals section and make sure **Enable purchasing approval** is selected.
3.  To create an Approval policy, select **Manage**.
4.  Either create a new approval policy or edit an existing one.
5.  Select the Purchasing Transaction definition.
6.  For Rule type, select one of the following options:
    1.  Line level approval by Department
    2.  Line level approval by Location
    3.  Line level approval by Project

7.  Select **Save**.
8.  Check that **Show approvers only relevant transactions** is enabled by default.
9.  Select **Save**.

[Approve a line item](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Purchasing/2026-R1-po-line-level-approval-ea.htm#)

If your company uses both header-level and line-level approvals, approve transactions and line items in the transaction record.

You can approve transactions in the transactions list only when line-level approvals are not enabled.

1.  Go to **Purchasing** > **All** > **Approve transactions**.
2.  Select **View** next to the transaction that you want to approve.
3.  In the Entries section, select the line items to approve or decline.

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

To be considered for the Early Adopter program, [complete this form](https://forms.office.com/Pages/ResponsePage.aspx?id=fN0yPvZBLUmho8WOsCz0-O3IwUEQX1ZKkbGGjnbGoVpUOURDQzBCR0xIOUlWVElXN0ZZNE8yVTQ4Si4u) today.

## Permissions and other requirements

| Subscription                       | Purchasing                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability              | All regions                                                                                                                                                                                                                                            |
| User type                          | Business user with admin privileges Employee Project Manager                                                                                                                                                                                           |
| Permissions                        | To enable line-level approvals for purchasing Administration, Purchasing Application Subscriptions: List, View, and Configure. To approve line-level items Purchasing Approve purchase transaction: List Purchasing approval levels: Applicable levels |
| Configuration                      | Enable Purchasing approvals on the Configure Purchasing page.                                                                                                                                                                                          |
| Dependencies or other requirements | In Purchasing, enable these dimensions and assign a manager to each: Department Location Project                                                                                                                                                       |
| Restrictions                       | If your company uses both header-level and line-level approvals, approve transactions and line items in the transaction record, not in the Approve transactions list.                                                                                  |
