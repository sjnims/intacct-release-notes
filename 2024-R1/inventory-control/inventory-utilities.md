---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Inventory_Control/2024-R1-inventory-utilities.htm
release: 2024-R1
extracted: 2026-02-07
title: "Inventory utilities"
---

# Inventory utilities

Use Inventory utilities to troubleshoot inventory valuations, General Ledger balances, and landed cost amounts.

## Details

The Inventory utilities page consists of three tabs:

- Transaction definitions
- GL subledger reconciliation
- Landed costs

On each tab, you can download several reports, which are in the CSV file format.

![The Inventory Utilities page with the Transactions definitions tab selected. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-inventory-utilities.png)

### Transaction definitions tab

The transaction flow graph report shows each of your transaction definitions. You can see how transactions are converted into other transactions and how they affect inventory values and quantity.

This information can help you figure out why inventory values or quantities are incorrect on your valuation report.

#### Example

For example, when you process an invoice, you end up with a value that does not match the quantity. The Transaction flow graph report shows the following transaction definition:

Purchase Requisition ----> Purchase Order (ONORDER:+Q) ----> Vendor Invoice (ONHAND:+Q) ----> PO Return (ONHAND:-QV)

The purchase order and the invoice increase only the quantity and not the value. Therefore, you end up with a value that does not match the quantity when you process a purchase order or an invoice.

The return reduces both the quantity and the value, which compounds the problem because the value was never increased.

The other reports on this tab show which General Ledger accounts are debited or credited by transactions based on your transaction definitions.

### GL subledger reconciliation tab

The reports on the GL subledger reconciliation tab are helpful when you need to determine why the valuation report does not match the General Ledger.

![The Inventory utilities page  with the GL subledger reconciliation tab selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-inventory-utilities-gl-tab.png)

- **Transactions posting to the GL:** This report lists the inventory transactions that posted to General Ledger. The report includes the date, cost method, quantity, debit and credit accounts, and more.
- **Valuation by GL account:** These reports show your inventory valuation, which you can view by item, GL group, or GL account.
- **Posts to inventory GL accounts not made by Inventory Control:** This report shows transactions that posted to General Ledger inventory accounts that did not originate in the inventory subledger. None of these transactions are reflected in your Valuation report.
- **Running average cost:** This report shows the average running cost for each item and warehouse. It’s the same value that appears in the Summary column on the Valuation report.
- **Open periods report:** This report lists all locations with open periods and includes the date that the periods were opened.

### Landed costs tab

The Landed costs report lists all of your landed cost transactions and shows the landed cost bill, the adjustment transactions, and the target transaction ID. The landed cost amount, adjustment amount (if any), and other details are also included.

![The Inventory utilities page with the Landed costs tab selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-inventory-utilities-landed-costs-tab.png)

One thing to look for in this report are landed cost transactions with no target transaction. For these transactions, the clearing account is increased, but there's no target transaction to reduce it, so the amount remains in the clearing account.

## How it works

Follow these steps to download one of the reports.

1. Go to **Inventory Control** > **Setup** \> **Inventory utilities**.
2. Find the report.
3. If the report is on the GL subledger reconciliation tab or the Landed costs tab, you can enter filters if needed.
4. Select **Download**.

The report is downloaded as a CSV file to your default downloads folder.

## Requirements

| Subscription          | Inventory Control                           |
| --------------------- | ------------------------------------------- |
| Regional availability | Any region except France                    |
| User type             | Business user                               |
| Permissions           | Inventory Control Inventory utilities: Edit |
