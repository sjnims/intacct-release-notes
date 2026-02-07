---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Cash_Management/2026-R1-cm-default-location-on-bank-register.htm
release: 2026-R1
extracted: 2026-02-07
title: "In the Bank Register report, the entity location is included automatically"
---

# In the Bank Register report, the entity location is included automatically

[Bank register report](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Running_Bank_Register_Reports)

Cash Management

The Bank Register report now automatically includes the entity’s location when run from within an entity, preventing errors related to missing locations.

## How it works

1.  Go to the entity for which you want to generate the Bank Register report.
2.  Do one of the following:
    - Go to **Cash Management** > **All** > **Reports** > **Registers** > **Bank**.
    - Go to **Reports** > **All** > **Reports center** and open the **Bank Register** report definition.

When the report page opens, the **Location** field in the **Filters** section is already populated with the location for the entity.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-cm-bank-register-report.png "Bank Register report showing Location field populated")

## Permissions and other requirements

| Subscription          | Cash Management                     |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business, Employee, Project Manager |
| Permissions           | Bank Register: Run                  |
