---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Tax/2026-R1-tax-avalara-exemption-use-code.htm
release: 2026-R1
extracted: 2026-02-07
title: "Exemption use codes and reporting location for Avalara AvaTax"
---

# Exemption use codes and reporting location for Avalara AvaTax

We’ve introduced two key enhancements to help customers manage their Avalara AvaTax integrations more effectively:

-   Exemption use codes allow you to manage tax-exempt transactions by entering your Avalara exemption codes at the customer or contact level.
    
-   Reporting location allows you to identify which reporting location applies for tax submissions, enabling location-based tax reporting.
    

These features are especially useful for businesses handling tax-exempt customers or operating in multiple locations, ensuring accurate tax records and filings.

## Key benefits

Exemption use codes

-   Allows you to set default exemption codes for customers and contacts for entities that use Avalara AvaTax
    
-   Transactions for an exempt contact in Accounts Receivable and Order Entry are recorded as tax-exempt
    

Reporting location

-   Supports location-based tax returns
    
-   Enables consolidated or multi-location reporting for states with different requirements
    

## How it works

**Exemption use code**

You can enter exemption use codes in the Additional Information tab of customer and contact records. The default code is applied to transactions for that contact.

For Accounts Receivable and Order Entry transactions, Sage Intacct uses the exemption use code for the ship-to contact, or the customer record if the ship-to contact does not have an exemption use code.

Reporting Location

For Accounts Receivable transactions, Sage Intacct uses the exemption use code from the customer’s ship-to contact.

For Order Entry transactions, Sage Intacct uses the exemption use code from the ship-to contact at the line level. If a line-level ship-to contact does not exist, it uses the customer’s ship-to contact.

## Permissions and other requirements

| Subscription | Accounts Receivable                                                                 Order Entry                                                                 Purchasing                                                                 Taxes |
| --- | --- |
| Regional availability | United States |
| User type | Business |
| Permissions | Accounts Receivable                                                                                                                                                                                                               Customers: List, View, Add, Edit                                                                                                                                                                                                       Order Entry                                                                                                                                                                                                               Customers: List, View, Add, Edit                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Suppliers: List, View, Add, Edit |
| Restrictions | You must create separate transactions for entities with different reporting locations when creating transactions at the top level. |
