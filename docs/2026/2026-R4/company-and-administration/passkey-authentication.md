---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Company_and_Administration/2026-R4-passkey-authentication.htm
release: 2026-R4
extracted: 2026-11-13
title: "Log in faster and more securely with passkeys"
---

# Log in faster and more securely with passkeys

[Passkey authentication](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=AA_TOC_passkey_authentication)

[Enable passkey authentication—Admins](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Enable_passkey_authentication)

[Create a passkey—All users](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Create_a_passkey)

Company & administration

Passkey authentication provides eligible users with a faster, passwordless way to log in. Passkeys are resistant to phishing and credential theft because they use cryptographic credentials stored on a trusted device.

Passkeys are optional for users who do not use single sign-on (SSO). Existing password and multi-factor authentication (MFA) methods remain available as a backup.

## Key benefits

- **Faster login:** Use a device biometric or secure unlock instead of entering a password and completing separate verification steps.

- **Stronger security:** Protect accounts with phishing-resistant credentials.

- **Flexible access:** Register multiple compatible devices and continue to use password or MFA as a fallback when a passkey is unavailable.

- **Account visibility:** Registration, removal, login, and recovery activity are recorded for auditing.

## How it works

1.  Your admin turns on passkey authentication for your company.

2.  You then register one or more passkey-enabled devices, such as a laptop or mobile phone.

3.  The next time you log in to Intacct, select the passkey option and complete the biometric or secure unlock prompt on your device.

If passkey authentication is not available or does not succeed, log in with your password and MFA.

## Good to know

- Passkeys work on most modern browsers and devices. If the option is not available to you, try updating your browser or operating system.

- You can register passkeys on more than one device and remove devices that you no longer use.

- If you lose a registered device, use password and MFA authentication to recover access and register another device.

- Administrators can monitor passkey adoption and authentication activity and manage passkey access policies for their organizations.

## Permissions and other requirements

| Subscription                       | Company                                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| Regional availability              | All regions                                                                                    |
| User type                          | To set up this featureBusiness user with admin privileges To use this featureAll user types    |
| Configuration                      | Users must opt in and register at least one compatible device in account settings.             |
| Dependencies or other requirements | To use passkeys, you need a device, browser, and operating system that support passkey log in. |
| Restrictions                       | Not available for users who log in through SSO.                                                |
