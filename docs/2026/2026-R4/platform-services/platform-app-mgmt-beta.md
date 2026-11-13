---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Platform_Services/2026-R4-platform-app-mgmt-beta.htm
release: 2026-R4
extracted: 2026-11-13
title: "Application management updates—Beta"
---

# Application management updates—Beta

[Application management—Beta](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Application_mgmt)

platform services

Improve control and visibility when publishing, updating, and installing application versions across multiple companies in Sage Intacct.

On the **Active versions** and **Subscribers** list pages, you can now select an application's active version to open its version details page. Only available versions can be selected. For example, deleted versions are not selectable. You can also add release notes to specified versions.

From the version details page, you can:

- Edit version details.

- Select **Pull allowed** to enable subscribers to pull a specified version. This option overrides the **Is pulled allowed** selection at the application level. For example, let's say that your application is set to **Is pulled allowed**. You can disallow pulls for version 1.2 by deselecting **Pull allowed** at the version level. In a subsequent version, you can select it for _that_ version.

- Add release notes to communicate version updates to your customers.

On the **Subscribers** list page:

- Clients can continue to add subscriptions via the **Add subscription** link on the Applications list view. We removed the **Create** button at the top of the page and the **Duplicate** option from **More actions**.
- You can select **Export** to export the list of subscribers to an external source.

## Key benefits

- **Faster access to version details:** Open versions directly from the **Active versions** or **Subscribers** list views.

- **Simplified version management:** The **Pull allowed** checkbox within the version page makes it easy for you to set this selection for a specified version.

- **Better customer communication:** Add release notes to help customers understand new features, fixes, and improvements included in each version.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
