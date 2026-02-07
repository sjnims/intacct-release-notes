---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Contracts/2025-R4-historical-contracts.htm
release: 2025-R4
extracted: 2026-02-07
title: "Introducing historical contracts for faster onboarding"
---

# Introducing historical contracts for faster onboarding

[About historical contracts](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_historical_contracts)

Contracts

With historical contracts, you can quickly add or import contract lines with historical balances, helping you align your financials and accelerate your go-live process. Instead of recreating all past transactions, simply provide the total billed and recognized amounts as of a specific date, and Intacct automatically records the historical balances to the General Ledger. This enhancement reduces manual effort, improves accuracy, and speeds up implementation.

![Historical details section of a contract line](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-cn-historical-details.png)

## Key benefits

- **Accelerate onboarding:** Set up contracts using open balances instead of detailed legacy data, minimizing data entry and speeding up implementation.
- **Improve financial accuracy:** Automated journal entries align the General Ledger and subledger from day one.
- **Streamline data import:** Import historical contract lines via CSV with validations to ensure data integrity.
- **Support business growth:** Easily migrate historical data from mergers and acquisitions into Intacct.

## What's changed

Previously, going live with Contracts required detailed historical data entry using Active Contract Processing (ACP), which was time-consuming. Now, you can mark contract lines as historical and enter only open balances, reducing manual work.

The following new fields are available on contract lines:

- **Historical:** Indicates whether a contract line is historical.
- **Historical billed:** The total billed amount as of the historical date (cannot exceed the flat fixed amount).
- **Historical recognized:** The total recognized revenue as of the historical date (cannot exceed the flat fixed amount).
- **Historical as of date:** Represents the day before go live, separating historical and non-historical data.
- **Historical offset GL account:** Dedicated account used to post historical contract balances.

After non-historical data is posted, the historical details can no longer be edited.

## Good to know

- Journal entries for historical amounts appear in the contract line’s Transaction history tab and are marked as historical.
- Entries in the billing and revenue schedules prior to the historical as of date are also marked as historical.
- Historical billed and recognized amounts appear in the contract line summary bar, and the historical offset GL account appears in the Accounts and journals tab.

## How it works

1. Determine scope and go-live date.

    Decide your go-live date and identify historical GL balances.

2. Prepare your environment.

    Create a dedicated Historical offset GL account for tracking historical postings.

3. Add historical contract lines.

    Import or manually create contract lines with all required historical detail fields.

4. Validate your data.

    Close AR and GL books through the go-live date to prevent changes, and verify that historical amounts align with subledger and GL balances.

## Permissions and other requirements

| Subscription          | Contracts                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                                                                                                                                                                                      |
| User type             | Business Employee Project Manager Warehouse                                                                                                                                                                                                                                                                                                                                                     |
| Permissions           | Contracts Contract: List, View, Add, Edit, Post, Historical                                                                                                                                                                                                                                                                                                                                     |
| Configuration         | If you've used ACP previously and want to start using historical contracts, posting dates must be after the go-live date and the entity must be locked in Process contract schedules configuration. After a historical contract line is created, ACP can no longer be used.                                                                                                                     |
| CSV import            | The following fields are available in the contract lines import template: HISTORICAL_CONTRACT HISTORICAL_BILLED HISTORICAL_RECOGNIZED HISTORICAL_AS_OF_DATE HISTORICAL_OFFSET_GL_ACCOUNT                                                                                                                                                                                                        |
| Restrictions          | Historical contract lines are not supported in the following scenarios: Kit items Expenses Billing methods: Quantity based, Project time, Project materials, Project time and materials Evergreen Project-based and task-based billing and revenue templates Recognize on invoice revenue template MEA allocations Reallocation If you need to handle any of these scenarios, you must use ACP. |
