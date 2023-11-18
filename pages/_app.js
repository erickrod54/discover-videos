import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";
import { Loading } from "../components/index";

/**Discover-videos-app - version 4.06  - pages > _app.js - 
 * Features:
 * 
 *      --> Uncommenting redirection and Loading 
 * 
 * Note: this is made in order to work in the single video
 * page
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

  return isLoading ? <Loading /> : <Component {...pageProps} />;
  
}

export default MyApp;