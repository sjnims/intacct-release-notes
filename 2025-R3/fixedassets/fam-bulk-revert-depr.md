---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/FixedAssets/2025-R3-fam-bulk-revert-depr.htm
release: 2025-R3
extracted: 2026-02-07
title: "Revert posted depreciation entries in bulk"
---

# Revert posted depreciation entries in bulk

[Revert posted depreciation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Revert_posted_depreciation_entry)

[View the status of a bulk action run](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Monitor_depreciation_run_status)

Fixed Assets Management

You can now revert multiple depreciation postings at once from the Post Depreciation page. For example, if you post depreciation accidentally or want to place an asset back in review, you can quickly undo all the postings, saving time and reducing manual effort.

![Post depreciation list with some entries selected. Shows the Revert posting button.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-fam-bulk-revert.png)

## Key benefits

-   **Save time:** Revert depreciation for multiple assets in one step.
-   **Reduce errors:** Minimize the risk of mistakes when adjusting asset records.
-   **Increase efficiency:** Manage large asset volumes with less manual effort.
-   **Improve accuracy:** Support accurate financial reporting and audit processes.

## What's changed

Previously, you could only revert depreciation entries one at a time from an asset's depreciation schedule. With this release, we added a **Revert posting** button on the Post Depreciation list, allowing you to revert multiple entries at once across different assets and schedules.

## How it works

1.  Go to **Fixed Assets Management** > **All** > **Depreciation** > **Post depreciation**.
    
2.  Select the posted entries that you want to revert.
    
3.  Select **Revert posting** to start a bulk action run.
    

You'll receive an email notification when the process is complete.

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Post depreciation: Run |
| Dependencies or other requirements | To revert an entry, the associated asset must be in service. |
| Restrictions | Historically posted entries cannot be reverted.                                                                                                                                                                                                                   A maximum of 500 entries can be reverted at a time.                                                                                                                                                                                                                   Within each schedule, you must revert entries  in order from most recent to oldest actual posting date, without skipping any in between. |
