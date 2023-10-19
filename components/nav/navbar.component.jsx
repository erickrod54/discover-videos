import React from "react";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";

/**Discover-videos-app - version 1.13  - Navbar js - Features:
 * 
 *      --> Implementing 'useRouter' for 'navbarItems'.
 * 
 * Note: This is part of the initial composition of the app,
 * after this step every component will developed indiviually
*/

const Navbar = (props) => {

    const { username } = props;

    const router = useRouter();

    const handleOnClickHome  = (e) => {
        e.preventDefault()
        router.push('/')
    }

    const handleOnClickMylist = (e) => {
        e.preventDefault()
        router.push('/browse/my-list')
    }

    return(
        <div className={styles.container}> 
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                    N Series
                    </div>
                </a>
            <ul className={styles.navItems}>
                <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                <li className={styles.navItem2} onClick={handleOnClickMylist}>My List</li>
            </ul>
            <nav className={styles.navContainer}>
                <div>
                    <button className={styles.usernameBtn}>
                        <p className={styles.username}>{username}</p>
                    {/**expand more icon */}
                    </button>
                    <div className={styles.navDropdown}>
                        <a className={styles.linkName}> 
                            Sign Out
                        </a>
                        <div className={styles.lineWrapper}></div>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    )
}

export default Navbar;