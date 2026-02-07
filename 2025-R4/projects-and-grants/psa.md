---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Projects_and_Grants/2025-R4-psa.htm
release: 2025-R4
extracted: 2026-02-07
title: "Enhancements in Sage Intacct PSA"
---

# Enhancements in Sage Intacct PSA

PROJECTS & Grants

This release includes the following new features and enhancements.

## Integration with Salesforce

Bridge the gap between sales and delivery by integrating Salesforce with PSA. Transform opportunities into projects automatically while maintaining unified data across both platforms.

### Key benefits

-   Configure specific Salesforce opportunity stages to automatically generate PSA projects.
-   Use Salesforce Object Query Language (SOQL) to create custom triggers beyond stage-based automation. Examples include:
    -   Minimum opportunity amounts (Amount >= 50000)
    -   Specific product requirements (Quantity > 10)
    -   Priority naming conventions (Name LIKE 'PRIORITY%')
-   Apply predefined PSA project templates based on opportunity details, ensuring consistent project structures and scope definitions.
-   Real-time, bi-directional synchronization of data keeps PSA project updates visible within Salesforce opportunity records.
-   Configure exactly which opportunity data flows into project creation through the Salesforce configuration panel.
-   Manually connect existing PSA projects to Salesforce opportunities through project settings.

## Enhanced data synchronization and reliability

-   **Project-level resource sync:** Employee assignments at the project level now sync automatically between PSA and Intacct in real time, eliminating double data entry for resource management.
-   **Core objects sync in real time:** Projects and tasks now sync immediately between PSA and Intacct (instead of on an hourly schedule), ensuring that teams always have the most current data in both platforms.
-   **Unified project ID management:** Project identifiers automatically match between systems. Any project ID you create in PSA or Intacct is created in both platforms, ensuring consistent project tracking and reporting.
-   **One-way sync configuration:** For simplified workflow management, configure tasks and projects to sync in one direction only (PSA to Intacct). This option provides better control for organizations with specific workflow requirements. Contact the Sage Intacct PSA team for configuration assistance.
-   **Automated data integrity monitoring:** Nightly consistency checks automatically find and resolve any items that did not sync during real-time operations. These background processes ensure data consistency without user notification or intervention, maintaining system reliability.

## Duplicate projects

You can now create copies of existing projects directly within PSA. Duplicated projects automatically sync to Intacct during the next overnight sync cycle, streamlining project setup for similar engagements.

[Interested? Request a follow-up](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Projects_and_Grants/2025-R4-psa.htm#)

To request a follow-up on 2025 Release 4 enhancements, [fill out this form](https://www.sage.com/en-us/cp/sageintacctquarterlyreleaseaddons/). Your account manager will be in touch.

If you'd like to contact your account manager directly, see [Contact your Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription | Sage Intacct PSA |
| --- | --- |
| Regional availability | Australia                                                                     Canada                                                                     United Kingdom                                                                     United States |
