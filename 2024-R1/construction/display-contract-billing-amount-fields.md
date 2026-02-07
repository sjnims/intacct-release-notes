---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-display-contract-billing-amount-fields.htm
release: 2024-R1
extracted: 2026-02-07
title: "New option to display all project contract billing amount fields"
---

# New option to display all project contract billing amount fields

Previously, Sage Intacct displayed summary project contract billing fields on project contract invoices. This release, Intacct has hidden those additional fields. [You can now find project contract billing information in the new Project contract billing details tab on invoices](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-pcb-tab-ar-invoices.htm).

If you still want to see the original fields on project contract invoices, you can enable the **Display original project contract billing amount fields** option.

![You can select the Display original project contract billing amount fields checkbox.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-display-contract-billing-amount-fields_517x384.png)

## Details

When you enable the **Display original project contract billing amount fields** option, you will see the following fields on project contract invoices:

- Billing summary fields in the Project contract section.
- Project change order summary fields in the Project contract section.
- Additional fields in the Entries section.

## How it works

To select the **Display original project contract billing amount fields** checkbox, you must also select the **Enable project contract billing** checkbox.

1.  Go to **Order Entry** > **Setup tab** > **More** > and select **Transaction definitions**.
2.  Find a transaction definition for Project contract invoices and select **Edit**.
3.  On the General tab, scroll to the Accounting section.
4.  Below Multi-currency, select the **Enable project contract billing** checkbox.
5.  Select the **Display original project billing amount fields** checkbox.
6.  Select **Save**.

## Requirements

| Subscription          | Order Entry Projects Construction                                  |
| --------------------- | ------------------------------------------------------------------ |
| Regional availability | Australia Canada United States                                     |
| User type             | Business user Project manager                                      |
| Permissions           | Order Entry transaction definitions: List, View, Add, Edit, Delete |
