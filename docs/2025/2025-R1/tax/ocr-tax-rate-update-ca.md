---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Tax/2025-R1-OCR-tax-rate-update-CA.htm
release: 2025-R1
extracted: 2026-02-07
title: "Updates for Canadian Sales Tax—Nova Scotia tax rate changes"
---

# Updates for Canadian Sales Tax—Nova Scotia tax rate changes

[Update standard setup](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Update_standard_setup)

Taxes

Provincial Sales Tax (PST) rates in Nova Scotia change on April 1, 2025, which impacts the Harmonized Sales Tax (HST) rates. We updated the standard tax solution for Canada with new tax objects for HST to ensure a smooth transition to the new rates.

If you use the original Canadian Sales Tax solution, then no further action is required.

If you use the enhanced Canadian Sales Tax solution released in November 2024, then you must manually install the tax solution update.

## Original Canadian Sales Tax solution

If you use the original Canadian Sales Tax solution that includes tax schedule maps, item tax groups, and contact tax groups, then you do not need to take any additional actions. We ran a library refresh to give you the new tax objects that you need for the new Nova Scotia rates. Your tax solution now includes the following tax objects for Nova Scotia with an effective date of April 1, 2025 for the new tax rates.

### New tax details

- NS HST Standard Rate Goods Sale - CA
- NS HST Standard Rate Services Sale - CA
- NS HST Standard Rate Goods Purchase - CA
- NS HST Standard Rate Services Purchase - CA

### New tax schedules

- NS Sale Goods HST Standard
- NS Sale Services HST Standard
- NS Purchase Goods HST Standard
- NS Purchase Services HST Standard

## Enhanced Canadian Sales Tax solution

If you use the enhanced Canadian Sales Tax solution released in November 2024 that only has tax details and tax schedules, then you need to install the updates for your tax solution. This update installs the following new tax details.

### New tax details

- NS GST Purchase effective April 2025
- NS PST Purchase effective April 2025
- NS GST Sale effective April 2025
- NS PST Sale effective April 2025

The update change log has not been updated with the new tax objects for Nova Scotia's tax rate change. This log is informational only and will be updated in the upcoming release with these and other tax solution changes.

## How it works

If you have a company or entity that uses the enhanced Canadian Sales Tax solution, you need to install the updates for your tax solution.

### Check your version of the Canadian Sales Tax solution

1. Go to **Taxes** > **Setup** > **Tax solutions**.
2. Find Canadian Sales Tax - SYS and select **View**.
3. Go to the **Tax schedule maps** section.  
   If you see a list of view-only tax schedule maps, then you have the original Canadian Sales Tax solution. No further action is required.
   If you do not see any tax schedule maps, or if you see a list that only has editable tax schedule maps, then likely you have the enhanced Canadian Sales Tax solution and need to install the update.
4. Select **Done**.

### Update your tax solution

1. Go to **Taxes** > **Setup** > **Tax solutions**.
2. Find Canadian Sales Tax - SYS and select **Edit**.
3. In the **Tax setup updates** section, select the **Install updates** checkbox.
4. Select **Save**.

## Permissions and other requirements

| Subscription          | Taxes                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Canada                                                                                                                                          |
| User type             | Business user with admin privileges                                                                                                             |
| Permissions           | Taxes Tax solutions: List, View, Add, Edit, Delete                                                                                              |
| Configuration         | Users must Turn off tax detail filtering and Enable override of tax schedule on document entry to use the enhanced Canadian Sales Tax solution. |
