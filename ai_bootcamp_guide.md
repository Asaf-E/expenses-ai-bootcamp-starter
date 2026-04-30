# AI-Assisted Development Bootcamp Guide

## Overview

In this exercise, you will build on a simplified **Expenses Management System**.

The application allows:
- Employees to create and submit expense reports
- Managers to approve or reject them
- Finance admins to mark them as paid and analyze spending

The system includes:
- A frontend (React)
- A backend (API + business logic)
- In-memory or file-based persistence (no database required)

You are **not expected to design the full system upfront**.
Instead, you will learn how to:
- Work with AI as a development partner
- Turn ideas into structured design documents
- Use those documents to guide implementation

---

## What You Are Practicing

This is not just a coding exercise.

You are learning a workflow:

1. Think → Describe → Structure
2. Collaborate with AI on design
3. Use design to generate better code
4. Iterate intentionally

The key idea:
> Better inputs → Better AI outputs

---

## Your Task

You will **add or extend a feature** in the system using an AI-driven workflow.

You are responsible for:
- Deciding what to build
- Describing it clearly
- Turning that into a design
- Implementing it with AI support

---

## Step-by-Step Instructions

### Step 1 — Run the Project (~5 min)

- Clone the starter project
- Command: git clone https://github.com/Asaf-E/expenses-ai-bootcamp-starter.git
- If you can't clone with git, access the location 'https://github.com/Asaf-E/expenses-ai-bootcamp-starter.git' and download a zip.
- Run it locally (Ask the agent to run it locally -> it will install all the prerequisites). No need for complex configuration.
- Explore the UI briefly

Goal: Understand what already exists

---

### Step 2 — Set Up Spec-Kit (~15 min)

- Install and run Spec-Kit using the following command in copilot.
- Command: 'uvx --from git+https://github.com/github/spec-kit.git specify init --here'

Goal: Prepare your AI tooling

---

### Step 3 — Define a Feature (~20 min)

Choose a feature you want to build or improve.

Options:
- Create report
- Update report
- Approval workflow
- Authentication
- Notifications

Then create a short Markdown description (5–15 lines):

Include:
- What the feature is
- Who needs it
- Why it exists
- What you already know
- What you are unsure about

Important:
- Write in **plain language**
- Do not jump to code

---

### Step 4 — Work with AI on Design

Use your description to collaborate with AI.

Ask the AI to help you:
- Clarify the feature
- Define behavior and edge cases
- Suggest API changes (if needed)
- Suggest UI changes

Iterate on your prompts until the design is clear.

Goal: Produce a **clean, structured design in Markdown**

---

### Step 5 — Implement with AI (~50 min)

Use Spec-Kit + AI to implement your design.

You should:
- Generate code
- Review it
- Fix issues
- Ask follow-up questions

Treat AI as:
- Helpful
- Fast
- Sometimes wrong

You are still responsible for correctness.

---

### Step 6 — Iterate

If time allows:
- Improve your feature
- Add another small feature
- Refine your design and prompts

---

## Guidelines for Working with AI

- Be specific → vague prompts give vague results
- Break problems into smaller pieces
- Ask for explanations when unsure
- Validate outputs before trusting them
- Iterate instead of rewriting everything

---

## Expected Outcome

By the end of this exercise, you should:

- Understand how to guide AI using structured input
- Be able to write a simple design spec in Markdown
- See the connection between **design quality and code quality**
- Successfully implement at least one feature end-to-end

---

## Important Notes

- Do not over-engineer your solution
- Do not try to rebuild the whole system
- Focus on learning the workflow

This is a **thinking exercise as much as a coding exercise**.

---

## Reference: System Context

The system includes:
- Expense reports with line items
- Approval workflow (submit → approve/reject → pay)
- Role-based access (employee, manager, finance)
- Dashboards and reporting

You can extend any part of this.

For full details, refer to the full specification: fileciteturn1file0

---

*Goal: Learn how to use design-first thinking to get better results from AI.*

