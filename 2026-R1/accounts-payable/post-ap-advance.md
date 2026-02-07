---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_1/Accounts_Payable/2026-R1-post-ap-advance.htm
release: 2026-R1
extracted: 2026-02-07
title: "Post Accounts Payable advances at the top level"
---

# Post Accounts Payable advances at the top level

[Create an AP advance](https://preview.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Paying_in_Advance)

accounts payable

You can now create and post AP advances at the top level of your company. Previously, this functionality was only available at the entity level, which limited top-level processing for companies operating with multiple entities and different base currencies.

## Key benefits

- Work at the top level, even in multi-base currency environments.

  Create AP advances centrally, without switching into individual entities.

- Consistent and predictable workflows.

  Accounts Payable now aligns with Accounts Receivable, giving you parity across applications.

- Increased efficiency.

  Streamline your workflows and reduce the time spent navigating entities.

## Good to know

- Draft AP advances still require a currency when created at the top level.
- Cash-basis companies remain unsupported for AP advances at the top level.
- Cross-currency advances still require the transaction currency to match the bank currency.

## How it works

1. Go to **Accounts Payable** > **All** > **Payments** and select the Add (circle) next to **Advances**.
2. Enter advance information.
3. Select one of the following options:
   - Select **Post** to record payment of the advance if the payment method is record transfer, cash, or credit card, and your company does not use payment approvals.
   - Select **Submit** to submit the advance for approval, if your company is configured for payment approvals.
   - Select **Draft** to save the advance in a draft state.

   The options you see depend on your selected payment method and whether your company is configured for payment approvals.

## Permissions and other requirements

| Subscription          | Accounts Payable             |
| --------------------- | ---------------------------- |
| Regional availability | All regions                  |
| User type             | Business                     |
| Permissions           | AP advances: List, Add, View |
