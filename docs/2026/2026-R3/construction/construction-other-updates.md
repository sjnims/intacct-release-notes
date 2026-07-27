---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Construction/2026-R3-construction-other-updates.htm
release: 2026-R3
extracted: 2026-07-27
title: "Other updates in Sage Intacct Construction"
---

# Other updates in Sage Intacct Construction

[Edit a project](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Projects_edit_project "Edit a project")

[Enable retainage on vendor transaction definitions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Trans_def_retainage_vendors "Enable retainage on vendor transaction definitions")

Construction

This release includes the following updates to Construction-related features.

## New Site contact field in Projects

We added a **Site contact** field to the **Project information** page to track the physical address where work is performed, such as a job site, warehouse, or new building. This field provides greater flexibility for tracking physical project addresses and contact information separately from other project addresses.

![Project page with Site contact field highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-const-site-contact-project-page.png "Project page with Site contact field highlighted")

[Permissions and other requirements](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Construction/2026-R3-construction-other-updates.htm#)

| Subscription          | Construction Projects configured for Project costing and billing |
| --------------------- | ---------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                    |
| User type             | Business Construction Manager Project Manager                    |
| Permissions           | Projects: List, View, Add, Edit                                  |

## Flexible retainage posting for Purchasing transactions

You can now post retainage amounts to multiple General Ledger retainage offset accounts.

We've added two new checkboxes to the **General** tab of Purchasing transaction definitions:

- **Enable retainage** **transaction posting**: Lets you map retainage account and offset account combinations (debit and credit).

  [Details](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Construction/2026-R3-construction-other-updates.htm#)

  Selecting this checkbox enables the **Is retainage?** column on the **Transaction posting AP or GL account mapping** section of the **Posting configuration** tab so you can configure account mapping.

  This field is available only if you enable retainage and set posting to Accounts Payable or General Ledger.

- **Enable retainage additional posting**: Lets you map additional retainage account and offset account combinations.

  [Details](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Construction/2026-R3-construction-other-updates.htm#)

  Selecting this checkbox enables the **Is retainage?** column on the **Additional GL posting account mapping** section of the **Posting configuration** tab so you can configure account mapping.

  This field is available only if you enable retainage, set posting to Accounts Payable or General Ledger, and select **Enable additional posting**.

To use flexible retainage posting, define at least one retainage offset account. If no retainage offset accounts are defined, Sage Intacct defaults to the retainage offset account configured in Accounts Payable.

![Transaction definition setup page with flexible retainage posting settings highlighted](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-const-flex-retainage-txn-def-settings.png "Transaction definition setup page with flexible retainage posting settings highlighted")

For details on configuring retainage, see [Enable retainage for vendors](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enable_retainage_vendors "Enable retainage for vendors").

[Permissions and other requirements](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Construction/2026-R3-construction-other-updates.htm#)

| Subscription                       | Construction Projects configured for Project costing and billing Purchasing                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| User type                          | Business Business user with admin privileges (to configure flexible retainage posting) Project Manager Construction Manager                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Permissions                        | Purchasing PO transaction definitions: List, View,  Add, Edit, Delete                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Configuration                      | To configure retainage for vendors, see Enable retainage for vendors. To post retainage to Accounts Payable or General Ledger: On the applicable Purchasing transaction definitions, select to post to Accounts Payable or General Ledger, enable retainage, and enable retainage transaction posting. To post retainage to an additional Accounts Payable or General Ledger account: On the applicable Purchasing transaction definitions, select to post to Accounts Payable or General Ledger, enable retainage, enable additional posting, and enable retainage additional posting. |
| Dependencies or other requirements | On Purchasing transaction definitions: Template type must be Order or Invoice. Enable retainage transaction posting is available only if you enable retainage and select to post to Accounts Payable or General Ledger. Enable retainage additional posting is available only if you enable retainage, select to post to Accounts Payable or General Ledger, and select Enable additional posting.                                                                                                                                                                                      |
