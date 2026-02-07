---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-construction-smart-vendor-compliance-records.htm
release: 2025-R2
extracted: 2026-02-07
title: "Enhanced support for smart events and smart rules on vendor compliance records"
---

# Enhanced support for smart events and smart rules on vendor compliance records

[Smart events](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_smart_events)

[Smart rules](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_smart_rules)

[Vendor compliance overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Vendor_compliance_overview)

Construction

We are excited to announce that smart events and smart rules are now supported on compliance records. Now you can set up smart events and smart rules to streamline your compliance processes and ensure that your compliance records are accurate and up to date.

Smart rules can be used with manually-created compliance records. Smart rules are not active on compliance records that are system-generated, but they are active when the compliance record is opened and saved.

Examples of Smart Rules:

-   **Expiration Date Validation:** Issue a warning or error if a compliance record is saved without an expiration date.
    
-   **Document Received Validation:** Issue a warning or error if a compliance record is saved without a contact.
    

Examples of Smart Events:

-   **Email Notification:** Create a smart event that sends an email notification when a compliance record is created from a specific compliance type.
    
-   **API Update:** Create an API update where the API sets the document received checkbox to true when a lien waiver compliance record is created.
    

## How it works

1.  Go to **Platform Services** > **Smart rules** or **Smart events**.
    
2.  From the Smart rules or Smart events list, add a new or edit an existing Smart rule or Smart event..
    
3.  Select **Compliance record** from the list, then select the rule or event properties.
    

If a smart rule or smart event is created for a custom field that doesn’t exist on the compliance type for the compliance record, you must update conditions so that the smart rule or smart event targets the correct compliance records.

## Permissions and other requirements

| Subscription | Purchasing                                                                 Accounts Payable                                                                 Platform or Customization Services                                                                 Construction with the Vendor compliance subscription enabled |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United States                                                                                                                                                                                                                   United Kingdom |
| User type | Business user with admin privileges for Smart Rules or Events                                                                                                                                                                                                                   Project Manager |
| Permissions | Purchasing                                                                                                                                                                                                               Purchasing transactions: List, View, Add, Edit, Delete                                                                                                                                                                                                       Accounts Payable                                                                                                                                                                                                               Vendors: List, View, Edit                                                                                                                                                                                                       Construction                                                                                                                                                                                                               Compliance records: List, View, Add |
