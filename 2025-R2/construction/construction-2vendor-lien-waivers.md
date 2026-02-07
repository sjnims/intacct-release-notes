---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-construction-2vendor-lien-waivers.htm
release: 2025-R2
extracted: 2026-02-07
title: "Generate lien waivers for secondary vendors"
---

# Generate lien waivers for secondary vendors

[Vendor compliance](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_vendor_compliance)

[Lien waivers](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Aa_TOC_lien_waivers)

[FAQs: Secondary vendor](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Secondary_vendor_FAQ)

[Lien waiver overview (2:26)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-construction-2vendor-lien-waivers.htm#)

[Lien waivers: Set up compliance definitions and type (5:27)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-construction-2vendor-lien-waivers.htm#)

[Secondary vendors and joint payees (4:11)](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_2/Construction/2025-R2-construction-2vendor-lien-waivers.htm#)

Construction

You can now automatically generate lien waivers for secondary vendors on AP bills, all payments, or joint checks.

## Details

We have introduced two new settings for generating invoice lien waivers and payment lien waivers.

- **Generate additional invoice lien waivers checkbox:** Select this checkbox to generate an additional lien waiver for the secondary vendor whenever you create an Invoice and generate a lien waiver for the primary vendor. This secondary vendor lien waiver is identical to the primary vendor lien waiver.
- **Generate additional payment lien waivers:** Select to generate for joint check payments or to not generate at all. Optionally, you can select to generate secondary vendor lien waivers for all payments.

We advise caution with the **Generate for all payments** setting, as it can generate a very large number of lien waivers. Lien waiver creation follows the rules set up on the compliance definition.

[![Secondary vendor tab on a purchasing subcontract showing Secondary vendor's name, joint payee's name, and Generate additional invoice lien waivers checkbox selected. Generate additional payment lien waivers is selected, showing options Generate for joint check payments only, Do not generate, and Generate for all payments.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025_R2_po_2nd-vendor-lien-waiver_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025_R2_po_2nd-vendor-lien-waiver.png)

We have also added a **Secondary vendor name** field to the compliance record. This text field is automatically populated with the secondary vendor's name from the Secondary vendor tab on the primary document, but you can edit it as needed.

[![Compliance record information screen showing a populated Secondary vendor name field in the Compliance details section.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-construction-compliance-2nd-vendor_thumb_0_100.png)](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R2-images/2025-R2-construction-compliance-2nd-vendor.png)

## Permissions and other requirements

| Subscription          | Purchasing Accounts Payable Projects Construction with the Vendor Compliance subscription enabled |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United States United Kingdom                                                     |
| User type             | Business Project manager                                                                          |
| Permissions           | Accounts Payable Vendors: List, View, Edit Construction Compliance records: List, View, Edit      |
