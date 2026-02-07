---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Tax/2025-R1-tax-custom-submission-ga.htm
release: 2025-R1
extracted: 2026-02-07
title: "Tax submission for custom tax solutions—Generally available"
---

# Tax submission for custom tax solutions—Generally available

[Submit taxes for custom tax solutions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=submit_taxes_custom_solution)

[Set up custom tax solutions](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Taxes_setup_custom)

Taxes

Our new tax submission workflow streamlines the tax filing process for any company using a custom tax solution.

## Details

When you configure a custom tax solution in the Taxes application, you can now set the submission process for that tax solution as **User-submitted**. This lets you record tax submissions for any company or entity that uses a custom tax solution. When you create a tax submission, Sage Intacct locks transactions that are included in the tax submission period. You can run reports on the tax records for those transactions to extract the data you need to file your taxes. After you complete your manual tax filing, you can mark the submitted transactions as filed.

## How it works

### Step 1. Define the submission type for your custom tax solution

1. To configure a custom tax solution, go to **Taxes** > **Setup** > **Tax solutions**.
2. Select **Add** and enter your tax solution information or select **Edit** for an existing custom tax solution.
3. For **Submission process**, select **None** or **User submitted**.
4. If you selected **User submitted**, enter the **Start date of the first tax submission period**.
5. Select **Save**.

![Screenshot of the tax solution information page for a custom tax solution with a callout box around the Submission process field.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-custom-submission-ga-setup.png)

The submission process for standard tax solutions defaults to Sage Regulatory Reporting and cannot be changed. Non-VAT tax engines like No Tax, Simple Tax, Advanced Tax, and Avalara AvaTax do not have a submission process.

### Step 2. Create a tax submission

When you're ready to create a tax submission, you can follow the streamlined submission process for custom tax solutions.

1. Go to **Taxes** > **All** > **Tax submissions**.
2. Enter the information for your custom tax solution and select **Prepare tax data**.
3. On the **Processing data offline** page, enter the start and end dates for the submission period.  
    Optionally, you can select the checkbox to **Include late transactions**.
4. Select **Continue**.

The tax records in the submission period are locked and your tax submission appears on the **Tax submission** list page. From that page, you can **View**, **Edit**, or **Delete** your tax submission. Deleting a tax submission in progress releases the locked records.

### Step 3. Optionally include additional information and review

1. To update your tax submission, select **Edit**.
2. You can add an **Attachment**, enter the **Submission date** and **Submitter's email address**, and add any relevant **Notes**.
3. You can review the **Processing** steps.  
    Under **Details**, you can select **\[#\] records eligible for submission** to review the locked tax records for the submission period.
4. Select **Save** to save your changes without closing the submission, or select **Mark as Filed** to close the submission, unlock the tax records, and mark them as filed.

![Screenshot of the Submit taxes page for a custom tax solution with a User-submitted submission process.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-tax-custom-submission-ga-prepare.png)

## Permissions and other requirements

| Subscription          | Taxes                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                     |
| User type             | Business                                                                                        |
| Permissions           | Taxes Tax solution: List, View, Add, Edit, Delete Tax submission: List, View, Add, Edit, Delete |
| Restrictions          | Companies or entities must use a custom tax solution.                                           |
