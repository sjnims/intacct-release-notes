---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Company_and_Administration/2026-R3-email-domain-validation.htm
release: 2026-R3
extracted: 2026-07-27
title: "Validate email sender domains one time for your entire console hierarchy"
---

# Validate email sender domains one time for your entire console hierarchy

Validated email sender domains now automatically apply to child consoles and companies throughout a console hierarchy, reducing duplicate configuration and administration.

## Key benefits

- **Validate one time, use everywhere:** Apply validated email sender domains across your entire hierarchy.

- **No duplicate setup:** Avoid validating the same email sender domain at multiple levels.

- **Consistent behavior:** Ensure that all companies inherit the same validated email sender domains.

- **Simpler administration at scale:** Manage email sender domain validation from a single location.

## When this matters

Validating sender email domains is useful if your organization uses multi-level console hierarchies to manage multiple companies.

For example, you might have:

- A management console linked to regional or business-unit consoles

- Regional consoles linked to individual operating companies

- Partner-managed environments that contain multiple levels of consoles and client companies

Domains validated at a parent console automatically inherit through all levels of the hierarchy, reducing administrative effort and helping ensure consistent email delivery across your organization.

## What’s changed

Validated email sender domains automatically inherit from parent consoles to child consoles throughout your hierarchy. Child consoles and their companies automatically inherit validated email sender domains from parent consoles.

Previously, email sender domain validation applied only to directly linked companies.

## How it works

1.  Validate an email sender domain at a console.

    All child consoles and companies automatically inherit the validation.

2.  Inherited email sender domains appear as console-managed and cannot be edited locally.

The best practice is to validate email sender domains at the highest applicable console.

## Good to know

Companies that are not part of a console hierarchy continue to manage and validate email sender domains at the company level.

## Permissions and other requirements

| Subscription          | Administration                      |
| --------------------- | ----------------------------------- |
| Regional availability | All regions                         |
| User type             | Business user with admin privileges |
| Permissions           | Company information: View, Edit     |
