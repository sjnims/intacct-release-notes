---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-restricted-users-can-void-top-level-payments.htm
release: 2024-R3
extracted: 2026-02-07
title: "Restricted users can void top-level payments"
---

# Restricted users can void top-level payments

[Restricted users in Accounts Payable](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Restricted_users_in_AP)

Accounts Payable

Entity-restricted users who have top-level access can now void transactions that they create at the top level, provided they have the appropriate permissions.

## Details

Users with entity restrictions can run the check register report without providing a Location filter. As a result, top-level transactions with line items within the user's restrictions are included in the Check register report and are available to be voided.

Previously, entity-restricted users were required to select a location when running the check register report. The report filtered transactions to show only those created at the entity level. Payments that the user created at the top level were not included and so the user could not void them.

## How it works

1. Go to **Accounts Payable > **All** > Reports > Registers > Check**.
2. Use the report filter options to narrow the report results, but leave **Location** empty.
3. Select View.
4. Select **Void** next to the payment.

   [If the payment does not show a Void link](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-restricted-users-can-void-top-level-payments.htm#)

   Payments created at the entity-level cannot be voided from the top level. Run the register report for the entity to see the Void option.

5. If needed, adjust the void date and reverse associated bills.
6. Select **Submit**.

## Additional ways to void top-level payments

Entity-restricted users can also [Void a payment directly from the Posted payments page](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Accounts_Payable/2024-R3-void-payment-from-posted-payments.htm).

## Permissions and other requirements

| Subscription          | Accounts Payable Cash Management                                                  |
| --------------------- | --------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                       |
| User type             | Business                                                                          |
| Permissions           | Accounts Payable Posted payments: Void Cash Management Check register report: Run |
