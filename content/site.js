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
    "date": "{{ blog.date | date: '%-d.%-m.%Y' }}"
  }{%- unless forloop.last == true -%},{%- endunless -%}
{% endfor %}
]
{%- endcapture -%}

const SITE = {
  blogs: JSON.parse(String.raw`{{- blogs -}}`)
}
