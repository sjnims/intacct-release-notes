---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-ap-other-updates.htm
release: 2026-R3
extracted: 2026-07-27
title: "Other updates in Accounts Payable"
---

# Other updates in Accounts Payable

This release includes the following updates to improve your Accounts Payable experience.

## Simplify bank file remittance email setup

Set up bank file remittance emails more efficiently with default AP remittance templates and entity-level merge fields to include entity-specific information. These enhancements help organizations create localized remittance communications and manage them more consistently across entities.

### Key benefits

- **Faster setup**: Use preconfigured AP remittance email templates as a starting point instead of building templates from scratch.

- **Localized communication**: Use region-specific default templates designed for local business communications.

- **Entity-level information**: Include entity-specific details, such as company name, address, and contact information, in remittance emails.

- **Simplified management**: Manage remittance communication more consistently across multi-entity environments.

### Good to know

- Remittance email templates now support additional entity-level merge fields, including company and contact information.

- Default AP remittance templates are provided as a starting point for customization.

- These enhancements apply to bank file remittance communications and do not affect check remittance.

[Permissions and other requirements](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-ap-other-updates.htm#)

| Subscription          | Accounts Payable Administration Company                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                            |
| User type             | Business user with admin privileges Business                                                                           |
| Permissions           | Administration Application subscriptions: List, View, Configure Company Email templates: List, View, Add, Edit, Delete |
| Configuration         | Download default email templates on the Accounts Payable configuration page.                                           |

## Make limited edits to on-hold and billed items

Update bill status more efficiently without creating unnecessary approval cycles.

### Key benefits

- **Greater flexibility**: Update bill status without reversing or recreating transactions.

- **Fewer approval delays**: Eligible edits do not restart the approval process.

- **Protected financial integrity**: Financial amounts and accounting data remain unchanged.

### What's changed

Update eligible nonfinancial fields on posted or billed transactions while preserving the accounting impact of the bill. For example, place a bill on hold or remove an existing hold without reopening the bill for approval.

### Good to know

Only supported fields are editable. Changes to financial data are still restricted. Changes to bills related to customer refunds are also restricted.

[Permissions and other requirements](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-ap-other-updates.htm#)

| Subscription          | Accounts Payable                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                |
| User type             | Business                                                                                                   |
| Permissions           | Bills: List, View, Edit                                                                                    |
| Restrictions          | Changes to financial data are not supported Changes to bills related to customer refunds are not supported |
