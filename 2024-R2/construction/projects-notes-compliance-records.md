---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Construction/2024-R2-projects-notes-compliance-records.htm
release: 2024-R2
extracted: 2026-02-07
title: "Store project and notes on corresponding compliance records"
---

# Store project and notes on corresponding compliance records

You can now track compliance records related to a project. Use notes on compliance records to describe the project (job), vendor, or purchase order and subcontract. These notes are visible to all compliance record users.

## Details

When you create a commitment, the project is now automatically included on the compliance record. You can easily add or change the project on the compliance record.

In addition, you can include the project on your printed document templates.

## Example

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-project_notes_compliance_records.png)

## How it works

Before you can start to track compliance records, turn on Vendor Compliance (included with your Construction subscription) and assign compliance permissions.

Create a compliance record for each document that you need to track. After creating compliance definitions and compliance types, you can create compliance records for your vendors or commitments. You can add multiple compliance records for each vendor. Add one compliance record for each document that you need to track.

### Turn on Vendor Compliance

1.  Go to **Company > Admin tab > Subscriptions**.
2.  Find Vendor Compliance (included with your Construction subscription) in the list and turn it on.
3.  Assign the following Purchasing compliance records permissions:  
    Compliance setup: List, View, Add, Edit, Delete  
    Compliance records: List, View, Add, Edit, Delete

The compliance setup permissions apply to both compliance definitions and compliance types. Grant permissions to the users who create compliance definitions and maintain vendor compliance records.

### Create compliance definitions

1.  To establish how documents are validated and what happens when a document is missing or expired, create compliance definitions. Validation is based on either receipt of a document or an expiration date.
2.  Specify whether payments are blocked or a warning appears in Accounts Payable if a vendor has an expired or missing document.
3.  Create compliance types for each type of document that you need to track.
4.  Associate compliance definitions with one or more compliance types.
5.  Create compliance records for your vendors or commitments. Create one compliance record for each of the vendor's documents that you need to track.

## Permissions and requirements

| Subscription          | Projects application: Project Costing and Billing Purchasing Construction Vendor Compliance                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada United Kingdom (EA) United States                                                              |
| User type             | Business user Project Manager                                                                                   |
| Permissions           | Purchasing compliance records: List, View, Add, Edit Purchasing compliance setup: List, View, Add, Edit, Delete |
