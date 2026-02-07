---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Platform_Services/2024-R4-platform-disable-detach-option.htm
release: 2024-R4
extracted: 2026-02-07
title: "Option to enable or deactivate Detach link in related record views"
---

# Option to enable or deactivate Detach link in related record views

You now have more flexibility when structuring your object pages. With this release, you can enable or deactivate an additional property in the page editor for related records. The option to enable properties gives you more control over what actions users can take on the page.

## Details

Now, when you include a related records section on a page, one of the actions available is **Detach**. Users can select **Detach** to remove a relationship to the record object.

![Highlighted Detach option in the related list of a custom object.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-platform-disable-detach.png)

However, you can have cases where you do not want users to remove relationships. In the page editor, use **Enable detach** to indicate whether the **Detach** option is available to users.

The option is selected by default; deselect the option to deactivate the link for users. Selections made are saved in the application. If you export the application, the setting is included.

![Highlighted Enable detach option in the page editor. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-platform-disable-detach2.png)

## How it works

1. Go to the page in the application you want to edit by selecting **\[Application\] > \[Object\]** and then selecting the object.
2. Select **View** for one of the records.
3. In the upper right corner of the page, select **More actions... > Edit this page**.
4. Select the related record component for which you want to update the properties.

If the component is not already on the page, you can add it from Available components.

1. Under Properties, select or deselect **Enable detach**.
2. Select **Save**.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
