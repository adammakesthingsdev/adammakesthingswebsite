"use client";
import { useSearchParams, usePathname } from "next/navigation";
import styles from '../style/modals.module.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook, faFaceLaugh, faHandshake, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function MobileModal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    if (modal) {
        return (
            <div className={styles.modalwrap}>
                <div className={styles.modal}>
                    <div className={styles.modalcontent}>
                        <Link href={pathname} className={styles.menutext}>Close</Link>
                        <ul className={styles.menulist}>
                            <MenuItem link='/contact' text='Contact' icon={faAddressBook} />
                            <MenuItem link='/about' text='About' icon={faFaceLaugh} />
                            <MenuItem link='/posts' text='Blog' icon={faNewspaper} />
                            <MenuItem link='/evil' text='Evil' icon={faHandshake} />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    else {
        return (null);
    }
}

function MenuItem({ link, text, icon }: { link: string, text: string, icon: IconProp; }) {
    return (
        <li className={styles.menuitem}>
            <FontAwesomeIcon icon={icon} className={styles.faicon} fixedWidth />
            <Link href={link} className={styles.menutext}>{text}</Link>
        </li>
    );
}