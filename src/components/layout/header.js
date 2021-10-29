import React, { useState } from "react";
import logo from '../../images/logo.svg'
import menuIcon from '../../images/menuIcon.svg'
import * as styles from './header.module.scss';

const Header = () => {
    const [clicked, setClicked] = useState(false)
    return (

        <header className={styles.header}>
            <nav className={styles.navbar}>
                <img src={logo} loading='lazy' alt={'kelaridis'} height={60} />
                <ul className={`${styles.nav_menu} ${clicked && styles.active}`}>
                    <li >
                        <a href="#" className={styles.nav_link}>Home</a>
                    </li>
                    <li >
                        <a href="#" className={styles.nav_link}>About me</a>
                    </li>
                    <li >
                        <a href="#" className={styles.nav_link}>Freebies</a>
                    </li>
                    <li >
                        <a href="#" className={styles.nav_link}>Blog</a>
                    </li>
                    <li >
                        <a href="#" className={styles.nav_link}>Contact</a>
                    </li>
                </ul>
                <div className={`${styles.hamburger}`} onClick={() => setClicked(!clicked)}>
                    <img src={menuIcon} alt={'menu'} />
                </div>
            </nav>
        </header>

    )
}
export default Header;
