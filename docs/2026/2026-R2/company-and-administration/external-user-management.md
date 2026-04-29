---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Company_and_Administration/2026-R2-external-user-management.htm
release: 2026-R2
extracted: 2026-04-29
title: "Simplified external user management—Consoles"
---

# Simplified external user management—Consoles

[External user permissions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=External_user_permissions)

[External user IDs](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=External_user_IDs)

CoNSOLES

You can now manage each external user from a single record tied to the parent console. This update removes duplicate user records and centralizes permission management across linked consoles, making administration simpler and more consistent.

## Key benefits

-   **Simplified user records**: Each external user is represented by a single record tied to the parent console.
    

-   **Centralized management**: Access and permissions are managed in one external user record tied to the parent console.
    

## How it works

Each external user is represented by a single user record associated with the parent console. When consoles are linked, permissions and access for that external user are managed through this consolidated record.

When existing user records are consolidated, permissions from each record are combined so users do not lose access. Review permissions and make adjustments if necessary.

1.  Go to **My instances**.
    
2.  Find the instance that you want to switch to.
    
3.  Select **Switch to instance**.
    
4.  Go to **Company** > **Admin** > **External users**.
    
5.  View the consolidated records in the **User ID** column.
    

## What's changed

Previously, the same external user could have multiple user records, depending on how the user accessed a company. With this release, external user records are consolidated so that each external user has one user record tied to the parent console.  

## Permissions and other requirements

| Subscription | Consoles |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Users: List, View, Permissions |
