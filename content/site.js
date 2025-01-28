---
---

{%- capture blogs -%}
[
{%- for blog in site.publications %}
  {
    "key": "{{ forloop.index }}",
    "type": "News",
    "title": "{{ blog.title }}",
    "url": "{{ blog.url | relative_url }}",
    "date": "{{ blog.date | date: '%-d.%-m.%Y' }}",
    "teaser": "{{blog.header.teaser | relative_url}}" 
  }{%- unless forloop.last == true -%},{%- endunless -%}
{% endfor %}
]
{%- endcapture -%}

{%- capture events -%}
[
{%- for event_post in site.events %}
  {
    "key": "{{ forloop.index }}",
    "type": "Event",
    "title": "{{ event_post.title }}",
    "url": "{{ event_post.link }}",
    "date": "{{ event_post.date | date: '%-d.%-m.%Y' }}",
    "content": {{ event_post.content | strip_html | strip_newlines | jsonify }}
  }{%- unless forloop.last == true -%},{%- endunless -%}
{% endfor %}
]
{%- endcapture -%}

const SITE = {
  blogs: JSON.parse(String.raw`{{- blogs -}}`),
  events: JSON.parse(String.raw`{{- events -}}`),
}
