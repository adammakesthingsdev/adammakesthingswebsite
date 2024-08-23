import styles from '/style/page.module.css';
import textStyles from '/style/blog.module.css';
import dynamic from 'next/dynamic'

import MobileModal from './mobileModal';
import Header from './header';
import Footer from './footer';

export default function Page({children}:any){

    return(
        <div style={{"display":"contents"}}>
        <MobileModal/>
        <div className={styles.fullPage}>
            
        <Header/>
        <div className={styles.pageContainer}>
            
            <div className={styles.contentBox}>
                {children}
            </div>
            <Footer/>
            
        </div>
        </div></div>
    );
}

export function TextPage({children}:any)
{
    return(
        <Page>
            <div className={textStyles.textContent}>
                <div className={textStyles.blogBody}>
                    {children}
                </div>
            </div>
        </Page>
    );
}