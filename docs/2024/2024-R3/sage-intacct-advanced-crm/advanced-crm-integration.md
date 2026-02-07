---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Sage_Intacct_Advanced_CRM/2024-R3-advanced-crm-integration.htm
release: 2024-R3
extracted: 2026-02-07
title: "Sage Intacct Advanced CRM Integration updates"
---

# Sage Intacct Advanced CRM Integration updates

[Sync Accounts](https://www.intacct.com/ia/docs/en_US/salesforce/Default.htm#cshid=AdvancedCRM_Configure_Accounts)

[Sync Contacts](https://www.intacct.com/ia/docs/en_US/salesforce/Default.htm#cshid=AdvancedCRM_Configure_Contacts)

Sage Intacct Advanced Crm

We've made some updates to the Sage Intacct Advanced CRM Integration.

## Sync Accounts and Contacts only once

You can now choose to sync Accounts or Contacts from Salesforce to Intacct only once when an Account or Contact is created. This improves data accuracy and consistency across both systems and reduces the risk of conflicting updates.

When enabled, Accounts and Contacts will only synchronize from Salesforce to Intacct upon creation. Any updates made to Accounts or Contacts in Salesforce will not sync to Intacct after the Account or Contact has been created.

However, updates made in Intacct to the Customer or Contact information does sync back to the Account or Contact in Salesforce on save in Intacct.

Enabling Sync only once prevents updates from being synced to Intacct through the following methods:

- The Sync to Intacct button
- Mass sync tools
- Salesforce Process Builder workflows
- APEX methods

### How it works

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-SFDC-sync-only-once.png)

1. Log in to Intacct as an administrator.
2. Go to **Company > Admin > Subscriptions > Advanced CRM Integration** and select **Configure**.
3. Do one or both of the following and **Save** your changes:
   1. On the _Settings_ tab, in the _Accounts_ section of _Synchronization options_, select **Sync only once**.
   2. On the _Settings_ tab, in the _Contacts_ section of _Synchronization options_, select **Sync only once**.

## Improved task sync

When you create and sync a Project in Salesforce, tasks associated with the project are now automatically synced as well. This eliminates the need to sync manually and streamlines your project workflow.

## Revenue recognition templates sync for Contracts

We now support Contract revenue recognition template sync. This update allows you to sync your revenue recognition templates directly to your contracts.

### How it works

In Salesforce, the revenue recognition template object has been updated with a Type field with two valid values: Order Entry, and Contract.

When a contract-based revenue recognition template is created in Intacct, it is synced to Salesforce with the Type set to Contract.

The default Type for existing template records in Salesforce, and those created without a contract in Intacct, is Order Entry.

## Error log improvements

We've enhanced error management by creating the ability to add error log related lists to key objects, such as Account and Opportunity. These lists provide a centralized view of sync errors directly on the relevant record. You can now easily access and analyze error details without going to the Error log object, streamlining troubleshooting and resolution.

## Support for Salesforce Nonprofit Cloud

The Sage Intacct Advanced CRM Integration now works with the Salesforce Nonprofit Cloud. This new product from Salesforce streamlines operations for nonprofits, replacing the previously used Nonprofit Success Pack.

## Permissions and other requirements

| Subscription          | Sage Intacct Advanced CRM Integration                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                                                                            |
| User type             | Business user with admin privileges Your Sage Intacct admin can authorize other users after the integration has been configured.                       |
| Implementation        | Requires: Subscription in Intacct Configuration and setup in Intacct Configuration and setup in Salesforce Admin rights in both Intacct and Salesforce |
| Notes                 | Additional subscriptions are required if you want to use the following with your Advanced CRM Integration integration: Contracts Projects              |
