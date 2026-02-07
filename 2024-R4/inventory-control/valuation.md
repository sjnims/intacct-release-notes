---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Inventory_Control/2024-R4-valuation.htm
release: 2024-R4
extracted: 2026-02-07
title: "Improved entity-level inventory valuation reporting"
---

# Improved entity-level inventory valuation reporting

Reporting on inter-entity transactions can be challenging when your company completes transactions in different currencies at different locations. Now, if transactions in the same currency are completed at locations other than the selected inventory valuation report location, the report summary will only include location-specific transactions.

## What changed?

Generating the Inventory valuation report from top level previously included all same-currency location details in the summary, but not the detail section. This allowed you to review both overall and location-specific detail.

With the 2024 R4 release, when you generate a top-level valuation report, the summary and detail sections now report on the same values. When you generate entity-level valuation reports for companies using more than one currency, the report detail and summary sections only include transactions specific to the selected location.

## How it works

1.  Select the entity that you want to report on.
2.  Go to **Inventory Control** > **All** \> **Reports** > **Inventory** > **Valuation**.
3.  Choose from a variety of filters to view amounts associated with items in your company's inventory.
4.  Select **View**.

## Permissions and other requirements

| Subscription          | Inventory Control                                          |
| --------------------- | ---------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States |
| User type             | Business Employee Warehouse                                |
| Permissions           | Inventory Control Reports: Run                             |
