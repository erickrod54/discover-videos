import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";
import { Loading } from "../components/index";

/**Discover-videos-app - version 4.17  - pages > _app.js - 
 * Features:
 * 
 *      --> Commenting temporal 'useEffect' for log in
 *          to test youtube data API
 * 
 * Note: this is made in order to work in the single video
 * page
*/

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(false) 

  useEffect(() => {
   /**
    * const handleLoggedIn = async () => {
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
    */
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

  return isLoading ? <Loading /> : <Component {...pageProps} />;
  
}

export default MyApp;