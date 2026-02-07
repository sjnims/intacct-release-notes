---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-improved-calculations-to-month-field.htm
release: 2024-R1
extracted: 2026-02-07
title: "Improved calculations for the Total changes approved this month"
---

# Improved calculations for the Total changes approved this month

Sage Intacct has improved the calculations that determine the **Total changes approved this month** field to more accurately reflect approved changes based on the set billing date.

## Details

When your contract invoice has a set **Billing through date**, now the calculation for total changes approved this month includes the approved changes that fall before and through the set billing date. Previously, the calculation included changes for the entire month. This improved calculation more accurately reports the total changes approved based on the billing date set on the invoice.

For example, you have a project contract with a **Billing through date** set to June 15. You posted changes to the project contract invoice for June 14, 15, and 20. The **Total changes approved this month** amount in June includes changes posted for June 14 and 15. The calculation excludes the changes posted on June 20 because they occur after the set billing through date.

## How it works

1. Go to **Order Entry** > **All tab** > **Transactions** > Invoice > **Contract** invoice.
2. Find the Contract invoice and select **Edit**.
3. Under Project change order summary, enter the **Additions** and **Deductions** for **Total changes approved this month**.

   Click out of the field to update the calculations.

4. Select **Post**.

You'll notice that the Total changes approved this month amount only includes changes that fall within the billing through date.

## Requirements

| Subscription          | Order Entry Purchasing Construction                     |
| --------------------- | ------------------------------------------------------- |
| Regional availability | Australia Canada United States                          |
| User type             | Business user Project manager                           |
| Permissions           | Order Entry transactions: List, View, Add, Edit, Delete |
