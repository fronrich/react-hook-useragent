# React UserAgent Hook

A custom React hook for parsing and retrieving user agent information using the [useragent](https://github.com/3rd-Eden/useragent) library.

## Overview

This hook leverages the browser's `navigator.userAgent` property to provide detailed information about the current browser, its version, operating system, and device. It uses the high-performance `useragent` parser under the hood and memoizes the result to optimize performance in React applications.

## Installation

Install the package via npm:

```bash
npm install react-useragent-hook
```

Since this package is a React hook, ensure that you have React installed in your project. This package also declares React as a peer dependency:

```bash
npm install react
```

## Usage

After installation, import and use the hook in your React components:

```jsx
import React from "react";
import useUserAgent from "react-useragent-hook";

function App() {
  const { family, major, minor, patch, os, device } = useUserAgent();

  return (
    <div>
      <h1>User Agent Details</h1>
      <p>
        <strong>Browser:</strong> {family} {major}.{minor}.{patch}
      </p>
      <p>
        <strong>Operating System:</strong> {os && os.toString()}
      </p>
      <p>
        <strong>Device:</strong> {device && device.toString()}
      </p>
    </div>
  );
}

export default App;
```

## How It Works

- **Retrieving the UA String:**  
  The hook accesses `navigator.userAgent` to obtain the browser's user agent string.

- **Parsing the User Agent:**  
  It uses the `useragent.parse` method to convert the UA string into an object containing properties such as `family`, `major`, `minor`, `patch`, along with operating system (`os`) and device (`device`) information.

- **Performance Optimization:**  
  The hook uses `useMemo` to ensure that the parsing computation is performed only when the user agent string changes.

## API

The hook returns an object with the following properties:

- **family**: _string_ — The browser family (e.g., "Chrome", "Firefox").
- **major**: _number_ — The major version of the browser.
- **minor**: _number_ — The minor version of the browser.
- **patch**: _number_ — The patch version of the browser.
- **os**: _object_ — Contains operating system information with helper methods:
  - `os.toString()`: Returns a string representation of the OS.
  - `os.toVersion()`: Returns the OS version.
- **device**: _object_ — Contains device information (if available) with:
  - `device.toString()`: Returns a string representation of the device.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
