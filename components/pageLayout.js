import styles from '/style/page.module.css';
import textStyles from '/style/blog.module.css';
import Footer from "/components/footer";

import dynamic from 'next/dynamic'

const Header = dynamic(() => import("./header"), {
  ssr: false
})



export default function Page({children,springy=true}){
    return(
        <div className={styles.fullPage}>
        <Header springy={springy}/>
        <div className={styles.pageContainer}>
            
            <div className={styles.contentBox}>
                {children}
            </div>
            <Footer/>
            
        </div>
        </div>
    );
}

export function TextPage({children, springy=true})
{
    return(
        <Page springy={springy}>
            <div className={textStyles.textContent}>
                <div className={textStyles.blogBody}>
                    {children}
                </div>
            </div>
        </Page>
    );
}