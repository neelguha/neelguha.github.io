---
layout: post
title: "Templates for Machine Learning Research Papers"
date: 2026-03-24
description: "Eight common kinds of machine learning research papers and their elements"
tags: [research, advice]
categories: [research, advice]
---

This blogpost is intended to help students understand how to present research to machine learning audiences.[^1] It is an amalgamation of lessons that my friends and I have learned through our PhDs, and is drawn from our experiences writing, reading, and reviewing machine learning papers. 

This post’s core idea is that machine learning research papers follow **templates**. What is a template? A template is a particular format for presenting an argument. Modern machine learning is characterized by a recurring set of templates. When you sit down to translate your research into a paper, you must determine which of these templates to use and follow the template closely. If you stray from the template’s form and break its rules---by making some but not all of the arguments---reviewers and readers will notice. Even if they can’t identify the specific transgression, the pervasiveness of templates in published machine learning research means they will instinctively recognize that something is *off*. Your name will be cursed; your lab slandered on X; your GPUs exiled to sit idle on some far off lunar cluster.

For these reasons, it is important to understand the different templates. As you work on a particular project, you should ask which templates most align with your research contributions. As you sit down to write the paper, you should ask whether the arguments on the page reflect those the template demands. The dirty truth is that *doing* research and *writing* your research are inextricable, with each shaping the other.[^2] 

What follows is my best effort to collect and describe different templates. As you might expect, the templates articulated below reflect my own research biases: the papers I’ve written, the areas I work in, and the wonderful folks I collaborate with. To the extent that you think the following list misconstrues a template or overlooks important ones, then I welcome your feedback, and I will try my best to edit this blogpost to reflect inbound comments. 

