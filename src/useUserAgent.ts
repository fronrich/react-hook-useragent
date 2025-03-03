import { useMemo } from "react";

/**
 * Custom React hook to parse and retrieve user agent information.
 *
 * @example
 * import useUserAgent from './useUserAgent';
 *
 * function App() {
 *   const user = useUserAgent();
 *
 *   return (
 *     <div>
 *       <h1>User Agent Details</h1>
 *       <p>{user}</p>
 *     </div>
 *   );
 * }
 *
 * @returns {string} An string representing the parsed user agent
 */
const useUserAgent = () => {
  // Retrieve the browser's user agent string
  // Memoize the parsed result to avoid recalculating on every render
  const agent = useMemo(() => {
    // Parse the user agent string using the useragent library
    return navigator.userAgent;
  }, [navigator.userAgent]);

  // Return the parsed agent properties
  return agent;
};

export default useUserAgent;
