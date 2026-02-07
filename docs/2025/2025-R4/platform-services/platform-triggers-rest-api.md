---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Platform_Services/2025-R4-platform-triggers-rest-api.htm
release: 2025-R4
extracted: 2026-02-07
title: "Platform REST API trigger"
---

# Platform REST API trigger

[Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

platform services

Supercharge workflows with REST automation in Sage Intacct. Take advantage of a Platform trigger designed to work with REST. The new trigger allows you to leverage the best of our modern APIs as you customize your application.

## Key benefits

- Use the popular REST architecture to extend Sage Intacct functionality.
- Enjoy more flexibility to create exactly the types of triggers that you need.

## What's changed

When you create a trigger, the **Intacct REST API** trigger type now appears as an option.

![Trigger type selection page with the Intacct REST API option available. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-platform-triggers-rest.png)

## How it works

Follow the instructions to create a trigger as you normally do using the steps in [Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/More/Customization_and_Platform_Services/Triggers/add-platform-triggers.htm).

1. For Trigger type, select **Intacct REST API**.
2. Define your trigger type properties:
   1. Select the **API version** that you want to use. Use beta for development purposes only and not in production. The API listed in the beta registry is subject to change, and Sage Intacct does not guarantee backwards compatibility.
   2. Enter the Client application ID.

      You can obtain an ID by following the instructions in REST developer quick start in the [Sage Intacct Developer Portal](https://developer.sage.com/intacct).

   3. Select the **Target resource** to use for the trigger.
   4. Select the **HTTP method** to use.

   Learn more in the [Sage Intacct Developer Portal](https://developer.sage.com/intacct) release notes.

## Permissions and other requirements

| Subscription          | Platform Services Web Services                   |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business user with full admin privileges         |
| Permissions           | Permissions to the Platform Services application |
