---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Revenue_Management/2025-R4-rev-rec-cancellation-date.htm
release: 2025-R4
extracted: 2026-02-07
title: "View the cancellation date of a revenue schedule"
---

# View the cancellation date of a revenue schedule

[Revenue recognition schedules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revenue_Recognition_Schedule)

[Deferred Revenue Details Report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Running_a_Deferred_Revenue_Details_Report)

Revenue Management

Previously, revenue schedules didn’t display a cancellation date, making it difficult to track changes. Now, you can view the cancellation date directly on the revenue schedule and in the Deferred revenue details report. This added visibility helps maintain accurate audit trails and streamlines your workflow.

## What's changed

-   We added a **Cancellation date** field to the Revenue recognition schedule page. This field appears only on terminated schedules.
    
    ![Revenue recognition schedule page showing the cancellation date field](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-rev-rec-schedule.png)
    
-   We added the same field to the Deferred revenue details report for both AR and Order Entry.
    
    ![Deferred revenue details report showing the cancellation date column.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-deferred-rev-report_805x184.png)
    

## Good to know

The cancellation date depends on the termination option selected:

-   **All:** If no revenue was posted, the cancellation date equals the schedule start date. If revenue was posted, the cancellation date is the day after the last posted entry.
    
-   **Any scheduled after the schedule's next posting date:** The cancellation date is the day after the last open entry (soon to be posted).
    
-   **Any after specified date:** The cancellation date equals the date that you select.
    

## How it works

To view the cancellation date on a revenue schedule:

1.  Go to **Order Entry** > **All** > **Revenue recognition** > **Revenue schedules**.
    
2.  Find a schedule with the **Terminated** status.
    
3.  Select More actions > **View** at the end of the row.
    

To view the cancellation date in the Deferred revenue details report:

1.  Depending on your subscription, do one of the following:
    

-   Go to **Order Entry** > **All** > **Reports** > **Deferred revenue** > **Details**.
    
-   Go to **Accounts Receivable** > **All** > **Reports** > **Deferred revenue** > **Details**.
    

3.  Select a **Location**.
    
4.  For Report type, select **Detail**.
    
5.  Optionally, fill out the other fields.
    
6.  Select **View**.
    

## Permissions and other requirements

| Subscription | Standard revenue recognition for Order Entry or Accounts Receivable |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business |
| Permissions | General Ledger                                                                                                                                                                                                               Revenue recognition schedule: List                                                                                                                                                                                                                   Deferred revenue details: Run |
