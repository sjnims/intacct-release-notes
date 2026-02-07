---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_3/FixedAssets/2025-R3-fam-historical-acc-depr.htm
release: 2025-R3
extracted: 2026-02-07
title: "Provide your own accumulated depreciation for historical assets"
---

# Provide your own accumulated depreciation for historical assets

[Configure historical depreciation setting](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Define_historical_accumulated_depreciation_setting)

[Historical accumulated depreciation examples](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Custom_historical_amount_examples)

[About historical assets](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_historical_assets)

Fixed Assets Management

You can now provide a custom historical accumulated depreciation amount when importing or creating historical assets. Historical assets are assets that started to depreciate in a different accounting system, before moving to Fixed Assets Management.

This added flexibility makes it easier to migrate to Fixed Assets Management while maintaining consistency with your organization's existing records.

![Depreciation rules section on an asset showing the new Historical accumulated depreciation field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-fam-historical-field.png)

## Key benefits

- **Gain flexibility:** Choose whether historical accumulated depreciation is calculated automatically or entered manually.
- **Improve accuracy:** Align depreciation values with your legacy asset books and financial records.
- **Save time:** Reduce the need for manual reconciliation during historical asset migration.

## What's changed

In Fixed Assets Management configuration, we added a new setting called **Historical accumulated depreciation**.

![Historical accumulated depreciation setting with options Calculation autoomatically and Enter manually.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R3-images/2025-R3-fam-historical-config.png)

If you select **Enter manually**, a new field on asset depreciation rules allows you to enter a custom historical accumulated depreciation amount. When the asset is placed in service, the depreciation schedule is adjusted so that the sum of all historically posted entries equals the custom value you entered.

Previously, historical accumulated depreciation was always calculated automatically based on your selected depreciation method.

## How it works

1. In Fixed Assets Management configuration, set Historical accumulated depreciation to **Enter manually**.
2. When creating or importing assets, enter a value for historical accumulated depreciation on depreciation rules.

## Permissions and other requirements

| Subscription          | Administration Fixed Assets Management                                                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                |
| User type             | To configure Fixed Assets Management: Business user with admin privileges To create and import assets: Business                                                            |
| Permissions           | Administration Application subscriptions: List, View, Configure Fixed Assets Management Asset: List, View, Add                                                             |
| Configuration         | A Go-live date must be specified in Fixed Assets Management configuration.                                                                                                 |
| Import                | The Historical accumulated depreciation field is available for import on asset depreciation rule lines.                                                                    |
| Restrictions          | This feature is not available for companies that have already created assets. The Historical accumulated depreciation setting must be configured before adding any assets. |
