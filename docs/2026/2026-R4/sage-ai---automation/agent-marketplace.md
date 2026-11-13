---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2026/2026_Release_4/Sage_Ai___Automation/2026-R4-agent-marketplace.htm
release: 2026-R4
extracted: 2026-11-13
title: "Customize Marketplace agent permissions"
---

# Customize Marketplace agent permissions

[About Marketplace agents](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=About_Marketplace_agent)

[Purchase Marketplace agents](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Purchase_Marketplace_agents)

[Assign Marketplace agents to roles](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_Marketplace_agents_to_roles)

[Use Marketplace agents in Sage Copilot](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Use_Marketplace_agents_in_Sage_Copilot)

[Sage NFP Benchmarking Agent](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Sage_NFP_Benchmarking_Agent)

Sage ai & Automation

Administrators can now customize the permissions available to a Marketplace agent by editing the agent role created when the agent is purchased. This added control helps companies align agent access with their security requirements while maintaining visibility into agent activity.

## Key benefits

- **Customer-managed permissions:** Add, edit, or remove an agent’s role to align its access with your company’s security requirements.

- **Controlled agent access:** Limit an agent to actions allowed by both the agent role and the user’s permissions.

- **Protected user permissions:** Adjust what an agent can do without changing the permissions your users need for their own work.

- **Agent activity visibility:** Track which agent performed an action and who initiated it.

## How it works

Each Marketplace agent includes a dedicated role that defines the maximum permissions available to the agent. When you purchase an agent, this role is added to your company. After purchasing an agent, an administrator can edit the role in the same way as any other role, by adding, editing, or removing permissions. Intacct recommends keeping changes to an agent role to a minimum.

Agent access depends on two levels of permissions:

- The permissions assigned to the agent role.

- The permissions assigned to the person using the agent.

An agent can perform an action only when the required permission is granted to both the agent role and the user. This allows administrators to restrict an agent’s capabilities without removing permissions that users need for their own work.

Sage Intacct records the registered agent name and the user who started the request. Administrators can use the API Usage Detail report to identify which agent and user were involved in an activity. The audit trail also shows this information for applicable create, update, and delete operations.

## Good to know

Additional considerations apply when managing agent roles and permissions.

- Marketplace agents currently support read-only operations. Because of this, you might see few agent entries in the audit trail for now.

- You do not need to assign the Marketplace agent role to users, and Intacct recommends that you keep agent roles separate from user roles.

  To use all of the agent's capabilities, a user's role needs the permissions that the agent role grants. Assigning the agent's role to users is optional and can help you align user permissions with the agent's scope.

- If you assign an agent role directly to a user, that user automatically receives any permissions added to the role by future agent updates. Consider the security impact before you assign an agent role to a user.

- Agent roles for Marketplace agents cannot be deleted.

- If the agent's developer updates the agent's role, the update is applied to your company and might affect changes you have made to the role.

- Permission descriptions shown in an agent profile are informational only. They do not determine the agent's actual access.

- If the agent's developer updates the agent's permissions and Sage approves the change, the update overwrites the agent role in your company, including any changes you have made to the role.

## Permissions and other requirements

Marketplace Agents are only available for use in role-based companies.

| Subscription                       | Administration Marketplace Agents Finance Intelligence Agent (FIA)                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Regional availability              | Canada United Kingdom United States Individual agents can have more limited availability.                                                                                                                                                                                                                                                                                      |
| User type                          | Subscribe to the Marketplace AgentsBusiness user with admin privileges Purchase, assign, and edit agent permissionsBusiness user with admin privileges Use agentsOnly users whose roles include an active agent can use that agent in Sage Copilot.                                                                                                                            |
| Permissions                        | Subscribe to the Marketplace agentsApplication subscriptions: List, View, Subscribe, Configure Purchase, edit permissions, and assign agentsApplication subscriptions: List, View, Subscribe, Configure Use agentsOnly users whose roles include an active agent can use that agent in Sage Copilot. Permissions to the agent can be controlled by the role assigned to users. |
| Dependencies or other requirements | Available only in role-based companies. To use Marketplace Agents, your company must have access to Sage Copilot through a Finance Intelligence Agent (FIA) subscription. If your company does not have an FIA subscription, you'll be prompted to subscribe before purchasing a Marketplace agent.                                                                            |
