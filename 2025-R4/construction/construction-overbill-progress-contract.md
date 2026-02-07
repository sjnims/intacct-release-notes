---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Construction/2025-R4-construction-overbill-progress-contract.htm
release: 2025-R4
extracted: 2026-02-07
title: "Allow excess billing on progress-based contract lines"
---

# Allow excess billing on progress-based contract lines

[Set up progress billing for fixed price Construction project contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Setup_progress_billing_fixed_price_constr_project_contracts)

construction

You can now set progress-based project contract lines to an unrestricted billing amount instead of using Change management or revising contract line amounts manually.

## How it works

On the **Project contract line** page for a progress-based line, set the **Maximum billing** field to **No maximum**. This allows an unrestricted billing amount for that project contract line.

![Project contract line page showing Maximum billing options](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-const-maximum-billing-setting.png)

## Good to know

- Previously, you could set a maximum billing amount only for **Time and material** billing types. The options for the **Maximum billing** field are the same for progress-based billing and time and material billing:
  - **Total revised price** (default): Automatically updates the total revised price for a project contract line to reflect linked change requests. The total revised price is the sum of the original, revision, and approved change amounts.
  - **Specified amount**: Allows you to enter a maximum billing amount for a project contract line.
  - **No maximum**: If a project contract does not stipulate a maximum price, this option allows an unrestricted billing amount on the associated project contract line.

- When generating project invoices (**Projects** > **Invoices** > **Generate invoices**), the **Maximum billing amount** column displays on the project contract line grid by default. If you have set this field to **No maximum**, the grid shows two dashes (--) for the **Maximum billing amount**.

## Permissions and other requirements

| Subscription          | Construction Projects configured for Projects costing and billing                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                             |
| User type             | Business Construction Manager Project Manager                                                                                                                             |
| Permissions           | Projects, Project contracts List: enables visibility to project contracts View, add, edit, and delete: controls who can view, create, update, or delete project contracts |
