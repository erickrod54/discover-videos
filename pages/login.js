import Head from "next/head";
import Link from "next/link";
import styles from '../styles/login.module.css'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";

/**Discover-videos-app - version 3.16 - login js - Features:
 * 
 *      --> Setting a state for the 'Sign in'
 *          button.
 * 
 *      --> Setting the 'Sign in'  state in the 
 *          authentication flow
 * 
 * Note: the try catch code block comes from the magic
 * documentation:
 * 
 * by the Promise event section:
 * 
 *   https://magic.link/docs/api/client-side-sdks/web
*/

const Login = () => {

    const [email, setEmail ] = useState('');
    const [userMsg, setUserMsg] = useState('');
    const [ isLoading, setIsLoading ] = useState(false) 

    const router = useRouter();

    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        console.log('Loign with email');
        setIsLoading(!isLoading)
        
        if (email) {
            
            /**this flow should happen when submit */
            if (email === 'erickrod54@gmail.com') {

            // log in a user by their email
            try {
                const didToken = await magic.auth.
                loginWithMagicLink({
                     email
                    });

                    /**did token will be the user authentication */
                    if (didToken) {
                        setIsLoading(isLoading)
                        router.push('/')
                    }
                console.log({didToken})
            } catch(error) {
                // Handle errors if required!
                console.error('Something went wrong logging', error)
                setIsLoading(isLoading)
            }
                
            }else{
                //show a message
                setUserMsg('Enter a valid email address')
                setIsLoading(isLoading)
            }
            
        }else{
            setUserMsg('Enter a valid email address')
            setIsLoading(isLoading)
        }
    }

    const handleOnChangeEmail = (e) => {
        //console.log({e})
        setUserMsg('')
        const email = e.target.value;
        setEmail(email);

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Netseries Sign In</title>
            </Head>

            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link href="/"> {/* Note that I removed the <a> tag */}
                        <div className={styles.logoLink}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    src={'/statics/n.series1.svg'} 
                                    alt="Netseries logo"
                                    width={128}
                                    height={34}
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </header>

                <main className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <h1 className={styles.signinHeader}>Sign In</h1>
                        <input 
                            type="text" 
                            placeholder="Email address" 
                            className={styles.emailInput}
                            onChange={handleOnChangeEmail}
                            />

                        <p className={styles.userMsg}>{userMsg}</p>
                        <button 
                            onClick={handleLoginWithEmail} 
                            className={styles.loginBtn}>
                                {isLoading ? 'Loading' : 'Sign In'}
                        </button>
                    </div>
                </main>
            
        </div>
    )
}

export default Login;