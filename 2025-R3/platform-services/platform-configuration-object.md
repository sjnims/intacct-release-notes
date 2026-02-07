---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/Platform_Services/2025-R3-platform-configuration-object.htm
release: 2025-R3
extracted: 2026-02-07
title: "Define application configuration values with configuration objects—Early Adopter"
---

# Define application configuration values with configuration objects—Early Adopter

[Adding a Trigger](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

[Add custom objects](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_an_Object)

[XML document templates](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Xml_document_templates)

[Outbound webhooks](https://developer.sage.com/intacct/docs/developer-portal/guides/webhooks/)

platform services

We’re excited to introduce the new Configuration Object for platform applications. Reduce work and the risk of misconfiguration with the use of this new object.

## Key benefits

-   **Define key-value pairs in a structured file**: Reference the key-value pairs in any place where you support merge fields in your application, such as triggers or templates. For example, you can use merge fields with an HTTP Post trigger. The trigger can then reference the merge fields in a URL to deploy applications to different environments.
    
-   **Spend less time maintaining and updating your application**: Referencing key-value pairs makes maintenance and updates easier. In addition, you reduce the opportunity for misconfiguration. Each application can include 1 configuration object and up to 1,000 configuration records.
    
-   **Specify override behavior**: Application owners can specify whether a client can override a configuration key.
    

## How it works

1.  Follow the steps to create a custom object, but under Object attributes, select **Configuration**.
    
    ![Object attribute options with the Configuration option outlined.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-platform-config-object.png)
    
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
        

## What's the Early Adopter program?

The Early Adopter program allows a select group of customers to test and provide feedback on new features. Your input will help us refine and improve these features before the general release.

To be considered for the Early Adopter program, [log a Support ticket](https://www.sage.com/en-us/support/resources/?GroupId=4&ProductId=302). Note that you want to participate in the Platform Services Configuration Object Early Adopter program.

## Permissions and other requirements

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business with full admin privileges |
| Permissions | Permissions to the Platform Services application |
