---
source: generated
year: "2026"
generated: 2026-02-07
generator: claude-opus-4-6
type: annual-summary
releases:
  - 2026-R1
---

# 2026 Annual Summary

Sage Intacct's 2026 was defined by a single major release (R1) that nonetheless delivered a substantial volume of capability. The year's marquee additions—the Sage Intacct Data Cloud (Snowflake integration), a comprehensive Fixed Assets Management overhaul, and GL account reconciliations—collectively signal Sage's push to make Intacct a more analytically powerful and operationally complete platform. Simultaneously, the continued expansion of AI-driven automation through Sage Copilot, an AI import agent, and AP Automation enhancements reflects an accelerating commitment to embedding intelligence into daily financial workflows. The formal freezing of the XML API in favor of REST marks a clear platform modernization inflection point.

## Key Themes

- **Data and analytics infrastructure investment**: The Sage Intacct Data Cloud (Snowflake) opens direct access to live financial data for external BI tools, positioning Intacct as a more open analytical platform.
- **AI and natural-language automation across financial workflows**: A Finance Intelligence agent, AI-powered import agent, and predictive AP tax details demonstrate Sage embedding AI into core processes rather than offering it as a sidecar.
- **Fixed Assets and period-end close modernization**: CIP asset lifecycle tracking, automatic depreciation recalculation, GL account reconciliations, and close analytics collectively target the pain points of month-end and year-end close.
- **Global expansion and compliance readiness**: Multi-base currency support for Close Automation, tax box reporting, and Germany-specific e-invoicing reflect continued investment in making Intacct viable for multinational and region-specific regulatory requirements.
- **Platform modernization with REST-only future**: The XML API freeze and continued REST API expansion mark a decisive shift that will affect every integration and custom development effort.

## Most Significant Changes

- **Sage Intacct Data Cloud** provides secure, direct Snowflake access to Intacct data for advanced analytics and BI integration across all regions.
- **GL account reconciliations** enable matching of offsetting debit and credit entry lines, streamlining a historically manual period-end process.
- **Fixed Assets Management overhaul** introduces CIP asset lifecycle management with AP/Purchasing integration, automatic depreciation recalculation on cost adjustments, and a new Roll Forward report.
- **Line-level matching for AP Automation reached general availability**, predicting line entries from vendor documents and flagging mismatches automatically.
- **Tax box report configuration and execution (GA)** allows defining boxes, building templates, and calculating tax burden for any period—critical for multi-country compliance.
- **AI-powered import agent** transforms, maps, and cleans data through natural-language prompts with instant preview before committing, reducing manual data preparation.
- **All new objects and features are now REST API only**, effectively freezing the XML API and establishing REST as the sole path forward for integrations.

## Items Requiring Attention

- **Vendor Payments powered by CSI ends August 7, 2026**; US customers still on this service must migrate to an alternative before that date.
- **AP Automation email domain changed in February 2026**; confirm that email rules, whitelists, and spam filters have been updated to avoid disruption to invoice ingestion.
- **XML API is frozen**—any teams building or maintaining integrations should plan migration to REST API, as no new functionality will be added to XML endpoints.
- **Review the auto-populated allowed email addresses list** for outbound email security, which was seeded from three months of Sender/Reply-To history and may need manual adjustment.

## What to Watch

- **Finance Intelligence agent (Early Adopter)** lets users ask Sage Copilot natural-language questions answered from live financial data—signals a future where ad hoc reporting shifts from building reports to asking questions.
- **Embedded Customer Payment Services** via Fortis and other providers, plus e-invoicing for Germany, indicate Sage is moving toward native payment acceptance and government-mandated electronic invoicing compliance built directly into the platform.
- **Line-level approvals for Purchasing and close analytics** are in early adopter programs, suggesting granular workflow control and data-driven close optimization are near-term GA targets.
