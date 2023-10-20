import React, { useState } from "react";
import styles from "./navbar.module.css"
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

/**Discover-videos-app - version 1.17  - Navbar js - Features:
 * 
 *      --> Implementing expand more white.
 * 
 * Note: This is part of the initial composition of the app,
 * after this step every component will developed indiviually
*/

const Navbar = (props) => {

    const { username } = props;

    const router = useRouter();

    const [ showDropdown, setShowDropDown ] = useState(false);

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
                        <Image src={'/statics/expand.more.white.svg'} alt="logo" width={24} height={24}/>
                    {/**expand more icon */}
                    </button>
                    { showDropdown &&
                    <div className={styles.navDropdown}>
                        <Link href='/login' className={styles.linkName}>
                                Sign Out
                        </Link>
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