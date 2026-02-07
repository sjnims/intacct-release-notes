---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Time_and_Expense/2025R1_employee_expense_automation.htm
release: 2025-R1
extracted: 2026-02-07
title: "Automate employee expenses"
---

# Automate employee expenses

[Automate employee expenses](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Automate_employee_expenses)

Time and Expenses

## Now available in multi-currency

We're introducing a new multi-currency workflow for the submission of employee expenses. This feature allows employees to email their expense receipts directly to Sage Intacct from any device, ensuring both time savings and accuracy.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-TE-multicurrency.png)

## Details

- **AI-powered receipt coding:** Employees can email their travel or other receipts, which are then processed using artificial intelligence (AI) to assist in coding. Machine learning (ML) technology remembers these changes for future receipts, simplifying the expense report process.
- **Receipt management:** A new list called **Electronic receipts** includes links to the original receipts emailed by employees. You can add these receipts to an expense report, associate the full amount with an expense type, or split the receipt across multiple expense types. Depending on permissions, you can also remove receipts from the employee.
- **Employee-specific receipts:** Only receipts for the respective employee appear in their list, ensuring organized and accurate expense tracking.
- **Staff expense permissions:** Users with staff expense permissions can create staff expenses and incorporate emailed employee receipts.

## How it works

1. **Email receipts:** Employees email their receipts to a designated Sage Intacct email address. These receipts become receipt records in Sage Intacct.
2. **AI data population:** AI technology populates the receipt records in Sage Intacct with relevant data, such as expense codes.
3. **Edit receipts:** Employees can update their receipt records with additional details or coding. Machine learning (ML) remembers the changes for future receipts.
4. **Create an expense report:** When creating an expense report, employees can easily include one or more of their receipt records.

**Receipt attachments:** Treat each attachment as a single receipt. Use one attachment per receipt. Each attachment can contain multiple pages. For more information on how to use this feature, contact your account manager.

## Permissions and other requirements

| Subscription          | Time and Expense Sage Cloud Services                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| User type             | Business Employee                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Permissions           | Time and Expenses Electronic receipts: List, View, Edit, Delete, Upload, Manage staff electronic receipts                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Configuration         | Primary email address: Ensure that each employee contact record includes an assigned primary email address. This email address is used to associate receipts with the employee. Verify that the primary email address is unique to each employee. Sharing a primary email address among multiple employees can lead to confusion regarding receipt ownership. Configuration steps: Enable expense types at Configure Time and Expenses > GL accounts > Expense type. Enable electronic receipt inbounding at Configure Time and Expenses > Automate employee expenses > Enable electronic receipt inbounding. VAT considerations: This process is not applicable to companies with value-added tax (VAT). |
