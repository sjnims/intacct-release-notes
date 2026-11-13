---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm
release: 2026-R4
extracted: 2026-11-13
title: "Other enhancements for Sage Intacct Construction"
---

# Other enhancements for Sage Intacct Construction

[About the Finance Intelligence Agent](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Finance_Intelligence_Agent)

[Finance Intelligence Agent Prompt Library](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Finance_Intelligence_agent_prompt_library)

[Configure General Ledger retainage and retainage offset account posting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure-GL-retainage-offset-acct-posting-po "Configure General Ledger retainage and retainage offset account posting")

[Audit advanced retainage calculations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Audit_advanced_retainage_calc "Audit advanced retainage calculations")

[Convert multiple documents into a single transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Convert_multiple_documents_into_transaction "Convert multiple documents into a single transaction")

construction

This release includes the following updates to improve your Sage Intacct Construction experience.

## Finance Intelligence Agent—Early Adopter for Construction

The [Finance Intelligence Agent](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Sage_Ai___Automation/2026-R4-FIA-GA.htm) is your Sage Ai-powered partner that helps you find answers about your financial data and make more informed decisions.

Generally available for Intacct applications, the Finance Intelligence Agent also supports select Construction features through the Early Adopter program. Support for additional Construction features will be added in future releases.

In this release, the Finance Intelligence Agent can assist with questions about the following Construction objects:

- Project contracts

- Project contract lines

- Project estimates

- Compliance definitions

- Retainage percentages for:

  - Project contracts and project contract lines

  - Vendors in Accounts Payable

  - Customers in Accounts Receivable

To help you get started, we've added Construction-specific sample prompts to the [Prompt Library](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Finance_Intelligence_agent_prompt_library). Use these prompts to ask questions and explore your data.

### About the Early Adopter program

We invite you to explore the new capabilities of the Finance Intelligence Agent for Construction as an Early Adopter. Your insights are incredibly valuable. We encourage you to share your feedback on your experience.

For this feature, all customers with a Construction subscription are eligible to participate.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Finance Intelligence Agent                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                                                       |
| Language              | US English only                                                                                                                                                                                                                                                                                                                                                                                     |
| User type             | Configure the Finance Intelligence Agent Business user with admin privileges Use the Finance Intelligence Agent in Sage Copilot All user types                                                                                                                                                                                                                                                      |
| Permissions           | Configure the Finance Intelligence Agent Administration Application subscriptions: List, View, Subscribe, Configure Use the Finance Intelligence Agent in Sage Copilot You must have the appropriate permissions to the data objects you're asking about. For example, if you ask, "Show me a list of project contracts with an Active status," you need List and View access to Project contracts. |

## Gain more flexibility in posting retainage

You can now post retainage amounts to multiple General Ledger (GL) retainage offset accounts for purchasing transactions. To support more flexible retainage posting, we've added two new settings to purchasing transaction definitions:

