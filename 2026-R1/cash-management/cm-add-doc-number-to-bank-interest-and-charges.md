---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Cash_Management/2026-R1-cm-add-doc-number-to-bank-interest-and-charges.htm
release: 2026-R1
extracted: 2026-02-07
title: "Improve reconciliation accuracy by using the document number for bank interest and charges"
---

# Improve reconciliation accuracy by using the document number for bank interest and charges

[Record bank interest and charges](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Bank_interest_and_charges)

[Create a matching rule](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_matching_rule)

[About rules and rule sets](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_rules_rule_sets)

Cash Management

Improve accuracy when reconciling bank accounts by using the new **Document number** field on the Bank interest and charges page. This field is shown on all pages and reports that include a document number, for example the Bank interest and charges information page.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-cm-doc-number.png)

## Key benefits

Modern payment services might charge a fee when processing a customer's payment, which is deducted from the resulting bank deposit. This enhancement helps to improve accuracy and reduce matching errors.

-   **Accurate bank reconciliation**: Use a shared document number, such as the transaction number from your bank statement, to precisely match payment fees and customer payments to the bank credit.
-   **Faster, more reliable matching**: In your matching rule, group by document number and match on **Amount (combine debits and credits)** to reduce manual intervention and speed up reconciliation.
-   **Fewer matching errors**: Help prevent mismatched transactions and improve data accuracy.
-   **Clear audit trail**: Link the fee and the payment with a common identifier to create a cleaner record for review and auditing.

## Permissions and other requirements

| Subscription | Cash Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Bank interest and charges: Add, List, View |
