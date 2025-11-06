# Password Toggler

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-green)](https://github.com/ProgrammerNomad/Password-Toggler)
[![Manifest Version](https://img.shields.io/badge/Manifest-V3-blue)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License](https://img.shields.io/badge/License-LGPL%202.1-orange)](LICENSE)

A lightweight Chrome extension that allows you to easily toggle password visibility with multiple interaction modes. Perfect for developers, testers, and anyone who wants quick access to view their passwords without constantly clicking the "show password" button.

## Features

- **Multiple Toggle Modes**: Choose from 4 different ways to reveal passwords:
  - **Mouse Over** - Hover over password fields to reveal (with customizable delay)
  - **Double Click** - Double-click to toggle visibility
  - **On Focus** - Automatically show when field is focused
  - **Ctrl Key** - Press Ctrl to toggle (most secure option)

- **Customizable Wait Time**: Set delay for mouse-over mode (default: 500ms)
- **Live Preview**: Test your settings in real-time on the options page
- **Multi-language Support**: English, Chinese (Simplified & Traditional)
- **Works on All Websites**: Automatically detects and enhances all password fields
- **Dynamic Content Support**: Uses MutationObserver to handle dynamically loaded password fields
- **Privacy Focused**: All settings stored locally, no data collection

## Installation

### From Source

1. Clone this repository:

   ```bash
   git clone https://github.com/ProgrammerNomad/Password-Toggler.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" (toggle in top-right corner)

4. Click "Load unpacked" and select the `Password-Toggler` folder

5. The extension is now installed!

### From Chrome Web Store

Coming soon - Stay tuned for the official Chrome Web Store release!

## Usage

### Quick Start

1. After installation, click the extension icon in your browser toolbar
2. Go to the extension options (right-click icon → Options)
3. Choose your preferred toggle mode:
   - **Mouse Over**: Hover to reveal (adjust wait time if needed)
   - **Double Click**: Quick double-click to toggle
   - **On Focus**: Click into field to reveal
   - **Ctrl Key**: Press Ctrl to toggle (recommended for security)

4. Test your settings using the preview password field
5. Visit any website with password fields and enjoy seamless toggling!

### Settings

- **When to show password**: Select your preferred interaction mode
- **Wait time**: (Mouse Over mode only) Delay in milliseconds before revealing password
- **Preview field**: Test your settings before applying to real websites

## Technical Details

### Built With

- **Manifest Version**: V3 (latest Chrome extension format)
- **Permissions**:
  - `storage` - Save user preferences
  - Content scripts on all HTTP/HTTPS pages
- **Technologies**:
  - Vanilla JavaScript (ES6+)
  - Chrome Extensions API
  - MutationObserver API for dynamic content handling
  - WeakSet for performance optimization

### Architecture

```plaintext
Password-Toggler/
├── manifest.json           # Extension configuration (Manifest V3)
├── showPassword.js         # Core content script (password toggling logic)
├── options.html            # Options page UI
├── options.js              # Options page functionality
├── icon.png / icon32.png   # Extension icons
├── _locales/               # Internationalization
│   ├── en/
│   ├── zh_CN/
│   └── zh_TW/
└── README.md
```

### Key Components

1. **Content Script** (`showPassword.js`):
   - Runs on all web pages
   - Detects password input fields
   - Applies selected toggle behavior
   - Uses MutationObserver to handle dynamic content
   - Implements WeakSet for efficient tracking

2. **Options Page** (`options.html` + `options.js`):
   - User-friendly configuration interface
   - Real-time preview functionality
   - Persistent settings via Chrome Storage API
   - Localized UI elements

## Privacy & Security

- **No data collection** - Everything stays on your device
- **No external connections** - Works completely offline
- **No permissions abuse** - Only requires storage for settings
- **Open source** - Full transparency, inspect the code yourself
- **Auto-hide on blur** - Passwords hide when you leave the field
- **Enter key protection** - Press Enter to hide and submit

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repo
git clone https://github.com/ProgrammerNomad/Password-Toggler.git

# Navigate to directory
cd Password-Toggler

# Load in Chrome (chrome://extensions/)
# Enable Developer Mode → Load Unpacked → Select folder
```

## Changelog

### Version 1.0.0

- Initial release
- Multiple toggle modes (Mouse Over, Double Click, Focus, Ctrl Key)
- Customizable settings
- Multi-language support
- Manifest V3 compatibility

## License

This project is licensed under the GNU Lesser General Public License v2.1 or later - see the [LICENSE](LICENSE) file for details.

Copyright (C) 2014 yuSing

## Support

If you find this extension helpful, consider:

- Starring the repository
- Reporting bugs and issues
- Suggesting new features
- Sharing with others

## Links

- [GitHub Repository](https://github.com/ProgrammerNomad/Password-Toggler)
- [Report Issues](https://github.com/ProgrammerNomad/Password-Toggler/issues)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/)

## Disclaimer

This extension is designed for legitimate use cases like development, testing, and personal convenience. Always follow your organization's security policies and never use this tool to compromise others' security.

---

Made with ❤️ by [NomadProgrammer](https://github.com/ProgrammerNomad)
