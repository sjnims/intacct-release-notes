---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Consolidation/2024-R3-delete-consolidation-book-data.htm
release: 2024-R3
extracted: 2026-02-07
title: "Delete book data in the background and get on with your work"
---

# Delete book data in the background and get on with your work

[Delete a book in the background](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Delete_Cons_book_bg)

Consolidation

We streamlined the deletion process for consolidation books. You can request a book deletion and get on with your day. Sage Intacct handles the deletion request in the background while you can navigate away from the page and continue doing your work.

## Details

When you request a book deletion on the Consolidation books page, Intacct queues your request and addresses each deletion in the order in which it is received. The book deletion queue handles deletion requests on a first-in, first-out basis to ensure balanced processing of all requests. Then Intacct deletes consolidation book data, such as consolidation entries related to the book. After completing the request, Intacct notifies by email the user who requested the book deletion.

Completing the deletion process can take considerable time, depending on the size of the book you want to delete. The good news is that you can keep working while the deletion process takes place completely in the background.

## How it works

1.  Go to **Consolidation** > **Setup** > **Consolidation books**.
2.  Find the book that you want to delete and select **Delete** next to the book.
    
    A confirmation window is shown.
    
3.  In the confirmation window, select **OK**.

## Permissions and other requirements

| Subscription | This feature applies to all of the following Consolidation subscriptions:                                                                                                                                      Domestic Consolidation                                                                     Global Consolidation                                                                     Advanced Ownership Consolidation |
| --- | --- |
| Regional availability | All regions |
| User type | Business user with admin privileges |
| Permissions | Company                                                                                                                                      Entities:	List, View, Add, Edit, Delete                                                                     Inter-entity account mapping:	View, Edit                                                                                                                                  Consolidation                                                                                                                                                                       Manage books:	List, View, Add, Edit, Delete                                                                                                                                   Run consolidations:	Run                                                                                                                                   Ownership structure	List, View, Add, Edit, Delete                                                                                                                                   Consolidate structure:	Run |
