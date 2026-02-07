---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Reporting-Advanced/2024-R1-primary-consumer-role.htm
release: 2024-R1
extracted: 2026-02-07
title: "ICRW Primary Consumer access"
---

# ICRW Primary Consumer access

ICRW Primary Consumer role allows ICRW users to view and run reports based on reporting areas that are typically outside of their range of permissions.

## Details

For example, you might need an employee to run reports with General Ledger (GL) data. However, you do not want that employees to have access to the GL. The Primary Consumer role enables employees to run reports that are typically outside their range of privileges.

The Primary Consumer role is only available in ICRW. This role provides run only permission to an assigned user or group for selected reports. Primary Consumer access is not available in Interactive Visual Explorer (IVE). IVE ignores the Primary Consumer permission.

The following conditions apply:

-   ICRW Primary Consumer feature must be enabled for the company.
    
-   A user must have ICRW access.
    
-   Primary Consumer access must be assigned to the users.  
    Full ICRW admin privileges are required to assign Primary Consumer role access, such as a Business user with full admin privileges.
    
-   A user must have explicit permission for the report.
    
-   A Construction subscription is required. Contact your Sage Intacct account manager to enable your Construction subscription.
    

## How it works

Complete the following tasks to set and assign the Primary Consumer role access. For detailed instructions, see the help topic [Set ICRW Primary Consumer access](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=ICRW_set_primary_consumer).

1.  Enable the Primary Consumer feature.
    
2.  Turn on Primary Consumer access.
    
3.  Create a Primary Consumer user role.
    
4.  Assign Primary Consumer privileges for a single user.
    
5.  Create a Primary Consumer access group (optional).
    
6.  Assign Primary Consumer privileges to a group.
    

## Requirements

| Subscription | Interactive Custom Report Writer                                                                                                                                                                                                                   Construction |
| --- | --- |
| Regional availability | United States                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   Australia |
| Permissions | Run, View, List, Add, Edit, Delete |
| Dependencies or other requirements | Access to data in that you are running |
