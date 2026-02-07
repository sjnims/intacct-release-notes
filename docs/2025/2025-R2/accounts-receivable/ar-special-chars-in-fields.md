---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Receivable/2025-R2-ar-special-chars-in-fields.htm
release: 2025-R2
extracted: 2026-02-07
title: "Special characters restricted in certain fields"
---

# Special characters restricted in certain fields

[Field descriptions: Terms](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=FBF_ar_terms)

[Field descriptions: AR account labels](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Field_descriptions_ar_account_labels)

[Customer types](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_A_Customer_Type)

Accounts Receivable

We've updated the types of characters allowed in specific fields. The following special characters are not supported:

``< > @ # & " \ ' ` ; =``

This change affects only the following fields:

| Record type      | Field name       |
| ---------------- | ---------------- |
| AR term          | Name             |
| AR account label | AR account label |
| Customer type    | Customer type    |

## Details

If you try to save an AR term, AR account label, or Customer type with one of these special characters, Sage Intacct gives you an error message. To save your record, just remove the special character first.

If you're already using one of these characters, no immediate action is required. However, if you edit the record in the future, you'll need to remove the special character before you save your changes.

## Permissions and other requirements

| Subscription          | Accounts Receivable                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                         |
| User type             | Business                                                                                                                            |
| Permissions           | Accounts Receivable AR account labels: List, View, Add, Edit AR terms: List, View, Add,  Edit Customer types: List, View, Add, Edit |
