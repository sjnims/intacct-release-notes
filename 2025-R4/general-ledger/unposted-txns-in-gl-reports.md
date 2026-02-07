---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/General_Ledger/2025-R4-unposted-txns-in-gl-reports.htm
release: 2025-R4
extracted: 2026-02-07
title: "Include unposted journal entries in General Ledger reports"
---

# Include unposted journal entries in General Ledger reports

[Filter the Journal report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Journals_rpt_filters)

General Ledger

You can now get a more transparent, real-time view of your financial data by including unposted journal entries in the following reports: 

-   General Ledger report
    
-   Journals report
    

This feature applies to journal entries only. Unposted subledger transactions are not included.

## Key benefits

-   **Improved financial visibility**: See the impact of draft, submitted, or partially approved journal entries before they’re posted.
    
-   **Faster reconciliation**: Accountants and finance teams can reconcile and analyze data earlier in the process.
    
-   **Supports continuous close**: Enables better planning and automation through tools like Close Workspace.
    
-   **Reporting compliance ready**: Filter selections are clearly displayed in report footers for audit transparency.
    

## How it works

![Filters section of the General Ledger report page showing the Include these transactions field and the list of unposted transactions to include.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-gl-include-these-transactions.png)

The Filters section of supported reports shows an **Include these transactions** dropdown list. The following options are available: 

-   Posted transactions only
    
-   Unposted transactions only
    
-   Posted and unposted transactions
    

When you select an option that includes unposted transactions, a Select button appears to the right. Select this button to specify which unposted transactions are included based on their state.

The available options vary based on whether you have journal entry approvals turned on. If the feature is turned on, you'll see the following options.

-   Draft
    
-   Submitted
    
-   Partially Approved
    
-   Declined
    

If your organization is not using General Ledger approvals, you'll see the Draft option only.

A Txn state column has been added to the two reports so that you can see which transactions are unposted. This column appears in the report only if you include unposted transactions.

![The Journal report with the new Transaction state column highlighted. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-gl-transaction-state-coll.png)

If you select a consolidation book as the reporting book, this feature is not available because consolidation books contain only system-generated entries that are always fully posted.

## Permissions and other requirements

| Subscription | General Ledger |
| --- | --- |
| Regional availability | All regions |
| User type | Business                                                                 Employee |
| Permissions | General Ledger report: Run |
| Dependencies or other requirements | Some transaction states depend on your configuration. For example, you can include partially approved and declined transactions only if you have approvals set up for General Ledger. |
| Restrictions | Applies only to transactions posted directly to General Ledger. Transactions posted in subledgers are not included. |
