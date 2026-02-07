---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Payable/2026-R1-ap-pay-bills-pagination.htm
release: 2026-R1
extracted: 2026-02-07
title: "Pay bills enhancements—Phased rollout"
---

# Pay bills enhancements—Phased rollout

[Pay bills](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=TOC_ap_workbench)

accounts payable

The enhanced Pay Bills experience is beginning a phased general availability rollout. Starting with this release, the enhanced experience is available automatically to all new companies. If you're an existing company, you can opt into this new experience for your users.

## Key benefits

Enjoy advanced filtering and usability improvements to help you process bills faster and more accurately, even at scale.

- **Work faster**: Quickly locate and act on bills using advanced filters and dynamic sorting.
- **Handle more data**: Load up to 5,000 bills and view 1,000 rows per page for streamlined workflows.
- **Reduce errors**: Search by preferred payment method and apply location-based credit filters to ensure accuracy.
- **Improve usability**: Persistent filters, cleaner layouts, and split vendor columns make navigation easier.

## Details

- Server-side pagination: Load more bills at once—up to 5,000—while viewing 1,000 rows per page.
- Advanced filtering and sorting:
  - Filters for Vendor, Vendor ID, Bill Number, Bill Date, Due Date, Currency, Amount Due, Inline Credit, and Preferred Payment Method.
  - Location-based credit filters with attribute-value pairs for precise credit application.
  - Persistent filters remain active when navigating between pages.

- Vendor column split: Vendor name and ID now appear in separate columns for easier search and sort.
- Preferred payment method search: Group payments by method (check, ACH, wire transfer) to prevent errors.
- Updated filter panel: Intuitive design with improved table headings for Credit Filters, Drill Down Filters, and Sort By.
- Sorting improvements: Dynamic sorting for key columns; note that some attributes (Payment Priority, Discount Date, Location ID/Name) are not supported.

## How it works

1. Navigate to **Accounts Payable** > **Pay bills**.
2. Use the **Load more bills** option to bring in up to 5,000 bills.
3. Apply filters from the new filter panel:
    1. Select criteria such as Vendor, Due Date, or Preferred Payment Method.
    2. Use location-based credit filters for precise credit application.

4. Sort columns dynamically to organize bills by your preferred attributes.
5. Review and process bills efficiently with the expanded grid and persistent filters.

## Permissions and other requirements

| Subscription          | Accounts Payable                |
| --------------------- | ------------------------------- |
| Regional availability | All regions                     |
| User type             | Business                        |
| Permissions           | Accounts Payable Pay bills: Run |
