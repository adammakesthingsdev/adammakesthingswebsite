import {getPostDataList } from '../../components/postdata';
import styles from '../../style/blogindex.module.css';
import Page from '@/components/pageLayout';
import Head from 'next/head';
import Date from '@/components/date';



export async function getStaticProps(){
    const metadata = await getPostDataList();
    console.log(metadata)
    return{
        props:{
            ps:metadata
        }
    }
};


export default function BlogIndex({ps}) {
    return (
        <Page springy={false}>
            <Head>
                <title>Blog Index</title>
            </Head>
            <div className={styles.textContent}>
                <h1 className={styles.title}>Blog entries</h1>

                <ul className={styles.list}>
                    {ps.map((post) => (<BlogEntry post={post}></BlogEntry>))}
                </ul>
            </div>
        </Page>
    )
}


function BlogEntry({post}){
    console.log(post);
    return (
        <li className={styles.list}>
            <hr className={styles.hr}></hr>
            <div>
            <a className={styles.blogBody} href={post.url}>
                <h2>{post.title}</h2>
                <h3 className={styles.date}>{post.date}</h3>
            </a>
            </div>
        </li>
    )
}