---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm
release: 2026-R2
extracted: 2026-04-29
title: "Individual charges and invoice runs for billing groups"
---

# Individual charges and invoice runs for billing groups

This idea came from you

Manage customer‑specific charges more efficiently and gain clear visibility into billing group activity. This update introduces individual charges and a centralized invoice runs list, making it easier to handle customer‑level adjustments, reduce manual work, and review billing outcomes without disrupting existing billing schedules.

![Billing group showing the individual charges tab](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-oe-individual-charges.png)

## Key benefits

- **Greater billing flexibility:** Handle customer‑specific adjustments, exceptions, and contract complexity within a billing group.

- **Reduced manual effort:** Replace one‑off invoices and offline tracking with a consistent, repeatable billing process.

- **Improved billing accuracy:** Ensure that charges apply only to customer‑specific invoices during billing group invoice generation.

- **Clear operational visibility:** Review billing activity and outcomes across billing groups to better support reconciliation, troubleshooting, and audit needs.

## What's changed

This release includes the following billing group enhancements:

- **Individual charges:** Billing groups now support charges associated with a specific customer. Individual charges are included only on that customer’s invoices during billing group invoice generation. You can add and manage individual charges from the billing group, customer record, or Individual Charges list.

- **Invoice Runs list:** The Invoice Runs list displays invoice runs across all billing groups, with drill-down access to run-level and invoice-level details.

- **Customer billing groups tab:** Customer records now include a Billing groups tab, which shows the billing groups and individual charges associated with that customer.

- **Inline charge entry:** Charges are now entered inline in a grid, instead of through a separate entry page.

- **Billing group schedule frequencies:** Billing groups now support Semi‑monthly and End of month schedules. The Days frequency has been removed to align with common billing practices.

- **Navigation update:** Billing groups are now found on the All tab in Order Entry instead of the Setup tab.

## How it works

[Add an individual charge](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

1.  Choose one of the following ways to add an individual charge.

    [Add from a customer record](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

    1.  Go to **Order Entry** > **All** > **Customers**.

    2.  Find the customer associated with the charge.

    3.  Select **Edit**.

    4.  Select the **Billing groups** tab.

    5.  Next to the billing group, select **Add individual charge.**

    [Add from a billing group](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

    1.  Go to **Order Entry** > **All** > **Billing groups**.

    2.  Find the Billing group that you want to edit.

    3.  Select **Edit**.

    4.  Select the **Individual charges** tab.

    5.  Select Add to add a new charge.

    [Add from the Individual Charges list](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

    1.  Go to **Order Entry** > **All** and select Add (circle) next to **Individual charges**.

2.  Define charge details.

    1.  Select a frequency.

        - **Recurring:** The charge is included in every invoice run after the charge's start date.

        - **One-time:** The charge is included only once, in the first invoice run after the charge's start date.

    2.  Select the customer associated with this charge.

    3.  Define the item, pricing details, and start date.

    4.  Select **Save**.

[View individual charges across billing groups](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

- Go to **Order Entry** > **All** > **Individual charges**.

[View invoice runs](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

1.  Go to **Order Entry** > **All** > **Invoice runs**.

2.  Select **View** to drill down into the details of a run.

[View billing groups and individual charges for a customer](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Order_Entry/2026-R2-billing-groups.htm#)

1.  Go to **Order Entry** > **All** > **Customers**.

2.  Find the customer.

3.  Select **View**.

4.  Select the **Billing groups** tab.

    ![Billing groups tab of a customer record](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R2-images/2026-R2-oe-customer-bg-tab.png)

## Permissions and other requirements

| Subscription          | Order Entry                                                                                                                                                                                                                                                                                                                      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                                                                                                                                                                                                      |
| User type             | Business                                                                                                                                                                                                                                                                                                                         |
| Permissions           | Order Entry Customers: List, View, Edit Billing groups: List, View, Add, Edit, Delete Individual charges: List, View, Add, Edit, Delete Invoice runs: List, View                                                                                                                                                                 |
| Restrictions          | The start date for the billing group schedule cannot be in the past. Billing groups are not intended for historical data entry. Supported item types are Non-inventory and Non-inventory (sales only). Required transaction definition settings: Workflow category must be set to Invoice. Enable for Contracts is not selected. |
