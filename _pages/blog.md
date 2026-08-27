---
layout: page
permalink: /blog/
title: blog
nav_title: writing
nav: true
nav_order: 3
---

<h1 class="visually-hidden">Writing</h1>
<div class="blog-index">
  {% assign sorted_posts = site.posts | sort: "date" | reverse %}
  {% assign posts_by_year = sorted_posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in posts_by_year %}
    <section class="post-year-group">
      <h2 class="post-year">{{ year.name }}</h2>
      <ul class="post-list">
        {% for post in year.items %}
          <li>
            <div class="post-list-heading">
              <a class="post-list-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d" }}</time>
            </div>
            {% if post.description %}
              <div class="post-desc">{{ post.description }}</div>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>
