import { useMemo } from "react";
import useragent from "useragent";

/**
 * Custom React hook to parse and retrieve user agent information.
 *
 * This hook utilizes the `useragent` library to parse the browser's user agent string
 * (accessible via `navigator.userAgent`), and returns an object containing detailed
 * information about the browser, its version, operating system, and device.
 *
 * @example
 * import useUserAgent from './useUserAgent';
 *
 * function App() {
 *   const { family, major, minor, patch, os, device } = useUserAgent();
 *
 *   return (
 *     <div>
 *       <h1>User Agent Details</h1>
 *       <p>Browser: {family} {major}.{minor}.{patch}</p>
 *       <p>Operating System: {os && os.toString()}</p>
 *       <p>Device: {device && device.toString()}</p>
 *     </div>
 *   );
 * }
 *
 * @returns {Object} An object representing the parsed user agent with the following properties:
 *   - {@link string} family - The browser family (e.g., 'Chrome', 'Firefox').
 *   - {@link number} major - The major version number of the browser.
 *   - {@link number} minor - The minor version number of the browser.
 *   - {@link number} patch - The patch version number of the browser.
 *   - {@link Object} os - The operating system object with methods like {@link os.toString} and {@link os.toVersion}.
 *   - {@link Object} device - The device object (if available) with methods like {@link device.toString}.
 */
const useUserAgent = () => {
  // Retrieve the browser's user agent string
  const uaString = navigator.userAgent;

  // Memoize the parsed result to avoid recalculating on every render
  const agent = useMemo(() => {
    // Parse the user agent string using the useragent library
    return useragent.parse(uaString);
  }, [uaString]);

  // Return the parsed agent properties
  return { ...agent };
};

export default useUserAgent;
