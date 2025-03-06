---
---

{%- capture blogs -%}
[
  {% for post in site.publications %}
    {
      "key": "{{ post.url | slugify }}",
      "title": "{{ post.title | xml_escape }}",
      "content": {{ post.content | strip_html | strip_newlines | jsonify }},
      "url": "{{ post.url | xml_escape }}",
      "tags": [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
      "type": "post",
      "date": "{{ post.date | date: '%-d.%-m.%Y' }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{%- endcapture -%}

{%- capture events -%}
[
  {% for event in site.events %}
    {
      "key": "{{ event.url | slugify }}",
      "title": "{{ event.title | xml_escape }}",
      "content": {{ event.content | strip_html | strip_newlines | jsonify }},
      "url": "{{ event.url | xml_escape }}",
      "tags": [{% for tag in event.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
      "type": "Event",
      "date": "{{ event.date | date: '%-d.%-m.%Y' }}",
      "link": "{{ event.link | xml_escape }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{%- endcapture -%}

{%- capture pages -%}
[
  {% assign first_item = true %}
  {% for page in site.pages %}
    {% unless page.path contains '.js' %}
      {% if first_item %}
        {% assign first_item = false %}
      {% else %}
        ,
      {% endif %}
      {
        "key": "{{ page.url | slugify }}",
        "title": "{{ page.title | xml_escape }}",
        "content": {{ page.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ page.url | xml_escape }}",
        "tags": [],
        "type": "page"
      }
    {% endunless %}
  {% endfor %}
]
{%- endcapture -%}


const STORE = {
  blogs: JSON.parse(String.raw`{{- blogs -}}`),
  events: JSON.parse(String.raw`{{- events -}}`),
  pages: JSON.parse(String.raw`{{- pages -}}`),
}
