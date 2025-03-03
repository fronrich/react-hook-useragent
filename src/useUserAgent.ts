import { useMemo } from "react";
import { UAParser, IResult } from "ua-parser-js";

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
const useUserAgent = (): IResult => {
  // Retrieve the browser's user agent string
  // Memoize the parsed result to avoid recalculating on every render
  const agent: IResult = useMemo(() => {
    // Parse the user agent string using the useragent library
    return UAParser(navigator.userAgent);
  }, [navigator.userAgent]);

  // Return the parsed agent properties
  return agent;
};

export default useUserAgent;
