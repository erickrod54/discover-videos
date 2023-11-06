import Head from "next/head";
import Link from "next/link";
import styles from '../styles/login.module.css'
import Image from "next/image";

/**Discover-videos-app - version 3.04 - login js - Features:
 * 
 *      --> Writting the login form
 * 
 * Note: by creating the login js i ca start to write and build 
 * the Login page
*/

const Login = () => {

    const handleLoginWithEmail = () => {
        console.log('Loign with email')
    }

    return (
        <div>
            <Head>
                <title>Netseries Sign In</title>
            </Head>

            <header>
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

                <main className={styles.main}>
                    <div className={styles.mainWrapper}>
                        <h1 className={styles.signinHeader}>Sign In</h1>
                        <input 
                            type="text" 
                            placeholder="Email address" 
                            className={styles.emailInput}/>

                        <button 
                            onClick={handleLoginWithEmail} 
                            className={styles.loginBtn}>
                                Sign In
                        </button>
                    </div>
                </main>
            </header>
        </div>
    )
}

export default Login;