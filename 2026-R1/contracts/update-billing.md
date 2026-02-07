---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Contracts/2026-R1-update-billing.htm
release: 2026-R1
extracted: 2026-02-07
title: "Automate renewal pricing updates"
---

# Automate renewal pricing updates

Many businesses adjust contract billing based on Consumer Price Index (CPI) changes, and doing this manually across large volumes of contracts can be time‑consuming and inconsistent. With this release, we're giving you the tools to automate those pricing updates by introducing new CSV import and API options, so you can work more efficiently and keep renewal pricing aligned with CPI.

## Key benefits

- **Integrate seamlessly:** Use CSV import or APIs to connect external pricing or CPI systems directly to your renewal workflows.
- **Save time:** Automate CPI‑based pricing updates instead of updating templates and contract lines manually.
- **Improve accuracy:** Apply consistent, CPI‑aligned renewal pricing across all contracts with fewer mistakes.

## What's changed

Previously, you could update pricing fields for renewal and evergreen templates only in the UI, and you could update custom renewal amounts only in the UI or through CSV import. Now, we’ve made the following tools available to help you manage renewal pricing updates more efficiently:

- **CSV import for renewal and evergreen templates**

  CSV import is available for both renewal and evergreen templates, making it easier to manage updates in bulk for spreadsheet‑based workflows. Import templates are also available for download.

- **API for renewal and evergreen templates**

  APIs are available to read, create, and update renewal and evergreen templates, allowing external systems to automatically apply CPI‑based pricing updates before renewal generation.

- **API for custom renewal amounts**

  APIs are available to read, create, and update custom renewal amounts on contract lines, allowing external systems to set or adjust renewal pricing for specific lines when the standard renewal template pricing does not apply.

Updates only impact future renewals, not existing contract lines.

## How it works

To import from the Company setup checklist:

1. Go to **Company** > **Setup** > **Configuration** > **Import data**.
2. Find **Evergreen template** or **Renewal template** in the list.
3. Select **Import**.

To import from list views:

1. Go to **Contracts** > **Setup** > **Templates** and select **Evergreen** or **Renewal**.
2. Select **Import**.

## Permissions and other requirements

| Subscription          | Contracts Company                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                         |
| User type             | Business                                                                                                                           |
| Permissions           | Contracts Evergreen templates: List, View, Add, Edit Renewal templates: List, View, Add, Edit Company Company setup checklist: Run |
| CSV import            | Renewal and evergreen templates are now supported for CSV imports.                                                                 |
