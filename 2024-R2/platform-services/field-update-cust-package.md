---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Platform_Services/2024-R2-field-update-cust-package.htm
release: 2024-R2
extracted: 2026-02-07
title: "Enjoy more control: Exclude selected components when publishing applications"
---

# Enjoy more control: Exclude selected components when publishing applications

You can now specify which individual components that you want to exclude from a Platform application that you package.

## Details

In Customization packages, you can include Smart links, Smart rules, and Smart events. In Platform applications, you can now exclude these components from a customization package. For example, you might have a package that you previously installed and want to add standard object customizations. With this update, you can do so and ensure that existing data in Smart rules, Smart events, and Smart links are not lost.

## How it works

1.  Go to **Platform Services > Applications** and select the application to publish.
2.  Select **Publish**.
3.  Under Publish application, select the components that you want to exclude.

You can select Smart links, Smart rules, or Smart events to exclude from your package.

5.  Select **Generate XML** when done.

The selections are not persistent. The next time that you publish the application, make new selections.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-platform-exclude-components.png "The publish application screen with three new checkboxes: Exclude Smart links, Exclude Smart rules, and Exclude Smart events. ")

## Requirements

| Subscription | Platform Services |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Permissions for the Platform Services application |
