---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Company_and_Administration/2024-R4-authenticate-domains.htm
release: 2024-R4
extracted: 2026-02-07
title: "Authenticate and validate your custom domain before May 2025"
---

# Authenticate and validate your custom domain before May 2025

Starting May 2025, all customers who send emails using a custom domain must authenticate and validate their domain. This is a critical step as we transition fully to using the enhanced email delivery service.

## Why is this important?

Authenticating your domain helps ensure your email communications are secure and reliable.

Domain authentication:

- Improves email deliverability, reducing the chances of your messages being marked as spam or not reaching recipients.
- Protects your domain from being used in phishing attacks or other fraudulent activities.
- Aligns with best practices for email security and compliance.

To avoid any email deliverability issues that might affect your communications to customers and partners, make sure to authenticate your domain by May 2025.

If you need help with the process, we'll reach out directly to assist you.

## How it works

Configuring these settings requires your Intacct administrator and email administrator to work together.

### Configure your email domain settings

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-email-sender-domain.png)

1. Go to **Company >** **Setup** **> Company**.
2. Go to the **Security** tab and select **Edit**.
3. Scroll down to **Email sender domain settings**.
4. Select **Add a domain**.

   The Domain configuration opens.

5. Enter your **Email sender domain**.

   For example, if you enter **example.com**, then emails will be sent from **<intacct-mailservice@example.com>**.

6. Select **Authenticate domain**.

   When the authentication process is complete, a DNS key table is available.

   The DNS keys must be added to your domain's DNS configuration.
   1. The CNAME used to configure the SPF record.
   2. The two CNAMEs used to configure DKIM authentication.
   3. One or two TXT strings that are used to configure EKS.
   4. The TXT string used to configure SPF for the previous email delivery service.

   Intacct recommends copy and pasting the DNS keys to a file for reference when configuring your DNS. Entering DNS keys manually is often error prone and leads to incorrectly configured DNS.

7. After you enter the DNS keys in your DNS configuration, select **Validate domain**.

The DNS keys can take up to 72 hours to be updated and validated.

For more information, see [Enhanced email delivery service domain settings](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_service_domain_settings).

## Permissions and other requirements

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Company info: View, Edit            |
