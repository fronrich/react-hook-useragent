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

- **Performance Optimization:**  
  The hook uses `useMemo` to ensure that the parsing computation is performed only when the user agent string changes.

## API

The hook returns an string representing the useragent.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
