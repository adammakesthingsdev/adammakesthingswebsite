import Page from '@/components/pageLayout';
import styles from '@/style/error.module.css';

export default function Page404(){
    return(
        <Page springy={false}>
            <div className={styles.notFoundBox}>
                <h1 className={styles.h1}>404</h1>
                <p className={styles.p}>Page not found :(</p>
            </div>
        </Page>
    )
}