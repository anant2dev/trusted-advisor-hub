# Architecture rules
- Keep Family Planner rules and bilingual domain content in a pure module separate from the legacy quiz scorer, so adding milestone planning does not change existing quiz behavior.
- Pass optional validated family context to booking through search parameters and compose outbound messages on user action, preserving old booking links and avoiding stored customer profiles.