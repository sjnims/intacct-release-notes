---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_2/Company_and_Administration/2024-R2-passwordless-authentication.htm
release: 2024-R2
extracted: 2026-02-07
title: "Support for passwordless authentication"
---

# Support for passwordless authentication

Sage Intacct now supports passwordless authentication methods for signing into Intacct using Microsoft Entra ID.

## Details

Microsoft Entra ID (previously called Azure AD) is a cloud-based identity and access management service. Sage Intacct now supports passwordless authentication for all your users by enabling Entra ID in Intacct.

## How it works

1.  Go to **Company > Setup > Configuration > Company > Security tab** and select **Edit**.
    
2.  In the Single sign-on (SSO) section, select the **Enable alternative login methods (Microsoft Entra ID)** checkbox.
    
3.  **Save** your changes.
    

For more information about how the passwordless authentication methods work, visit [Microsoft's documentation on passwordless authentication](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passwordless).

## Requirements

| Subscription | Company |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Full |
| Configuration | Single sign-on must be enabled in your company before you can use the passwordless authentication methods. |
