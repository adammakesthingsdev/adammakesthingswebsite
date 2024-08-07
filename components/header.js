import styles from '../style/page.module.css';
import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from "next/image";
import logo from '../public/Makes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

 
export default function Header(){
    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
    const [hideOnMobile, setHideOnMobile] = useState(false);
    useEffect(() => {
        setHideOnMobile(isMobile);
        console.log(isMobile);
    }, [isMobile]);

    /*
    if(isMobile){
        return(MobileHeader());
    }
    else{
        return(DesktopHeader())
    }*/
   return(DesktopHeader())
}

function DesktopHeader()
{
    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
    const [hideOnMobile, setHideOnMobile] = useState(false);
    useEffect(() => {
        setHideOnMobile(isMobile);
        console.log(isMobile);
    }, [isMobile]);

    return(
        <div className={styles.stickyBox}>
            <div className={styles.header}>
                <div className={styles.navBar}>
                    <div className={styles.logoBox}>
                        <a href="/" className={styles.logoImg}>
                            <Image src={logo} alt="image of my logo"/>
                        </a>
                    </div>
                    <ul className={styles.headerList} style={{display:hideOnMobile ? "none":"flex"}}>
                        <li className={styles.headerLinks}><a href="/contact">Contact</a></li>
                        <li className={styles.headerLinks}><a href="/posts/">Blog</a></li>
                        <li className={styles.headerLinks}><a href="/about">About</a></li>
                        <li className={styles.headerLinks}><a href="/evil">Evil</a></li>
    
                    </ul>
                    <Link href='?modal=true' className={styles.menuButton}>
                    <FontAwesomeIcon icon='fa-solid fa-bars'/>
                    </Link>
                </div>
            </div>
        </div>


    )
}

function MobileHeader(){
    return(
        <div className={styles.stickyBox}>
            <div className={styles.header}>
                <div className={styles.navBar}>
                <div className={styles.logoBox}>
                        <a href="/" className={styles.logoImg}>
                            <Image src={logo} alt="image of my logo"/>
                        </a>
                    </div> 
                    <Link href='?modal=true' className={styles.menuButton}>
                    <FontAwesomeIcon icon='fa-solid fa-bars'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
