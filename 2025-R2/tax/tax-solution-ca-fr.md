---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Tax/2025-R2-tax-solution-CA-FR.htm
release: 2025-R2
extracted: 2026-02-07
title: "Support for Canadian Sales Tax in French"
---

# Support for Canadian Sales Tax in French

[Canadian regional support](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=region-overview-Canada)

[Edit tax objects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_Tax_Objects)

Taxes

To support multilingual requirements in Canada, we added French versions of the tax details and schedules that you can import to use with the Canadian Sales Tax standard tax solution.

## Details

The Canadian French tax details file and tax schedules file contain custom tax objects that you can add to your standard Canadian tax solution. You can use them with the tax objects in that tax solution for a bilingual experience. If you want a greater level of customization, you can choose to make some tax objects inactive. This means they will not be visible in filter or selection lists, but they will not be removed from Intacct or existing transactions where they've been used.

## How it works

### Step 1. Install the Canadian French tax object files

1.  Go to the [Canada regional page](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=region-overview-Canada) in the help center.
    
2.  In the Imports section, download the Canadian French tax details file and tax schedules file.
    
3.  Go to **Taxes** > **Setup** > **Input taxes** > **Details** and select **Import**.
    
4.  Use the **Choose File** button to select the tax details file to import.
    
5.  Select **Import**.
    

Repeat this process in **Taxes** > **Setup** > **Input taxes** > **Schedules** for the tax schedules file. You do not need to repeat the import process for Output taxes. The files include a column that indicates the tax type, so you only need to import each file one time.

### Step 2. Optionally, set tax objects to inactive

1.  Go to **Taxes** > **Setup** > **Input taxes** > **Details**.
    
2.  Use the **Tax solution** field to filter the list to show only Canadian Sales Tax - SYS tax details.
    
3.  Find the tax details that you want to make inactive and select **Edit**.
    
4.  In the **Status** dropdown, select **Inactive**.
    
5.  Select **Save**.
    

Repeat these steps for all duplicate tax details in **Input taxes** and **Output taxes**. Then repeat these steps for all duplicate tax schedules in **Input taxes** and **Output taxes**.

When you set a tax object to inactive, it hides the inactive objects in filter and selection lists. It does not remove them from the tax solution. This allows them to remain in use in existing transactions. You can make a tax object active again at any time.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | Canada |
| User type | Business |
| Permissions | Taxes                                                                                                                                      Tax solutions: List, View, Add, Edit, Delete |
