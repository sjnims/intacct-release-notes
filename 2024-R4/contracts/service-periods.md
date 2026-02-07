---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Contracts/2024-R4-service-periods.htm
release: 2024-R4
extracted: 2026-02-07
title: "Service periods"
---

# Service periods

[Service periods](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Service_periods_contracts)

Contracts

We're excited to announce we've added service periods to Contracts. Service period dates now automatically populate and seamlessly flow from contracts to invoice generation. This means that customers can see exactly what period they’re being billed for.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-service-period-billing-schedule.png)

Service periods represent the time frames during which your business's services are provided or consumed.

## Details

-   Two new fields are now available on contract billing schedule entries and contract usage entries: **Service period start date** and **Service period end date**.
    
-   These fields automatically populate with default values based on the information provided in contract line and usage records. You can edit the dates throughout the workflow for added flexibility.
    
-   Existing contract lines and usage records will not have the default service period date fields populated, however you can easily add missing dates during invoice generation.
    
-   The service period dates carry through to the invoice, so customers can see the associated service periods for each line.
    

## How it works

You can view and edit service period dates at multiple stages of your workflow and set up printed invoices to display them.

### View and edit service period dates for a billing schedule

Service period date fields are available on billing schedules. When creating a contract line, you can preview the default service period dates for the billing schedule by selecting **View schedule**.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-preview-schedule.png)

After the contract line is created, you can view the billing schedule to see the service period dates and edit the dates to suit your needs.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-billing-schedule.png)

### View and edit service period dates for usage records

Service period date fields are available on usage records. When adding usage, the service period date fields automatically populate with the start and end dates of the month corresponding to the usage date you selected. You can modify the dates to suit your needs.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-usage-record.png)

You can also view the service period dates for all usage records on the Usage tab of contract lines.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-usage-all.png)

### Override and preview service period dates when generating invoices

When generating invoices, you can choose from the following options:

-   **Do not override**: Keep the existing service period dates without making changes.
    
-   **Override missing dates only**: Add service period dates for entries that do not currently have them.
    
-   **Override all dates**: Replace all existing service period dates with new ones.
    

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-gen-invoices.png)

When reviewing an invoice, you can also preview the service period date fields for each contract billing schedule entry and contract usage entry.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-review-invoice.png)

### View and edit service period dates on a contract invoice

Service period date fields are available on contract invoices, provided the **Enable for contracts** option is turned on in the Order Entry transaction definition. The fields appear in the Show details section of entry rows.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-invoice_803x338.png)

If you use service periods frequently, you can move the date fields out of the Show details section and into the table row for easier access. Go to **More actions** > **Edit this page** to do so.

You can also edit the invoice to modify the service period dates, provided the Order Entry transaction definition is configured for editing.

### Set up printed invoices to display service periods

Service period date merge fields are available to add to printed document templates. We added a new sample printed document template to help you get started.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-cn-invoice-template.png)

1.  Go to **Platform Services** or **Customization Services** > **All** > **Printed doc templates**.
    
2.  For **Contracts Invoice - service period sample**, select **Template** to download the sample and modify it to suit your needs.
    
3.  Add a new printed doc template and select your modified file.
    
4.  Go to **Order Entry** > **Setup** > **More** > **Transaction definitions**.
    
5.  **Edit** the transaction definition that you want to use with service periods.
    
6.  For **Printed document template**, select your template that includes the new service period merge fields.
    
7.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Contracts                                                                 Customization Services or Platform Services |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business |
| Permissions | Contracts                                                                                                                                                                                                               Contract: List, View, Add, Edit, Post                                                                                                                                                                                                                   Generate invoices: Preview, Generate                                                                                                                                                                                                       Customization Services or Platform Services                                                                                                                                                                                                               Printed Document Templates: List, View, Add, Edit                                                                                                                                                                                                       Order Entry                                                                                                                                                                                                               Order Entry transaction definitions: List, View, Add, Edit                                                                                                                                                                                                                   Order Entry transactions: List, View, Add, Edit |
| Configuration | For service period dates to appear on invoices, the Enable for contracts option must be turned on in the Order Entry transaction definition. |
| CSV import | There are two new date fields on the Contract usage import template:                                                                                                                                                                                                               SERVICE\_PERIOD\_START                                                                                                                                                                                                                   SERVICE\_PERIOD\_END |
| Restrictions | This feature is only supported for contract lines where the Billing method is either Fixed price or Quantity-based. It is not supported for Project Time & Materials. |
