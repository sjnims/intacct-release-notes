---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Accounts_Payable/2024-R2-tax-validation-relaxed-ap-bills.htm
release: 2024-R2
extracted: 2026-02-07
title: "Edit tax information for bills in draft state"
---

# Edit tax information for bills in draft state

To help support AP Automation for companies using the Taxes application, we no longer validate tax fields while bills are in a draft state.

This means that you can continue to work on a bill and save your progress before you select a tax solution or provide tax details. You can also change this information before you post the bill. The tax solution, tax details, and the vendor are validated when you post the bill.

## Details

When you have a subscription to the Taxes application and you create a bill, you can select the **Transaction has tax implications** checkbox. This lets you enter the tax solution and adds line-level fields for tax detail, tax rate, and transaction tax.

![Screenshot of ap draft bill with callouts for Transaction has tax implications and manually entered transaction tax amount](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-tax-ap-draft-bill.png)

As long as the bill hasn't been posted, you can leave these fields blank, manually enter amounts for the transaction tax, or edit the entries you made.

Until you enter a tax solution, you cannot enter multiple taxes per line. The multiple taxes per line checkbox is not available without a tax solution.

To preserve the integrity of data entered through AP Automation, transaction tax amounts are not recalculated when you add a new tax detail to the line. If you manually enter a transaction tax amount and then later add a tax solution and tax detail, or if you change the tax solution and enter a new tax detail, the transaction tax is not recalculated. Intacct will recalculate the tax amount when you change one tax detail for another.

If you change the tax solution, any selected tax details not associated with the new solution are removed. The calculated transaction totals remain unless you manually change them or recalculate by assigning and then changing the tax details at the line level.

## Requirements

| Subscription | Accounts Payable                                                                 Taxes |
| --- | --- |
| Regional availability | All regions |
| User type | Business user |
| Permissions | Accounts Payable                                                                                                                                      Bills: List, Add, Edit                                                                     Tax Authority: List, View, Add, Edit, Delete                                                                     Tax Detail: List, View, Add, Edit, Delete                                                                     Tax Schedule: List, View, Add, Edit, Delete                                                                     Tax Schedule Map: List, View, Add, Edit, Delete |
