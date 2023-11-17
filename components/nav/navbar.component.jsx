import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { magic } from "../../lib/magic-client";

/**Discover-videos-app - version 4.05   - Navbar js - Features:
 * 
 *      --> Changing 'getMetadata()' for 'getInfo()'
 * 
 * Note: This flow will be on an authenticated user
*/

const Navbar = (props) => {

    //const { username } = props;

    const [ showDropdown, setShowDropDown ] = useState(false);
    const [ username, setUsername ] = useState('')

    const router = useRouter();

    useEffect(() => {
        async function getUsername() {
          try {
            const { email } = await magic.user.getInfo();
            console.log({ email })
            if (email) {
                setUsername(email)
            }
          } catch (error) {
            console.log("Error retrieving email:", error);
          }
        }
        getUsername();
      }, []);

    const handleSignOut = async(e) => {
        e.preventDefault();

        try {
            await magic.user.logout();
            console.log(await magic.user.isLoggedIn()); // => `false`
            router.push('/login')
          }  catch (error) {
            console.log("Error retrieving email:", error);        }
    }

    const handleOnClickHome  = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const handleOnClickMylist = (e) => {
        e.preventDefault()
        router.push('/browse/my-list')
    }

    const handleShowDropdown = (e) => {
        e.preventDefault()
        setShowDropDown(!showDropdown)

    }

    return(
        <div className={styles.container}> 
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                        <Image src={'/statics/n.series1.svg'} alt="logo" width={130} height={130}/> 
                    </div>
                </a>
            <ul className={styles.navItems}>
                <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                <li className={styles.navItem2} onClick={handleOnClickMylist}>My List</li>
            </ul>
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                        <p className={styles.username}>{username}</p>
                        <Image src={'/statics/expand.more.white.svg'} alt="expand dropdown" width={24} height={24}/>
                    {/**expand more icon */}
                    </button>
                    { showDropdown &&
                    <div className={styles.navDropdown}>
                            <a className={styles.linkName} onClick={handleSignOut}>
                                Sign Out
                            </a>
                        <div className={styles.lineWrapper}></div>
                    </div>
                    
                    }
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar;