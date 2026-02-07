---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Construction/2026-R1-construction-retainage-flex-release-primary-doc.htm
release: 2026-R1
extracted: 2026-02-07
title: "Flexibly release retainage from a primary document"
---

# Flexibly release retainage from a primary document

[Flexibly release retainage from a primary document](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Flex_release_retainage_primary_doc)

[Flexible retainage release calculation and error handling](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Flex_release_retainage_calculation_error_handling)

Construction

Easily release retainage across all invoice lines on a primary document with the new flexible retainage release feature.

## Key benefits

-   **Meets regional requirements**: Releasing retainage directly from a primary document saves time and streamlines your vendor retainage workflow, particularly for regions that only release retainage in bulk. For example, if you typically release half of retainage at practical completion and the other half after the defect period ends.
    
-   **Expands retainage release options**: Flexible retainage release offers another way to process retainage. You can still release retainage per invoice line on the AP retainage release page as needed.
    

## What's changed

We made the following changes to the primary documents page in Purchasing.

### New Release retainage button

When editing a primary document, you'll find a new **Release retainage** button on the **Primary document details** tab. This button displays in the **Accounts Payable bills** section.

![Primary document details tab showing Release retainage button](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-const-flex-release-retainage-button.png "Primary document details tab showing Release retainage button")

### New Release retainage window

When you select the **Release retainage** button, a new **Release retainage** window opens. Here, you'll enter the percent of retainage to release. This same percentage is applied across all invoice lines on the primary document.

-   To release a portion of retainage across all invoice lines, enter a number that's less than 100.
    
-   To release all remaining retainage across all invoice lines, enter 100.
    

![Release retainage window](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-const-flex-release-retainage-window_UK.png "Release retainage window")

## How it works

The flexible retainage release process applies a percentage that you enter across all invoice lines on the primary document. The amount that's released for a line is based on the total retainage withheld for that line rather than the total retainage remaining on the invoice.

Sage Intacct calculates the retainage release amount per line as follows:

(Percent entered \* Retainage held per line) - Retainage previously released per line

### How per line percentages work

The following scenarios illustrate how Sage Intacct handles the percent you enter for flexible retainage release.

-   **Scenario A: Retainage not yet released**: If you have not yet released retainage for any invoice lines, the percent you enter is the percent of retainage released per line.
    
    Example: Retainage has not been released for any lines, and you enter 50 as the percent to release. In this case, 50 percent of the retainage held per line is released.
    

-   **Scenario B: Retainage already released for an invoice line**: If you've already released retainage for an invoice line, the percent you enter is the percent you want to catch up to per line.
    
    Example: You've already released 50 percent of retainage for an invoice line, and you enter 75 as the percent to release. You're indicating that you want a total of 75 percent of retainage released per line, not 75 percent of the remaining retainage balance.
    
    In this case, if the retainage held for an invoice line is 100.00, and you've already released 50.00, the retainage amount released is 25.00. The calculation is as follows: (.75 \* 100) - 50 = 25
    

-   **Scenario C: Release remaining retainage balance for all invoice lines**: To release the remaining retainage balance across all lines, enter 100 as the percent to release.
    
    Example: You've already released 50 percent of retainage across all lines, and you enter 100 as the percent to release. In this case, all remaining retainage is released for all lines.
    

## Good to know

### How batches are created

As long as at least one invoice line falls within the specified retainage release percentage, Sage Intacct creates an AP retainage release batch and the associated AP bills.

### When lines are not processed

You'll receive an alert or error message in the following situations:

-   **Invoice lines in a draft release batch**: For invoice lines in a release batch with a draft status, you must either post those lines or remove them before releasing retainage from that invoice.
    
-   **Invoice lines not processed**: If you've already released retainage, it's possible for the percent you enter to result in a zero or negative retainage release amount for an invoice line. In this case, Sage Intacct does not release retainage for that line.
    
-   **Batch not created**: If you've already released retainage, and the percent you enter results in a zero or negative retainage release amount for all invoice lines, Sage Intacct does not create a retainage release batch.
    

## Permissions and other requirements

| Subscription | Accounts Payable                                                                 Construction                                                                 Projects configured for Project costing and billing                                                                 Purchasing |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business                                                                 Project Manager                                                                 Construction Manager |
| Permissions | Accounts Payable                                                                                                                                                                                                               Accounts Payable release retainage: List, View, Add, Edit, Delete |
| Configuration | To release retainage, you must have the required subscriptions, permissions, and user type, and set up Sage Intacct as follows:                                                                                                                                                                                                               In Accounts Payable, enable AP retainage (Accounts Payable > Setup > Configuration).                                                                                                                                                                                                                   In Purchasing, enable retainage on transaction definitions (Purchasing > Setup > Transaction Definitions). |
| Dependencies or other requirements | The Release retainage button displays only if you select to edit a primary document, combined with the above permissions. |
