---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Accounts_Payable/2024-R1-ap-restrict-contacts.htm
release: 2024-R1
extracted: 2026-02-07
title: "Simplify the list of contacts available in transaction dropdowns"
---

# Simplify the list of contacts available in transaction dropdowns

Limit the list of selectable contacts for an Accounts Payable transaction to those associated with a vendor record or those associated with the vendor selected for the transaction. This simplifies the list of contacts available when entering a transaction and reduces the possibility for data entry errors.

## Details

Previously, when entering an Accounts Payable transaction, your only option was to select from all active contacts in the Pay to and Return to dropdown lists. With this new configuration setting, you can select which contacts are available for selection.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-restrict-vendor-contacts-setting.png "Contact settings with available options.")

Options include the following:

- **Show all contacts**: Does not restrict the list. All contacts in your company are available for selection.
- **Restrict to vendor contacts**: Restricts the list of available contacts to only those associated with vendor records. Select this option when you want to use parent or child vendor contacts that are not associated with the selected vendor record.
- **Restrict to contacts associated with selected vendor**: Restricts the list of available contacts to only those associated with the selected vendor. The contact must be associated with the vendor you select before creating a transaction.

After you change your configuration to restrict contacts, this restriction is enforced for both creating new and editing existing transactions. This means that if you edit an older transaction that includes a contact that does not meet the current restriction criteria, you cannot save your edits until you update the contact.

## How it works

Set up contact restrictions in Accounts Payable to limit the contacts that appear in dropdowns.

1. Go to **Accounts Payable** > **Setup** > **Configuration**.
2. Find the **Restrict contacts in transactions** setting.
3. Select one of the following options:
    - Show all contacts
    - Restrict to vendor contacts
    - Restrict to contacts associated with selected vendor

4. Select **Save**.

    A message appears notifying you that changing this setting will impact the ability to edit existing transactions. Select **OK** to continue and save your changes.

## Requirements

| Subscription          | Accounts Payable Administration                                   |
| --------------------- | ----------------------------------------------------------------- |
| Regional availability | All regions                                                       |
| User type             | Business user with admin privileges                               |
| Permissions           | Administration Application subscriptions: Configure               |
| Implementation        | This option defaults to Show all contacts for existing companies. |
