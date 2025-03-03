# React Hook UserAgent

[![npm version](https://img.shields.io/npm/v/react-hook-useragent.svg)](https://www.npmjs.com/package/react-hook-useragent)
[![License: MIT](https://img.shields.io/npm/l/react-hook-useragent.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-%5E16.8.0%20%7C%20%5E17.0.0%20%7C%20%5E18.0.0%20%7C%20%5E19.0.0-blue.svg)](https://reactjs.org/)

A custom React hook for parsing and retrieving user agent information using the [useragent](https://github.com/3rd-Eden/useragent) library.

## Overview

This hook leverages the browser's `navigator.userAgent` property to provide detailed information about the current browser, its version, operating system, and device. It memoizes the result to optimize performance in React applications.

## Installation

Install the package via npm:

```bash
npm install react-hook-useragent
```

Since this package is a React hook, ensure that you have React installed in your project. This package also declares React as a peer dependency:

```bash
npm install react
```

## Usage

After installation, import and use the hook in your React components:

```jsx
import React from "react";
import useUserAgent from "react-hook-useragent";

function App() {
  const { browser, os } = useUserAgent();

  return (
    <div>
      <p>
        <strong>Browser:</strong> {browser}
      </p>
      <p>
        <strong>Operating System:</strong> {os}
      </p>
    </div>
  );
}

export default App;
```

## How It Works

- **Retrieving the UA String:**  
  The hook accesses `navigator.userAgent` to obtain the browser's user agent information.

- **Performance Optimization:**  
  The hook uses `useMemo` to ensure that the parsing computation is performed only when the user agent string changes.

## API

The hook returns an object representing the useragent. Extrapolate information such as browser, os, device, cpu, engine. Below is the Typescript interface for the return object

### TypeScript Interface

```typescript
interface UserAgentInfo {
  /**
   * The full User-Agent string.
   */
  ua: string;

  /**
   * Information about the browser.
   */
  browser: {
    /**
     * The name of the browser, e.g., "Chrome", "Firefox".
     */
    name: string;

    /**
     * The full version string of the browser.
     */
    version: string;

    /**
     * The major version number, often used for compatibility checks.
     */
    major: string;
  };

  /**
   * Information about the CPU.
   */
  cpu: {
    /**
     * CPU architecture, e.g., "amd64", "arm64".
     */
    architecture: string;
  };

  /**
   * Information about the device.
   * This is often empty for non-mobile devices.
   */
  device: {
    /**
     * Device model, if detected. May be absent on desktop platforms.
     */
    model?: string;

    /**
     * Device type, e.g., "mobile", "tablet", "desktop". May be absent on desktop platforms.
     */
    type?: string;

    /**
     * Device vendor, e.g., "Samsung", "Apple". May be absent on desktop platforms.
     */
    vendor?: string;
  };

  /**
   * Information about the rendering engine.
   */
  engine: {
    /**
     * The name of the rendering engine, e.g., "Blink", "Gecko".
     */
    name: string;

    /**
     * The version of the rendering engine.
     */
    version: string;
  };

  /**
   * Information about the operating system.
   */
  os: {
    /**
     * The name of the operating system, e.g., "Linux", "Windows".
     */
    name: string;

    /**
     * (Optional) The version of the operating system, if available.
     */
    version?: string;
  };
}
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
