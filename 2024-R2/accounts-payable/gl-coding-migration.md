---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Accounts_Payable/2024-R2-gl-coding-migration.htm
release: 2024-R2
extracted: 2026-02-07
title: "AP Automation customers now benefit from GL account and dimension coding"
---

# AP Automation customers now benefit from GL account and dimension coding

Following a successful Early Adopter program for GL account and dimension coding, we're now enabling this option for all AP Automation customers.

## What is GL account and dimension coding?

GL account and dimension coding uses Artificial Intelligence/Machine Learning (AI/ML) to predict GL account, Location, and Department field values on a line-by-line basis.

AI/ML determines values for these three fields based on your data correction patterns for individual line items. This means that over time, as machine learning recognizes changes that you repeat, Sage Intacct is able to create draft bills that include the dimension values you intend. You spend less time correcting coding details and can post bills more quickly.

## For new users of GL account and dimension coding

If you were not part of the original Early Adopter program, you might notice the following:

- AP Automation no longer creates draft bills that have GL account and dimension coding for only some of lines, or coding for more lines than exist in the vendor document.
- In the beginning, you might need to correct some predictions and then post your changes, to help AI/ML to build a model of what you expect.
- If the nature of your bills or your billing cycle meant that the previous bill was not the best predictor of how you would code the current bill, you'll get particular benefit from how AI/ML learns your patterns.

GL account and dimension coding is enabled automatically with this release. You do not need to make any changes to start taking advantage of predictive coding.

## Requirements

| Subscription          | Accounts Payable AP Automation Sage Cloud Services                                         |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Regional availability | United States Existing AP Automation Early Adopter participants in other supported regions |
| User type             | Business user                                                                              |
| Permissions           | Accounts Payable (to upload and edit bills) Bills: List, View, Add, Edit                   |
| Restrictions          | Only applicable to companies that do not have a HIPAA-compliance requirement.              |
