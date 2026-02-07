---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm
release: 2025-R2
extracted: 2026-02-07
title: "Custom declining balance depreciation methods"
---

# Custom declining balance depreciation methods

[Custom declining balance with true-up](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Custome_declining_balance_with_true_up)

[Custom declining balance without true-up](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Custom_declining_balance_without_true_up)

[Add a depreciation rule to an asset classification](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_rule_to_classification)

[Add a depreciation rule to an asset](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_rule_to_asset)

Fixed Assets Management

We added two new depreciation methods to help you comply with financial and tax regulations in Australia, Canada, South Africa, and the United Kingdom:

-   Custom declining balance with true-up (CDBT)
    
-   Custom declining balance without true-up (CDB)
    

These methods allow you to customize the depreciation rate applied to assets under a declining balance method, providing greater flexibility when managing your assets.

![Asset classification page showing the Custom declining depreciation balance method selected and Deprecaition rate field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-fam-custom-declining.png)

## Details

-   **User-defined depreciation rate:** When using a custom method, a new field called Depreciation rate is available on depreciation rules. You can select a rate from 1.00% to 100.00%.
    
-   **Calculation:** In general, depreciation amounts are calculated using the following formula:  
    *(Asset cost − Salvage value − Accumulated depreciation) × Depreciation rate*
    
-   **With true-up:** For the custom declining balance with true-up method, the remaining depreciation is applied in full in the final period, instead of being multiplied by the depreciation rate. This ensures that the entire depreciable cost is trued up and accounted for in the schedule.
    
-   **Without true-up:** For the custom declining balance without true-up method, the depreciation rate is applied throughout the asset's entire useful life. Any remaining depreciation at the end of the asset’s life is treated as a loss upon disposal.
    

