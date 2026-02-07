---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Accounts_Payable/2024-R4-ap-secondary-email-for-pay-notifications.htm
release: 2024-R4
extracted: 2026-02-07
title: "Send automatic vendor payment notifications to more recipients"
---

# Send automatic vendor payment notifications to more recipients

[Payment notifications](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_payment_notifications_and_copies_ap)

Accounts Payable

This idea came from you

You’re no longer limited to sending automatic payment notification only to the vendor's primary email address. Now, when you make a simple configuration change, Sage Intacct sends automatic notifications to the secondary email address, as well.

## Details

-   Enable the option to include secondary email addresses in your Accounts Payable configuration.
    
-   Before a vendor can receive automatic payment notifications, you must enable payment notifications on the vendor record.
    
-   Sage Intacct sends the payment notification to the Primary email address and Secondary email address of the Pay-to contact specified on the Contact list tab of the vendor record.
    
    If the Pay-to contact is set to **Same as** vendor, Intacct uses the Primary and Secondary email addresses for the vendor primary contact, shown on the Vendor tab.
    
-   If there's no secondary email address defined for the contact, Intacct sends a payment notification to the first email address only. This does not generate an error.
    
-   Payment notification emails that you send when viewing a posted payment are sent to the primary email address only.
    

## How it works

### Enable secondary email payment notifications

1.  Go to **Accounts Payable** > **Setup** > **Configuration**.
    
2.  In the Enable functionality section, select **Include secondary email contacts in automatic payment notifications**.
    
3.  Select **Save**.
    

### Set up a vendor to receive payment notifications

1.  Go to **Accounts Payable > **All** >** **Vendors** and select **Edit** beside the appropriate vendor.
2.  On the Payment Information tab, select **Send automatic payment notification**.
3.  On the Contact list tab, verify the vendor name and email address.
    
    The payment notification email is sent to the primary and secondary email addresses listed in the Pay-to contact for the vendor. The vendor Print as name appears in the email greeting line.
    
    If the vendor Pay-to contact is set to Same as vendor, the Print as name and email addresses is taken from the first tab of the vendor record.
    
4.  Select **Save**.

### Send automatic payment notifications

After you adjust your setup to send notifications to secondary email addresses, vendor payment notification works as follows:

1.  You create a payment request in Pay bills, making sure the contact selected for **Send payment notifications from** is the contact that you want to appear as the sender.
    
2.  After the payment requests are approved, you process and confirm the payment as is appropriate for the payment method.
    
    Some payments, such as cash, credit card, or record transfers, are confirmed as soon as the payment request is approved.
    
3.  If the vendor is set up for automatic payment notification, Sage Intacct emails a notification to the primary and secondary email addresses for the vendor Pay-to contact. Intacct uses the contact that you selected in Pay bills as the sender, unless your payment approval configuration specifies another contact record.

## Permissions and other requirements

| Subscription | Accounts Payable |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Accounts Payable                                                                                                                                                                                                               Pay bills: Run |
| Configuration | Enable Include secondary email contacts in automatic payment notifications in Accounts Payable Configuration. |
| Restrictions | Secondary email addresses are supported for payment notifications that Sage Intacct sends automatically when the bill is paid. |
