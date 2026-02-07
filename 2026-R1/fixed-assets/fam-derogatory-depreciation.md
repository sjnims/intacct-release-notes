---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Fixed_Assets/2026-R1-fam-derogatory-depreciation.htm
release: 2026-R1
extracted: 2026-02-07
title: "Declined method and derogatory depreciation for France"
---

# Declined method and derogatory depreciation for France

We’ve added the derogatory depreciation method, designed for organizations operating in France.

![An asset classification with derogatory GL accounts and depreciation method.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-fam-derogatory.png)

This method compares multiple depreciation approaches, including daily and declining, and automatically uses the most beneficial option based on French fiscal rules. It gives you an easier, more compliant way to manage the gap between accounting depreciation and fiscally allowed declining depreciation.

## Key benefits

- **Automate calculations:** Fixed Assets Management calculates depreciation amounts, automatically switches to daily when it becomes more favorable, and creates the required derogatory entries.
- **Save time:** Set derogatory GL accounts at the classification level with the option to override at the asset level.
- **Gain insights**: View daily, declining, and derogatory amounts, all in one depreciation schedule.
- **Support compliance:** Follows French fiscal rules (Article 39 A, CGI) and applies coefficients based on useful life.

## What's changed

We made the following enhancements to support the declined method with derogatory depreciation journal entries:

- Three new GL accounts now appear on assets and asset classifications: **Provision derogatory**, **Accumulated provision derogatory**, and **Reversal derogatory**.
- A new depreciation method is available on depreciation rules: **Derogatory (DER)**.
- A Coefficient column appears on depreciation rules, with values defaulted to 1.25, 1.75, or 2.25 based on the useful life.
- When the Derogatory method is used, the depreciation schedule includes new columns:
  - Depreciation amount for daily method
  - Depreciation amount for declining method
  - Derogatory provision
  - Derogatory reversal
  - Derogatory balance based on daily

## Good to know

- The derogatory depreciation method is only available when the entity's operating country is France, or when you’re working at the top level.
- The useful life must be expressed in months, and be at least 36 months.

## How it works

1. Set up asset classifications.
   1. Go to **Fixed Assets Management** > **All** > **Asset classifications**.
   2. Create or edit a classification.
   3. Assign the **Accumulated provision**, **Provision derogatory**, and **Reversal derogatory** GL accounts.
   4. In the Depreciation rules section, select the **Derogatory** method.

      After saving, you can review the coefficient.

2. Assign classifications to assets.

   You can optionally customize the GL accounts and depreciation rules on individual assets.

3. Place the assets in service.
4. View a complete depreciation schedule.
   1. Go to the asset's **Depreciation schedules** tab.
   2. Select a schedule to view daily, declining, and derogatory amounts.

## Permissions and other requirements

| Subscription          | Fixed Assets Management                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | France                                                                                                                                                                                                                                            |
| User type             | Business                                                                                                                                                                                                                                          |
| Permissions           | Fixed Assets Management Asset: List, View, Add, Edit Classification: List, View, Add, Edit                                                                                                                                                        |
| Configuration         | The derogatory depreciation method is only available when the entity's operating country is France, or when you’re working at the top level.                                                                                                      |
| Import service        | The following fields are available to import on assets: Provision derogatory GL account Accumulated provision derogatory GL account Reversal derogatory GL account The DER method is also available as a value for the Depreciation method field. |
