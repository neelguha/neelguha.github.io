# LegalBench V2

---
**TLDR**: The biggest bottleneck in legal AI today is evaluation. Measuring the performance of legal AI systems requires expensive and time-consuming manual review by attorneys. We are currently building LegalBench V2 (LB2), a benchmark to measure the accuracy of legal autograders --- AI systems that grade other AI systems' legal work. If you are a lawyer, a law firm, or any other legal organization with ideas for legal AI tasks — we want to hear from you. Contributors who make meaningful contributions will be credited as co-authors.

--- 

## Motivation

We are excited to announce the development of LegalBench V2 (LB2)---a successor to the original [LegalBench](https://arxiv.org/abs/2308.11462) project from 2023. LB2 is interested in building benchmarks which allow us to validate the performance for *legal reward models* --- AI systems which replicate attorney's preferences between different legal workproducts. Legal reward models can be used to (1) develop specialized legal LLMs, and (2) automate otherwise time-consuming and expensive evaluation processes. If you are a lawyer, a law firm, or any other legal organization with ideas for legal AI tasks — we want to hear from you. Contributors who make meaningful contributions will be credited as co-authors.

---
In 2023, we released [LegalBench](https://arxiv.org/abs/2308.11462)---a benchmark for evaluating how well large language models (LLMs) could perform different legal classification and extraction tasks. In the years since, scores of researchers, legaltech companies, and lawyers have told us about the different ways in which LegalBench has proved useful to their work. Today, LegalBench is the largest openly available legal benchmark, and the de facto standard for measuring the legal reasoning capabilities of frontier models.

We're excited to announce the ongoing development of LegalBench2 (LB2). Today, the biggest bottleneck in legal AI is the cost of quality assurance (evaluation). Verifying that a legal AI's systems outputs are satisfactory requires lawyers to manually review the system's outputs. This process is expensive and time-consuming. It also means that legal AI developers and deployers are unable to keep pace with the rapidly expanding frontier of LLM. Every time a new model is released --- from Anthropic, OpenAI, Google, or an exciting startup --- quality assurance must be repeated, *from scratch*. 

To address this problem, LB2 will contain benchmarks enabling the validation of **LLM-judges** for different legal tasks. An LLM-judge is an LLM system which, given responses from two different AI systems, indicates which one is higher quality. LLM-judges have already become an essential tool for AI developers and researchers in other AI application areas.

This webpage provides more background on LLM-judges, LB2, and ways in which you can get involved. If you have any questions, please reach out to Neel Guha (neelguha@gmail.com)!
---

## Why is traditional quality assurance expensive?

Imagine you're interested in comparing two AI legal research tools. Call them **Tool A** and **Tool B**. Both tools accept open-ended research questions and return open responses. The standard process for comparing these tools goes as follows:

- First, you would come up with a list of research questions you might use the tool to answer. An example of a question might be: "Does the work product doctrine protect internal investigation reports prepared by outside counsel when the company later discloses them to a government agency during a regulatory investigation?"
- Second, you would produce a response from each tool for each question.
- Third, you (and other lawyers) would determine which tool's response you preferred for each question.

This process would allow you to determine how Tool A and B compare. For example, based on the results of step 3, you might find that attorneys preferred Tool A's responses approximately 80\% of the time. 

This approach is effective, but unfortunately scales extremely poorly because step 3 is extremely time-consuming and expensive. It takes time, money, and effort for a group of attorneys to manually compare tool outputs. Every time one of the tools is updated (or a new tool is released), you'd need to redo steps 2 and 3 in order to collect up-to-date performance information. 

## How do LLM-judges help?

The idea behind LLM-judges is that we can build a separate LLM-based system --- called a "judge" --- which can automate step 3 above. This judge would receive a question and two candidate answers, and predict which answer an attorney would be likely to prefer. The judge is intended to replicate the kinds of assessments human attorneys make in step 3. Importantly, an accurate judge makes quality assurance substantially cheaper. When presented with a new tool (**Tool C**), you can use the judge as a replacement for human review --- reducing a process that might have ordinarily taken days or weeks to one that takes minutes.

But how do we know if a judge is accurate? The standard way to assess judge accuracy is to ask if the judge's preferences between pairs of answers agree with attorney preferences. If, over a large number of questions, the response the judge picks is also the response attorneys pick, then we can say that the judge is an accurate proxy for attorney judgements. 

## LegalBench 2: Collecting attorney preference data

Our goal in LB2 is to build datasets that allow us to develop and validate LLM-judges for different tasks. For each task, this requires collecting different questions/inputs, generating tool outputs, and having attorneys provide preferences across these responses. For example, to build a benchmark dataset for an LLM-judge for the legal research task above, we'd need to: 

1. Collect a set of legal research questions.
2. Produce responses to these questions from different AI tools
3. Have a set of attorneys examine pairs of answers and indicate their preference.

Then, to evaluate a candidate LLM-judge, we'd repeatedly give it the same pairs of answers, and count how often it preferred the answer that human attorneys also preferred. 

## Community involvement

Like the original LegalBench project, we'd love to find a way to include community input in the process of constructing LB2. There are three distinct ways to get involved.

**Contributing ideas for tasks**: First, we are interested in gathering ideas for different kinds of tasks that LB2 should cover. We're particularly interested in tasks that the community cares about, because they correspond to real world AI use cases. 

**Contributing tool access**: Second, we're interested in ensuring that state-of-the-art legal AI tools are represented in the benchmark. If you're working on tools for a certain task, we'd be interested in finding a way for your tool's outputs to be amongst those attorneys examine. 

**Contributing attorney hours**: Finally, we're interested in partnerships whereby attorneys can donate their time to provide preferences. If you're passionate about legal AI --- or this project's goals align with your firms' interests -- we'd love to find a way to work together! 

As with the original LegalBench, substantial contributions will be invited to join the final paper as coauthors. 


## Examples of Tasks and Data We Are Interested In

Below are some examples of potential LB2 tasks. These are intended to be illustrative — we are actively seeking ideas beyond these categories.

### Legal Education — Law School Exam Grading
Instructions correspond to law school exam questions, and responses correspond to student essays. An LLM-judge for this task would assess essay quality in the same way a professor or supervising attorney would.

**Example instruction:**
> "You are grading a first-year law school exam. The question asked students to analyze whether the following facts give rise to a valid negligence claim under New York law. The answer should identify the relevant elements, apply each to the facts, and reach a reasoned conclusion.
>
> Attachment: Exam question text"

---

### Depositions — Question Strategy Evaluation
Instructions correspond to deponent-specific litigation contexts — a description of the legal dispute and a profile of the witness. Responses correspond to deposition question strategies. An autograder for this task would assess which strategy is more likely to be effective.

**Example instruction:**
> "You represent the plaintiff in a personal injury case. The following is a summary of the dispute and a profile of the opposing party's key witness. Devise a deposition question strategy aimed at establishing that the witness had prior knowledge of the defect.
>
> Attachment: Case summary + witness profile"

---

### Brief Writing — Argument Quality
Instructions correspond to litigation contexts and the specific issue on appeal. Responses correspond to argument sections of briefs. An autograder for this task would assess which argument is stronger, better reasoned, or more persuasive.

**Example instruction:**
> "Draft the argument section of an appellant's brief addressing whether the trial court abused its discretion in excluding the expert's testimony under FRE 702. The relevant trial court ruling and expert report are appended.
>
> Attachment: Documents"

---

### Contract Drafting — Clause Quality
Instructions correspond to drafting scenarios specifying the transaction, parties, and the attorney's objectives for a given clause. Responses correspond to competing drafts. An autograder for this task would assess which draft better serves the client's interests.

**Example instruction:**
> "Draft a forum-selection clause for a commercial services agreement between a Delaware-incorporated technology company and a California-based vendor. The clause should favor the technology company and account for disputes arising under both state and federal law."

---

### Regulatory Analysis — Compliance Assessment
Instructions correspond to regulatory or compliance questions paired with relevant company and product information. Responses correspond to competing legal analyses. An autograder for this task would assess which analysis is more thorough, accurate, or practically useful.

**Example instruction:**
> "A fintech startup intends to offer a peer-to-peer lending product in all 50 states. Identify the primary federal and state regulatory frameworks that would apply and describe the key compliance obligations the company must address before launch.
>
> Attachment: Company description and product term sheet"

---

### Legal Research Memos
Instructions correspond to research questions posed by a supervising attorney, along with relevant factual context. Responses correspond to competing research memos. An autograder for this task would assess which memo more accurately states the law, identifies the most relevant authority, and applies it to the facts.

**Example instruction:**
> "A client based in Texas entered into a software licensing agreement with a vendor that included a mandatory arbitration clause. The client now wants to bring a class action. Write a short research memo analyzing whether the arbitration clause is enforceable and whether it bars class proceedings under current federal and Texas law.
>
> Attachment: Contract excerpt"

---

### Client Advice Letters
Instructions correspond to a client situation and the specific question the client has asked. Responses correspond to competing advice letters. An autograder for this task would assess which letter more clearly explains the legal situation, identifies the key risks, and provides actionable guidance appropriate for a non-lawyer reader.

**Example instruction:**
> "Your client is a small business owner who has received a cease-and-desist letter alleging trademark infringement. They have been using their current business name for six years. Draft a client advice letter explaining their legal exposure, options, and recommended next steps in plain language."

---

### Due Diligence — Contract Review
Instructions correspond to a contract review task specifying the client's position and the issues to flag. Responses correspond to competing due diligence summaries. An autograder for this task would assess which summary more accurately identifies material risks, missing provisions, and negotiating points relevant to the client.

**Example instruction:**
> "You represent the buyer in an acquisition. Review the following target company's standard customer agreement and identify any provisions that create material liability, limit assignability, or would require third-party consent to transfer upon closing.
>
> Attachment: Contract text"

---

### Demand Letters
Instructions correspond to a dispute context and the client's objectives. Responses correspond to competing demand letters. An autograder for this task would assess which letter more effectively asserts the client's legal position, sets an appropriate tone, and maximizes the likelihood of a favorable response.

**Example instruction:**
> "Your client is a landlord whose commercial tenant vacated the premises three months before the lease term ended without notice, leaving the space in disrepair. Draft a demand letter seeking unpaid rent, early termination damages, and repair costs.
>
> Attachment: Lease agreement and damage assessment"

---

### Sentencing Advocacy — Mitigation Memoranda
Instructions correspond to a defendant's background, the offense conduct, and the applicable sentencing guidelines range. Responses correspond to competing sentencing memoranda submitted on the defendant's behalf. An autograder for this task would assess which memorandum more effectively presents mitigating factors and advocates for a below-guidelines sentence.

**Example instruction:**
> "Your client has pleaded guilty to one count of wire fraud and faces a guidelines range of 37–46 months. He has no prior criminal history, cooperated with investigators, and has significant family caretaking responsibilities. Draft a sentencing memorandum arguing for a sentence of time served.
>
> Attachment: Client background materials and offense summary"

---

## Contribute

Ready to contribute a task idea or dataset? [Open the contribution form →](https://docs.google.com/forms/d/e/1FAIpQLSekltQav_5YoMYAWR3jGmiU1xDN3Y33JDHbYyDQVhAoHkF3Mw/viewform?usp=dialog)

---

*For questions about LB2, contribution logistics, or data handling, please contact [Neel Guha — neelguha@gmail.com](mailto:nguha@cs.stanford.edu).*