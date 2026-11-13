---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm
release: 2026-R4
extracted: 2026-11-13
title: "Updates in Sage Expense Management"
---

# Updates in Sage Expense Management

[Sage Expense Management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Sage_expense_management_LP)

[Set default tax groups for UK tax rates](https://www.fylehq.com/help/en/articles/16187541-set-default-tax-groups-for-uk-tax-rates)

[Configuring a policy to mandate receipts](https://www.fylehq.com/help/en/articles/8523314-configuring-a-policy-to-mandate-receipts)

[Automatic Approvals on Sage Expense Management](https://www.fylehq.com/help/en/articles/13608392-automatic-approvals-on-sage-expense-management)

Expenses

Sage Expense Management (SEM) now includes enhancements that simplify expense capture, mileage tracking, policy management, approval workflows, and accounting integration setup.

This release also includes new capabilities for UK organizations, including receipt and VAT data extraction and UK-specific mileage workflows.

## Extract receipt and VAT data from GBP receipts

Reduce manual expense entry with receipt data extraction for GBP organizations. Sage Expense Management can now extract key expense and VAT information from uploaded GBP receipts and automatically populate it on the expense for you to review.

### Key benefits

- **Reduce manual data entry**: Automatically extract the merchant, amount, currency, date of spend, VAT rate, and VAT amount from GBP receipts.

- **Simplify VAT capture**: Use configured default tax groups to auto-populate VAT information for supported UK tax rates.

- **Keep users in control**: Review and update extracted expense and tax information before submitting the expense.

### How it works

When a GBP receipt is uploaded, SEM extracts the available expense information and auto-populates the corresponding fields.

For VAT information, admins configure one default tax group for each supported UK VAT rate: **0 percent (%)**, **5%**, and **20%**. When SEM identifies a supported VAT rate and VAT amount on a receipt, it uses the default tax group configured for that rate to populate the tax information.

### Good to know

Spenders must enable data extraction in their settings for the web and mobile apps. VAT information is auto-populated only when a default tax group is configured for the corresponding tax rate. If a default tax group is disabled, VAT information for that rate stops auto-populating until another default is configured.

Only one tax group can be configured as the default for each VAT rate. Updates to a default apply only to receipts processed after the change, but do not update existing expenses.

For more information, go to [Set default tax groups for UK tax rates](https://www.fylehq.com/help/en/articles/16187541-set-default-tax-groups-for-uk-tax-rates).

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm#)

| Subscription                       | Sage Expense Management                                                                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | United Kingdom                                                                                                                                |
| Dependencies or other requirements | Organization home currency must be GBP. Admins must configure default tax groups for 0%, 5%, or 20% VAT to auto-populate VAT for those rates. |

## Manage UK mileage with vehicle-based rates and passenger mileage

SEM now supports mileage workflows designed for UK organizations, including vehicle-based mileage rates and passenger mileage.

This provides more flexibility for organizations that use mileage structures based on vehicle characteristics and passenger travel.

### Key benefits

- **Configure mileage rates by vehicle**: Set up rates based on factors, such as vehicle ownership, vehicle type, fuel type, engine capacity, and charging location.

- **Simplify mileage submission**: When creating an expense, spenders see only the vehicle and mileage rates enabled by admin.

- **Track passenger mileage in the same expense**: Include eligible passenger mileage without creating a separate claim.

### What's changed

Admins can now configure mileage rates using:

- Vehicle ownership: Personal or company owned

- Vehicle type: Car, motorcycle, or bicycle

- Fuel type: Petrol, Diesel, LPG, or Electric

- Charging location for electric vehicles

These options support mileage structure, such as HMRC AMAP and Advisory fuel rates. Admins continue to maintain rate values.

Admins can also enable **Passenger Mileage** to configure passenger rate. When enabled, spenders can indicate that they carried passengers with support for up to six passengers.

### How it works

When creating a mileage expense, spenders select the relevant vehicle ownership, vehicle, and mileage rate from the options configured by admin.

For passenger mileage, SEM calculates the passenger amount using the travel distance, passenger count, and configured passenger rate. Basic mileage, passenger mileage, and the total mileage amount are stored separately while remaining part of the same expense.

### Good to know

UK mileage is enabled by default for **new GBP organizations in the EU production environment**. Existing GBP organizations continue to use basic mileage for now, while organizations with other home currencies continue to use basic mileage.

The new fields are also available in Manage Columns, filters, and export configurations.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm#)

| Subscription          | Sage Expense Management |
| --------------------- | ----------------------- |
| Regional availability | United Kingdom          |

## Simplified Sage Intacct integration setup

We've made several improvements to the Sage Intacct integration to make configuration easier to understand and help admins focus on the settings relevant to their organization.

### Key benefits

- **Reduce unnecessary configuration**: View export settings relevant to the payment modes your organization uses.

- **Find related settings more easily**: Related configuration options are now grouped together.

- **Simplify** vendor **setup**: Manage vendor import and vendor creation preferences from one place.

- **Understand mappings more clearly**: Get greater visibility into how expense types and GL accounts are mapped and used.

### What's changed

Export settings now reflect the configured payment mode for the organization. For example, organizations using only corporate card expenses see corporate card export settings, while organizations using only reimbursable expenses see reimbursable export settings.

We also moved selected settings so that related configuration appears together. **Auto Sync Payment Status** and **Merge Credits into a Single Line** now appear under reimbursable export settings for applicable integrations.

Vendor configuration has also been simplified. Admins can now manage vendor import and automatic vendor creation preferences together under Import Settings.

For applicable mixed export configurations, admins can now view **Expense Type to GL Account** mapping directly within the integration. We've also added more in-product guidance for settings, such as default corporate card selection.

### Good to know

Some of these improvements also apply to other accounting integrations where relevant. The individual configuration changes vary by integration.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm#)

| Subscription          | Sage Expense Management                 |
| --------------------- | --------------------------------------- |
| Regional availability | All regions                             |
| Implementation        | Requires a subscription in Sage Intacct |

## More flexible policy configuration

SEM now gives admins more flexibility when configuring expense policies, including merchant-based receipt requirements and greater control over policy violation reasons.

### Key benefits

- **Apply receipt requirements more precisely**: Include or exclude specific merchants from receipt-mandatory policies.

- **Capture better context for policy violations**: Require spenders to provide a reason when an expense violates applicable non-receipt policies.

- **Improve aggregate policy accuracy**: Evaluate aggregate limits using the payment mode and custom fields configured for the policy.

### What's changed

Admins can now add **Merchant** as a condition for receipt-mandatory policies. You can include or exclude one or more merchants, and use either predefined merchants or manually entered merchant names.

Merchant conditions can also be combined with other policy conditions, such as Amount, Projects, and Cost Center. For example, you can require receipts for all merchants while excluding selected merchants that typically do not provide receipts.

For non-receipt policies, admins can now decide whether providing a reason for a policy violation is optional or mandatory. When reasons are mandatory, manually created expenses cannot be saved until a reason is provided. Eligible expenses created through integrations are blocked until the spender includes a reason.

Aggregate policies now evaluate only expenses that match the payment mode configured for the policy instead of considering expenses across all payment modes. The same behavior applies to configured custom fields.

### Good to know

Merchant conditions work alongside other configured conditions. A receipt policy is applied only when all applicable conditions are met.

For more information, go to [Configuring a policy to mandate receipts](https://www.fylehq.com/help/en/articles/8523314-configuring-a-policy-to-mandate-receipts).

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm#)

| Subscription          | Sage Expense Management |
| --------------------- | ----------------------- |
| Regional availability | All regions             |

## Automatic Approvals now available for Growth plan organizations

Growth plan organizations can now use Automatic Approvals to automatically approve eligible expense reports based on an admin-defined threshold.

Previously, Automatic Approvals were available only as part of the broader approvals functionality.

### Key benefits

- **Reduce routine approval work**: Automatically approve eligible, low-risk expense reports.

- **Keep controls in place**: Reports must continue to meet existing eligibility requirements before they can be automatically approved.

- **Set approval limits**: Define the maximum report amount that can be automatically approved.

### What's changed

Growth plan admins can now access Automatic Approvals from **Admin Settings** > **Workflows** > **Approvals**.

Admins can:

- Turn Automatic Approvals on or off.

- Set a threshold amount for reports that can be automatically approved.

Other advanced approval capabilities continue to remain unavailable on the Growth plan.

### Good to know

Existing eligibility inspections continue to apply. Reports are not automatically approved when they:

- Have active policy violations.

- Contain possible duplicate expenses.

- Exceed the threshold configured by admin.

For more information, go to [Automatic Approvals on Sage Expense Management](https://www.fylehq.com/help/en/articles/13608392-automatic-approvals-on-sage-expense-management).

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Expenses/2026-R4-updates-expense-management.htm#)

| Subscription          | Sage Expense Management |
| --------------------- | ----------------------- |
| Regional availability | All regions             |
