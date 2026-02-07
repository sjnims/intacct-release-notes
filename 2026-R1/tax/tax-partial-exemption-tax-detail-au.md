---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Tax/2026-R1-tax-partial-exemption-tax-detail-au.htm
release: 2026-R1
extracted: 2026-02-07
title: "Reduced input tax credits for tax details in Australia"
---

# Reduced input tax credits for tax details in Australia

This idea came from you

Capturing the correct taxes can be complex when part of a purchase is exempt from taxation. With this enhancement, you can now set Reduced Input Tax Credit percentages for input tax details at the tax detail level for entities configured for the Australia tax solution. This gives you greater flexibility and accuracy when applying exemptions to line items in Accounts Payable and Purchasing transactions.

## Key benefits

-   Define RITC percentages for input tax details, not just at the entity level.
    
-   Apply different RITC exemption rates for the same tax detail across multiple entities.
    
-   Enable RITC only for entities that make qualifying purchases.
    
-   Configure line items to default as RITC for faster data entry.
    
-   Maintain transactional integrity by accurately calculating recoverable and non-recoverable tax portions.
    

## How it works

You can enable RITC at the Company level for any entity using the standard tax solution for Australia. At that time, you can choose to have RITC turned on by default for all transaction lines. You can also assign an unrecoverable tax account.

Then, you can configure your tax details to set a default RITC percentage and to assign custom percentages for specific entities.

When RITC is enabled, each line item in a bill displays an RITC checkbox. For the lines checked as RITC, Sage Intacct does the following:

-   Calculates recoverable and non-recoverable tax amounts.
    
-   Captures recoverable amounts for tax reporting.
    
-   Posts non-recoverable amounts to the appropriate General Ledger account.
    

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Purchasing                                                                 Taxes |
| --- | --- |
| Regional availability | Australia |
| User type | Business |
| Permissions | Company                                                                                                                                                                                                               Entities: List, View, Add, Edit                                                                                                                                                                                                       Accounts Payable                                                                                                                                                                                                               Bills: List, Add, Edit, Post, Delete                                                                                                                                                                                                       Purchasing                                                                                                                                                                                                               Purchasing transactions: List, Add, Edit, Post, Delete                                                                                                                                                                                                       Taxes                                                                                                                                                                                                               Tax detail: List, View, Add, Edit |
| Restrictions | RITC is enabled in each applicable entity.                                                                                                                                                                                                                   RITC is configured for each tax detail.                                                                                                                                                                                                                   Transactions with RITC line items can only be entered at the entity level. |
