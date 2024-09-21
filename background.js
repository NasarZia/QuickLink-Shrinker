// Create the context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "shorten-url",  // Add an ID for the context menu item
    title: "Shorten URL",
    contexts: ["link"]  // Ensure the context is for links
  });
});

// Listen for context menu click events
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "shorten-url") {
    let url = info.linkUrl;
    shortenURLFromContextMenu(url);
  }
});

// Function to shorten the URL based on the selected service
function shortenURLFromContextMenu(url) {
  chrome.storage.sync.get('service', function(data) {
    let service = data.service || 'tinyurl';
    shortenURL(url, service);
  });
}

// Function to send the request to the URL shortening API
function shortenURL(url, service) {
  let apiUrl = '';

  if (service === 'tinyurl') {
    apiUrl = `https://api.tinyurl.com/create?url=${encodeURIComponent(url)}`;
  } else if (service === 'cuttly') {
    apiUrl = `https://cutt.ly/api/api.php?key=wchUGUKhMj7T2G8qxwREHhwUaPvJpgc16ur1YxDHBZHdLQBQza7eZLMxrQUz&short=${encodeURIComponent(url)}`;
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let shortUrl = '';

      if (service === 'tinyurl') {
        shortUrl = data.data.tiny_url;
      } else if (service === 'cuttly') {
        shortUrl = data.url.shortLink;
      }

      copyToClipboard(shortUrl);
    })
    .catch(error => console.error('Error shortening URL:', error));
}

// Function to copy the shortened URL to the clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  }, (err) => {
    console.error('Could not copy text: ', err);
  });
}
