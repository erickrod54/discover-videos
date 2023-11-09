import Head from "next/head";
import Link from "next/link";
import styles from '../styles/login.module.css'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

/**Discover-videos-app - version 3.11 - login js - Features:
 * 
 *      --> Validating 'email' flow
 * 
 *      --> Routing from 'login' to 'dashboard'
 * 
 * Note: by creating the login js i ca start to write and build 
 * the Login page
*/

const Login = () => {

    const [email, setEmail ] = useState('');
    const [userMsg, setUserMsg] = useState('');

    const router = useRouter();

    const handleLoginWithEmail = (e) => {
        e.preventDefault()
        console.log('Loign with email');
        
        if (email) {
            
            /**this flow should happen when submit */
            if (email === 'erickrod54@gmail.com') {
                router.push('/')
            }else{
                //show a message
                setUserMsg('Enter a valid email address')
            }
            
        }else{
            setUserMsg('Enter a valid email address')
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
                                Sign In
                        </button>
                    </div>
                </main>
            
        </div>
    )
}

export default Login;