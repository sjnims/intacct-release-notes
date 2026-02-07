---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Company_and_Administration/2025-R4-new-sandbox-name-convention.htm
release: 2025-R4
extracted: 2026-02-07
title: "New sandbox naming convention"
---

# New sandbox naming convention

[About sandboxes](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_sandboxes)

[Add a sandbox](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_sandbox)

[Edit a sandbox](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Edit_view_sandbox)

Company and administration

We updated our sandbox naming convention to improve consistency and make sandbox instances easier to identify. Sandbox company IDs now include your Sage Intacct Company ID followed by a name that you choose, for example, **sandbox1**.

For example, if your company ID is **Acme123** and the name that you choose is **sandbox1**, then your sandbox company ID will be **Acme123-sandbox1**.

## What's changed

The sandbox name that you enter is now appended to your company ID to create the sandbox company ID. Previously, the format of the sandbox company ID was CompanyID-sandbox. With this release, the format is CompanyID-*name*, with the *name* being the sandbox name that you choose.

## How it works

Create a new sandbox or edit an existing one to use the new naming convention.

### Add a new sandbox

1.  Go to **Company** > **Admin** > **More** > and select Add (circle) next to **Sandboxes**.
    
2.  Enter a Sandbox name.  
    This name is appended to your company ID to create the sandbox company ID.
    
3.  Enter a Description.
    
4.  Select **Save**.
    

### Edit the name of a sandbox

1.  Go to **Company** > **Admin** > **More** > and select **Sandboxes**.
    
2.  Find the sandbox that you want to edit the name of.  
    You can only edit the name of an existing sandbox if it's in a **Pending** state.  
    
3.  Select More actions > **Edit** at the end of the row.
    
4.  Make your changes.
    
5.  Select **Save**.
    

## Good to know

Changing the name of an existing sandbox will prompt an alert message to remind you to update any existing integrations that reference the previous sandbox name. This helps ensure consistency across your integrations and prevents potential discrepancies caused by outdated sandbox names.

## Permissions and other requirements

| Subscription | Company |
| --- | --- |
| Regional availability | All regions |
| Permissions | Sandbox: List, View, Add, Edit |
