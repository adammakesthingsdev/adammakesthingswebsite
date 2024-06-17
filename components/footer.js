import styles from '../style/page.module.css';


export default function Footer()
{

    return(
            <div className={styles.footer}>
                <ul className={styles.footerList}>
                    <FooterLink href="/posts/" text="blog"/>
                    <FooterLink href="/contact" text="contact"/>
                    <FooterLink href="/about" text="about"/>
                </ul>
            </div>
    )
}

function FooterLink(pars)
{
    return(
    <li className={styles.footerLinks}>
        <a href={pars.href} className={styles.a}>
            {pars.text}
        </a>
    </li>
    )
}