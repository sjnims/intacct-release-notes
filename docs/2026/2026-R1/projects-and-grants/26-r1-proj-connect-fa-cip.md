---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Projects_and_Grants/26-R1-proj-connect-FA-CIP.htm
release: 2026-R1
extracted: 2026-02-07
title: "Connect Projects with Fixed Asset Management CIP assets"
---

# Connect Projects with Fixed Asset Management CIP assets

You can now automatically connect projects to the Fixed Assets Management application through CIP (Construction in Progress) functionality. When you assign a CIP asset to a project, you enable consistent and accurate cost tracking and streamlined workflows.

## What's new

Connect Projects with Fixed Assets Management CIP assets introduces automated efficiency with the ability to link existing CIP (Construction in Progress) assets directly to a project. This capability enables a seamless integration between projects and CIP assets, eliminating manual steps and improving accuracy.

You can select a **CIP asset** in the **Dimensions** section of the main **Projects** page. For details, go to [How it works](https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Projects_and_Grants/26-R1-proj-connect-FA-CIP.htm#How).

The CIP asset dropdown menu lists only existing assets that are in the Construction in Progress state, not all assets.

![The CIP assets dialog is expanded. This is where you can select an existing asset or Add a new asset.](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-proj-CIP-asset_1141x113.png "CIP assets")

By linking a CIP asset dimension directly to a project, organizations can automatically default CIP values in bills and purchasing transactions, reducing repetitive data entry. The asset is checked for the correct CIP status before linking occurs.

## Why the change

You will not have to manually select a CIP asset for every cost entry. You only have to associate the project and the CIP asset one time. The correct values in bills and purchasing transactions are then applied automatically when the project is selected. This capability saves time, reduces errors, and ensures consistency.

## Key benefits

- **Streamlined workflows**: One-time link between a project and CIP assets saves repetitive work.
- **Increased accuracy**: Auto-defaulting in bills and POs improves accuracy.
- **Improved visibility**: Comprehensive monitoring of a project and asset progress improves success.
- **Enhanced efficiency**: Validating CIP asset status before linking improves performance.

For example, a church building a new youth center creates a CIP asset and links it to the project at kickoff. As supplies and services are purchased, bills and POs automatically carry both the project and CIP asset values. This capability ensures accurate tracking throughout the project and simplifies capitalization when the asset is placed in service.

## Actions required

Before you begin to connect projects to CIP assets, first enable the Fixed Assets Management subscription. Then, you can enable CIP and verify that you have the correct user permissions.

### 1\. Verify your Fixed Assets Management subscription

The Add CIP Asset field only appears when the Fixed Assets Management subscription is enabled.

1. Go to **Company > Admin > Subscriptions**.
2. Confirm that the **Fixed Assets Management** subscription is turned on.

For more information, see [Subscribe to an application](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Subscribing_to_applications).

### 2\. Enable CIP

1. Go to **Fixed Assets Management > Setup > Configuration**.
2. Under **General settings**, select the **Enable CIP** checkbox.

### 3\. Verify subscription permissions for users

Verify that Business, Project Manager, and Payment Approver users have the following subscription permissions.

- For Fixed Assets Management, users need List and View permissions.
- For Projects, users need List, View, and Edit permissions.

It's important that you verify that you have the correct permissions before starting a project. This simple step helps to avoid delays in linking CIP assets and processing transactions. For more information, see the [Video: Assign permissions](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Video_assign_permissions).

## How it works

The CIP asset dropdown menu lists only existing assets that are in the Construction in Progress state.

1. Go to the **Projects > Setup > Projects**.
2. Find a project in the list and select the **Edit** icon at the end of the row.
3. Go to the **Dimension** section of the Project page.
4. Select an asset from the **CIP asset** dropdown list.
5. At the top of the **Project information** page, select **Save**.

Now when you select a project dimension on a bill or purchasing transaction, the associated CIP asset is automatically selected for you.

## Permissions and other requirements

| Subscription                       | Projects Fixed Assets Management                                              |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                   |
| User type                          | Business user with admin privileges Business Project Manager Payment Approver |
| Permissions                        | Fixed Assets Management: List, View Projects: List, View, Add, Edit           |
| Configuration                      | Turn on Enable CIP in the Fixed Assets Management configuration.              |
| Dependencies or other requirements | Users need access permissions for the projects they want to work in.          |
