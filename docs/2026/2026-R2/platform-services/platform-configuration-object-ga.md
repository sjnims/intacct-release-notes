---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Platform_Services/2026-R2-platform-configuration-object-GA.htm
release: 2026-R2
extracted: 2026-04-29
title: "Define application configuration values with configuration objects—General Availability"
---

# Define application configuration values with configuration objects—General Availability

[Adding a Trigger](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

[Add configuration object](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_configuration_object)

[XML document templates](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Xml_document_templates)

[Outbound webhooks](https://developer.sage.com/intacct/docs/1/sage-intacct-rest-api/webhooks-and-triggers/webhooks)

platform services

The configuration object for platform applications is now generally available. If you have not yet tried using configuration objects, consider doing so now to reduce work and minimize the risk of misconfiguration.

## Key benefits

-   **Define key-value pairs in a structured file**: Reference the key-value pairs in any place where you support merge fields in your application, such as triggers or templates. For example, you can use merge fields with an HTTP Post trigger. The trigger can then reference the merge fields in a URL to deploy applications to different environments.
    
-   **Spend less time maintaining and updating your application**: Referencing key-value pairs makes maintenance and updates easier. In addition, you reduce the opportunity for misconfiguration. Each application can include 1 configuration object and up to 1,000 configuration records.
    
-   **Specify override behavior**: Application owners can specify whether a client can override a configuration key.
    

## How it works

1.  Follow the steps to create a custom object, but under Object attributes, select **Configuration**.
2.  When you create the object, you can add fields that a webhook will use.
    
    For example, you might create a configuration object that includes fields to add URLs.
    
3.  In another object within the same application, use the URL fields from the configuration object in an HTTP Post trigger formula.
4.  In **Available merge fields**, select a configuration object.
    
    Notice that when you do, you can select **clientAppId** or **URL** for the merge field. With the trigger, you can then deploy applications to different environments.
    
5.  Edit the application that contains the configuration object.
    
    Notice that under **Application details**, you can select a configuration synchronization type:
    
    -   **Full**: Both existing records are updated and new records are created.
        
    -   **Incremental**: Only new records are created.
        
    -   **Data mirroring**: Everything is deleted and then recreated.
        

## Permissions and other requirements

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business with full admin privileges |
| Permissions | Permissions to the Platform Services application |
