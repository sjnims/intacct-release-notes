---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Construction/2025-R3-construction-import-change-requests.htm
release: 2025-R3
extracted: 2026-02-07
title: "Import change requests"
---

# Import change requests

[Import change requests](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=import_change_request)

construction

This idea came from you  

Easily upload and import one or more change requests through the list view or by importing with the new import template.

## How it works

You can download a template and import change requests from the Change request list or from the Company setup checklist.

Company setup checklist or from the Change requests list.

### Download a template and import from the Change requests list

1.  Go to **Projects** \> **All** \> **Change management** \> **Change requests**.
    
2.  Select **Import**.
    
3.  Select **Download template**.
    
4.  Enter change request information.
    
5.  Save the file as a CSV file.
    
6.  Back on the Change requests import dialog, select **Import**.
    

### Download a template and import from the Company setup checklist

1.  Go to **Company** \> **Setup** \> **Import data**.
    
2.  Find the section Import projects, tasks, and timesheets.
    
3.  Find Change requests.
    
4.  Select **Template**.
    
5.  Enter change request information.
    
6.  Save the file as a CSV file.
    
7.  Back on the Company setup checklist, select **Import**.
    

## Good to know

Imported change requests must contain at least one change request entry. You can import draft or posted change requests.

The following fields are required:

-   CHANGEREQUESTID
    
    You do not need to provide a change request ID if you configured Projects to use change request ID sequences. If change request ID sequences are not enabled, a change request ID is required.
    
-   PROJECTID
    
-   CHANGEREQUESTDATE
    
-   CHANGEREQUESTENTRY\_LINENO
    
-   CHANGEREQUESTENTRY\_PROJECTID
    

## Permissions and other requirements

| Subscription | Construction                                                                 Company                                                                 Projects configured for Projects costing and billing |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United States                                                                                                                                                                                                                   United Kingdom |
| User type | Business                                                                 Project Manager |
| Permissions | Company                                                                                                                                                                                                               Company setup checklist: Run                                                                                                                                                                                                       Projects                                                                                                                                                                                                               Change requests: List, View, Add, Edit, Delete |
