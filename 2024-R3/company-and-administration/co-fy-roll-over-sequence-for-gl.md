---
source: https://www.intacct.com/ia/docs/en_US/releasenotes/2024/2024_Release_3/Company_and_Administration/2024-R3-CO-fy-roll-over-sequence-for-gl.htm
release: 2024-R3
extracted: 2026-02-07
title: "Fiscal year rollover for document sequences"
---

# Fiscal year rollover for document sequences

[Document sequences for IDs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Document_Sequence_Redirect)

Company AND ADMINISTRATION

Fiscal year rollover for document numbering sequences is now supported for General Ledger accounting sequences.

If your company has a legal requirement to number transactions using a sequence that includes the fiscal year, you can accomplish that with document numbering sequences. Create the document numbering sequences in the Company application and then assign them to accounting sequences in General Ledger.

Fiscal year rollover is not available by default. To enable Fiscal year rollover for General Ledger, contact your designated support user to [open a support ticket](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=open_support_case).

Fiscal year rollover for document numbering sequences eliminates the need to create new sequences at the beginning of each fiscal year. Intacct automatically updates the fiscal year in the sequence so that it rolls over to the next year. This feature is now available for General Ledger journals.

After it’s enabled, this feature cannot be disabled. Before you enable this feature, determine that you have a legal requirement to meet.

Fiscal year rollover is currently available only for use with Contracts, Fixed Asset Management, and General Ledger.

## Details

When you create a document sequence, select **Enable sequence fiscal year rollover**. You can then select whether the fiscal year is appended to the sequence as the rollover prefix or rollover suffix. The next section shows the rollover prefix or suffix, along with the other formatting options.

![Document sequence information page with Enable sequence fiscal year rollover checkbox selected.](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-gl-fiscal-year-rollover-1.png)

The following example describes how fiscal year rollover works with General Ledger accounting sequences.

- You have a document numbering sequence with the following format: 2024-GJ-0001-FR.
  - 2024 represents the fiscal year.
  - GJ represents the general journal.
  - FR represents the entity where the sequence will be used.

- The document numbering sequence is assigned as the accounting sequence for your General journal.
- The accounting sequence number for your last General journal entry in 2024 is 2024-GJ-0597-FR.
- You enter your next General journal entry in January 2025. Intacct automatically advances the fiscal year and resets the numbering.
- The accounting sequence number for that entry is 2025-GJ-0001-FR.

The year-specific sequences make it easier to analyze trends and compare activity across fiscal years more effectively with neatly organized sequence data.

## How it works

Start by creating new document numbering sequences that use fiscal year rollover. Be sure to create as many as you need to meet your business requirements. To make it easy to identify transactions, you can create 1 sequence for each journal in each entity.

After you create the document numbering sequences, you'll assign them to the accounting sequences for your General Ledger journals.

### Create the document numbering sequence

If you're working in a multi-entity company, make sure you're either in the correct entity or at the top level.

- You cannot assign a document sequence created at the entity level to an accounting sequence created at the top level.
- You cannot assign a document sequence created in one entity to an accounting sequence created in another entity.

1. Go to **Company > Setup > Settings > Document sequences** and select **Add**.

    Create a new sequence and start using it at the beginning of the next fiscal year. Avoid changing a sequence in the middle of the year.

2. Enter a Sequence ID.

    Use a name that describes the purpose of the sequence and the journal that will use it.

    For example, enter GJ-general-seq for a sequence created for the General Ledger General journal.

3. Enter the remaining required fields and any other information that you want to include in your document sequence.

    You can use fiscal year rollover with both numeric and alpha sequences.

4. Select the **Enable sequence fiscal year rollover** checkbox.

    The **Enable sequence fiscal year rollover** checkbox is not available by default. To enable fiscal year rollover, contact your designated support user to [open a support ticket](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=open_support_case).

    When selected, the fiscal year end for your company is displayed, in addition to the day the rollover was enabled for this sequence.

5. Select how you want to append the fiscal year to your document sequence:
    - **None:** When selected, the fiscal year will not appear in your document sequence.
    - **Prefix:** When selected, the fiscal year is added as the Rollover prefix to your document sequence, followed by a separator.
    - **Suffix:** When selected, the fiscal year is added as the Rollover suffix to your document sequence, preceded by a separator.
6. Enter the format for the sequence.

    In addition to the rollover prefix or suffix, you can add an additional prefix and suffix.

    To make it easy to set up the accounting sequence and identify transactions, use the following conventions:
    - A **Prefix** with the name or ID of the journal that the numbering system is used for
    - A **Suffix** to indicate the entity in which the transaction was created, which is useful when viewing transactions from the top level

7. **Save** your changes.

When fiscal year rollover is enabled, the next 10 years of document sequences with corresponding fiscal years are displayed. The year field is not editable.

![Document sequence information page with Prefix selected in the Append fiscal year to sequence field. ](https://www.intacct.com/ia/docs/en_US/releasenotes/Resources/Images/2024/2024-R3-images/2024-R3-gl-fiscal-year-rollover-2.png)

For more information about document sequence fields, see [Document sequences for IDs](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Document_Sequence_Redirect).

### Create the accounting sequence

Before creating the accounting sequence, enable the feature in Configure General Ledger.

1. Go to **General Ledger** > **Setup** \> **Configuration**.
2. In the Transactions section, select the **Enable accounting sequence** checkbox.
3. Under **Entities requiring accounting sequence**, select all entities that need to adhere to accounting sequence legal requirements.

    For multi-entity companies:
    - Be sure to only include entities that need to meet this legal requirement in your configuration.
    - If you're enabling an accounting number sequence for the top level only, you do not need to select entities.
    - You can remove an entity from the accounting sequence configuration in the Configure General Ledger if the legal requirement is no longer needed.

4. Select **Save**.

During the fiscal year, it's not recommended to change your accounting sequence for any journal to ensure that you comply with regional accounting requirements. It's better to start a new sequence at the beginning of the next fiscal year.

1. Go to **General Ledger** > **Setup** \> **More** and select the **+** next to **Accounting sequence**.
2. Select **Top level** or select an **Entity**.
    - For multi-entity companies enabling accounting sequences at the top level only, you do not need to specify an entity.
    - If the journal entry sequence needs to be unique for each entity, create the sequence at the entity level.
    - You cannot assign a document sequence created at the entity level to an accounting sequence created at the top level.
    - You cannot assign a document sequence created in one entity to an accounting sequence created in another entity.

3. Enter the **Start date** for the beginning of the next fiscal year.

    Make sure this coincides with the start date of the next fiscal year displayed on the Document sequences page when you created the document sequence.

4. Enter the **End date**.

    Make sure this coincides with the end date of the final fiscal year displayed on the Document sequences page when you created the document sequence.

5. In the Entries section, select a **Journal**.
6. Select a **Sequence number** to use for the journal.
7. Continue selecting journal and sequence number combinations as needed.
8. Select **Save**.

For more information, see [Assign sequences to entities](https://www.intacct.com/ia/docs/en_US/help_action/Default.htm#cshid=Assign_sequences_to_entities).

## Permissions and other requirements

| Subscription          | Company General Ledger                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regional availability | All regions                                                                                                                                              |
| User type             | Business user with admin privileges                                                                                                                      |
| Permissions           | Document sequence: List, View, Add, Edit List and View permissions to Journals, Adjustment Journals, and any other applicable journals in General Ledger |
