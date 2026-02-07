---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Accounts_Payable/2025-R2-ap-special-chars-in-fields.htm
release: 2025-R2
extracted: 2026-02-07
title: "Special characters restricted in certain fields"
---

# Special characters restricted in certain fields

[Field descriptions: Terms](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_terms_fbf)

[Field descriptions: AP account labels](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Account_labels_fbf)

Accounts Payable

We've updated the types of characters allowed in specific fields. The following special characters are not supported:

``< > @ # & " \ ' ` ; =``

This change affects only the following fields:

| Record type      | Field name       |
| ---------------- | ---------------- |
| AP term          | Name             |
| AP account label | AP account label |

## Details

If you try to save an AP term or AP account label with one of these special characters, Sage Intacct gives you an error message. To save your record, just remove the special character first.

If you're already using one of these characters, no immediate action is required. However, if you edit the record in the future, you'll need to remove the special character before you save your changes.

## Permissions and other requirements

| Subscription          | Accounts Payable                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Regional availability | All regions                                                                                |
| User type             | Business                                                                                   |
| Permissions           | Accounts Payable AP account labels: List, View, Add, Edit AP terms: List, View, Add,  Edit |
