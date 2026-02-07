---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-datev-updates.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhancements for the DATEV export"
---

# Enhancements for the DATEV export

[DATEV format export](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=about_DATEV_data_export)

General Ledger

Now you can add DATEV ID information to your vendor and customer records and import files, making it easier to meet compliance requirements.

![Screenshot of the German language customer additional information page with DATEV ID field in a callout box.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-gl-datev-updates-customer-id.png)

## How it works

1. Go to **Accounts Payable** > **All** > **Vendors** or **Accounts Receivable** > **All** > **Customers**.
2. Select **Add**, or select **Edit** next to an existing vendor or customer.
3. In the **Details** section of the **Additional Information** tab, enter the **DATEV ID**.
4. Select **Save**.

The vendor or customer CSV template now includes the DATEV ID field so you can import multiple records at one time.

When you run the DATEV export, the DATEV ID displays for vendors and customers in the following ways:

- In the **EXTF_Sachkontobeschriftungen** General Ledger transactions export, the DATEV ID from the vendor and customer records is displayed for offset accounts. Expense accounts still display the expense account number.
- In the **EXTF_DebKred_Stamm** merged vendor and customer export, the DATEV ID displays for vendors and customers. If the vendor or customer record does not have an associated DATEV ID, the field does not display any value.
- There's no impact for the **EXTF_Buchungsstapel** chart of accounts export.

## Permissions and other requirements

| Subscription          | Taxes                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Germany                                                                                                                |
| User type             | Business                                                                                                               |
| Permissions           | General Ledger Reports, DATEV data export: Run                                                                         |
| Restrictions          | You must have the Deutsche Umsatzsteuer standard tax solution installed and configured at the company or entity level. |
