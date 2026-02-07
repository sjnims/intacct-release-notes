---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Projects_and_Grants/2025-R2-projects-automated-WIP-relief.htm
release: 2025-R2
extracted: 2026-02-07
title: "Introducing automated WIP relief for WIP asset balances"
---

# Introducing automated WIP relief for WIP asset balances

[Manage Work in progress (WIP) projects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=wip_reports)

[Set up work in progress (WIP) management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=set_up_wip_reporting)

[Training: Construction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=On_demand_training_co)

projects AND GRANTS

Automatically move WIP balances to cost of sales, expense, or asset accounts. Facilitate easy matching of revenues and expenses via automated movement to cost of goods sold, expense, or asset account types. This enhancement is designed to streamline your accounting processes and improve the accuracy of your financial reporting for long-running projects.

Automated WIP relief ensures that assets are booked to WIP accounts, then automatically moved when cost is incurred into an asset account. This can be done when revenue is recognized.

By aligning costs with revenue, this automation provides a more accurate picture of your company's financial health. Automated WIP relief adheres to the matching principle, ensuring that costs are recognized in the Profit & Loss (P&L) statement only when the corresponding revenue is recognized.

## How it works

### Step 1. Configure WIP relief in Projects

1. Go to **Projects** > **Setup** > **Configuration**.
2. In the new **WIP relief** section:
   1. Select the **Enable WIP relief** checkbox.
   2. Select the **WIP relief journal**. This must be an accrual only journal.
   3. Enter the **WIP account** and the **WIP relief account** with these parameters:
      - **WIP account** must be a balance sheet account with a normal debit balance that is non closing.
      - **WIP relief account** must be an account with a normal debit balance.

![Configure Projects showing WIP relief section](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-config-wip-relief_730x379.png)

Enabling WIP relief triggers the ability to grant permission to generate or view WIP relief. The **Projects** menu includes the following options:

- **Generate WIP relief**
- **View WIP relief log**.

![Projects menu showing new WIP relief selections, Generate WIP relief and View WIP relief log](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-wip-relief-menu.png)

### Step 2. Grant permission to generate or view

After you’ve enabled WIP relief, grant permissions for each user you want to view or generate the WIP relief.

1. From the **Company** menu, select the user or role that you want to grant permission.
2. In the **General Ledger** line, select **Permissions**.
3. In **Journal entries**, select **View**.
4. Close the **General Ledger Permissions** window.
5. In the **Projects** line, select **Permissions**.
6. Scroll to **WIP relief** and select **List**, **View**, **Generate**, and/or **Delete**.
7. Repeat for each user or role as needed.

Business and Project Manager users can have all permissions. Employee users can view or list only.

Users and roles with these permissions can now generate or view WIP relief.

### Step 3. Generate WIP relief

1. Go to **Projects** > **All** > **Generate WIP relief**.
2. Set the WIP relief parameters to provide all the information needed:

- GL posting date
- WIP transaction as of date
- Your email address
- The project or project group (include child projects, if needed)

The WIP relief journal, the WIP account, and WIP relief account use the information you entered while configuring WIP relief.

1. Select **Relieve WIP** to start the process.

![WIP relief parameters](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-projects-wip-relief-parameters.png)

Intacct creates the WIP relief entry. The entry is generated offline, and an email is sent when the entry is complete.

### Step 4. View the WIP relief log

After WIP relief is generated, go to the WIP relief journal to review the entry or access it from the WIP relief log. If the journal entry requires approvals, the entry will go through the approval cycle.

Because these are system-generated entries, you cannot edit them after they’ve been created.

Select **View WIP relief log** from the **Projects** > **All** menu to see a list of each WIP relief generation, including the Run date and time, who was emailed, and the status. You can drill into each entry to view a snapshot of the relief parameters.

## Permissions and other requirements

| Subscription          | Projects with Costing and Billing Grants with Tracking and Costing                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                                   |
| User type             | Business Project Manager Employee                                                                                                                                                                                                            |
| Permissions           | Projects WIP relief: List, View, Generate, Delete Business and Project Manager can use all permissions. Employee users can view or list only. General Ledger Journal entries: View To view the transactions that are created for WIP relief. |
| Restrictions          | For use with Contract accounting. Not available for Construction, which uses a different WIP Management process.                                                                                                                             |
