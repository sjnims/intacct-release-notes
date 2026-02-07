---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Lending_Management/2025-R1-lending-management.htm
release: 2025-R1
extracted: 2026-02-07
title: "Lending Management—Early adopter"
---

# Lending Management—Early adopter

LENDING MANAGEMENT

Lending Management is coming soon!

Lenders can now manage loans from origination to payoff including client billing, statements, and more. Includes full subledger tracking and reporting to ensure real-time portfolio insight and audit readiness.

## Key features

### Flexibly disburse loan funds

When a loan is funded, you can disburse the funds directly to the borrower or to a third party specified by the borrower.

### Manage non-amortized and amortized loans, including seamless reamortization when needed

Some events require amortized loans to be reamortized (for example, if you enter an adjustment transaction that increases the principal balance). With a few selections, you specify details of how to reamortize the loan, and you can preview the new amortization schedule before proceeding.

### Easily generate and distribute loan statements

Automatically calculate interest and generate loan statements, and then email those statements to the borrowers.

### Gain insight from comprehensive reporting and analysis tools

Get the information that you need about amortization schedules, the Lending Management subledger, and rollforward balances.

Group the loan products you offer into categories to create more valuable and focused reports.

## How it works

Here's an overview of how Lending Management works.

1. Set up common elements for your lending system.
    - **Loan types:** Specify whether a loan is amortized or non-amortized.
    - **Interest rates:** Set rates to use to calculate interest on loans. You can change the interest rates for non-amortized loans as necessary.
    - **Account categories:** Define categories to group the different loan products that your organization offers. This helps you do more valuable, meaningful reporting and analysis. Account categories also use let you use document sequences to assign account numbers to your loan accounts automatically.
    - **Fee types:** Specify the GL accounts to which fee transactions are posted.
2. For each loan you issue, create a loan account where you enter all the details for the loan, including the following information:
    - Identification details for the loan account (account number and name)
    - Loan amount, and disbursement details (if the borrower wants the loan funds disbursed to a third party)
    - Borrower of the loan
    - How statements will be sent to the borrower
    - Loan terms (such as the interest rate and amortization details)
3. Enter and post transactions for each loan account, as they occur.

    [Payments](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Lending_Management/2025-R1-lending-management.htm#)

    Receive payments and control exactly how you handle them.
    - Deposit the payment directly to a bank account, or to an undeposited funds account if you're accumulating receipts to be deposited later.
    - For non-amortized loans, the payment amount is automatically apportioned to principal and interest, but you can manually change the calculated amounts.
    - For amortized loans, handle overpayments easily. You can apply an overpayment to future payments on the existing amortization schedule, or you can apply it to the principal balance and then reamortize the loan.

      When reamortizing, you choose whether the new amortization schedule has the same payment amount but fewer payments, or the same number of payments but a lower payment amount. Before you reamortize the loan, you can preview the new amortization schedule to make sure you're happy with it. After reamortizing the loan, you can always view the previous amortization schedule in the loan history.

    - Receive full or partial payments of fees.

    [Payoffs](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Lending_Management/2025-R1-lending-management.htm#)

    Receiving the final payment for a loan is simpler than receiving a regular payment, though you still control where the payment funds are deposited (bank account or undeposited funds account). Posting the payoff automatically sets up the loan account so no more interest will be calculated and the next statement will be the final one for the account.

    [Adjustments](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Lending_Management/2025-R1-lending-management.htm#)

    Flexibly change loan amounts, and charge fees.
    - **Increase the principal balance:** When increasing the principal amount for a loan, you control how the new funds are disbursed: to your customer, or to a third party as directed by your customer.

      If you increase the principal balance for an amortized loan, the loan needs to be reamortized. You have the same options for reamortization as you do when handling an overpayment.

    - **For non-amortized loans, increase the interest balance:** For non-amotized loans, you can increase the interest separately from the principal.
    - **Fees:** To charge a fee, enter a fee adjustment.

    [Write-offs](https://www.intacct.com/ia/docs/en_US/releasenotes/2025/2025_Release_1/Lending_Management/2025-R1-lending-management.htm#)

    Reduce the amount that the borrower owes you without the borrower making a payment.
    - **Write off a loan in full:** Write off all outstanding amounts owed for the loan account: principal, interest (both due and accrued), and fees. Writing off a loan in full has the same effects on a loan account as a loan payoff. No more interest will be calculated for the loan account and the next statement will be the final one for the account.
    - **Make a partial write-off:** You can write off principal, interest, or fees.

      For non-amortized loans, you write off principal and interest separately. For amortized loans, you write off principal and interest as a single combined amount.

      If you write off principal and interest for an amortized loan, the loan needs to be reamortized. You have the same options for reamortization as you do when handling an overpayment.

    You can also view, edit, and delete transactions, with limits (for example, payoffs cannot be edited or deleted after they're posted).

4. Each month, generate statements for the loans you've issued, and email them to your customers directly from Lending Management. Interest is automatically calculated when you generate statements.
5. As necessary, review the transaction history and statements for any loan, and generate reports on the Lending Management ledger and balance rollforward.

## What's the Early adopter program?

The Early adopter program facilitates evaluation and first ability to subscribe to the new Lending Management. As an early adopter, not only can you get started sooner, your feedback will influence the product as it evolves.

We work closely with the early adopters to ensure that we focus our time and attention on what matters most to you.

If you'd like to consider being an early adopter, contact your Sage partner or your [Sage Intacct account manager](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contact_your_account_manager).

## Permissions and other requirements

| Subscription          | Lending Management                                                     |
| --------------------- | ---------------------------------------------------------------------- |
| Regional availability | United States                                                          |
| User type             | Business user                                                          |
| Implementation        | Implemented by your Sage partner or your Sage Intacct account manager. |
