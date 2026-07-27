---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Construction/2026-R2-wip-management.htm
release: 2026-R2
extracted: 2026-04-29
title: "Enhancements in work in progress (WIP) management"
---

# Enhancements in work in progress (WIP) management

In this release we've made the following enhancements to work in progress (WIP) management.

## Base a project's PM forecasts on its primary forecast estimate

For projects where the project manager’s forecast comes from an integrated operational application, PM forecasts are sent to Sage Intacct as a primary forecast estimate. You can now set an option for a project that enables you to use the project's primary forecast estimate to calculate PM forecasts for the project in WIP schedules.

You can also set up WIP Management so that new WIP schedule projects that you add to WIP schedules have this feature enabled by default.

For projects that have this feature enabled, you can update the project's PM forecasts in a WIP schedule by selecting **Update PM forecasts based on primary forecast estimate**.

[Learn how to set up a project to enable basing PM forecasts on the project's primary forecast estimate](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=base_pm_forecasts_on_estimate)

## By default, duplicate projects are not included in WIP schedules

This idea came from you

When you create a new project by duplicating an existing project, regardless of how the existing project is set up, the new project is not included in WIP schedules. You can include the new project in WIP schedules in the same ways you can include any other project.

## Permissions and other requirements

| Subscription          | Construction Projects                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| Regional availability | Australia Canada United Kingdom United States                                  |
| User type             | Business Construction Manager Project Manager                                  |
| Permissions           | Projects Projects: List, View, Add, Edit WIP management: List, View, Add, Edit |
