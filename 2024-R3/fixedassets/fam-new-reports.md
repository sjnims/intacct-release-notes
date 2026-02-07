---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/FixedAssets/2024-R3-fam-new-reports.htm
release: 2024-R3
extracted: 2026-02-07
title: "New reports for Fixed Assets Management"
---

# New reports for Fixed Assets Management

[Install the Fixed Assets Management reports package](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Install_FAM_reports_package)

[Overview of Fixed Assets Management reports](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Overview_of_fixed_assets_reports)

[Fixed Assets Net Book Value report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Net_book_value_report)

[Fixed Assets by Employee report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Fixed_assets_by_employee)

[Fixed Assets by Location report](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Fixed_assets_by_location)

Fixed Assets Management

We added 3 new reports to the Fixed Assets Management reports package:

- Fixed Assets Net Book Value
- Fixed Assets by Employee
- Fixed Assets by Location

Now, you can gain deeper insights into your business's fixed assets and save time by using these new reports as a foundation for creating your own custom reports.

## Details

Our reports package is a good starting place to create your own custom reports. With this release, we've updated the reports package with the following new reports:

- **Fixed Assets Net Book Value:** Displays the total net book value of assets in each asset classification after accounting for accumulated depreciation and salvage value (if salvage value is considered for the selected book). It also shows the sum total net book value of all your assets.

  ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-FAM-NBV.png)

- **Fixed Assets by Employee:** Displays a list of assets grouped by employee, along with additional details about the assets.

  ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-FAM-by-employee.png)

- **Fixed Assets by Location:** Displays a list of assets grouped by location, along with additional details about the assets.

  ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-FAM-by-location.png)

## How it works

After you install the reports package, you can duplicate the sample reports, customize them, and then add your customized versions to the Fixed Assets Management application menu for easy access.

### Step 1. Install the reports package

If you previously installed the reports package, you'll need to reinstall it to access the new reports.

1. Depending on your subscriptions, do one of the following:
    - Go to **Customization Services** > **All** > **Customization tools** > **Customization packages**.
    - Go to **Platform Services** > **All** > **Customization tools** > **Custom packages**.
2. Above the table, select **Package library**.
3. Find Fixed Assets Management Reports in the list and select **Install**.
4. Select **OK**.

    The sample reports are added to the Custom Reports list in Reports, Customization Services, and Platform Services.

### Step 2. Duplicate and customize the reports

You cannot modify the sample reports directly. However, you can duplicate them and then customize the duplicate to suit your business needs.

1. Depending on your subscriptions, do one of the following:
    - Go to **Customization Services** > **All** > **Customization tools** > **Custom reports**.
    - Go to **Platform Services** > **All** > **Customization tools** > **Custom reports**.
    - Go to **Reports** > **All** > **Advanced** > **Custom reports**.
2. Enter "fixed assets" in the Name field to filter the list for Fixed Assets Management reports.
3. For the report you want to copy, select **Duplicate**.
4. **Optional:** Customize the report to suit your needs.
5. On the last step, **Save and add to a menu**, do the following:
    1. Enter a unique name for the report such as Net Book Value.
    2. Select **Add to menu**.
    3. For the Application, select **Fixed Assets Management**.
6. Select **Save**.
7. Refresh the page.

### Step 3. Run the reports

You can run custom reports from the application menu or the Reports center.

- Go to **Fixed Assets Management** > **All** > **Reports** > **Custom reports** and select the report you want to run.
- Alternatively, go to **Reports** > **All** > **Advanced** > **Custom reports** and select **Run** next to the report you want to view.

## Permissions and other requirements

| Subscription          | Fixed Assets Management Customization Services or Platform Services               |
| --------------------- | --------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                       |
| User type             | Business user with admin privileges Business                                      |
| Permissions           | Customization Services or Platform Services Custom reports: List, View, Edit, Add |
