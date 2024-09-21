# QuickLink Shrinker - URL Shortener Extension

A lightweight Chrome extension for shrinking long URLs into shareable links with just a click!

## Features

- Shorten multiple URLs at once using TinyURL's API
- Automatically copies shortened URLs to the clipboard
- Simple and user-friendly popup interface

## Installation

This Chrome extension is **not published** on the Chrome Web Store and is currently designed to be used in **Developer Mode** locally.

### Steps to Install:

1. **Download or Clone the Repository:**

   ```
   git clone https://github.com/NasarZia/QuickLink-Shrinker.git
   ```

2. **Load the Extension in Chrome:**

   1. Open Chrome and go to `chrome://extensions/`
   2. Enable **Developer Mode** (toggle on the upper right corner)
   3. Click **Load unpacked** and select the directory where this repository is located

## How to Use

1. Click on the extension icon in your Chrome toolbar.
2. Enter one or more URLs (one per line) in the text area.
3. Click **Shorten URLs**. The shortened URLs will appear below and be automatically copied to your clipboard.

## Images:

![Screenshot 2024-09-21 215809](https://github.com/user-attachments/assets/0bfc4760-45af-4147-bd63-c5bd5ec5fa12)

## Setup API Key

This extension requires a TinyURL API key to function. To set it up:

1. Go to [TinyURL Developer](https://tinyurl.com/app/dev) and sign up for an API key.
2. Replace the placeholder in `popup.js` with your API key:
   ```javascript
   'Authorization': 'Bearer YOUR_API_KEY'
   ```
   
3. Save the changes and reload the extension in Chrome.

## Files

- **manifest.json:** Defines the extension's properties, including permissions and resources.
- **popup.html:** The HTML structure of the extension's popup interface.
- **popup.js:** JavaScript logic to handle URL shortening and clipboard interaction.

## Permissions

The extension requires the following permissions:

- `tabs`: To access active tab URLs (if needed for future enhancements).
- `clipboardWrite`: To copy the shortened URLs to the clipboard.
- `storage`: (Reserved for future use if you wish to store settings or data.)

## License

This project is licensed under the MIT License.

---
