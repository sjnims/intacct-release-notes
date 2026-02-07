---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm
release: 2026-R1
extracted: 2026-02-07
title: "Configure geofencing for time clocks—Sage Intelligent Time"
---

# Configure geofencing for time clocks—Sage Intelligent Time

[Geofencing](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Ab_TOC_IT_geofences)

[Sage Intelligent Time and Expense mobile app](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Aa_TOC_SIT_mobile_app)

time

This idea came from you

We're excited to introduce a mobile Geofencing feature that allows you to set virtual boundaries around job sites or client locations. With permission, the Sage Intelligent Time and Expense mobile app can track the location of employees and confirm where they are when clocking in or out. This gives you clear visibility into whether employees are inside the designated boundaries at the time of their shift.

## Key benefits

-   Boost payroll and billing accuracy through GPS-verified hours
    
-   Respects privacy with tracking and consent controls only when clocked in
    
-   Avoid time fraud risk with geofence-based restrictions
    
-   Track only when employees are on the clock, supported by consent controls
    

## How it works

[Set virtual boundaries using geofencing](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm#)

1.  Go to **Time** > **Setup** > **Time options** > **Time preferences**.
    
2.  Select **Geofences**.
    
3.  Select **Create geofence**.
    
4.  Enter a geofence **Name**.
    
5.  For type, select **Radius** or **Polygon**.
    
    If you select **Radius**, also choose a unit.
    
6.  Enter the **Latitude**.
    
7.  Enter the **Longitude**.
    
8.  Select the linked project, customer, or location.
    
9.  Select the **Enforcement mode**.
    
10.  Select **Create**.
     

[Assign geofences to employees](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm#)

1.  Go to **Time** > **Setup** > **Time options** > **Time preferences**.
    
2.  Select **Geofences**.
    
3.  Select **Employee geofence assignments**.
    
4.  Select the checkboxes for the employees that you want to assign.
    
5.  Select **Assign geofence**.
    
6.  Select the geofence.
    
7.  Select **Assign**.
    

[Log in to the app](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm#)

1.  Open the **Sage Intelligent Time and Expense** mobile app.
    
2.  Select **Log in with** Intacct.
    
3.  Enter your **Company ID**.
    
4.  Enter your **User ID**.
    
5.  Enter your **Password**.
    
6.  Select **Log in**.
    

[Clock in around a job site](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm#)

1.  Select the side bar.
    
2.  Select **My time clocks**.
    
3.  For the Location tracking consent, select the checkbox and **Accept & continue**.
    
4.  Select **Clock in**.
    

[Clock out around a job site](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Time/2026-R1-configure-geofencing-for-time-clocks-SIT.htm#)

1.  Select the side bar.
    
2.  Select **My time clocks**.
    
3.  Select **Clock out**.
    

## Good to know

-   You configure geofences and assign employees to them in Sage Intacct. Geofencing can only be used for time clocks in the Sage Intelligent Time and Expense mobile app.
    
-   Your user type, role, and permissions in the mobile app are the same as in Sage Intacct.
    
-   When employees consent to location tracking, the Sage Intelligent Time and Expense mobile app tracks their location while they’re clocked in and stops tracking when they clock out.
    
    -   If an employee attempts to clock in or out outside the virtual boundaries, the mobile app displays a warning message. This notifies them to clock in or out within those boundaries. Employees can still complete the action even if they are outside the geofence.
        
    -   The same behavior applies when employees clock in or out of break.
        
    -   **The warning message**: "You are currently outside the defined job site. This clock-in will proceed but may be reviewed by your supervisor."
        

## Permissions and other requirements

| Subscription | A subscription to at least one of the following Sage Intacct applications is required:                                                                                                                                                                                                   Time and Expenses                                                                                                                                                                                                       Project Costing (includes Time application)                                                                                                                                                                                                       Project Costing and Billing                                                                                                                                                                                                       Grant Costing and Billing                                                                                                                                                                                                       Sage Intacct Construction |
| --- | --- |
| Regional availability | United States |
| User type | Business                                                             Project Manager                                                             Employee |
| Permissions | Time                                                                                                                                                                                                   My timesheets: List, View, Add, Edit                                                                                                                                                                                                       Time preferences: View |
| Configuration | Turn on Sage Intelligent Time |
