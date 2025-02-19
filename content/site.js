---
---
{%- assign values = site.data.site-constants -%}

{%- capture constants -%}
{
  "logo": "{{ values.logo | relative_url }}",
  "nav": [
    { "title": "Home", "href": "{{ '/' | relative_url }}", "key": 0 },
    { "title": "Get started", "href": "{{ '/pages/access' | relative_url }}", "key": 1 },
    { "title": "About", "href": "{{ '/pages/about' | relative_url }}", "key": 2 },
    { "title": "Blogs and instructions", "href": "{{ '/pages/publications' | relative_url }}", "key": 3 },
    { "title": "Status", "href": "{{ '/pages/status' | relative_url }}", "key": 4 },
    { "title": "Events", "href": "{{ '/pages/events' | relative_url }}", "key": 5 }
  ]
}
{%- endcapture -%}

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
  constants: JSON.parse(String.raw`{{- constants -}}`),
  blogs: JSON.parse(String.raw`{{- blogs -}}`),
  events: JSON.parse(String.raw`{{- events -}}`),
}
