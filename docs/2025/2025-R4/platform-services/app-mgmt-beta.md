---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Platform_Services/2025-R4-app-mgmt-beta.htm
release: 2025-R4
extracted: 2026-02-07
title: "Application management—Beta"
---

# Application management—Beta

[Application management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Application_mgmt)

[About open and limited betas](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=App_mgmt_open_beta_info)

platform services

The Application management feature introduces a robust interface for publishing, updating, and managing application versions across multiple companies. Designed for application publishers, the feature streamlines deployment workflows, supports push updates, and provides visibility into installation statuses. Each published application version creates a separate record in the repository, enabling publishers to manage multiple versions independently.

Managing applications for dozens of subscribers becomes faster, easier, and more scalable. And, subscribers can choose to receive push updates, streamlining the upgrade process and improving consistency across environments.

This is an open beta and subject to limitations.

![Application management feature options in the main menu.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R4-images/2025-R4-app_mgmt_menu.png)

## Key benefits

- Life cycle application deployment simplicity.
- Direct push updates to subscribers, so no more need for manual `.xml` file installations.
- Real-time tracking of deployment statuses via the installation queue.
- Granular management of updates per subscriber via version control.
- Reduced manual effort, improved accuracy, and accelerated delivery time lines.

## Example

A publisher can create an application in their development company, publish it to the repository, and push a new version to select subscribers who have opted in for push updates. The installation queue then shows the status of each deployment while it's in progress. The publisher can monitor and manage installations in real time.

## Good to know

Subscribers must use the application ID to subscribe and can opt in to receive push updates. If a subscriber does not allow push updates, they will not appear in the publisher’s installation dialog. Transaction definitions can also be mapped between publisher and subscriber companies to ensure compatibility.

Publishing an application `.xml` file will become a legacy process. Application Management does not support editing an application `.xml` file after the file is published.

## Join the beta program

You can join the beta program by [logging a Support ticket](https://www.sage.com/en-us/support/resources/?GroupId=4&ProductId=302) and stating that you want to participate in the Platform Services Application management beta program.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
