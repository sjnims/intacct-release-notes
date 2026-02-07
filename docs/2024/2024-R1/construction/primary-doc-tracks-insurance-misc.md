---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-primary-doc-tracks-insurance-misc.htm
release: 2024-R1
extracted: 2026-02-07
title: "Track insurance and miscellaneous compliance records by primary document"
---

# Track insurance and miscellaneous compliance records by primary document

With this release, you can now use the **Primary document** to track commitment-specific insurance and miscellaneous compliance records. This is useful when you need to keep track of additional insurance coverage or have special permitting or certification related to a particular subcontract or purchase order.

## Details

Previously, you could track insurance and miscellaneous compliance records by vendor only. Now, you can track insurance and miscellaneous compliance records by **Primary document** to keep track of compliance records associated with a specific commitment.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-compliance-by-primary-doc.png)

[When you associate a compliance record with a primary document, the compliance record appears on the Commitment compliance tab of the primary document](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-commitment-compliance-primary-doc.htm).

## How it works

Follow these steps to set up compliance records for primary documents. You can add two compliance definitions and compliance types, one to track insurance records and another to track miscellaneous compliance records.

[Add a compliance definition](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-primary-doc-tracks-insurance-misc.htm#)

1. Go to **Purchasing** > **Setup tab** > Vendor **compliance** > and select **Compliance definitions**.
2. Select **Add**.
3. Enter a compliance definition name and ID.

   We recommend giving the compliance definition a name and ID that identifies how it's tracked. In the above example, the definition name is Primary doc insurance compliance.

4. Select **Insurance** or **Miscellaneous** for the compliance category.
5. Under Generation rules, select **Primary document** to Track by.

   You cannot change the **Track by** after the compliance definition is saved.

   ![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R1-images/2024-R1-primary-doc-tracks-insurance-misc.png)

6. Set other **Generation rules** for how you want compliance records generated.
7. Choose the **Validation rules** if available.
8. Set the **Notifications**.
9. **Save** your changes.

[Add a compliance type](https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Construction/2024-R1-primary-doc-tracks-insurance-misc.htm#)

1. Go to **Purchasing** > **Setup tab** > Vendor **compliance** > and select **Compliance type**.
2. Select **Add**.
3. Enter a compliance type name and ID.

   We recommend giving the compliance type a name and ID that identifies how it's tracked. In the above example, the type name is Primary doc insurance compliance.

4. Select the **Compliance definition** that you created.
5. Select a **Compliance record ID numbering sequence** to use.
6. Select **Save**.

After you set up compliance definitions and types for primary document tracking, select the new compliance type when you add a new compliance record to associate it with a primary document.

## Requirements

| Subscription          | Purchasing Construction subscription with Vendor compliance enabled |
| --------------------- | ------------------------------------------------------------------- |
| Regional availability | Australia Canada United States                                      |
| User type             | Business user Project manager                                       |
| Permissions           | Compliance setup: List, View, Add, Edit, Delete                     |
