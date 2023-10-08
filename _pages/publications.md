---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 1
#TODO: add awards
---
<!-- _pages/publications.md -->

Jump to <a href="#law">law and policy work</a>, <a href="#cs">computer science publications</a>,  or <a href="#chapters">textbook chapters</a>.

<div class="publications">
<h3 id="law">law and policy</h3>
{% bibliography -f {{ site.scholar.law_bibliography }} %}
</div>


<h3 id="cs">computer science</h3>
<div class="publications">

{% bibliography -f {{ site.scholar.cs_bibliography }} %}

</div>



<h3 id="chapters">textbook chapters</h3>
<div class="publications">

{% bibliography -f {{ site.scholar.chapters_bibliography }} %}

</div>