import React from "react";

/**Discover-videos-app - version 1.10  - Navbar js - Features:
 * 
 *      --> Writting the complete jsx structure.
 * 
 * Note: This is part of the initial composition of the app,
 * after this step every component will developed indiviually
*/

const Navbar = (props) => {

    const { username } = props;

    return(
        <div>
            Navbar Component
            <p>{username}</p>
            <ul>
                <li>Home</li>
                <li>My List</li>
            </ul>
            <nav>
                <div>
                    <button>
                        <p>{username}</p>
                    </button>
                    <div>
                        Sign Out
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;