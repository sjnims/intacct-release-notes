---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Accounts_Payable/2025-R1-ap-vendor-visibility-changes.htm
release: 2025-R1
extracted: 2026-02-07
title: "Changes to vendor visibility"
---

# Changes to vendor visibility

[Restrict a vendor to an entity or a department](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Managing_multiEntity_vendRestrictions)

Accounts Payable

We’ve made minor adjustments to the workflow on the Vendor visibility page and how you select restrictions on the vendor record.

## Workflow changes on the Vendor visibility page

When you select **Edit** for a vendor on the Vendor visibility page, Sage Intacct now opens the full vendor record, directly on the Restrictions tab. After you save or submit changes, you are returned to the Vendor visibility page.

If you have vendor approval enabled, any change to the vendor restrictions will initiate the approval process. All changes you make to restrictions are captured in the audit trail, which is accessible from the vendor record.

## User interface changes when selecting restrictions

Selecting locations or departments for vendor restrictions now works similarly to adding entries in the vendor contact list. Add a new restriction on an empty line by selecting a location or department from the dropdown list. If you run out of empty lines, select Add. To remove a line, select Delete.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-ap-vendor-visibilty-updates.png)

## Permissions and other requirements

| Subscription          | Accounts Payable                                   |
| --------------------- | -------------------------------------------------- |
| Regional availability | All regions                                        |
| User type             | Business                                           |
| Permissions           | Accounts Payable Vendors: List, View, Edit         |
| CSV import            | CSV import for vendor visibility remains the same. |
