---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_4/Platform_Services/2024-R4-platform-i18n-labels.htm
release: 2024-R4
extracted: 2026-02-07
title: "Select more language options for common labels"
---

# Select more language options for common labels

If you add customizations to your company or create applications, you'll appreciate this latest enhancement to Platform Services. You can now select from a list of languages to use when labeling the following entities:

- Objects
- Custom fields
- Relationships
- List views
- Applications
- Menus
- Workflow actions
- Workflow processes
- Workflow statuses

This change applies only to labels and not to field data.

To enable this feature, ask your designated support user to [log a Support case](https://www.sage.com/en-us/support/resources/?GroupId=4&ProductId=302).

## How it works

Follow the steps for the entity that you want to create. For example, to create an object named Model, follow the steps to create an object. When adding a label for the object, you can select **Add labels for different languages**. A dialog displays for you to select the languages that you want to use for the label.

![Custom label dialog box with the dropdown menu displaying the eight language options available.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R4-images/2024-R4-platform-i18n-custom-labels.png)

You can choose from the following options:

- English (Australia)
- English (United States)
- English (United Kingdom)
- English (South Africa)
- French (France)
- French (Canada - Beta)
- German (Germany)
- Spanish (Spain - Beta)

The company’s default language determines the base language from which labels are defined. For example, if English (United Kingdom) is the company's default language, the custom object's base labels default to UK English. However, the user's language preference overrides the company language preference.

Let's say that you set English (United Kingdom) as the company's default language. You also defined a custom object with a label for German. If you have users whose language preference is set to German, the German label is used. Other users, for example those whose language is set to French, see the label displayed in English.

## Permissions and other requirements

| Subscription          | Platform Services                                |
| --------------------- | ------------------------------------------------ |
| Regional availability | All regions                                      |
| User type             | Business with full admin privileges              |
| Permissions           | Permissions to the Platform Services application |
