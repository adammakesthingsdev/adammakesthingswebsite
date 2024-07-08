import styles from '/style/page.module.css';
import textStyles from '/style/blog.module.css';
import Footer from "/components/footer";

import dynamic from 'next/dynamic'
import MobileModal from './mobileModal';

import Header from './header';

export default function Page({children}){

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

export function TextPage({children})
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