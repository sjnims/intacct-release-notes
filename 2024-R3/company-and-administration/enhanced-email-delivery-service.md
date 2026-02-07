---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Company_and_Administration/2024-R3-enhanced-email-delivery-service.htm
release: 2024-R3
extracted: 2026-02-07
title: "Enhanced email delivery and insights"
---

# Enhanced email delivery and insights

[Enhanced email delivery service domain settings](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_service_domain_settings)

[Configure DMARC for your domain](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_service_DMARC_config)

[Validate DNS entries](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_service_validate_DNS)

[Enhanced email delivery log](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_delivery_log)

Company and Administration

We're excited to announce the release of the Sage Intacct enhanced email delivery service!

The enhanced email delivery service uses DKIM, the industry-leading standard for email security. DKIM ensures that your emails are delivered to their intended recipients quickly and reliably. Additionally, our enhanced email log provides you with detailed visibility into the delivery status of your emails, by recipient.

## Details

To start using the new email delivery service, you authenticate your domain and enter your DNS keys. The enhanced email delivery service also supports multiple domains.

After you authenticate your domain, you can send emails not only from the main domains but also from any sub-domains associated with it. For example, if you authenticate domain.com, you'll be able to send authenticated emails from sub-domains like billing.domain.com or invoice.domain.com.

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

### View the enhanced email delivery log

1. Go to **Company > Admin > History and reports > New email delivery history**.

   The **New email delivery log** opens.

2. Review the list of emails.

   Each record in the log represents one email, each of which might have multiple recipients.

Intacct recommends when sending an email, limit the distribution list to 1000 email recipients or less for optimal email delivery functionality.

1. Select **View** next to an item to examine a particular email.
   - The left side of the record shows information about the email such as when the email was sent, its status, and who sent it.
   - The right side of the record displays a copy of the email that was sent, including who it was sent to.
   - The individual recipient status log shows the status of the email for each recipient and any relevant information.

For more information, see [Enhanced email delivery log](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enhanced_email_delivery_log).

## Permissions and other requirements

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Company info: View and Edit         |
