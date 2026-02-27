---
layout: page
permalink: /blog/
title: blog
nav: true
nav_order: 3
---

<ul class="post-list">
{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% for post in sorted_posts %}
  <li>
    <div class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></div>
    <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
    {% if post.description %}
      <div class="post-desc">{{ post.description }}</div>
    {% endif %}
  </li>
{% endfor %}
</ul>
