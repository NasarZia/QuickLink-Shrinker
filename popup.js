document.getElementById('shorten-btn').addEventListener('click', function() {
  let urls = document.getElementById('urls-input').value.trim().split('\n');

  urls.forEach(url => {
    if (url.trim()) {
      shortenURL(url);
    }
  });
});

function shortenURL(url) {
  let apiUrl = `https://api.tinyurl.com/create?url=${encodeURIComponent(url)}&domain=tiny.one`;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR-API-KEY', // You need an API key from TinyURL for this to work
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      let shortUrl = data.data.tiny_url;
      addResult(shortUrl);
      copyToClipboard(shortUrl);
    })
    .catch(error => console.error('Error shortening URL:', error));
}

function addResult(shortUrl) {
  let resultDiv = document.getElementById('result');
  let p = document.createElement('p');
  p.textContent = shortUrl;
  resultDiv.appendChild(p);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}
