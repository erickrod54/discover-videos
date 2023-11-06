import Head from "next/head";
import Link from "next/link";
import styles from '../styles/login.module.css'
import Image from "next/image";

/**Discover-videos-app - version 3.03 - login js - Features:
 * 
 *      --> getting the logo and starting to style
 * 
 * Note: by creating the login js i ca start to write and build 
 * the Login page
*/

const Login = () => {
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
            </header>
        </div>
    )
}

export default Login;