---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/FixedAssets/2024-R2-non-depreciable-assets.htm
release: 2024-R2
extracted: 2026-02-07
title: "Improved workflow for non-depreciable assets"
---

# Improved workflow for non-depreciable assets

We introduced some changes to improve how you view and work with non-depreciable assets:

- Simplified your view by only showing the most important information.
- Added disposal detail fields so the information is easily accessible.
- Added an optional setting in configuration for selecting a disposal journal.

![Asset details page for a nondepreciable asset](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R2-images/2024-R2-fam-nondepreciable.png)

## Details

On the Asset page, the following areas are no longer displayed for non-depreciable assets:

- Depreciable cost tile
- Depreciation rules section
- Depreciation schedules tab

In the Disposal details section of the Asset page, the following fields are now displayed for non-depreciable assets:

- Gain or loss amount
- Journal
- GL batch ID

Additionally, we added a new setting in Fixed Assets Management configuration. This setting allows you to assign a journal for the disposal of non-depreciable assets.

## How it works

### Set a disposal journal for non-depreciable assets

1.  Go to **Fixed Assets Management** > **Setup** > **Configuration**.
2.  Select **Edit**.
3.  In the Disposal settings section, select a Journal for non-depreciable assets.
4.  Select **Save**.

### Create a non-depreciable asset

1.  Go to **Fixed Assets Management** > **All** and select **Add (circle)** next to **Assets**.
2.  In the Summary section, deselect **Depreciate**.

## Requirements

| Subscription          | Fixed Assets Management                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                       |
| User type             | Business user with admin privileges                                                                               |
| Permissions           | Administration Application subscriptions: Configure Fixed Assets Management Assets: List, View, Add, Edit, Delete |
