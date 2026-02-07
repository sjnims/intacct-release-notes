---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-override-posting-dates.htm
release: 2024-R4
extracted: 2026-02-07
title: "Override posting dates"
---

# Override posting dates

[Override posting dates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Override_posting_dates)

[Post depreciation manually](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Post_depreciation_manually)

Fixed Assets Management

When posting entries from the Post Depreciation page, you now have the option to choose a custom posting date. The new date overrides the scheduled posting dates.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-fam-override.png)

This feature is particularly useful if entries were originally scheduled for a closed period but you need to post them in an open period. Previously, posting entries from closed periods required reopening and closing the books, which can be an inconvenient process.

## Details

### Override date requirements

Choose a new posting date that meets the following requirements:

- Is in an open period.
- Is on or after the first unposted entry's scheduled posting date, in each schedule.
- Is on or before the next unposted entry's scheduled posting date, in each schedule.

[Examples of valid new posting dates](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/FixedAssets/2024-R4-fam-override-posting-dates.htm#)

Consider the following depreciation schedule:

| Period | Scheduled posting date | Status     |
| ------ | ---------------------- | ---------- |
| 1      | August 31st            | Posted     |
| 2      | September 30th         | Posted     |
| 3      | October 31st           | Not posted |
| 4      | November 30th          | Not posted |
| 5      | December 31st          | Not posted |

- To post Period 3, valid new posting dates are October 31st to November 30th.
- To post Periods 3 and 4 at the same time, valid new posting dates are October 31st to December 31st.

### Actual vs scheduled posting date fields

We added a new field called Actual posting date on the following pages:

- Depreciation Schedule
- Post Depreciation: Posted view
- Bulk Action Run

We renamed Posting date to Scheduled posting date to distinguish between the two fields.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-fam-actual-posting-date.png)

The Actual posting date is the date when the entry was successfully posted to the General Ledger. It can differ from the Scheduled posting date if you override posting dates.

## How it works

1. Go to **Fixed Assets Management** > **All** > **Post depreciation**.
2. Select the depreciation entries that you want to post.

    You cannot post entries out of order, so make sure to select all prior unposted entries within each schedule.

3. Select **Post depreciation**.
4. Select **Override posting dates**.

    The scheduled posting dates of all selected entries will be overridden with a single user-defined date.

5. Select a **New posting date**.
6. Select **Post**.

## Permissions and other requirements

| Subscription          | Fixed Assets Management                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                   |
| User type             | Business                                                                                      |
| Permissions           | Fixed Assets Management Post depreciation: Run Asset: List, View Bulk action runs: List, View |
