# Password Toggler

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-green)](https://github.com/ProgrammerNomad/Password-Toggler)
[![Manifest Version](https://img.shields.io/badge/Manifest-V3-blue)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License](https://img.shields.io/badge/License-LGPL%202.1-orange)](LICENSE)

A lightweight Chrome extension that allows you to easily toggle password visibility with multiple interaction modes. Perfect for developers, testers, and anyone who wants quick access to view their passwords.

## Features

- **4 Toggle Modes**: Mouse Over (with delay), Double Click, On Focus, Ctrl Key
- **Customizable Settings**: Adjustable delay, real-time preview
- **10 Languages**: Auto-detects browser language (en, es, hi, zh_CN, ar, pt_BR, ru, ja, de, fr)
- **RTL Support**: Automatic right-to-left layout for Arabic
- **Privacy First**: No data collection, works offline, open source
- **Universal**: Works on all websites with dynamic content support

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ProgrammerNomad/Password-Toggler.git
   ```

2. Open Chrome: `chrome://extensions/`

3. Enable "Developer mode"

4. Click "Load unpacked" and select the folder

5. Done!

## Usage

1. Right-click extension icon → Options
2. Choose your toggle mode (Mouse Over, Double Click, Focus, or Ctrl Key)
3. Test with the preview field
4. Visit any website and use your chosen method

## Language Support

Extension automatically displays in your Chrome browser's language. To change:

1. Chrome Settings → `chrome://settings/languages`
2. Select your language
3. Set as "Display Google Chrome in this language"
4. Restart Chrome

**Supported**: English, Spanish, Hindi, Chinese, Arabic (RTL), Portuguese, Russian, Japanese, German, French

## Technical Details

- **Manifest V3** - Latest Chrome extension format
- **ES6+ JavaScript** - Modern, performant code
- **MutationObserver** - Handles dynamic content
- **WeakSet** - Efficient memory management
- **Storage API** - Persistent settings
- **i18n API** - Automatic language detection
- **Standard Icons** - 16x16, 32x32, 48x48, 128x128 (PNG format)

**Key Files:**
- `passwordToggler.js` - Main content script for password toggling
- `options.js` - Settings page logic
- `options.html` - Settings page UI

## Changelog

### Version 1.0.0 (November 2025)

**Initial Release:**
- 4 password toggle modes
- 10 language support with RTL
- Manifest V3 compliance
- Real-time preview
- Zero data collection
- Modern responsive UI

## Privacy & Security

- No data collection or tracking
- Works completely offline
- Minimal permissions (storage only)
- Auto-hide on blur
- Open source code

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push: `git push origin feature/NewFeature`
5. Open Pull Request

## License

GNU Lesser General Public License v2.1 or later

Copyright (C) 2025 ProgrammerNomad

## Links

- [GitHub Repository](https://github.com/ProgrammerNomad/Password-Toggler)
- [Report Issues](https://github.com/ProgrammerNomad/Password-Toggler/issues)
- [Chrome Extensions Docs](https://developer.chrome.com/docs/extensions/mv3/)

---

Made by [ProgrammerNomad](https://github.com/ProgrammerNomad)
