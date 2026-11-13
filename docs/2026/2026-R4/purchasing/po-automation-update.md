---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-R4-po-automation-update.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other enhancements to AP Automation with Purchasing"
---

# Other enhancements to AP Automation with Purchasing

[About AP Automation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_bill_automation)

[About AP Automation with Purchasing](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_PO_auto_match)

[Taking advantage of AP Automation (5:45)](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-R4-po-automation-update.htm#)

purchasing

This release includes the following updates to improve your AP Automation with Purchasing experience.

## Create automation transactions at the top level while maintaining entity coding

Admins can now configure AP Automation with Purchasing to create entity-emailed transactions at the top level while maintaining entity-specific coding. This supports multi-entity workflows and gives you control over how line locations are assigned.

When transactions are created at the top level, select how locations are assigned:

- **Entity associated with email mailbox** uses the entity linked to the mailbox.

- **Predicted entity** uses the entity predicted from transaction content.

  If a predicted entity cannot be determined, Sage Intacct uses the entity associated with the email mailbox.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-R4-po-automation-update.htm#)

| Subscription          | Accounts Payable AP Automation Purchasing                                                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                             |
| User type             | Business user with admin privileges Business                                                                                                                                            |
| Permissions           | Accounts Payable Automated transactions: List Bills: List, View, Add, Edit, Delete, Post Purchasing Automated transactions: List Purchasing transactions: List, View, Add, Edit, Delete |
| Requirements          | This feature is not supported for entity-restricted transaction definitions.                                                                                                            |

## Memo predictions for automated purchasing transactions

PO Automation now populates memo fields using descriptions extracted from uploaded documents, reducing manual entry while preserving document-specific information in Purchasing transactions.

- **Preserve document details**: Capture descriptions from uploaded documents instead of relying only on default item descriptions.

- **More informative transactions**: Provide additional context within Purchasing transactions to support review and approval workflows.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-R4-po-automation-update.htm#)

| Subscription          | Accounts Payable AP Automation Purchasing                                                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                   |
| User type             | Business user with admin privileges Business                                                                                                                                                                                  |
| Permissions           | Accounts Payable Automated transactions: List Bills: List, View, Add, Edit, Delete Purchasing Automated transactions: List Purchasing transactions: List, View, Add, Edit, Delete                                             |
| Restrictions          | Memo population is available only for uploaded documents. Documents submitted through email continue to use the existing processing behavior. Existing header-level memo behavior remains unchanged for matched transactions. |

## Automated purchasing transactions honor inherited document numbers

When a transaction definition is configured to inherit the source document number, AP Automation with Purchasing now honors that setting. Generated transactions use the document number from the matched source transaction instead of being assigned the next available document number.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Purchasing/2026-R4-po-automation-update.htm#)

| Subscription          | Accounts Payable AP Automation Purchasing                                                      |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                    |
| User type             | Business user with admin privileges Business                                                   |
| Permissions           | Purchasing Automated transactions: List Purchasing transactions: List, View, Add, Edit, Delete |
