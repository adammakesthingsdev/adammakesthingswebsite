"use client"
import {useSearchParams, usePathname} from "next/navigation";
import styles from '../style/modals.module.css';
import Link from "next/link";

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
                        <li className={styles.menuitem}><Link href='/contact' className={styles.menutext}>Contact</Link></li>
                        <li className={styles.menuitem}><Link href='/posts' className={styles.menutext}>Blog</Link></li>
                        <li className={styles.menuitem}><Link href='/about' className={styles.menutext}>About</Link></li>
                        <li className={styles.menuitem}><Link href='/evil' className={styles.menutext}>Evil</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )}

    else{
        return(null)
    }
}