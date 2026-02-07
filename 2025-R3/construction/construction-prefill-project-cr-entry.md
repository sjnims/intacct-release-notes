---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-prefill-project-cr-entry.htm
release: 2025-R3
extracted: 2026-02-07
title: "Prefill project on change request entry"
---

# Prefill project on change request entry

[Add a change request](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_change_request)

construction

This idea came from you

Save time creating change request line item entries. Now, the Project field in the Entries section auto-populates with the Project defined in the header of change requests created after this release. You can override this value if you need to and change it to any of the subprojects associated with the project defined in the header.

![""](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Snippets/2025-R3-snippets/2025-R3-change-request-grid2.png)

## How it works

1. Go to **Projects** \> **All** \> **Change management** > select the Add (circle) next to **Change requests**.
2. Select the project in **Project ID**.

    The Project column in the Entries section populates with the name of the project.

3. In the Entries section, enter one of the following fields to save the change request line entry:
    - A non-zero cost in the Cost column.
    - A non-zero price in the Price column.
    - A non-zero production unit price in the Unit price column.
    - An entry in the Memo field.

4. Select **Draft** or **Post**.

## Good to know

Fields only auto-populate when you create a change request. When you edit a change request, only the existing lines appear.

When you create a new change request, to save change request line entries, make sure at least one of the following is present:

- A non-zero cost in the Cost column.
- A non-zero price in the Price column.
- A non-zero production unit price in the Unit price column.
- An entry in the Memo field.

If you're editing an existing change request, you can save change request entry lines with a zero value in the Cost, Price, and Unit price columns and a blank Memo field.

## Permissions and other requirements

| Subscription          | Construction Projects configured for Project costing and billing |
| --------------------- | ---------------------------------------------------------------- |
| Regional availability | Australia Canada United States United Kingdom                    |
| User type             | Business Project Manager                                         |
| Permissions           | Projects Change requests: List, Add, Edit                        |
