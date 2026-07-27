---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Construction/2026-R2-construction-retainage-flex-release-project-contract.htm
release: 2026-R2
extracted: 2026-04-29
title: "Flexibly release retainage from a project contract"
---

# Flexibly release retainage from a project contract

Flexible retainage release is now supported for project contracts.

Introduced for primary documents in 2026 R1, flexible retainage release allows you to release retainage across all invoice lines on a project contract using a percentage.

## Key benefits

- **Meets regional requirements**: Releasing retainage directly from a project contract saves time and streamlines your customer retainage workflow, particularly for regions that only release retainage in bulk. For example, if you typically release half of retainage at practical completion and the other half after the defect period ends.

- **Expands retainage release options**: Flexible retainage release offers another way to process retainage. You can still release retainage per invoice line on the AR retainage release page as needed.

## What's changed

We made the following changes to the project contracts page in the Projects application.

### New Release retainage button

When editing a project contract, you'll find a new **Release retainage** button on the **Billing details** tab. This button displays in the **Project contract invoices** section.

![Billing details tab showing Release retainage button](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-const-flex-release-retainage-button-project-contract.png "Billing details tab showing Release retainage button")

### New Release retainage window

When you select the **Release retainage** button, a new **Release retainage** window opens. Here, you'll enter the minimum percent of retainage to release across all lines on the project contract that are holding retainage.

- To release a portion of retainage across all invoice lines, enter a number that's less than 100.

- To release all remaining retainage across all invoice lines, enter 100.

![Release retainage window](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-const-flex-release-retainage-window-project-contract.png "Release retainage window")

## How it works

The flexible retainage release process applies a percentage that you enter across all invoice lines on the project contract:

- This percentage is a minimum percent to release across all lines holding retainage.

- The amount that's released for a line is based on the total retainage withheld for that line, not the total retainage remaining on the invoice.

Sage Intacct calculates the retainage release amount for a line as follows:

(Percent entered \* Retainage held per line) - Retainage previously released per line

### How per line percentages work

The following scenarios illustrate how Sage Intacct handles the percent you enter for flexible retainage release.

- **Scenario A: Retainage not yet released**: If you have not yet released retainage for any invoice lines, the percent you enter is the percent of retainage released per line.

  Example: Retainage has not been released for any lines, and you enter 50 as the percent to release. In this case, 50 percent of the retainage held per line is released.

- **Scenario B: Retainage already released for an invoice line**: If you've already released retainage for an invoice line, the percent you enter is the percent you want to catch up to per line.

  Example: You've already released 50 percent of retainage for an invoice line, and you enter 75 as the percent to release. You're indicating that you want a total of 75 percent of retainage released per line, not 75 percent of the remaining retainage balance.

  In this case, if the retainage held for an invoice line is 100.00, and you've already released 50.00, the retainage amount released is 25.00. The calculation is as follows: (.75 \* 100) - 50 = 25

- **Scenario C: Release remaining retainage balance for all invoice lines**: To release the remaining retainage balance across all lines, enter 100 as the percent to release.

  Example: You've already released 50 percent of retainage across all lines, and you enter 100 as the percent to release. In this case, all remaining retainage is released for all lines.

## Good to know

### Calculation examples

For detailed examples of how the flexible retainage release calculation works, see [Flexible retainage release calculation and error handling](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Flex_release_retainage_calculation_error_handling).

### How batches are created

As long as at least one invoice line falls within the specified retainage release percentage, Sage Intacct creates an AR retainage release batch and the associated customer invoices.

### When lines are not processed

You'll receive an alert or error message in the following situations:

- **Invoice lines in a draft release batch**: For invoice lines in a release batch with a draft status, you must either post those lines or remove them before releasing retainage from that invoice.

- **Invoice lines not processed**: If you've already released retainage, it's possible for the percent you enter to result in a zero or negative retainage release amount for an invoice line. In this case, Sage Intacct does not release retainage for that line.

- **Batch not created**: If you've already released retainage, and the percent you enter results in a zero or negative retainage release amount for all invoice lines, Sage Intacct does not create a retainage release batch.

For examples of situations that prevent lines from being processed, see [Flexible retainage release calculation and error handling](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Flex_release_retainage_calculation_error_handling).

## Permissions and other requirements

| Subscription                       | Accounts Receivable Construction Projects configured for Project costing and billing Order Entry                                                                                                                                                                                                                                        |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Australia Canada United Kingdom United States                                                                                                                                                                                                                                                                                           |
| User type                          | Business Construction Manager Project Manager                                                                                                                                                                                                                                                                                           |
| Permissions                        | Accounts Receivable Accounts Receivable release retainage: List, View, Add, Edit, Delete Order Entry Order Entry transactions: List, View, Add, Edit Projects Project contracts: List, View, Add, Edit                                                                                                                                  |
| Configuration                      | To release retainage, you must have the required subscriptions, permissions, and user type, and set up Sage Intacct as follows: In Accounts Receivable, enable AR retainage (Accounts Receivable > Setup > Configuration). In Order Entry, enable retainage on transaction definitions (Order Entry > Setup > Transaction Definitions). |
| Dependencies or other requirements | The Release retainage button displays only if you select to edit a project contract, combined with the above permissions.                                                                                                                                                                                                               |
