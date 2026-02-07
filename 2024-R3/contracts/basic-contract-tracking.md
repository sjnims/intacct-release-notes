---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Contracts/2024-R3-basic-contract-tracking.htm
release: 2024-R3
extracted: 2026-02-07
title: "Create dimension-only contracts"
---

# Create dimension-only contracts

[Add a contract](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Add_contracts)

[Field descriptions: Contract](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Contract_fbf)

Contracts

We've added the option to create a simplified, non-posting version of a contract for reporting purposes. These dimension-only contracts can be tagged to transactions and reported on in the same way as any other dimension.

![](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-cn-contract-tracking.png)

If you use both Order Entry and Contracts revenue recognition, tag dimension-only contracts on Order Entry transactions to include Order Entry activity in contract dimension reporting. This ensures comprehensive reporting by integrating Order Entry activity with Contracts.

## Details

-   Companies with a subscription to Contracts have the option to create either a fully functional contract or a dimension-only contract.
    
-   A new field called Contract tracking is now available on contracts, allowing you to choose the type of contract to create.
    
-   Dimension-only contracts appear alongside full contracts in contract dimension dropdowns across Intacct.
    

## How it works

### Setup

1.  Resave the Revenue Management configuration:
    
    1.  Go to **Company** > **Setup** > **Admin** > **Subscriptions**.
        
    2.  Find Revenue Management in the list and select **Configure**.
        
    3.  Select **Save**.
        
2.  Turn on the contract dimension in applications:
    
    1.  For each application that you want to use the contract dimension in, go to **Setup** > **Configuration** for that application.
        
    2.  In the Dimensions setup section, select **Contract**.
        
    3.  Select **Save**.
        

### Create a dimension-only contract

1.  Go to **Contracts** > **All** and select Add (circle) next to Contracts.
    
2.  For Contract tracking, select **Dimension-only contract**.
    
    A simplified version of the form appears.
    
3.  Fill out the form and select **Post & continue**.
    
    Selecting Post & continue saves the contract. Dimension-only contracts are non-posting.
    

## Permissions and other requirements

| Subscription | Contracts                                                                 Order Entry                                                                 Revenue Management |
| --- | --- |
| Regional availability | Australia                                                                                                                                                                                                                   Canada                                                                                                                                                                                                                   South Africa                                                                                                                                                                                                                   United Kingdom                                                                                                                                                                                                                   United States |
| User type | Business |
| Permissions | Contracts                                                                                                                                                                                                               Contract: List, View, Add, Edit, Delete, Post |
| Configuration | Resave the Revenue Management configuration to enable this feature.                                                                                                                                                                                                                   Enable the contract dimension in the configurations of applications where you want to use the dimension. |
| CSV import | There are two new string fields on the Contract import template:                                                                                                                                                                                                               APPLICATION: Valid values are Contracts or Order entry.  Contracts = a full contract and Order entry = a dimension-only contract. This field corresponds to the Contract tracking UI field.                                                                                                                                                                                                                   ADDITIONAL\_CONTACT\_CONTACT\_NAME: Valid values are names of existing contacts. This field is only available for dimension-only contracts (when APPLICATION = Order entry).                                                                                                                                                                                                       Only the following template fields are applicable when importing dimension-only contracts: CONTRACT\_ID, CONTRACT\_NAME, CONTRACT\_DESCRIPTION, BEGIN\_DATE, END\_DATE, CUSTOMER\_ID, BILL\_TO\_CONTACT\_NAME, SHIP\_TO\_CONTACT\_NAME, APPLICATION, ADDITIONAL\_CONTACT\_CONTACT\_NAME |
| Web services | There are two new string parameters on the CONTRACT object:                                                                                                                                                                                                               APPLICATION: Valid values are Contracts or Order entry.  Contracts = a full contract and Order entry = a dimension-only contract. This field corresponds to the Contract tracking UI field.                                                                                                                                                                                                                   ADDITIONAL\_CONTACT\_CONTACT\_NAME:  Valid values are names of existing contacts. This field is only available for dimension-only contracts (when APPLICATION = Order entry).                                                                                                                                                                                                       Only the following parameters on the CONTRACT object are applicable for dimension-only contracts: CONTRACT\_ID, CONTRACT\_NAME, CONTRACT\_DESCRIPTION, BEGIN\_DATE, END\_DATE, CUSTOMER\_ID, BILL\_TO\_CONTACT\_NAME, SHIP\_TO\_CONTACT\_NAME, APPLICATION, ADDITIONAL\_CONTACT\_CONTACT\_NAME |
