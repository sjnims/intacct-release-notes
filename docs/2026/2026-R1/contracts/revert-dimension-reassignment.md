---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Contracts/2026-R1-revert-dimension-reassignment.htm
release: 2026-R1
extracted: 2026-02-07
title: "Revert dimension reassignment"
---

# Revert dimension reassignment

You can now quickly undo the most recent dimension reassignment on a contract line.

![](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R1-images/2026-R1-cn-revert-reassign-dimensions.png)

This update helps you fix mistakes without editing the General Ledger or performing another reassignment the next day. It restores the original dimensions with a single action, saving time and reducing errors.

## Good to know

- Reverting a reassignment restores the contract line's previous dimensions, removes the reassignment record from the contract line's transaction history, and deletes the associated General Ledger journal entries.
- To revert a reassignment, the contract line must have no transactions posted after that reassignment.
- You can only revert the most recent reassignment. To revert an older one, revert each newer reassignment first.

## How it works

1. Go to **Contracts** > **All** > **Contract lines**.
2. Find the contract line with the reassignment that you want to revert.
3. Select **Edit**.
4. Select **More actions** > **Revert last dimension reassignment**.
5. Select **OK** to confirm.

## Permissions and other requirements

| Subscription          | Contracts                                                  |
| --------------------- | ---------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States |
| User type             | Business                                                   |
| Permissions           | Contracts Contract: List, View, Edit, Reassign dimensions  |
