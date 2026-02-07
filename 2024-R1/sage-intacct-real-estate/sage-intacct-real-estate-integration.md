---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Sage_Intacct_Real_Estate/sage-intacct-real-estate-integration.htm
release: 2024-R1
extracted: 2026-02-07
title: "Enhanced integration with Sage Intacct Real Estate"
---

# Enhanced integration with Sage Intacct Real Estate

You no longer need to switch back and forth between Sage Intacct and Sage Intacct Real Estate. Access Real Estate directly from the Intacct applications menu.

## Details

Sage Intacct Real Estate is now an option on the Company Subscriptions page. Enable the subscription to add Real Estate to the Intacct applications menu. After enabling the subscription, grant permissions to determine who can access the individual items in the Real Estate menu.

![The All tab on the Real Estate application menu.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-sire-app-menu-all_865x390.png)

## How it works

Enable the subscription.

1. Go to **Company** > **Admin** \> **Subscriptions**.
2. Select the **Real Estate** slider so that it turns green.
3. Select **Done**.

## Set up permissions

Sage Intacct Real Estate permissions set in Sage Intacct determine which menu items users can access from the Intacct application menu.

1. Go to the Permissions page.

    The steps to access this page vary depending on whether your company is using role-based permissions or user-based permissions. For details, see one of the following topics:
    - [Assign permissions to roles](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_roles)
    - [Assign permissions to users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_permissions_users)

2. In the row for Real Estate, select **Permissions**.

    Each item on the Real Estate menu has a corresponding Menu checkbox.

3. Select the appropriate **Menu** checkboxes to give access to the role or user.
4. Select **Save** and then select **Save** again.

## Other recent updates

The enhanced integration isn't the only new feature! The following enhancements have been added to Sage Intacct Real Estate.

- **Flexible transaction posting:** You can now choose between posting transactions by the Entity dimension only or by the Property at the Location dimension, providing you with increased flexibility in managing your financial data.
- **Property setup with Department dropdown:** The new Department dropdown in the Property setup provides additional categorization options to tag accounts payable transactions.
- **Export reports to Excel:** You can now export the following reports to Excel for easy analysis and sharing of crucial financial insights.
  - Standard Rent Roll Report
  - Generate Schedule Charges

- **Detailed invoice information:** Each invoice now populates the property name and address to provide recipients with a comprehensive overview of the associated property details.
- **Diversified calculation types for late charges:** You now have the flexibility to choose from additional calculation types for late charges so that you can tailor late payment penalties to suit your specific needs.

## Requirements

| Subscription          | Real Estate                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada United States                                                                                                                                       |
| User type             | Business user with admin privileges to give access                                                                                                         |
| Permissions           | Menu option for each feature to determine whether it appears on the Applications menu                                                                      |
| Configuration         | Enable the Real Estate subscription in Intacct. Add the URL to the allowlist: <https://app.sagerealestate.us/> Set all security options for the URL to true. |
| Implementation        | Requires: Subscription in Intacct Configuration and setup in Intacct                                                                                       |
