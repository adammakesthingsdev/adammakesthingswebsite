"use client"
import {useSearchParams, usePathname} from "next/navigation";
import styles from '../style/modals.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileModal(){
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    if(modal){
    return(
        <div className={styles.modalwrap}>
            <div className={styles.modal}>
                <div className={styles.modalcontent}>
                    <Link href={pathname} className={styles.menutext}>Close</Link>
                    <ul className={styles.menulist}>
                        <MenuItem link='/contact' text='Contact' icon='fa-solid fa-address-book'/>
                        <MenuItem link='/about' text='About'icon='fa-solid fa-face-laugh'/>
                        <MenuItem link='/posts' text='Blog'icon='fa-solid fa-newspaper'/>
                        <MenuItem link='/evil' text='Evil'icon='fa-solid fa-handshake'/>
                    </ul>
                </div>
            </div>
        </div>
    )}

    else{
        return(null)
    }
}

function MenuItem({link,text,icon}){
    return(
        <li className={styles.menuitem}>
            <FontAwesomeIcon icon={icon} className={styles.faicon} fixedWidth/>
            <Link href={link} className={styles.menutext}>{text}</Link>
        </li>
    )
}