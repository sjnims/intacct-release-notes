---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Industry_Solutions/2026-R4-sire-other-updates.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other updates in Sage Intacct Real Estate"
---

# Other updates in Sage Intacct Real Estate

[Sage Intacct Real Estate](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=si-real-estate)

INDUSTRY SOLUTIONS

In addition to the new [Property lease dimension for Sage Intacct Real Estate](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Industry_Solutions/2026-R4-sire-lease-dimension.htm), this release includes the following updates to improve your Sage Intacct Real Estate experience.

## Audit trail for properties, units, and leases

Review changes to Sage Intacct Real Estate setup records. For each change, the audit trail shows who made the change, when they made the change, where the change came from, and what values were updated.

### Key benefits

- View audit history directly from Property, Unit, and Lease record pages.
- Review key audit details including date, action, completed by, source, field, before value, and after value.
- Track changes made through the user interface, API, imports, and system jobs.
- Export audit trail records to CSV, Excel, and PDF for review, sharing, and compliance support.
- Reduce dependency on support or engineering teams when investigating unexpected setup changes.
- Support stronger operational controls around property, unit, and lease data.

## Enhanced role-based security

When using role-based permissions, administrators can now control access to features at a more detailed level.

### Key benefits

- Limit user access to only the modules and workflows relevant to their role.
- Reduce over-permissioned access and improve compliance controls.
- Hide or block restricted functionality so users have a clearer and safer working experience.

## Improved floorplan management

Improvements help you standardize floorplan setup, reduce duplicate data entry, and maintain more consistent unit information across properties.

### Key benefits

- Create and manage reusable floorplan templates.
- Assign floorplan templates to properties so each property can use the floorplans that apply to its unit mix.
- Associate units with the appropriate property floorplan for cleaner setup and reporting.
- Store structured floorplan details such as floorplan name, unit type, bedroom and bathroom count, square footage, occupancy limits, market rent, and amenities.
- Improve consistency across residential property setup, unit setup, leasing workflows, and reporting.
- Preserve and migrate existing unit floorplan data into the updated floorplan structure.

## Deposit interest accrual

Deposit interest accrual is the foundation for calculating and managing interest on tenant security deposits. A new batch workflow supports customers operating in jurisdictions where security deposit interest must be calculated, paid, refunded, or added back to deposit balances.

### Key benefits

- Configure eligible deposits and track the last interest accrual date.
- Calculate and process interest for multiple deposits in a single batch.
- Support interest calculations based on payment date or last interest accrual date, rather than invoice date.
- Support configurable interest rates, full-month or partial-month accrual, and 30-day month or actual-day proration.
- Refund accrued interest, issue tenant credits, or compound interest into the lease’s deposit balance.
- Preview deposit-level calculations and tenant totals before posting, with optional interest overrides enabled through company settings.
- Export interest accrual previews to PDF and Excel for review and reconciliation.
- Generate the related transactions and journal entries in Sage Intacct, and update accrual dates after successful posting.
- Generate printable tenant interest letters or email them after posting.

## Permissions and other requirements

| Subscription          | Sage Intacct Real Estate                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada United States                                                                                                                                              |
| User type             | Business user with admin privileges                                                                                                                               |
| Permissions           | Menu option for each feature to determine whether it appears on the Applications menu                                                                             |
| Configuration         | Enable the Real Estate subscription in Sage Intacct. Add the URL to the allowlist: <https://app.sagerealestate.us/> Set all security options for the URL to true. |
| Implementation        | Requires: Subscription in Sage Intacct Configuration and setup in Sage Intacct                                                                                    |
