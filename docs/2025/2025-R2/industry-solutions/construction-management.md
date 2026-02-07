---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Industry_solutions/2025-R2-construction-management.htm
release: 2025-R2
extracted: 2026-02-07
title: "Enhancements in Sage Construction Management"
---

# Enhancements in Sage Construction Management

[Integration tips for Sage Construction Management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Tips_Integrate_SageConstrMgt)

CONSTRUCTION

Sage Construction Management is an all-in-one cloud solution that provides a complete set of project management features. This solution aligns your operations and finance data so you can win more business and execute projects more efficiently. For more information, visit the [Sage Construction Management web page](https://www.sage.com/en-us/products/sage-construction-management/).

## Details

In this release we've made enhancements to Sage Construction Management in the following areas.

### Browser

- New filter and column options are available in the Companies listing page.
- The company code has been added in the Company dropdown when the AccountingLink is set to Sage Intacct, Sage 300 Construction and Real Estate, or Sage 100 Contractor.
- The Document Viewer now supports direct opening of files up to 20MB, prompts a confirmation warning for files between 20MB and 50MB, and informs the user to download files larger than 50MB.
- The Items tab of an estimate provides a more streamlined and user-friendly experience.
- You can now specify the color and finish for work and estimate items.
- You can now specify the **Prime Retainage %** for both completed work and stored materials for new prime contracts.
- The new detail report template for Cost Plus contracts groups prime invoice details by transaction reference.
- A new **Owner PO Ref** field has been added to prime contracts to hold the owner purchase order (PO) reference number linked to the prime contract.
- The Photos and Albums tabs in the project Photos page have been updated to improve scalability and usability for projects with a large number of photos.
- The Procurement Overview page has been enhanced and reorganized into clear sections for improved navigation and user experience.
- There's a new column in importing job cost codes for anticipated costs of a project: Cost Budget - (Cost To Date + Comm. + Ant.)
- You can now specify the **Sub Retainage %** for both completed work and stored materials for new prime contracts.
- For change orders (COs) and change proposal requests (CPRs) with a cost budget amount set to 0.00, the **Margin % (Profit/Sell)** under the **Current CO/CPR Amount and Cost Budget** section is now 100%.
- The **PO Financial Information** link has been renamed to **PO Status Summary** and the **Subcontract Financial Information** link has been renamed to **Subcontract Status Summary**.
- New and updated detailed analytic reports are available in the Analytical Reports section of the ERP JTD Cost tab.
- The V3 Project Financial endpoints are now available in the external API.

### Mobile app

- You can now enter the required values in the **Quantity** or **Unit Price** fields in the Add/Edit Items section without having to clear the fields first.

### AccountingLink with Sage Intacct

- New links are available on the Project Menu and the Procurement Overview page to view the Job to Date (JTD) cost details from Sage Intacct.
- You can map Sage Construction Management tax codes to Sage Intacct tax schedules for Accounts Payable transactions.
- If Posting Preferences are set up to enable posting to general ledger (GL) budgets for estimates, contracts, or both, you must specify the GL budget ID fields.
- When posting a project with Post to GL enabled for estimates and contracts, the estimated start and finish dates are required.
- You can now view the required fields that have not been added in Posting Preferences.
- You can now delete a Sage Intacct change request when an error occurs with the change order.
- A warning message appears in the Accounting Status section of transactions that have been unlinked.
- Multiple sections have been renamed in the AP and AR tabs of the Posting Preferences.

### AccountingLink with Sage 300 Construction and Real Estate

- You can now repost commitments in partially posted POs, subcontracts, and SCOs.
- You can now import prime contract items.
- You can now post change orders and prime invoices and manage their posting status.
- The required fields that have not been added in Posting Preferences are gathered in a popup and can be accessed through each Posting Preferences tab and set as needed.

### AccountingLink with Sage 100 Contractor

- Prime contract cost budgets can be reposted to Sage 100 Contractor.
- You can now post change order cost budgets and the total of prime invoices to Sage 100 Contractor.
- You can now integrate labor timecards with Sage 100 Contractor. You can select the required time types for Sage 100 Contractor using the Payroll Item Linking Preferences (such as overtime, double time, and others).
- If there are fields in the Posting Preferences that must be filled out before saving, the Missing Required Fields link appears, and you cannot save.
- A warning message appears in the Accounting Status section of transactions that have been unlinked.

### Other accounting links and integrations

- **AccountingLink for Sage 50 Canada**: The AccountingLink for Sage 50 Canada application has been rebranded and styled to match other Sage products.
- **AccountingLink for Quickbooks Online**: There is a new option to export prime contracts.
- **AccountingLink for Quickbooks Desktop**: The AccountingLink for QuickBooks Desktop utility has been rebranded and styled to match other Sage products.
- **AccountingLink for Xero**: For bills, prime invoices, and sub invoices, you can use the Export to Xero option from the Actions dropdown on the transaction's page to post the transaction to Xero.
- A new option in **Settings** allows for multiple DocuSign logins. Each user with a license can now log in to their own accounts.

## More information

- [Sage Construction Management web page](https://www.sage.com/en-us/products/sage-construction-management/): Learn how your organization can benefit from Sage Construction Management.
- [Construction Management Help Center](https://help.sagecm.corecon.com/Content/Home.htm): Learn how to use Sage Construction Management.
- Sign up for [training at Sage University](https://www.sageu.com/sagecm).

## Permissions and other requirements

Both Sage Intacct Construction and the Sage CM Accounting Link for Sage Intacct are required.

| Subscription          | Sage Construction Management Sage Intacct Construction                                          |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States                                                                  |
| Implementation        | Use the Sage Intacct Accounting Link (required) to integrate with Sage Construction Management. |
