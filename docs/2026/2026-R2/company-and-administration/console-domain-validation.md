---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_2/Company_and_Administration/2026-R2-console-domain-validation.htm
release: 2026-R2
extracted: 2026-04-29
title: "Email domain validation at the console level"
---

# Email domain validation at the console level

Email domain validation has just gotten easier for partners who send email on behalf of multiple client companies. Partners who manage multiple client companies can now validate an email domain once at the console level. That validation then automatically applies to all companies linked to the console.

With console‑level domain validation, you reduce DNS complexity while maintaining secure, compliant email delivery.

## Key benefits

-   **One-time domain validation:** Validate your domain once instead of creating a TXT record for every company
    
-   **Reduced DNS record sprawl:** Avoid DNS provider limits on TXT records
    
-   **Preserved email security and compliance:** Preserve email security, deliverability, and compliance
    
-   **Company-scoped email logging:** Keep email logs scoped to each individual company
    

## How it works

These are the steps to validate a domain at the console level.

### Step 1. Start at the console

1.  Log in to your console as an administrator.
    
2.  Go to **My practice** or **Console > More > Configuration**, select the **Security** tab, and select **Edit**.
    
3.  In the **Email sender domain settings** section, select **Add a domain**.
    
4.  Enter your email sender domain and select **Authenticate domain**.
    

### Step 2. Review the generated DNS keys

When the authentication process is complete, a table of Intacct\-generated DNS keys is available for the authenticated domain.

For console‑level validation, the required records are:

-   **3 CNAME records**  
    Used for SPF and DKIM authentication.  
    These records are the same for all companies using the domain.
    
-   **1 TXT record**  
    Contains the console’s ESK key.  
    Replaces the need for a separate TXT record per company.
    

Copy and paste the DNS values exactly as shown. Entering DNS records manually is error‑prone and may cause validation to fail.

### Step 3. Add the DNS records to your DNS provider

Sign in to your DNS provider (for example, your domain registrar or hosting service) and add the records exactly as provided.

For each record:

-   Use the record type (CNAME or TXT) shown in Sage Intacct.
    
-   Enter the host/name and value exactly as listed.
    
-   Do not modify spacing, punctuation, or quotation marks in TXT records.
    

DNS record propagation can take time. Validation may not succeed immediately after you save the records.

### Step 4. Validate the domain

After the DNS records have been added:

1.  Return to the Sage Intacct console‑level email domain settings.
    
2.  Choose the domain.
    
3.  Select **Validate domain**.
    

Intacct checks the DNS records to confirm that they are present and correct.

DNS updates can take up to 72 hours to propagate, depending on your DNS provider.

If validation fails, verify that the records were entered correctly and try again later.

## Important notes

-   Email logs remain available at the company level and are not aggregated at the console.
    
-   Standalone companies continue to validate domains at the company level.
    

## Permissions and other requirements

| Subscription | Administration                                                                 Partner console |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Company info: View, Edit |
