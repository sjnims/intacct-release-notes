---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-depreciation-roll-forward-report.htm
release: 2025-R2
extracted: 2026-02-07
title: "Depreciation Roll Forward report"
---

# Depreciation Roll Forward report

[Install the Fixed Assets Management reports package](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Install_FAM_reports_package)

[Depreciation roll forward report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Depreciation_roll_forward_report)

fixed assets management

We added a Depreciation Roll Forward report to the Fixed Assets Management reports package.

![Depreciation roll forward report.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-fam-roll-forward-report.png)

The Depreciation Roll Forward report provides a detailed view of changes in accumulated depreciation for your fixed assets over a specified period. It shows the beginning accumulated depreciation balance, depreciation expenses recorded during the period, and the ending accumulated depreciation balance, so you can reconcile differences.

## Details

This report is typically used by the following job functions:

-   AP Clerks
    
-   Fixed Assets Accountants
    
-   Fixed Assets Managers
    
-   Controllers
    

Common use cases for this report include the following:

-   Verify that depreciation transactions are properly recorded.
    
-   Support audits and ensure the accuracy of your balance sheet.
    
-   Analyze depreciation trends and understand how your asset base is evolving over time.
    

## How it works

First, install the reports package. Then, you can duplicate, customize, and add your custom report to the Fixed Assets Management application menu for easy access.

### Step 1. Install the reports package

If you previously installed the reports package, you'll need to reinstall it to access the new report.

1.  Depending on your subscriptions, do one of the following:
    -   Go to **Customization Services** > **All** > **Customization tools** > **Customization packages**.
    -   Go to **Platform Services** > **All** > **Customization tools** > **Custom packages**.
2.  Above the table, select **Package library**.
    
3.  Find Fixed Assets Management Reports in the list and select **Install**.
    
4.  Select **OK**.
    
    The sample reports from the package are added to the Custom Reports list in Reports, Customization Services, and Platform Services.
    

### Step 2. Duplicate the report, customize it, and add it to the application menu

You cannot modify the sample report directly. However, you can duplicate it and then customize the copy to suit your business needs. You can also add it to the Fixed Assets Management application menu.

1.  Depending on your subscriptions, do one of the following:
    -   Go to **Customization Services** > **All** > **Custom reports**.
    -   Go to **Platform Services** > **All** > **Custom reports**.
    -   Go to **Reports** > **All** > **Advanced** > **Custom reports**.
2.  In the Name field, search for Depreciation Roll Forward Report.
3.  Select **Duplicate**.
4.  Optionally, customize the report to suit your needs.
5.  On the last step, **Save and add to a menu**, do the following:
    1.  Enter a unique name for the report.
    2.  Select **Add to menu**.
    3.  For the Application, select **Fixed Assets Management**.
6.  Select **Save**.
7.  Refresh the page.

### Step 3. Run the report

If you added the report to the application menu in the previous step, you can run it directly from Fixed Assets Management. Otherwise, you can run custom reports from the Reports application.

1.  Do one of the following:
    
    -   Go to **Fixed Assets Management** > **All** > **Reports** > **Custom reports** and select the report.
        
    -   Go to **Reports** > **All** > **Advanced** > **Custom reports** and select **Run** next to the report.
        
2.  Select a reporting period relative to the As of date, or enter Start and End dates.
    
    If you enter values in all of the time period fields, Sage Intacct uses the start and end dates.
    
3.  Optionally, customize the format of the report.
    
    1.  For **Page orientation**, choose whether print versions of this report use a **Portrait** or **Landscape** page layout.
        
    2.  For **Show details**, select **Yes** to display the detail lines that make up the report. Select **No** to display only subtotal and total calculation lines.
        
    3.  The remaining format options are for viewing the report as a graph. [Learn more about graphs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_graph_from_custom_report).
        
4.  Optionally, customize the report titles, which apply only to print versions of this report.
    
    [How to add a title, subtitle, and footer to the report](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-depreciation-roll-forward-report.htm#)
    
    1.  Enter the title in the **Report Title 1** box.
    
    This title appears in large type at the top of the page, directly under your company name,
    
    3.  Enter the subtitle in the **Report Title 2** box.
        
        This subtitle appears in smaller type, directly beneath the main title.
        
    4.  Enter the footer text in the **Footer Text** box.
        
        Footer text appears at the bottom center of the report.
        
    
    You can use up to 80 characters, including spaces, in each title, subtitle, and footer.
    
5.  Choose an option to view the report:
    
    -   Select **View** to view the report in your browser as an HTML page.
    -   Select **Print** to view the report as a printable PDF file.
    -   Select **Export** to download the report in a different format.

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges (for installing the reports package)                                                                 Business (for running a report) |
| Permissions | Customization Services or Platform Services                                                                                                                                                                                                               Custom reports: List, View,  Add, Edit |
