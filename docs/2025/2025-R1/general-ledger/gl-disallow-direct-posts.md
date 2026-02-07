---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/General_Ledger/2025-R1-gl-disallow-direct-posts.htm
release: 2025-R1
extracted: 2026-02-07
title: "Prevent direct posting to specified journals"
---

# Prevent direct posting to specified journals

[Add or edit journals](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Viewing_and_Managing_Journals)

General Ledger

Direct entries to General Ledger journals are one of the primary causes of discrepancies between subledgers and the General Ledger. You can prevent these entries on a journal-by-journal basis.

## Details

We've added a **Disallow direct posting** checkbox to the Journal setup page. If you select this checkbox, users cannot create entries for the journal through the Journal entries page in General Ledger. Instead, users must post through the subledgers. This setting also prevents the creation of journal entries through an import or the API.

![Journal information page with Disallow direct posting checkbox selected. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2025/2025-R1-images/2025-R1-gl-disallow-direct-posting.png)

## How it works

1. Go to **General Ledger** \> **Setup** \> **Journals**.
2. Find the journal that you're updating, and select **Edit**.
3. Select **Disallow direct posting**.
4. Select **Save**.

## Permissions and other requirements

| Subscription          | General Ledger                                 |
| --------------------- | ---------------------------------------------- |
| Regional availability | All regions                                    |
| User type             | Business                                       |
| Permissions           | General Ledger Journals: List, View, Add, Edit |