- [The "Data Artifact Paper"](#the-data-artifact-paper)
- [The "Horse Race Paper"](#the-horse-race-paper)
- [The "New Paradigm Paper"](#the-new-paradigm-paper)
- [The "Resurrected Baseline Paper"](#the-resurrected-baseline-paper)
- [The "Unification Paper"](#the-unification-paper)
- [The "Problem Solving Paper"](#the-problem-solving-paper)
- [The "Discovery Paper"](#the-discovery-paper)
- [The "Countervailing Wisdom Paper"](#the-countervailing-wisdom-paper)

## The "Data Artifact Paper"

**Key pieces**

1. Show a need for a data artifact (i.e., dataset or benchmark)  
2. Show the artifact is soundly constructed  
3. Show the artifact yields new insights for machine learning

The first template is the “Data Artifact Paper.” As the name suggests, this paper is only possible if you’re introducing a new benchmark, dataset, or evaluation. This kind of paper has three rules.

First, you must convince the reader that there is a need for some kind of dataset or evaluation methodology. This is the underwater basket weaving test: if you can’t explain why the task your benchmark tests is important, readers will be left confused as to why they should care. It is common for papers of this mold to reference growing kinds of AI usage, particular measurement blindspots, or flaws with existing benchmarks. For example: 

* “AI is increasingly used in the legal domain, but we have no way of measuring performance on real-world legal tasks.”  
* “Current translation benchmarks focus on popular languages, and so we don’t know if existing methods also work on rare languages.”  
* “Existing long context classification benchmarks contain documents where the relevant information is on the first page, and thus do not actually measure long context reasoning abilities.”

Second, you must convince the reader that your benchmark is fundamentally sound. One common strategy is to explain how your benchmark corresponds to real world data produced by real world processes. For example: “Our dataset of X-rays and corresponding diagnoses was collected from real people’s medical records.” Another is to explain how your benchmark was constructed by experts. For example: “Our contract benchmark was produced by the fanciest of fancy law school-trained lawyers, each of whom has clerked for no fewer than three Supreme Court Justices and is capable of reciting the Constitution backwards.” 

Third, you must convince the reader that your benchmark allows us to learn something new about machine learning generally. A benchmark which yields no new information about existing methods or algorithms has little marginal value. There are already many benchmarks and datasets which tell us a lot about machine learning performance. In order to be useful, yours must tell us something additional. Most papers check this box by showing that intuitively applicable methods which perform well in other contexts actually struggle on the introduced benchmark. Thus, the benchmarks in these papers are saying: “I am measuring capabilities that other benchmarks do not, because the methods that work elsewhere are poor on me.” Alternative ways to check this box often involve a new set of metrics (“here’s a kind of systems efficiency we should care about\!”) or even a surprising finding about which algorithms/models work well (“hey that model we were all unsure about is actually [weirdly good at legal tasks](https://x.com/ValsAI/status/1945908942875611174)? that’s pretty strange\!\!”). 

## The "Horse Race Paper"

**Key pieces**

1. Establish a credible “competition” where performance is meaningful  
2. Wildly outperform everyone on this competition  
3. Provide an explanation for your superior performance 

The second template is what I call the “Horse Race Paper". You write the Horse Race Paper when you have jaw-dropping, eye-watering, eyebrow-raising empirical results. 

The Horse Race Paper is, funnily enough, quite simple rhetorically. First, there must be some established benchmark or evaluation paradigm which the community recognizes as legitimate and reliable. It is great if people care about the benchmark, and even better if many researchers are working to improve performance. Second, your algorithm or method must perform spectacularly well on this benchmark. Marginal improvement over competitors is insufficient. You must crush them. And third, you must have some explanation for why you are so good. The method need not be fancy, so long as you can articulate the essential technical insight. In short, the horse race paper requires that (1) there is a race, (2) your horse is the fastest, and (3) you can explain why your horse is fast. 

Some of the most influential papers of the last fifteen years are Horse Race Papers. AlexNet is a Horse Race Paper on ImageNet. BERT is a Horse Race Paper on natural language understanding benchmarks. FlashAttention is a Horse Race Paper on MLPerf. All of these papers showed extraordinary empirical improvements within established evaluation regimes.

The Horse Race Paper trades rhetorical difficulty for technical difficulty. Rarely does one have the goods to execute this paper. At any point in time, only a handful of benchmarks actually enable this kind of argument.[^3] 

## The "New Paradigm Paper" 

**Key pieces**

1. Establish a paradigm contrast  
2. Give an algorithm for the new paradigm  
3. Show how the new paradigm unlocks something

The third template is the “New Paradigm Paper". The New Paradigm Paper often advances a different perspective on a problem or technology. It has three requirements.[^4]

First, you must present a paradigm contrast. That is, you must identify the way we traditionally do something and ask if we can do that same thing in a radically different way. Here are some examples:

* “Traditionally models learn tasks by gradient descent over task samples. But what if we could instead teach models by describing the task within the model input?”  
* “Traditionally engineers generate only one output from a LLM for each input. But what if we generated thousands of outputs, and returned the best one?”  
* “Traditionally we ‘combine’ models by averaging their predictions. But what if we instead averaged their parameters?” 


The strength of the contrast is important. If the new paradigm seems too close to the old paradigm, readers will think you’re inflating ultimately meaningless differences to score novelty points. Case in point, it would be ridiculous to argue: “Most in-context learning uses three demonstrations. But what if we used four?” 

Second, you must offer an algorithm which operates within your paradigm. It is important to understand the distinction between paradigms and algorithms. Paradigms refer to general ways of using technologies. Algorithms refer to specific subsidiary methods. Averaging different model parameters is a paradigm. Fisher information based-weighting is an algorithm. Your algorithm is meant to show that your paradigm is actually operational, and that there is a way to translate your high level vision into specific results.

Most algorithms in New Paradigm Papers are simple. That’s fine, and arguably even desirable.[^5] But keep the following in mind:

* Do not overstate the effectiveness of your algorithm. Almost always, your algorithm has serious flaws. That is ok. The better algorithm comes in the next paper. Focus too hard on how good your algorithm is, and you may inadvertently find yourself writing a Horse Race paper within your New Paradigm Paper.  
* Sometimes, readers look at the proposed algorithm and find it to be oh-so-vanilla. *Really? You’re just doing that? This is an undergrad algorithm\! If I accept this paper the other reviewers will laugh at me for giving a strong accept to something so simple.* An effective way to counteract this problem is to show that a set of obvious algorithms do not work or are insufficient. These set up a relative comparison: if a reader first sees that obvious algorithms (that they might have chosen) do not work–and then see that yours does–they will look more kindly upon your proposed method. You draw attention to the technical aspects which distinguish your algorithm from the ordinary baselines, thereby making it look slightly more impressive. (You’re also doing good science, by identifying an important algorithmic nuance of this new paradigm.) Case in point: the [Cartridges paper](https://arxiv.org/abs/2506.06266) first shows that standard next-token prediction is surprisingly poor, before presenting a self-study/self-instruct method.   
* It is important to be clear about how you want your algorithm to be evaluated. Every paradigm is associated with its own criteria. When you switch paradigms, you need to signal to readers that the criteria are changing. Compare traditional supervised learning with in-context learning. If you think about the two paradigms purely from a model accuracy standpoint, supervised learning often wins. You can almost always more effectively extract signal from data through gradient descent than in-context generalization. But if you compare the two paradigms from the perspective of compute or labeled data availability, then in-context learning is far superior. Readers must understand that they are to evaluate your algorithm with the criteria of the new paradigm, not the old one.

Third and finally, you must show that the new paradigm allows you to do something spectacular. This is the part of the argument where you justify the paradigm itself. When given your paper, the reader will be asking themselves: “Why should I care about this new paradigm? What does it give me over the old paradigm?” This is where you show them. Returning to the three paradigm contrasts above: 

* The spectacular aspect of in-context learning as opposed to traditional supervised learning is the realization of true multi-task models. You only need one model now. With in-context learning, that model can do *anything*.  
* The spectacular aspect of multiple sampling inference techniques (“test-time compute”) is that fantastic performance can be extracted from a mediocre model. The game is now about making inference fast, and that can be handled through parallelization or various engineering optimizations.  
* The spectacular aspect of model averaging is the ability to treat models as parameterized representations of skills, and view operations over model parameters as operations over the model skills themselves. Model averaging provides answers for contexts where data cannot be shared, but model parameters can.

The New Paradigm Paper is extremely difficult to write. At each stage, you must negotiate a different collection of treacherous pitfalls. The good news is that successful execution of the New Paradigm paper usually enables a series of follow-up papers, in which you tweak, tinker with, and improve the algorithm. At the peak of their powers, New Paradigm Papers tend to start new subfields. 

## The "Resurrected Baseline Paper"

**Key pieces**

1. Show some family of algorithms has become extremely complicated  
2. Show there is a simple baseline which works equivalently (or better)  
3. Explain why this baseline works so well

The fourth template is the "Resurrected Baseline Paper". Here again, there are three requirements.

First, you must show there is a family of machine learning methods which have grown extremely complex. Importantly, this complexity should impose some kind of cost. The cost may be conceptual, in that no one is quite clear what these methods are doing. The cost may be practical, in that these methods are difficult to tune or implement. The cost may even be decisional, in that it is often unclear which method someone should use in a given context.

Second, you must show that the problem these methods purport to solve can be solved with an approach that is extremely simple. So simple, in fact, that it would often be viewed as a kind of naive baseline. You don’t need this baseline to be better than the fancy methods. You just need them to be approximate in quality. But, importantly, the reader must believe your baseline is simpler and stupider than the set of complex methods prior work has offered. 

Third and finally, you must be able to explain why your baseline works so well, or why prior work has failed to notice this. Common explanations include: your baseline exploits an important latent structure in the task; previous work neglected to tune the baseline adequately; the baseline actually requires thinking carefully about one specific piece.

One of my favorite papers ever---[LIMA](https://arxiv.org/abs/2305.11206)---is a wonderful example of a Resurrected Baseline Paper. The LIMA authors begin by observing that LLM post-training has gotten extremely complex, and increasingly involves large scale instruction tuning and reinforcement learning. They then show how finetuning a pretrained base model on a small but carefully constructed dataset of 1000 prompts and responses yields very competitive results. Finally, they explain why this simple approach works so well, and offer some observations about data diversity.[^6]

## The "Unification Paper"

**Key pieces**

1. Establish there is an emerging area where researchers have proposed different methods  
2. Show that all of these methods are essentially small variations on each other  
3. Show that a unifying framework yields practical payoffs.

The fifth template is the "Unification Paper". 

The first step in a Unification Paper is to establish there is an emerging interesting area where researchers have offered a range of seemingly different algorithms or methods. The second step is to illustrate that all of these methods are, in fact, different instantiations of a slightly more general method. The third step is to show that recognizing this lurking general method yields some kind of practical payoff. For example, maybe the general method is easier to implement, can be optimized in some way, or yields better results because it can be flexibly tailored to different contexts.

[Aioli](https://arxiv.org/abs/2411.05735) is a great Unification Paper. First, the authors identify an area of work (data mixing) where researchers have proposed a range of different algorithms. Second, the authors show that all of these methods are, in fact, different instantiations of a slightly more general method. Specifically, every existing data mixing algorithm is equivalent to solving the same optimization problem --- minimize average loss subject to a method-specific "mixing law", which encodes an assumption about how loss relates to mixture proportions. Third, the authors show that identifying this general structure is useful in a number of ways. Once you have the unified framework, you can ask: why do these methods sometimes fail? The answer turns out to be that the mixing laws are well-specified, but existing methods estimate their parameters badly. That insight directly motivates Aioli, a new method which estimates those parameters more carefully throughout training --- and which outperforms the prior methods as a result.

When I first presented the ideas in this blogpost, the audience suggested that the Unification Paper is the theoretician’s version of the Horse Race paper. I was skeptical at first, but increasingly think that’s correct. The Unification Paper only works if the mathematical framework advanced–the unification–actually works. If there is even a single prominent algorithm which falls outside of the framework, the paper usually fails. Like the Horse Race paper, so much depends on the strength of the underlying technical results.

## The "Problem Solving Paper"  

**Key pieces**

1. Identify a set of technical challenges preventing progress on some larger problem  
2. Describe a solution for each technical challenge  
3. Show how your solutions combine to improve performance on that larger problem 

The “Problem Solving” paper is the workhorse of AI research. It is reliable and simple. Always try this template to see if it fits your project. It may not be the best, but it will often work.

The first requirement of the problem solving paper is that you must identify an AI goal which is stymied by some technical challenges. Precisely identifying and articulating the technical challenges is extremely important. The Problem Solving paper operates on the premise that you are solving some problems. You must convince the reader these problems are both complex and substantial. The rule of threes dictates you should identify three problems, but many papers can escape by identifying two.  
The second requirement is that you must, *obviously*, solve these problems. Importantly, you must identify how you solve each distinct problem. Parallelization is important here, and introductions for this style of paper often begin by articulating the three distinct problems and then describe the solution or approach for each. If you say you did one thing–and that turned out to solve all three problems–then you didn’t really solve the problems. You threw a dart at the board and happened to hit the bullseye, but neither you nor the reader understands why.

Finally, you must show that your solutions combine to advance the state-of-the-art performance. That is to say, because you solved the problems, the challenge you sought to tackle is now less of a challenge or closer to completion.

One example of a Problem Solving Paper is [M2-Bert](https://arxiv.org/abs/2402.07440). The authors begin by observing that retrieval pipelines perform poorly on long documents–cases where the relevant signal is spread across 10,000 tokens or more, rather than sitting neatly at the top of page one. Building a retrieval encoder for this setting, they argue, is stymied by three distinct technical challenges: (1) there is no benchmark to evaluate long-context retrieval performance, (2) it is unclear how to pretrain a base model that can represent both short queries and long documents, and (3) standard contrastive fine-tuning requires large batches, which GPU memory constraints make impossible at long context lengths.

The paper then addresses each problem in turn. For the first, they introduce LoCoV1, a 12-task benchmark drawing from law, medicine, and finance --- domains where relevant information is genuinely spread across long documents. For the second, they describe a pretraining data mixture that exposes the model to both short and long sequences. For the third, they develop a fine-tuning approach that works with single-sample batches.

The result is M2-BERT, an 80M parameter retrieval encoder that outperforms Transformer-based models more than 90 times its size on LoCoV1. Because the authors solved each problem separately, you understand exactly why the model works.

## The "Discovery Paper"

**Key pieces**

1. Identify an unanswered question  
2. Provide an answer to the question, with a specific explanation of why your answer is good  
3. Show how your answer has some payoff

The seventh template is the Discovery paper.

There are three rules to the Discovery paper. First, you must identify a question. The question should be unanswered and important. If the question is already answered–or is one the community lacks interest in–you will lose the reader from the jump. For them to care about your answer, they must first care about your question.

Second, you must actually answer the question. In providing an answer you must also negotiate an important tension. Namely, if the question is so important and open, why are *you* able to answer it? Why haven’t prior works offered satisfactory answers? A few categories of reasons are common in AI research.[^7] One has to do with resources. Sometimes, answering a question is extremely resource-intensive because it requires many experiments or expensive ones. Only a small number of labs/researchers can thus afford to answer the question. Another explanation has to do with methods. Answering the question might require solving a specific technical problem, and you, the researcher, have developed a solution to this problem.

Finally, you must show that your answer has a payoff. That is to say, having answered the question, we can now approach AI in a smarter or more efficient way. Maybe your answer suggests an obviously better way in which to build a certain kind of system. Maybe it highlights a future research direction the community should explore. Maybe, in fact, it corrects a misconception–more on that below. 

One example of a Discovery Paper is [Chinchilla](https://arxiv.org/abs/2203.15556). Here, the authors are interested in the question of how compute should be allocated between model parameters and tokens. They train many models over many datasets, finding that models are too big and datasets too small. They then train a model according to the optimal token-parameter scaling laws, and show this model outperforms competitors. 

Another example is [Do ImageNet Classifiers Generalize to ImageNet?](https://arxiv.org/abs/1902.10811) Here, the authors are interested in whether models that perform well on benchmark test sets generalize. They answer this question by recreating two benchmarks with entirely different data, and comparing model performance across the original and new test sets. The biggest implication of their study is that benchmarks are effective for development–models which perform well on the original benchmarks also perform well on the new ones.

## The "Countervailing Wisdom Paper"

**Key pieces**

1. Identify some widely held belief in the community.  
2. Show it is wrong.  
3. Offer a corrected (or better) view.

The eighth template is the “Countervailing Wisdom” paper. This template combines aspects of the Resurrected Baseline Paper and the Discovery Paper. For that reason, the Countervailing Wisdom paper is slightly rarer. When you can write this paper you can usually write one of the other ones, and may opt to do so for reasons explained below.

The Countervailing Wisdom Paper has three rules. First, you must identify some widely held view or belief within the community. This view need not be universal, but must be viewed as legitimate. You cannot pick a view held by a discredited minority. Nor can you pick a view held by people outside-of, or even adjacent-to, the AI research community. Second, you must show how this view is wrong. Ideally, you should identify the specific logical errors or missteps which led the field to converge on the wrong answer. And third, you should offer a more correct view of the world. If the traditional wisdom is wrong, then what is right? Give us some answers, even if you can only gesture at them.

Countervailing Wisdom papers have a little bit of edge to them. You are essentially arguing that a certain set of individuals are *very* wrong, and you are doing so in a *very* public way. Other fields (\*cough cough\* law, economics, and political science) are quite comfortable doing this, but computer science generally isn’t. Why and whether this kind of behavior is ultimately a good thing is a wholly separate discussion, but this is one reason why Countervailing Wisdom papers are rare, or sometimes masquerade as other templates. 

A great example is "[Are Emergent Abilities of Large Language Models a Mirage?](https://arxiv.org/abs/2304.15004)", which won the Outstanding Paper Award at NeurIPS in 2023\. The authors first identify the widely held view that certain LLM capabilities appear suddenly and unpredictably at scale (“emergence”). They then show that emergence is an artifact of the metric, and that toggling between non-linear and linear metrics can induce (or eliminate) emergence. They then apply this insight to LLMs, finding that claims of emergence are somewhat overstated. 

[^1]:  Helpful feedback and comments on drafts of this post were provided by Dan Fu, Vivien Cheng, Mayee Chen, Hermann Kumbong, Yasa Baig, and Francois Chaubard. The ideas discussed here reflect years of conversations with other members of the [Hazy Research](https://hazyresearch.stanford.edu/).

[^2]:  You don’t often know what type of paper you’re going to write until you’re deep into the research process. The act of writing (i.e., trying to fit your research into a template) is a form of thinking in itself, which might reveal important gaps or potential opportunities. Thus, the correct time to begin writing isn’t at the end of your project, but throughout the process itself.

[^3]:  For example, in the 2010s you could write a horse race paper about ImageNet; in the early 2020’s you could write a horse race paper about SuperGlue; up until recently you could write a horse race paper about SWEBench; and today, you could probably write a horse race paper about GDPval or HLE.

[^4]:  In the spirit of transparency: A colleague’s reaction to a draft of this blogpost was that there is no such thing as the New Paradigm Paper. In their words: “I don't think you can create a New Paradigm Paper without writing an excellent version of one of the other papers. A ‘new paradigm’ is the logical side effect of many good papers.”

[^5]:  Someone once gave me the advice that research papers can only be “slightly” new. If you try to do too many new things in a single paper, readers get overwhelmed. In that light, a new paradigm paper with an overly complex algorithm might be understood as trying to do too many new things.

[^6]:  Another great example of this template is “[A Simple but Tough-to-Beat Baseline for Sentence Embeddings](https://openreview.net/forum?id=SyK00v5xx).”

[^7]:  In social science research, an extremely common reason is that the researchers got special access to proprietary or restricted data.