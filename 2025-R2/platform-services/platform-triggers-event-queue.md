---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Platform_Services/2025-R2-platform-triggers-event-queue.htm
release: 2025-R2
extracted: 2026-02-07
title: "Platform event queue trigger—Early Adopter"
---

# Platform event queue trigger—Early Adopter

[Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_a_Trigger)

[Improved Platform Trigger Creation for POST Requests—Early adopter](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Platform_Services/2025-R1-platform-trigger-post-requests.htm)

platform services

Triggers continue to offer more functionality: Now you can create a trigger to queue payloads in storage. External systems can retrieve the stored events based on your schedule.

## Details

Last release, we introduced a Platform Trigger so that you could define a client ID for `HTTP POST` requests and take advantage of webhooks. With the introduction of the event queue, you can create a trigger to store these events.

![Trigger type selection screen with the Event queue trigger type highlighted.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-platform-event-queue.png)

## How it works

Follow the instructions to create a trigger as you normally do using the steps in [Add Platform triggers to automate tasks](https://www.intacct.com/ia/docs/en_US/help_action/More/Customization_and_Platform_Services/Triggers/add-platform-triggers.htm).

1.  For **Trigger type**, select **Event queue**.
2.  When defining the trigger type properties, add your client ID.

    You can obtain a client ID by following the instructions in [REST developer quick start](https://developer.sage.com/intacct/docs/developer-portal/getting-started/quick-start/).

3.  Fill out the remainder of the property details and save your work.

When you define the event queue trigger, messages are stored in the queue. You can use the Trigger queue event services to retrieve a count of events, batch messages, and also post acknowledgments of trigger events using `HTTP` methods and `cURL` commands. [Learn more in the Sage Intacct REST API portal](https://developer.sage.com/intacct/docs/developer-portal/guides/).

## What is the Early Adopter program?

The Early Adopter program provides the event queue trigger to all users of Platform Triggers who want to use the feature. As an early adopter, you can influence how we develop the product so that it meets your business needs. The feature is available for anyone to use. As a user of the feature, you become an early adopter.

The Early Adopter program participants work closely with Sage Intacct product managers to ensure we focus on what matters most. Early Adopter participants are expected to respond periodically to surveys and provide input.

## Permissions and other requirements

| Subscription          | Platform Services Web Services                   |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
