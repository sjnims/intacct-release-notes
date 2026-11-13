---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Cash_Management/2026-R4-bank-file-cloud-delivery.htm
release: 2026-R4
extracted: 2026-11-13
title: "Upload bank file payments to cloud storage"
---

# Upload bank file payments to cloud storage

[Bank files](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_bank_files)

[Set up a checking account for bank file and ACH payments](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_file_account_setup)

[Set up cloud storage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Setting_up_cloud_storage)

Cash Management

Deliver payment files to your online cloud storage through a secure cloud connection so your team can send files faster without manual downloads. This is especially important when your bank requires enforced validation and traceable delivery of payment files.

The following cloud storage options are supported:

- HTTP

- Dropbox

- Google Drive

- Box

- Amazon S3

- OneDrive

- Azure storage

## Key benefits

- **Reduce manual steps:** With cloud delivery, you no longer need to first download the file locally.

- **Improve payment monitoring and timing:** Upload and track the status of the file in real time without leaving Sage Intacct. After the file is delivered, access the file in cloud storage for bank submission.

## How it works

1.  Update your bank account bank file settings to enable cloud storage.

2.  Generate the payment file in Sage Intacct and upload it to cloud storage.

3.  Access the file in cloud storage to submit to your bank.

## What's changed

You can now upload bank files to cloud storage from Cash Management. This gives you a more streamlined, secure option for transmitting payment files to your financial institution.

## Good to know

Cloud upload is only available for bank file payments and is based on your checking account configurations in Sage Intacct.

## Permissions and other requirements

| Subscription          | Cash Management Company Sage Cloud Services                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                 |
| User type             | Business                                                                                                                                                                                    |
| Permissions           | ConfigureCash Management Checking account: List, View, Add, Edit Company Cloud storage: List, View, Add, Edit Upload paymentsCash Management Bank file: List, View, Manage, Confirm, Upload |
| Configuration         | Cloud delivery is configured for the checking account.                                                                                                                                      |
