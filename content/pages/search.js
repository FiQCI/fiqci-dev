// Ensure the store is available
window.addEventListener('DOMContentLoaded', function () {
  // Initialize Lunr.js search index
  var idx = lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('content');
    this.field('type');
    this.field('tags');

    // Add documents from the store
    for (var key in window.store) {
      if (window.store.hasOwnProperty(key)) {
        this.add(window.store[key]);
      }
    }
  });

  function search(query) {
    var results = idx.search(query); // Get search results

    // Clear previous results
    var resultsList = document.getElementById('search-results');
    resultsList.innerHTML = '';

    // Display results
    results.forEach(function (result) {
      var normalizedRef = result.ref.replace('.html', '-html').replace('/publications/', 'publications-').replace('/events/', 'events-').replace('/pages/', 'pages-').toLowerCase(); // Normalize the ref (replace .html with .md)
      var item = window.store[normalizedRef]; // Use the normalized ref to fetch the full post data
      if (item) {
        var title = item.title;
        var url = item.url;
        var excerpt = item.content.substring(0, 200) + '...';

        var listItem = document.createElement('li');
        listItem.innerHTML = `<strong><a href="${url}">${title}</a></strong><br><span>${excerpt}</span>`;
        resultsList.appendChild(listItem);
      }
    });

    if (results.length === 0) {
      var noResultsItem = document.createElement('li');
      noResultsItem.textContent = 'No results found.';
      resultsList.appendChild(noResultsItem);
    }
  }

  // Search on form submit
  var searchForm = document.querySelector('.header-search-form');
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var query = document.getElementById('search-box').value;
    search(query);
  });

  // Search on input change
  var searchBox = document.getElementById('search-box');
  searchBox.addEventListener('input', function () {
    var query = searchBox.value;
    search(query);
  });
});
