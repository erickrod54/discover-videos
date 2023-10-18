import React from "react";

/**Discover-videos-app - version 1.09  - Navbar js - Features:
 * 
 *      --> Passing props and start to develop Navbar.
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
        </div>
    )
}

export default Navbar;