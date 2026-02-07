---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Fixed_Assets/2026-R1-fam-asset-cost-adjustments.htm
release: 2026-R1
extracted: 2026-02-07
title: "Update asset cost using AP adjustments"
---

# Update asset cost using AP adjustments

You can now increase or decrease an asset's cost directly from an AP adjustment. This update makes it easy to correct costs when asset values change due to capital improvements, revaluation, or earlier acquisition errors.

![AP adjustment page showing the Asset to adjust field on one of the lines.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-fam-asset-adjustment.png)

Previously, cost changes were only possible when an asset was in the Ready for review state, requiring users to reverse postings and states, or rely on manual workarounds in the General Ledger. Now, you can simply create an AP adjustment. When the adjustment is posted, the asset's future depreciation is automatically recalculated to reflect the updated cost and ensure accurate financial reporting.

## Key benefits

- **Increase accuracy:** Easily correct asset cost discrepancies, without manual workarounds.
- **Streamline updates:** Asset cost changes flow directly from AP adjustments, reducing the chance of errors.
- **Recalculate depreciation:** Fixed Assets Management automatically updates future unposted depreciation to reflect the new cost.
- **Improve visibility:** View clear before‑and‑after asset cost changes for every adjustment.

## What's changed

We added an **Asset to adjust** field at the line level on AP adjustments, so you can specify which asset's cost to update. We also introduced a new **Cost adjustments** tab on asset records, making it easy to track all adjustments affecting an asset.

## Good to know

- To adjust an asset's cost, the asset must be in the **In-service** or **Ready for Review** state.
- A debit memo increases the asset cost and a credit memo decreases it.
- The **Base amount** on an adjustment line indicates how much the asset's cost will change.
- **Not posted** depreciation schedule entries are automatically recalculated based on the updated cost. **Posted** entries remain the same.

## How it works

1.  Go to **Accounts Payable** > **All** > **Payments** and select Add (circle) next to **Adjustments**.
2.  Select a **Base currency** that matches the asset's base currency.
3.  In the Entries section, select an **Account** for one of the lines.

    This account must be assigned as the Asset or CIP GL account on the asset that you want to adjust.

4.  Select **Show details** to expand the line.
5.  Select an **Asset to adjust**.
6.  Enter any remaining required fields.
7.  Select **Post**.

After posting, you can view the cost change on the asset’s **Cost adjustments** tab.

## Permissions and other requirements

| Subscription          | Fixed Assets Management Accounts Payable                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                              |
| User type             | Business                                                                                                                                 |
| Permissions           | Fixed Assets Management Asset: Edit Accounts Payable Adjustments: List, View, Add, Edit, Post                                            |
| Configuration         | The account you select at the adjustment line level must be assigned as an Asset or CIP GL account on the asset that you want to adjust. |
| CSV import            | The Asset to adjust field is now available in the AP adjustments import template as the ADJUSTMENT_ASSET_ID column.                      |
