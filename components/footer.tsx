import styles from '../style/page.module.css';


export default function Footer() {

    return (
        <div className={styles.footer}>
            <ul className={styles.footerList}>
                <FooterLink href="/posts/" text="blog" />
                <FooterLink href="/contact" text="contact" />
                <FooterLink href="/about" text="about" />
            </ul>
        </div>
    );
}

function FooterLink({ href, text }: { href: string, text: string; }) {
    return (
        <li className={styles.footerLinks}>
            <a href={href} className={styles.a}>
                {text}
            </a>
        </li>
    );
}