[Enable **retainage** transaction posting](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

- Lets you map retainage account and offset account combinations (debit and credit). Available when you select **Enable retainage**.

- Enables the **Is retainage?** column in the **Transaction posting AP or GL account mapping** section of the **Posting configuration** tab where you can configure account mappings.

[Enable **retainage** additional posting](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

- Lets you map additional retainage account and offset account combinations (debit and credit). Available when you select **Enable retainage** and **Enable additional posting**.

- Enables the **Is retainage?** column in the **Additional GL posting account mapping** section of the **Posting configuration** tab where you can configure additional account mappings.

To use this feature, define at least one GL retainage and GL retainage offset account combination (debit and credit) on each applicable transaction definition. If no retainage offset accounts are defined, Sage Intacct defaults to the retainage offset account configured in Accounts Payable.

[![Transaction definition setup page with flexible retainage posting settings highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-po-flex-retainage-txn-def-settings.png "Transaction definition setup page with flexible retainage posting settings highlighted")](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-po-flex-retainage-txn-def-settings.png)

Learn how to [Configure General Ledger retainage and retainage offset account posting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Configure-GL-retainage-offset-acct-posting-po "Configure General Ledger retainage and retainage offset account posting").

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription                       | Construction Purchasing                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability              | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                      |
| User type                          | Business user with admin privileges                                                                                                                                                                                                                                                                                |
| Permissions                        | Purchasing PO transaction definitions: List, View, Add, Edit, Delete                                                                                                                                                                                                                                               |
| Configuration                      | Enable retainage transaction posting: Select a Template type of Order or Invoice. Enable retainage and enable retainage transaction posting Enable retainage additional posting: Select a Template type of Order or Invoice. Enable retainage, enable additional posting, and enable retainage additional posting. |
| Dependencies or other requirements | On Purchasing transaction definitions: Template type must be Order or Invoice. Enable retainage transaction posting is available only when you select Enable retainage. Enable retainage additional posting is available only when you select Enable retainage and Enable additional posting.                      |

## Analyze advanced retainage calculations more effectively

We've enhanced the **Advanced retainage calculation log** to help you review and share retainage calculations more efficiently. You can now:

- Customize column order to suit your preferences, and save custom layouts for future use.

- Export calculation log information to a CSV for enhanced analysis, reporting, and sharing.

In addition, the log now sorts calculations by **Primary document ID** and **Calculation sequence** automatically, making related calculations easier to review and analyze.

Learn how to [Audit advanced retainage calculations](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Audit_advanced_retainage_calc "Audit advanced retainage calculations"). Discover [new product videos](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Training_and_Videos/2026-R4-video-training-updates.htm "new product videos") for advanced retainage.

[Advanced retainage](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Advanced_retainage_overview "Advanced retainage") is available for purchasing transactions only.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Purchasing                                                                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                              |
| User type             | Business Construction Manager                                                                                                                                                                              |
| Permissions           | Purchasing Purchasing transactions: List, View,  Add, Edit                                                                                                                                                 |
| Configuration         | To use the advanced retainage workflow, enable retainage and advanced retainage in Accounts Payable configuration and on the applicable Purchasing transaction definitions (primary document and invoice). |

## Prevent duplicate source line conversions

If you've configured Purchasing to [convert multiple documents into a single transaction](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Convert_multiple_documents_into_transaction), you can now hide source document lines that have already been selected for conversion.

In Purchasing configuration, we've added a new setting called **Do not allow source lines to be converted more than once per document**. When enabled, the **Source document line ID** field on a transaction displays only lines that have not yet been selected, reducing risks for converting the same line multiple times.

[![Configure Purchasing page with setting to prevent duplicate source line conversions highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-po-config-prevent-duplicate-line-conversions.png "Configure Purchasing page with setting to prevent duplicate source line conversions highlighted")](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-po-config-prevent-duplicate-line-conversions.png)

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Purchasing                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                 |
| User type             | Business Construction Manager                                                                                                                                                 |
| Permissions           | Configure Purchasing Administration Application subscriptions: List, View, Configure Convert documents Purchasing Purchasing transactions: List, View, Add                    |
| Configuration         | On the Configure Purchasing page, select Enable conversions for multiple source documents. Then select Do not allow source lines to be converted more than once per document. |

## Streamline project cost reporting with standardized cost categories

Reporting on project costs is now easier and more consistent. New fields in the Projects application surface cost category information directly on cost records, reducing the need for complex lookups and simplifying cost analysis.

- **Cost types** now include a read-only **Standard cost category** field. This field displays the cost category inherited from the associated standard cost type.

  [![Cost type information page with Standard cost category field highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-cost-type-info-with-std-cost-category.png "Cost type information page with Standard cost category field highlighted")](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-cost-type-info-with-std-cost-category.png)

- **Standard cost types** now include a read-only **Cost category** field. This field displays the cost category associated with the linked accumulation type.

  [![Standard cost type information page with Cost category field highlighted](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-std-cost-type-info-with-cost-category.png "Standard cost type information page with Cost category field highlighted")](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R4-images/2026-R4-const-std-cost-type-info-with-cost-category.png)

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Projects                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                  |
| User type             | Business user with admin privileges Construction Manager Project Manager Employee (view only)  |
| Permissions           | Projects Accumulation types: List, View Cost types: List, View Standard cost types: List, View |

## New fields on primary documents

In Purchasing, we've added fields to primary documents to provide greater visibility into document conversions and quantity revisions. The following fields are now available on the **Primary document details** section of the **Primary document details** tab:

- Conversion type

- Quantity

- Unit

- Price

- Quantity converted

- Price converted

- Revised quantity

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Purchasing                        |
| --------------------- | ---------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States  |
| User type             | Business Construction Manager Project Manager  |
| Permissions           | Purchasing Purchasing transactions: List, View |

## New required fields on work orders

The following fields are now required when creating a work order:

- Work order name

- Entity (if available)

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Work Order Management If you subscribe to Construction, the Work Order Management subscription is available by default. To enable Work Order Management without a Construction subscription, contact your Sage Intacct account manager. |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                                                                                                                                                                                                        |
| User type             | Business Construction Manager Employee Project Manager                                                                                                                                                                                               |
| Permissions           | Work Order Management Work orders: List, View, Add, Edit, Delete                                                                                                                                                                                     |

## New validations for allocations and retainage

We've added validations to prevent allocations and retainage from being entered on the same purchasing invoice line. Using allocations and retainage on the same line is not supported.

[Permissions and other requirements](https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Construction/2026-R4-construction-other-updates.htm#)

| Subscription          | Construction Purchasing                                           |
| --------------------- | ----------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom United States                     |
| User type             | Business Construction Manager Project Manager                     |
| Permissions           | Purchasing Purchasing transactions: List, View, Add, Edit, Delete |
