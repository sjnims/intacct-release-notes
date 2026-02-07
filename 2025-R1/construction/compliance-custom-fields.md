---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Construction/2025-R1-Compliance-custom-fields.htm
release: 2025-R1
extracted: 2026-02-07
title: "Enhance vendor compliance with custom fields"
---

# Enhance vendor compliance with custom fields

[Adding Custom Fields](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Adding_and_Editing_Custom_Fields)

Construction

Custom fields for compliance records enhance the usability of vendor compliance records. Follow the general custom field workflow to add custom fields to compliance records and then associate those custom fields with compliance types. These custom fields then appear on the compliance records generated from those compliance types.

## How it works

You can create custom fields for compliance records and then associate them with specific compliance types. Different compliance types and their corresponding records can require unique custom fields based on the nature of the generated compliance record. After associating compliance records with a compliance type, you can select which custom fields to apply to each compliance type.

For example, suppose you have set up custom fields A, B, C, and D for a compliance record. However, custom fields B and C are pertinent to insurance warnings, while custom field A is relevant to lien waiver records. Then, assign custom fields B and C to the compliance type for insurance warnings and custom field A to the compliance type for lien waiver records. For insurance warning compliance records, only custom fields B and C display, and for lien waiver records, only custom field A appears.

Add custom fields to compliance types:

Go to **Platform Services > Custom fields** and select a compliance record for the object.

## Permissions and other requirements

| Subscription | Platform Services                                                             Construction |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                       Canada                                                                                                                                                                                                       United States                                                                                                                                                                                                       United Kingdom |
| User type | Platform Services                                                                                                                                                                                                   Business user to add the custom fields                                                                                                                                                                                                       Business user with admin privileges for setup                                                                                                                                                                                           Construction                                                                                                                                                                                                   Business                                                                                                                                                                                                       Project Manager                                                                                                                                                                                                       Construction Manager |
| Permissions | Platform Services                                                                                                                                                                                                   Compliance setup: Add, Edit |
