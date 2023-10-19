import React from "react";
import styles from "./navbar.module.css"

/**Discover-videos-app - version 1.11  - Navbar js - Features:
 * 
 *      --> Writting classNames .
 * 
 * Note: This is part of the initial composition of the app,
 * after this step every component will developed indiviually
*/

const Navbar = (props) => {

    const { username } = props;

    return(
        <div className={styles.container}> 
            <div className={styles.wrapper}>
                <a className={styles.logoLink} href="/">
                    <div className={styles.logoWrapper}>
                    N Series
                    </div>
                </a>
            </div>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem2}>My List</li>
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
    )
}

export default Navbar;