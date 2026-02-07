---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Order_Entry/2024-R3-oe-track-dim-only-contracts.htm
release: 2024-R3
extracted: 2026-02-07
title: "Track Order Entry transactions with the contract dimension"
---

# Track Order Entry transactions with the contract dimension

[Track Order Entry transactions with the contract dimension](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=OE_contract_dimension)

[Field descriptions: Contract—Order Entry Revenue Management](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Field_descriptions_OE_contract_dimension)

Order Entry

We've made the contract dimension available to companies that use Order Entry Revenue Management. Now, you can use the contract dimension to categorize, track, and analyze Order Entry transactions without a subscription to the Contracts application.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-OERR-basic-contract.png)

Tag Order Entry transactions with the contract dimension to expand reporting visibility, streamline data analysis, and improve forecasting within your business.

## Details

- Companies that use Order Entry or Accounts Receivable revenue recognition can now create non-posting contracts.
- You can tag these contracts to transactions using the Contract dimension field.
- You can then report on the contract dimension, the same as any other dimension, to gain insights into your business.

## How it works

### Setup

1. Resave the Revenue Management configuration:
   1. Go to **Company** > **Setup** > **Admin** > **Subscriptions**.
   2. Find Revenue Management in the list and select **Configure**.
   3. Select **Save**.

2. Turn on the contract dimension in the General Ledger:
   1. Go to **General Ledger** > **Setup** > **Configuration**.
   2. In the Dimension settings section, select **Enable** for Contract.
   3. Select **Save**.

3. Turn on the contract dimension in Accounts Receivable, Order Entry, and other applications.
   1. For each application that you want to use the contract dimension in, go to **Setup** > **Configuration** for that application.
   2. In the Dimensions setup section, select **Contract**.
   3. Select **Save**.

### Create a contract

1. Go to **Reports** > **Setup** > **Dimensions** > **Contracts**.

   Alternatively, go to **Company** > **Setup** > **Cross-company dimensions** > **Contracts**.

2. Select **Add**.
3. Fill out the form and select **Post & continue**.

   Selecting Post & continue saves the contract. Contracts for Order Entry revenue recognition are non-posting.

## Permissions and other requirements

| Subscription          | Order Entry Revenue Management                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | Australia Canada South Africa United Kingdom United States                                                                                                                                                                                                                                                                                                                                                                                                      |
| User type             | Business                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Permissions           | Order Entry Dimension-only contracts: List, View, Add, Edit, Delete                                                                                                                                                                                                                                                                                                                                                                                             |
| Configuration         | Resave the Revenue Management configuration to enable this feature. Enable the contract dimension in the configurations of applications where you want to use the dimension.                                                                                                                                                                                                                                                                                    |
| CSV import            | You can import contracts for OE from the Contracts list in Company or Reports. This option is not available in the Company Setup Checklist. Only the following template fields are applicable when importing contracts for OE: CONTRACT_ID, CONTRACT_NAME, CONTRACT_DESCRIPTION, BEGIN_DATE, END_DATE, CUSTOMER_ID, BILL_TO_CONTACT_NAME, SHIP_TO_CONTACT_NAME, APPLICATION, ADDITIONAL_CONTACT_CONTACT_NAME To import, APPLICATION must be set to Order entry. |
| Web Services          | Only the following parameters on the CONTRACT object are applicable for OE contracts: CONTRACT_ID, CONTRACT_NAME, CONTRACT_DESCRIPTION, BEGIN_DATE, END_DATE, CUSTOMER_ID, BILL_TO_CONTACT_NAME, SHIP_TO_CONTACT_NAME, APPLICATION, ADDITIONAL_CONTACT_CONTACT_NAME APPLICATION must be set to Order entry.                                                                                                                                                     |
