---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Tax/2026-R1-tax-avalara-exemption-use-code.htm
release: 2026-R1
extracted: 2026-11-13
title: "Exemption use codes and reporting location for Avalara AvaTax"
---

# Exemption use codes and reporting location for Avalara AvaTax

[Configure AvaTax in Sage Intacct](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Avalara_Application_Setup)

[Set up Order Entry for AvaTax](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_set_up_OE_for_AvaTax)

[Set up Purchasing for AvaTax](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=HDI_set_up_Purchasing_with_AvaTax)

Taxes

We’ve introduced two key enhancements to help customers manage their Avalara AvaTax integrations more effectively:

- Exemption use codes allow you to manage tax-exempt transactions by entering your Avalara exemption codes at the customer or contact level.

- Reporting location allows you to identify which reporting location applies for tax submissions, enabling location-based tax reporting.

These features are especially useful for businesses serving tax-exempt customers or operating in multiple locations, ensuring accurate tax records and filings.

## Key benefits

Exemption use code

- **Tax service integration**: Set default exemption codes for customers and contacts for entities that use Avalara AvaTax.

- **Improved tax capture**: Transactions for an exempt contact in Accounts Receivable and Order Entry are recorded as tax-exempt.

Reporting location

- **Enhanced regional tax reporting**: Supports location-based tax returns.

- **More flexibility**: Enables consolidated or multi-location reporting for states with different requirements.

## How it works

**Exemption use code**

You can enter exemption use codes in the Additional Information tab of customer and contact records. Intacct applies the default code to transactions for that contact.

For Accounts Receivable transactions, Intacct uses the exemption use code from the customer’s ship-to contact.

For Order Entry transactions, Intacct uses the exemption use code from the line level ship-to contact. If the line-level does not have a ship-to contact, it uses the exemption use code from the customer’s ship-to contact.

Reporting Location

For top level Order Entry and Purchasing transactions, Intacct uses the parent of the warehouse location entered in the first transaction line. If no warehouse location is entered, the reporting location defaults to the parent location.

For entity-level transactions, Intacct uses the entity location.

## Permissions and other requirements

| Subscription          | Accounts Receivable Order Entry Purchasing Taxes                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | United States                                                                                                                                 |
| User type             | Business                                                                                                                                      |
| Permissions           | Accounts Receivable Customers: List, View, Add, Edit Order Entry Customers: List, View, Add, Edit Purchasing Suppliers: List, View, Add, Edit |
| Restrictions          | You must create separate transactions for entities with different reporting locations when creating transactions at the top level.            |
