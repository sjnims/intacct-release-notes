---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_1/Contracts/2024-R1-qty-based-rev-rec-cancel.htm
release: 2024-R1
extracted: 2026-02-07
title: "Contract cancellation enhancements"
---

# Contract cancellation enhancements

We made the following improvements to cancellation behavior:

- You can now uncancel contract lines that use quantity-based revenue recognition.
- You can now post open revenue and billing after the cancellation date.

## Uncancel quantity-based revenue recognition contract lines

Previously, cancellations to quantity-based revenue recognition contract lines were permanent. Now, you can uncancel the contract line, resolve any data issues, and then cancel the contract line again.

The uncancel process unwinds the system-created journal entries that resulted from the cancellation. Sage Intacct does the following:

- Deletes all journal entries that were automatically created as a result of the cancellation.
- Sets the State of the applicable revenue, billing, and expense schedules back to "In progress".
- Sets the contract line State back to "In progress".

## Relaxed posting date validations for open revenue and billing

Previously after you canceled a contract line, you could not invoice open billing or post revenue recognition using a posting date that was after the cancellation date.

Now, if the contract line has open billing or revenue, Intacct will no longer block invoice or revenue posting after the cancellation date.

Note the following expected behavior:

- Intacct still validates whether the posting date is in a closed period.
- When you cancel the contract line, Intacct still reschedules open revenue to one day before the cancellation date.

The best practice is to post remaining open revenue and billing before you cancel the contract.

## Requirements

| Subscription          | Contract Revenue Recognition                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions, excluding France                                                                                                                             |
| Permissions           | Contract: Edit, Uncancel                                                                                                                                  |
| Restrictions          | You cannot uncancel a contract line if you created an adjustment during cancellation as the adjustment was automatically applied to the contract invoice. |
