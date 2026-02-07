---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-recurr-txns.htm
release: 2026-R1
extracted: 2026-02-07
title: "Improved notifications for recurring transaction schedules in AP and AR"
---

# Improved notifications for recurring transaction schedules in AP and AR

[Create a recurring invoice](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AR_recurr_invoices_create)

[Create a recurring bill](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Entering_a_Recurring_Bill)

[Email notifications for My preferences](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Email_notification_preferences)

accounts receivable

Stay on top of recurring schedule issues in Accounts Payable and Accounts Receivable. You’ll now receive email alerts when a recurring transaction does not generate as expected, helping you quickly spot problems and keep schedules running smoothly.

## Key benefits

- **Faster issue resolution**: Receive detailed notifications when a recurring schedule does not post the next transaction.
- **Flexibility for ownership changes**: If the creator of the schedule leaves the company, you can update the notification email address to ensure alerts go to the right person.
- **Reduced risk of missed transactions**: Stay informed and act promptly.
- **Improved visibility**: Know which schedule did not process, who owns it, and what needs attention.

## How it works

Ensure nothing slips through the cracks and set up two kinds of failure notifications:

### Add a global backup recipient

Admins can opt in on the My preferences page to receive alerts for all recurring schedule issues in Sage Intacct, which is useful when the original owner is unavailable or has left the company. The backup admin can then review issues in the Recurring transaction status report.

[Learn how](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-recurr-txns.htm#)

1.  Select your login name at the top of any page and select **My preferences**.
2.  Go to the Email notifications section.
3.  Select **Receive recurring schedule failure notifications**.
4.  Select **Save**.

### Add a schedule-specific recipient

Each recurring schedule also includes an Email field on the Schedule tab where you can designate someone to receive notifications.

[Learn how](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Receivable/2026-R1-ar-recurr-txns.htm#)

1.  Depending on where the recurring schedule originates, go to either of the following areas:

    Go to **Accounts Payable** > **All** > **Payments** > **Recurring bills** > **Add** or **Edit**.

    Go to **Accounts Receivable** > **All** > **Invoices** > **Recurring invoices** > **Add** or **Edit**.

2.  Go to the **Schedule** tab.
3.  Enter an Email.
4.  Select **Save**.

## Permissions and other requirements

| Subscription          | Accounts Payable Accounts Receivable                                             |
| --------------------- | -------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                      |
| User type             | Business user with admin privileges Business Employee                            |
| Permissions           | Recurring bills: List, View, Add, Edit Recurring invoices: List, View, Add, Edit |
