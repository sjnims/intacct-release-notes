---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Platform_Services/2024-R1-API-usage-dashboard-consoles-p.htm
release: 2024-R1
extracted: 2026-02-07
title: "API usage dashboard for consoles"
---

# API usage dashboard for consoles

Platform services, customization, and extensions

In 2023 Release 4, we announced the API usage dashboard for companies. Now, we're excited to announce that the dashboard is also available for consoles.

The API usage dashboard for consoles provides a comprehensive view for monitoring and analyzing API activity across all your companies in a console. Console users can also use it to quickly identify issues and optimize API integrations.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-api-usage-dashboard-consoles.jpg)

## Details

The API usage dashboard includes API transactions originating from Web Services and AJAX calls for the current month and the previous 3 months. These transactions can be made by custom integrations, partner integrations, or by Sage Intacct's applications.

[What's an API transaction?](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Platform_Services/2024-R1-API-usage-dashboard-consoles-p.htm#)

Sage Intacct defines API transactions as follows:

**For write methods**

- Each record that's created, updated, or deleted counts as 1 transaction. Records include Intacct standard objects, such as customer and GL batch, and custom objects.
- Transaction records, such as bills and invoices that combine headers and line items in a single API method, count as 1 transaction, even if the record has multiple line items.
- Complex records, such as contracts and contract lines that have separate API methods for their headers and line items, count each method call as 1 transaction.

**For read methods**

- Each call of a read method counts as 1 transaction, regardless of the number of records returned.
-  Sometimes, a read method can return multiple pages of records.  In this case, the readMore method is used to return additional pages.  Each call of readMore counts as 1 transaction.

The following features are available on the API usage dashboard for consoles, in addition to the features available on the [API usage dashboard for companies](https://www.intacct.com/ia/docs/en_US/releasenotes/2023/2023_Release_4/Company_and_Administration/2023-R4-view-api-usage.htm):

- Filter the dashboard by Company
- Filter the dashboard by Company type
- View the total number of companies in your console
- View API transactions by company

## How it works

The dashboard is accessible by default for users with admin privileges.

- In a console, go to **My practice** > **All** > **Usage metrics** > **API usage**.

## Requirements

| Subscription          | Company                             |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Administration API usage: View      |
