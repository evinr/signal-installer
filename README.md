# Signal Installer

## Overview

Signal Installer was a mobile application built to streamline the process of downloading, verifying, and installing the Signal messaging app on Android devices. This app served as a bridge to enable installing applications directly from another app, with a focus on security verification.

## Features

- **Direct APK Download**: Downloads the latest Signal APK directly from signal.org
- **Hash Verification**: Displays and allows copying of the APK hash for verification
- **Educational Content**: Provides detailed information about Signal's security model and potential concerns
- **Streamlined Installation**: Simplifies the process of installing apps outside the Google Play Store

## Technical Implementation

The app is built using React Native and Expo, leveraging several key components:

- WebView to load and interact with the Signal download page
- File system operations to handle APK downloads
- Intent launching for installation
- React Native components for UI

## Project Status

⚠️ **DEPRECATED**: This project is now obsolete as app delivery methods have been overhauled. It's being open-sourced for educational and historical purposes only.

## Why This Existed

This project was created to address challenges with app distribution outside of official app stores, particularly for privacy-focused applications like Signal. Over time, its scope expanded to include other requested applications, but the core focus remained on providing a secure and straightforward installation experience.

## Security Information

The app includes an informational component (`SignalInfo.tsx`) that critically examines Signal's security and privacy claims. This component presents arguments regarding:

1. Phone number requirement for registration
2. Closed-source components in an otherwise open-source application
3. Funding sources and their implications
4. Distinction between security and anonymity
5. Centralized control and server architecture

## Getting Started (For Historical Reference)

```bash
# Install dependencies
npm install

# Run the development server
npx expo start
```

## Note for Contributors

This repository is mainly for reference and educational purposes. The codebase is no longer actively maintained, but contributions that improve documentation or clarify the historical implementation are welcome.

## License

[MIT License](LICENSE)
