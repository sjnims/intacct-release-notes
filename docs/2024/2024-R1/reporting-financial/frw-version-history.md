---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Reporting-Financial/2024-R1-FRW-version-history.htm
release: 2024-R1
extracted: 2026-02-07
title: "Version history for financial reports"
---

# Version history for financial reports

If an existing financial report is generating unexpected results, it could be because the report's settings have been changed. If so, the report's history can help you get it working again. You can see if a previous version of the report still works, and compare it to the current version to see what's different. Alternatively, you can restore that previous working version.

## Details

Each time you save a report in the Financial Report Writer, it is saved as a version in the report's history.

Report histories begin with this release. If a report was last saved before this release, there will be no versions in the report's history.

A report's history keeps up to 100 versions. If a report has more than 100 versions, only the newest 100 versions appear in the report's history.

## How it works

1. When editing a report in the Financial Report Writer, select **More actions** > **View version history**.

   A Version History page displays the current version and previous versions. For each version, you see who created it, and when.

   ![An example Version History page showing 3 previous versions, each with a View button beside it.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-FRW-version-history.png)

2. Select **View** next to the version you want to see.

   The Financial Report Writer displays the report settings and appears to let you make changes. However, you cannot save your changes and if you restore the version, any changes are ignored.

   Available buttons are **Preview**, **Restore**, and **Cancel**.

   ![An example of a previous version viewed in the Financial Report Writer.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-FRW-version-history-view-previous.png)

   You can see the report's settings, and preview the results of running the report. This enables you to identify differences and edit the current version to get it working again. Alternatively, you can restore a previous version by selecting **Restore**, which creates a new current version that's a copy of the restored version.

   If you restore a particular version multiple times in a row, a new current version is created each time.

   A restored version is indicated in the version history along with the number of the version from which it was restored.

   ![The Version History page for a report, showing a current version 5 that was restored from version 3.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-FRW-version-history-restored.png)

## Requirements

| Subscription          | General Ledger                    |
| --------------------- | --------------------------------- |
| Regional availability | All regions                       |
| Permissions           | Financials: List, View, Add, Edit |
