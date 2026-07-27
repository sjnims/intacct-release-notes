---
source: https://preview.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_3/Company_and_Administration/2026-R3-AI-agent-marketplace.htm
release: 2026-R3
extracted: 2026-07-27
title: "Discover and use AI agents in Sage Intacct"
---

# Discover and use AI agents in Sage Intacct

Extend Sage Copilot with AI agents from certified Sage partners. Discover, purchase, and manage agents from a centralized marketplace while controlling access through Sage Intacct roles.

Sage reviews and certifies all marketplace agents through a technical, security, and legal process.

## Key benefits

- **Centralized agent discovery:** Browse and evaluate certified AI agents from Sage partners in a dedicated marketplace.

- **Simplified agent management:** Enable, deactivate, and monitor purchased agents from a single administration console.

- **Centralized governance:** Control agent access through roles and permissions to ensure that only authorized users can call the agents.

- **Transparent AI experiences:** View agent details, permissions, support information, and explanations of how agent responses are generated.

- **Flexible multi-company deployment:** Associate eligible agent subscriptions with multiple Intacct companies using the same AWS subscription.

## How it works

1.  Subscribe to Marketplace Agents in Intacct.

    ![" "](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-agent-marketplace1.png)

2.  Browse available agents from certified partners in the **Agent marketplace**. Complete purchases/subscriptions through AWS Marketplace.

3.  Enable purchased agents in **Manage agents**, review the permissions required by each agent, and assign agents to appropriate Intacct roles.

4.  Only users whose roles include an active agent can use the agent in Sage Copilot.

    1.  Users enter @ in the Sage Copilot message box.

    2.  Select the Marketplace agent from the list.

    3.  Enter a prompt and select **Send**.

After subscribing, select **Manage agents** to manage agents you’ve purchased, review your agents, and browse the Agent marketplace to find new agents.

![" "](https://preview.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2026/2026-R3-images/2026-R3-agent-marketplace2.png)

**Agent marketplace**

The **Agent marketplace** lists all available agents from Sage's certified partners. Selecting an agent shows its full profile, including suggested prompts, required permissions, and links to partner terms and support.

When you're ready to purchase, you're directed to the AWS Marketplace to complete the subscription to the agent. After subscribing, a fulfillment step associates the agent with your Intacct company.

**Manage agents**

Purchased agents appear in **Manage agents**, where admins activate or deactivate them company-wide. Agents are priced on a tiered subscription model managed through AWS Marketplace. A request is counted each time a user selects **Send** when interacting with an agent in Copilot.

Before making an agent available to users, review the permissions required by the agent in its profile.

To help manage access, consider creating a dedicated role for the agent, assigning the required permissions to that role, enabling the agent, and then assigning the role to users who need access.

Only users whose roles include an active agent can use that agent in Sage Copilot.

**Your agents**

Users whose roles include the agent will find it in the **Your agents** tab, ready to invoke in a Sage Copilot session.

Before using an agent, review the prompts provided in the agent information. After you're familiar with the prompts, open Sage Copilot and enter the prompt to begin using your agent.

## Good to know

- A paid AWS account is required to purchase agents. Free-tier accounts are not supported.

- One AWS subscription can be associated with multiple Intacct companies, such as a sandbox, a production company, or others you own.

- Purchasing, enabling, and managing agents requires a business user with admin privileges in Intacct.

- Only role-based companies can use marketplace agents.

- To use Marketplace agents, your company must have access to Sage Copilot through a [Finance Intelligence Agent (FIA)](https://preview.intacct.com/ia/docs/help_action/Default.htm#cshid=TOC_FIA) subscription. If your company does not have an FIA subscription, you'll be prompted to subscribe before purchasing a Marketplace agent.

## Permissions and other requirements

| Subscription                       | Administration Marketplace Agents Finance Intelligence Agent (FIA)                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability              | Canada United Kingdom United States                                                                                                                                                                                                                                                                                                                            |
| User type                          | Subscribe to the Marketplace Agents Business user with admin privileges Purchase and assign agents Business user with admin privileges Use agents Only users whose roles include an active agent can use that agent in Sage Copilot.                                                                                                                           |
| Permissions                        | Subscribe to the Marketplace agents Application subscriptions: List, View, Subscribe, Configure Purchase and assign agents Application subscriptions: List, View, Subscribe, Configure Use agents Only users whose roles include an active agent can use that agent in Sage Copilot. Permissions to the agent can be controlled by the role assigned to users. |
| Dependencies or other requirements | Available only in role-based companies. To use Marketplace Agents, your company must have access to Sage Copilot through a Finance Intelligence Agent (FIA) subscription. If your company does not have an FIA subscription, you'll be prompted to subscribe before purchasing a Marketplace agent.                                                            |
