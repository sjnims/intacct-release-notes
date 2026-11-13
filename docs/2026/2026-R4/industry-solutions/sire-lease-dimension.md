---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Industry_Solutions/2026-R4-sire-lease-dimension.htm
release: 2026-R4
extracted: 2026-11-13
title: "Property lease dimension for Sage Intacct Real Estate"
---

# Property lease dimension for Sage Intacct Real Estate

[Use property leases for reporting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=property_leases_overview)

[Sage Intacct Real Estate](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=si-real-estate)

INDUSTRY SOLUTIONS

This idea came from you

Use the new **Property lease** dimension to classify transactions by the property leases to which they relate. You can then filter reports and dashboards by property lease to see focused information about specific properties and leases.

For example, you can now easily generate a rent roll:

[![Example rent roll report](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-sire-lease-dimension.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-sire-lease-dimension.png)

## Key benefits

- See actionable information about leases in your Sage Intacct dashboards.
- Synchronize property lease information between Sage Intacct and Sage Intacct Real Estate.
- Reference specific leases on any transaction in Sage Intacct and post through to the general ledger.
- Set up related attributes like move-in dates and property units included in a lease agreement.

## How it works

1.  Turn on the **Property lease** dimension in General Ledger and other applications where you want to track transactions by property lease.
2.  On the new **General** tab in the Configure Real Estate Subscription page, set configuration settings for property leases.

    You can set a document numbering sequence to automatically assign property lease IDs, and you can select external reference fields to include in your property leases.

3.  Create property lease objects (property lease business categories, property lease states, property lease termination reasons, and property lease types).
4.  Create property leases as normal.

    The way you create leases is unchanged, but now when you create a lease it's set up as a member of the property lease dimension. You can see all members of the property lease dimension on the Property Leases page (**Real Estate** > **Setup** > **Property leases**).

5.  For transactions that are related to a property lease, select the lease in the **Property lease** dimension field on each transaction.
6.  Filter financial reports and dashboards by property lease.

## Good to know

Data is synced between property leases and the property lease dimension, ensuring that lease data is consistent throughout the system. This includes the following:

- Unit details, including associated units, unit names, move-in dates, and the primary unit.
- Lease dates and status-related information such as commencement date, expiration date, termination date, move-in and move-out dates, and month-to-month status.
- Rent and recurring charge details such as current rent, market rent, recurring charge item, current amount, and next date.
- Lease classification and configuration data recorded in the property lease dimension: lease types, states, business categories, and termination reasons.

## Permissions and other requirements

| Subscription          | Sage Intacct Real Estate                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability | Canada United States                                                                                                                                                                                                                                                                                                                                         |
| User type             | Business user with admin privileges                                                                                                                                                                                                                                                                                                                          |
| Permissions           | Real Estate Property leases: List, View, Add, Edit, Delete Property lease groups: List, View, Add, Edit, Delete Property lease states: List, View, Add, Edit, Delete Property lease types: List, View, Add, Edit, Delete Property lease business categories: List, View, Add, Edit, Delete Property lease termination reasons: List, View, Add, Edit, Delete |
| Configuration         | Enable the Real Estate subscription in Sage Intacct. Add the URL to the allow list: <https://app.sagerealestate.us/> Set all security options for the URL to true.                                                                                                                                                                                           |
| Implementation        | Requires: Subscription in Sage Intacct Configuration and setup in Sage Intacct                                                                                                                                                                                                                                                                               |