[Example 1—CDBT with full month convention](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

**Scenario:**

-   Depreciation rate: 66.67%
    
-   Useful life: 36 months
    
-   Convention: Full month
    
-   Asset cost: $55,000.00
    
-   Salvage value: $5,000.00
    
-   Depreciable cost: $50,000.00
    
-   In-service date: 01/25/2024
    
-   First fiscal month: March
    
-   Use salvage value = True
    

The following schedule uses the round-half-up method to calculate amounts. The amounts you see in Intacct might differ by $0.01. Fixed Assets Management automatically adjusts for differences in total accumulated depreciation caused by rounding and distributes those differences across the final months of each fiscal year to ensure that the total accumulated depreciation is correct.

**Schedule:**

| Period | Scheduled posting date | Depreciation amount ($) | Calculation |
| --- | --- | --- | --- |
| 1 | 01/31/2024 | 2,777.92 | (50,000.00 depreciable cost − 0.00 accumulated depreciation) × .6667 depreciation rate × (12-11+1) ÷ 12 ÷ 2 months |
| 2 | 02/29/2024 | 2,777.92 | (50,000.00 depreciable cost − 0.00 accumulated depreciation) × .6667 depreciation rate × (12-11+1) ÷ 12 ÷ 2 months |
| 3 | 03/31/2024 | 2,469.24 | (50,000.00 depreciable cost − 5,555.83  accumulated depreciation) × .6667 depreciation rate  ÷ 12 months |
| ... | ... | ... | ... |
| 14 | 02/28/2025 | 2,469.24 | (50,000.00 depreciable cost − 5,555.83 accumulated depreciation) ×.6667 depreciation rate  ÷ 12 months |
| 15 | 03/31/2025 | 823.00 | (50,000.00 depreciable cost − 29,630.93  accumulated depreciation) × .6667 depreciation rate   ÷ 12 months |
| ... | ... | ... | ... |
| 26 | 02/28/2026 | 823.00 | (50,000.00 depreciable cost − 29,630.93  accumulated depreciation) × .6667 depreciation rate   ÷ 12 months |
| 27 | 03/31/2026 | 493.73 | (50,000.00 depreciable cost − 9,875.99 accumulated depreciation) ÷ 10 months                                                                             In the final year, the depreciation rate is not applied to allow for true-up. |
| ... | ... | ... | ... |
| 36 | 12/31/2026 | 493.73 | (50,000.00 depreciable cost − 9,875.99 accumulated depreciation) ÷ 10 months                                                                             In the final year, the depreciation rate is not applied to allow for true-up. |

[Example 2—CDBT with half year convention](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

**Scenario:**

-   Depreciation rate: 66.67%
    
-   Useful life: 3 years
    
-   Convention: Half year
    
-   Asset cost: $55,000.00
    
-   Salvage value: $5,000.00
    
-   Depreciable cost: $50,000.00
    
-   In-service date: 01/25/2024
    
-   First tax month: January
    
-   Use salvage value = True
    

**Schedule:**

| Period | Scheduled posting date | Depreciation amount ($) | Calculation |
| --- | --- | --- | --- |
| 1 | 12/31/2024 | 16,667.50 | (50,000.00 depreciable cost − 0.00 accumulated depreciation) × .6667 depreciation rate  ÷ 2                                                                             The first period is divided by 2 because of the half year convention. |
| 2 | 12/31/2025 | 22,222.78 | (50,000.00 depreciable cost − 16,667.50 accumulated depreciation) × .6667 depreciation rate |
| 3 | 12/31/2026 | 11,109.72 | 50,000.00 depreciable cost − 38,890.28 accumulated depreciation                                                                              In the final period, the depreciation rate is not applied to allow for true-up. |

[Example 3—CDB with full month convention](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

**Scenario:**

-   Depreciation rate: 30.00%
    
-   Useful life: 60 months
    
-   Convention: Full month
    
-   Asset cost: $210,000.00
    
-   Salvage value: $10,000.00
    
-   Depreciable cost: $200,000.00
    
-   In-service date: 03/31/2024
    
-   First fiscal month: January
    
-   Use salvage value = True
    

The following schedule uses the round-half-up method to calculate amounts. The amounts you see in Intacct might differ by $0.01. Fixed Assets Management automatically adjusts for differences in total accumulated depreciation caused by rounding and distributes those differences across the final months of each fiscal year to ensure that the total accumulated depreciation is correct.

**Schedule:**

| Period | Scheduled posting date | Depreciation amount ($) | Calculation |
| --- | --- | --- | --- |
| 1 | 03/31/2024 | 5,000.00 | (200,000.00 depreciable cost − 0.00 accumulated depreciation) × .3000 depreciation rate  × (12 − 3 + 1) ÷ 12 ÷ 10 months |
| 2 | 04/30/2024 | 5,000.00 | (200,000.00 depreciable cost − 0.00 accumulated depreciation) × .3000 depreciation rate × (12 − 3 + 1) ÷ 12 ÷ 10 months |
| 3 | 05/31/2024 | 5,000.00 | (200,000.00 depreciable cost − 0.00 accumulated depreciation) × .3000 depreciation rate × (12 − 3 + 1) ÷ 12 ÷ 10 months |
| ... | ... | ... | ... |
| 10 | 12/31/2024 | 5,000.00 | (200,000.00 depreciable cost − 0.00 accumulated depreciation) × .3000 depreciation rate  × (12 − 3 + 1) ÷ 12 ÷ 10 months |
| 11 | 01/31/2025 | 3,750.00 | (200,000.00 depreciable cost  − 50,000.00 accumulated depreciation) × .3000 depreciation rate  ÷ 12 months |
| ... | ... | ... | ... |
| 22 | 12/31/2025 | 3,750.00 | (200,000.00 depreciable cost  − 50,000.00 accumulated depreciation) × .3000 depreciation rate  ÷ 12 months |
| 23 | 01/31/2026 | 2,625.00 | (200,000.00 depreciable cost  − 95,000.00 accumulated depreciation) × .3000 depreciation rate   ÷ 12 months |
| ... | ... | ... | ... |
| 34 | 12/31/2026 | 2,625.00 | (200,000.00 depreciable cost  − 95,000.00 accumulated depreciation) × .3000 depreciation rate   ÷ 12 months |
| 35 | 01/31/2027 | 1,837.50 | (200,000.00 depreciable cost  − 126,500.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |
| ... | ... | ... | ... |
| 46 | 12/31/2027 | 1,837.50 | (200,000.00 depreciable cost  − 126,500.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |
| 47 | 01/31/2028 | 1,286.25 | (200,000.00 depreciable cost  − 148,550.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |
| ... | ... | ... | ... |
| 58 | 12/31/2028 | 1,286.25 | (200,000.00 depreciable cost  − 148,550.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |
| 59 | 01/31/2029 | 900.38 | (200,000.00 depreciable cost  − 163,985.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |
| 60 | 02/28/2029 | 900.38 | (200,000.00 depreciable cost  − 163,985.00 accumulated depreciation) × .3000 depreciation rate ÷ 12 months |

At the end of the schedule, $34,214.25 of depreciation remains, which will be recorded as a loss upon disposal.

[Example 4—CDB with half year convention](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

**Scenario:**

-   Depreciation rate: 30.00%
    
-   Useful life: 5 years
    
-   Convention: Half year
    
-   Asset cost: $210,000.00
    
-   Salvage value: $10,000.00
    
-   Depreciable cost: $200,000.00
    
-   In-service date: 01/01/2024
    
-   First tax month: January
    
-   Use salvage value = True
    

**Schedule:**

| Period | Scheduled posting date | Depreciation amount ($) | Calculation |
| --- | --- | --- | --- |
| 1 | 12/31/2024 | 30,000.00 | (200,000.00 depreciable cost  − 0.00 accumulated depreciation) × .3000 depreciation rate  ÷ 2                                                                             The first period is divided by 2 because of the half year convention. |
| 2 | 12/31/2025 | 51,000.00 | (200,000.00 depreciable cost  − 30,000.00 accumulated depreciation) × .3000 depreciation rate |
| 3 | 12/31/2026 | 35,700.00 | (200,000.00 depreciable cost  − 81,000.00 accumulated depreciation) × .3000 depreciation rate |
| 4 | 12/31/2027 | 24,990.00 | (200,000.00 depreciable cost  − 116,700.00 accumulated depreciation) × .3000 depreciation rate |
| 5 | 12/31/2028 | 17,493.00 | (200,000.00 depreciable cost  − 141,690.00 accumulated depreciation) × .3000 depreciation rate |

At the end of the schedule, $40,817.00 of depreciation remains, which will be recorded as a loss upon disposal.

## How it works

You can select the new depreciation methods when creating or editing depreciation rules for an asset or asset classification. Then, you can choose a depreciation rate. Depreciation schedules are generated when the assets are placed in service.

[Add a custom declining balance method to an asset classification](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Asset classifications**.
    
2.  Find the classification to which you want to add a depreciation rule.
    
3.  Select **More actions** > **Edit** at the end of the row.
    
4.  In the Depreciation rules section, select **Add row** or Add (circle).
    
5.  For Depreciation method, select **Custom declining balance with true-up** or **Custom declining balance without true-up**.
    
6.  Enter a **Depreciation rate (%)** from 1.00 to 100.00.
    
7.  Select a **Journal posting rule ID**.
    
8.  Enter a **Useful life**.
    
9.  Select **Save**.
    
    Your changes do not affect assets that already use this classification. All future classification assignments will use the new information.
    

[Add a custom declining balance method to an asset](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/FixedAssets/2025-R2-fam-custom-declining-balance.htm#)

1.  Go to **Fixed Assets Management** > **All** > **Assets**.
    
2.  Find the asset to which you want to add a depreciation rule.
    
    The asset must be in the Ready for review state.
    
3.  In the Depreciation rules section, select **Add row** or Add (circle).
    
4.  For Depreciation method, select **Custom declining balance with true-up** or **Custom declining balance without true-up**.
    
5.  Enter a **Depreciation rate (%)** from 1.00 to 100.00.
    
6.  Select a **Journal posting rule ID**.
    
7.  Enter a **Useful life**.
    
8.  Select **Save**.
    

## Permissions and other requirements

| Subscription | Fixed Assets Management |
| --- | --- |
| Regional availability | All regions |
| User type | Business |
| Permissions | Fixed Assets Management                                                                                                                                                                                                               Asset: List, View, Add, Edit                                                                                                                                                                                                                   Classification: List, View, Add, Edit |
