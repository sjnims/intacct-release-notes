---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_4/Company_and_Administration/2025-R4-anonymous-option-removed-from-consoles.htm
release: 2025-R4
extracted: 2026-02-07
title: "Anonymous users can no longer slide in to an instance"
---

# Anonymous users can no longer slide in to an instance

[Console permission settings overview](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Console_permission_settings_overview)

[About external users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_external_users)

[External user permissions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=External_user_permissions)

Company and Administration

To ensure a clear audit trail for each instance of Sage Intacct, we removed the ability for anonymous users to slide in to an instance from a console. Users will automatically slide in to instances as named slide-in users.

## What's changed

You can no longer slide in to an instance anonymously. Previously, users could slide in to an instance as a generic user, which Intacct displayed as CPA User. With this release, each individual is assigned a unique external username by Intacct.

For example, if your console company name is **Acmeconsole1** and your user ID is **User1**, Intacct will assign you an external username of **ExtUser|Acmeconsole1|User1**.

Because all users will slide in to instances as named users and the anonymous slide-in option is no longer available, we removed the slide-in permission option on the **Practice information** page for consoles.

## Why the change

Sage Intacct automatically creates external user records for named slide-in users that track the activity of that user. This ensures a clear and accurate activity record for the audit trail.

## Permissions and other requirements

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Users: List, View, Add, Edit        |
