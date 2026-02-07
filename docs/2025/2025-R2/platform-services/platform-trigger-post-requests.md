---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Platform_Services/2025-R2-platform-trigger-post-requests.htm
release: 2025-R2
extracted: 2026-02-07
title: "Improved Platform Trigger Creation for POST Requests—General availability"
---

# Improved Platform Trigger Creation for POST Requests—General availability

[Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

[Outbound webhooks](https://developer.sage.com/intacct/docs/developer-portal/guides/webhooks/)

platform services

Last release, we announced the availability of the HTTP POST trigger. When you create a trigger of this type, you can select **Use webhook delivery** and then add your **Client ID** to the request. With a client ID, you can utilize webhook calls, allowing you to push data automatically to another server.

## Details

Our new option for Platform trigger POST requests offers reliable and consistent webhook delivery with automatic retries for handling delivery failures. For example, let's say that every time a location is updated in your Sage Intacct company, you need an external inventory supplier's system updated for your account:

1. A location in Intacct is updated.
2. The updated location information is sent using a POST request to the external system using a webhook URL.
3. The inventory supplier's system receives the call and one of the following occur:

- The relevant database with the revised location gets updated.
- If a failure occurs, the call is retried until a successful HTTP status code of 200 is returned to Intacct, up to 4 attempts total.

### HTTP status codes that trigger retries

- 408 Request Timeout
- 429 Too Many Requests
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

## How it works

Follow the instructions to create a trigger as you normally do using the steps in [Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/More/Customization_and_Platform_Services/Triggers/add-platform-triggers.htm).

1. Ensure you select **HTTP post** as your trigger type.
2. When defining the trigger type properties, select **Use webhook delivery**.  
   When you select this option, the **Client ID** field appears and the following options become unavailable: **Run offline**, **Use API endpoint**, and **To debug your trigger select <an object>**.
3. Add your client ID information.  
   You can obtain a client ID by following the instructions in [REST developer quick start](https://developer.sage.com/intacct/docs/developer-portal/getting-started/quick-start/).
4. Fill out the remainder of the property details.

## Permissions and other requirements

| Subscription          | Platform Services Web Services                   |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
