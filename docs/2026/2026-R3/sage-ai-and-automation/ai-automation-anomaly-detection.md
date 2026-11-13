---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Sage_AI_and_Automation/2026-R3-ai-automation-anomaly-detection.htm
release: 2026-R3
extracted: 2026-11-13
title: "Identify high-risk transactions using AI-driven anomaly detection for AP Automation"
---

# Identify high-risk transactions using AI-driven anomaly detection for AP Automation

[About anomaly detection](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_anomaly_detection)

[About AP Automation](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AP_bill_automation)

[Taking advantage of AP Automation (5:45)](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Sage_AI_and_Automation/2026-R3-ai-automation-anomaly-detection.htm#)

sage ai & automation

AP Automation uses AI-driven anomaly detection that identifies potentially risky transactions before payment.

Sage Intacct analyzes vendor billing patterns and submission details to flag unusual transaction amounts and unrecognized vendor email addresses. This helps AP teams focus on higher-risk transactions, reduce manual review, and strengthen fraud controls.

## Key benefits

- **Identify anomalous transactions earlier**: Detect unusual amounts and unrecognized vendor email addresses before payment processing.

- **Focus review on transactions that need attention**: Anomaly indicators help you prioritize potentially risky transactions instead of manually reviewing every transaction.

- **Strengthen fraud controls**: Block suspicious email addresses and investigate transactions that deviate from expected patterns.

  Read the release note about [Blocking suspicious email addresses](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Company_and_Administration/2026-R3-block-email-address.htm).

## How it works

When transactions are processed through AP Automation or Purchasing, Sage Intacct detects the following issues:

- Unusual transaction amounts

- Unrecognized vendor email addresses

- Multiple anomalies on the same transaction

Anomaly indicators appear in the Automated transactions list so reviewers can investigate potentially risky transactions before posting.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-ap-anomaly-detection.png)

## Good to know

The Anomaly column does not appear by default. [Create a custom list view](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_a_custom_view) and add the column to display anomaly indicators.

Anomalies are informational and do not prevent transaction posting.

## Permissions and other requirements

| Subscription          | Accounts Payable AP Automation                                                     |
| --------------------- | ---------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                        |
| User type             | Business                                                                           |
| Permissions           | Accounts Payable Automated transactions: List Bills: List, View, Add, Edit, Delete |
