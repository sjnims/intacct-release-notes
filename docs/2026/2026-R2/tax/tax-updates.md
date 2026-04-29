---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Tax/2026-R2-tax-updates.htm
release: 2026-R2
extracted: 2026-04-29
title: "Updates and enhancements for taxes"
---

# Updates and enhancements for taxes

This idea came from you

Thanks to your feedback, we made several updates and enhancements to our existing tax features.

## Enter partial exemption at the top level

You can now enter partial exemption directly at the top level for your Accounts Payable transactions. This makes it easier to apply partial exemption for all your transactions.

Here's how it works:

1.  Enable and configure partial exemption on your entity configuration page. Depending on where your entity operates, it might have a different name.
    
    -   Australia - Reduced input tax credit (RITC)
        
    -   Canada - Input tax credit (ITC)
        
    -   All other locations - Partial exemption
        
2.  Open an Accounts Payable transaction at the top level.
    
3.  If partial exemption is enabled for the selected entity or location, a Partly exempt column displays with a checkbox for each line.
    
4.  Select the checkbox to apply partial exemption to the transaction line.
    
5.  If the line applies to an entity that does not have partial exemption, you cannot select the checkbox for partial exemption.
    

## Manually retrieve missing tax submission files

You can now manually retrieve missing tax submission files from when a submission is marked as completed, but the files, bundle number, or submission receipt are not automatically retrieved from Sage Regulatory Reporting.

![Screenshot of the Submit taxes page with a callout box around the Retrieve files button.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-tax-retrieve-files.png)

Tax submission files are retained for 30 days after the submission date.

## Permissions and other requirements

| Subscription | Taxes |
| --- | --- |
| Regional availability | Partial exemption                                                                                                                                                                                                               Australia (as RITC)                                                                                                                                                                                                                   Canada (as ITC)                                                                                                                                                                                                                   France                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                       Retrieve tax submission files                                                                                                                                                                                                               All regions |
| User type | Business |
| Permissions | Company                                                                                                                                                                                                               Entities: List, View, Add, Edit                                                                                                                                                                                                       Accounts Payable                                                                                                                                                                                                               Bills: List, Add, Edit, Post, Delete                                                                                                                                                                                                       Taxes                                                                                                                                                                                                               Tax detail: List, View, Add, Edit                                                                                                                                                                                                                   Tax submission: List, View, Add, Edit, Delete |
| Restrictions | Partial exemption is not supported for recurring Accounts Payable bills. |
