---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Company_and_Administration/2026-R1-email-sender-allow-list.htm
release: 2026-R1
extracted: 2026-11-13
title: "The Allowed email addresses list"
---

# The Allowed email addresses list

[Manage the allowed email list](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Company_Allowed_email_list)

company and Administration

The Allowed email addresses list helps protect your organization from email spoofing and phishing attacks by ensuring that emails sent from Sage Intacct to your customers come from trusted, verified addresses.

This change improves email security and helps ensure emails sent from Intacct use trusted, approved addresses.

## Looking ahead

We’re gearing up for future enhancements to Intacct email functionality. The allowed email list introduced in this release is the first step toward giving you more control and visibility over how Intacct communicates with your customers.

In this release, the functionality is intentionally unchanged. The allowed email list is automatically populated with the distinct Sender and Reply‑To email addresses your company has used over the past three months, and existing email behavior remains the same.

This release establishes the foundation for upcoming email enhancements. In future releases, the allowed email list will become the source of truth for the email addresses Intacct uses to contact your customers.

## Good to know

- The allowed email list is available for review and management by company administrators.

- Admins can add, remove, or keep existing entries based on the needs of the company.

- In this release, the allowed email list does not change current email behavior.

- Future email functionality will rely on this list to determine which email addresses Intacct uses when contacting customers.

## Next steps

While this release does not change how emails are sent today, Sage Intacct recommends reviewing your allowed email list now to ensure it reflects the email addresses you want to use going forward.

Preparing the list today helps ensure a smooth transition as future email functionality becomes available.

1.  Log in as an administrator and go to **Company > Setup**.

2.  Under Configuration, select **Company** and then the **Security** tab.
3.  Review the emails listed in the **Allowed email addresses** section.

To make changes to the list, select **Edit** on the Security tab and edit the list as needed.

## Permissions and other requirements

| Subscription          | Administration              |
| --------------------- | --------------------------- |
| Regional availability | All regions                 |
| User type             | Business                    |
| Permissions           | Company info: View and Edit |
