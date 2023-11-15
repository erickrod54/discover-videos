import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";

/**Discover-videos-app - version 4.01  - pages > _app.js - 
 * Features:
 * 
 *      --> Solving 'flicker' bug when user is trying 
 *          to access without getting auth
 * 
 * Note: the test is made when i try to manually set
 * the url to the / directory
*/

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(true) 

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

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return isLoading ? <div>Loading...</div> : <Component {...pageProps} />;
}

export default MyApp;