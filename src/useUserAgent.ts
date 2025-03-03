import { useMemo } from "react";
import { UAParser, IResult } from "ua-parser-js";

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

/**
 * Custom React hook to parse and retrieve user agent information.
 *
 * @example
 * import React from "react";
 * import useUserAgent from "react-hook-useragent";
 *
 * function App() {
 *   const { browser, os } = useUserAgent();
 *
 *   return (
 *     <div>
 *       <p>
 *         <strong>Browser:</strong> {browser}
 *       </p>
 *       <p>
 *         <strong>Operating System:</strong> {os}
 *       </p>
 *     </div>
 *   );
 * }
 *
 * export default App;
 *
 * @returns {IResult} An object representing the parsed user agent
 */
const useUserAgent = (): UserAgentInfo => {
  // Retrieve the browser's user agent string
  // Memoize the parsed result to avoid recalculating on every render
  const agent: IResult = useMemo(() => {
    // Parse the user agent string using the useragent library
    return UAParser(navigator.userAgent);
  }, [navigator.userAgent]);

  // Return the parsed agent properties
  return agent as unknown as UserAgentInfo;
};

export default useUserAgent;
