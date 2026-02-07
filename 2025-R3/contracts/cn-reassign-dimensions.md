---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Contracts/2025-R3-cn-reassign-dimensions.htm
release: 2025-R3
extracted: 2026-02-07
title: "Reassign dimensions on contract lines"
---

# Reassign dimensions on contract lines

[Reassign contract line dimensions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Reassign_contract_line_dimensions)

Contracts

We've added the ability to change dimensions on in-progress contract lines as of a specified date, without affecting past transactions.

This enhancement supports more accurate financial reporting, helps align contract data with evolving business structures, and gives you greater flexibility.

![Page for reassigning contract line dimensions.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-cn-reassign-dimensions.png)

## Key benefits

- **Gain flexibility:** Add new dimensions to contract lines, supporting your evolving business needs.
- **Fix mistakes:** Easily change or remove incorrect dimensions on contract lines without impacting past transactions.
- **Improve reporting accuracy:** Ensure that future transactions reflect the correct dimensions for more reliable reporting insights.
- **Track changes:** All reassignment actions are captured in the audit trail for full transparency.

## What's changed

Previously, after a contract line had posted transactions, its dimensions were locked. This made it difficult to correct mistakes or update dimensions for new reporting needs.

Now, for in-progress contracts with posted transactions, you can modify the following dimensions:

- Class
- Department
- Employee
- Project (if no billed or recognized project-related transactions)
- Task (if no billed or recognized task-related transactions)
- Vendor

When you reassign dimensions, Intacct creates an event to move the entire unbilled balance from the old dimensions to the new dimensions.

## How it works

You can reassign dimensions at the contract level to update multiple lines at once, or at the line level to update a single line.

1. Edit an in-progress contract or contract line with posted transactions.
2. Go to **More actions** > **Reassign dimensions**.
3. Fill out the fields and select **Save**.

## Permissions and other requirements

| Subscription          | Contracts                                                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                                                                            |
| User type             | Business                                                                                                                                                                                                                                                                              |
| Permissions           | Contracts Contract: List, View, Edit, Reassign dimensions                                                                                                                                                                                                                             |
| Restrictions          | Reassigning dimensions is not supported in the following scenarios: Evergreen contract lines Kit or kit component contract lines Contract lines that are part of an MEA allocation Contract lines in the following states: Canceled, Renewed, Not renewed Dimensions are user-defined |
