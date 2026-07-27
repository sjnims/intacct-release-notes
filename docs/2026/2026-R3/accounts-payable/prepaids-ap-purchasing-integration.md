---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-prepaids-ap-purchasing-integration.htm
release: 2026-R3
extracted: 2026-07-27
title: "Create deferred adjustments for charges constatées d’avance (CCA) from Purchasing—Early Adopter"
---

# Create deferred adjustments for charges constatées d’avance (CCA) from Purchasing—Early Adopter

This idea came from you

You can now create deferred adjustments for charges constatées d’avance (CCA) directly from Purchasing transactions, including requisitions and purchase orders. Previously, deferred adjustments for CCA were available only for bills created directly in Accounts Payable. This enhancement extends deferred adjustment creation to Purchasing, helping you reduce manual setup and maintain a consistent process from purchasing through expense recognition.

![Purchasing transaction showing deferred adjustments fields](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-def-adj-purchasing-integration.png)

## Key benefits

- **Streamline deferred adjustment processing**: Capture deferred adjustment details at the time of purchase.

- **Reduce manual effort**: Eliminate duplicate setup and manual adjustments between Purchasing and Accounts Payable.

- **Maintain consistent accounting treatment**: Apply the same deferred adjustment process regardless of whether transactions originate in Purchasing or Accounts Payable.

## How it works

1.  Create a purchase transaction.

2.  Enter deferred adjustment details on the transaction line.

3.  Post the transaction.

4.  View the generated bill and deferred adjustment schedule.

## What's changed

Deferred adjustment fields are available on Purchasing transaction lines, including the template, start date, and end date. When a Purchasing transaction generates a bill, Sage Intacct automatically carries the deferred adjustment details to the bill and creates the associated schedule on the bill line.

## Good to know

- Deferred adjustment templates are managed in Accounts Payable and are shared with Purchasing.

- Before scheduled payments are posted, you can edit deferred adjustment fields on a purchase transaction, and the changes are reflected on the bill. After scheduled payments are posted, the deferred adjustment fields become read-only.

- [Prepaid expense amortization is now available in all regions](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Accounts_Payable/2026-R3-ap-prepaids-expanded.htm) using the same framework as Deferred adjustments. The CCA method remains available for France-specific requirements, while the new Straight-line method and related fields support other regions. In English locales, Deferred adjustments field labels have been renamed to use amortization terminology. In French, the labels remain unchanged.

## Provide feedback as an Early Adopter

We're actively collecting feedback as we continue to refine the experience. Your insights are incredibly valuable and help us prioritize improvements and ensure that the feature meets your needs.

Complete the form below if you'd like to share feedback and help shape the future of this feature.

[Provide feedback as an Early Adopter](https://forms.office.com/r/fweaMLG6F2)

## Permissions and other requirements

| Subscription          | Accounts Payable Purchasing                                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                              |
| User type             | Business                                                                                                                                            |
| Permissions           | Purchasing Purchasing transactions: List, View, Edit, Delete, Add                                                                                   |
| Configuration         | Enable deferred adjustments in Accounts Payable configuration. Use a Purchasing transaction definition that posts to Accounts Payable.              |
| CSV import            | The following fields are available in the Purchasing transactions import template: AMORTIZATIONTEMPLATEID AMORTIZATIONSTARTDATE AMORTIZATIONENDDATE |
