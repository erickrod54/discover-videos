import { useEffect } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";

/**Discover-videos-app - version 4.00  - pages > _app.js - 
 * Features:
 * 
 *      --> Implementing 'useEffect' to display login
 *          page as default 
 * 
 * Note: this implementation also allows to secure access 
 * omnly to an authenticated user
*/

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // route to /
        router.push("/");
      } else {
        // route to /login
        router.push("/login");
      }
    };
    handleLoggedIn();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;