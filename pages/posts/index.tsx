import { getPostDataList } from '../../components/postdata';
import styles from '../../style/blogindex.module.css';
import Page from '@/components/pageLayout';
import Head from 'next/head';
import Date from '@/components/date';


interface Post {
    id: string;
    title: string;
    date: string;
    url: string;
}

interface PostList {
    props: {
        posts: Post[];
    };
}

export async function getStaticProps():Promise<PostList> {
    const metadata = await getPostDataList();
    console.log(metadata);
    return {
        props: {
            posts: metadata
        }
    };
};

export default function BlogIndex({ posts }:PostList["props"]) {
    return (
        <Page springy={false}>
            <Head>
                <title>Blog Index</title>
            </Head>
            <div className={styles.textContent}>
                <h1 className={styles.title}>Blog entries</h1>

                <ul className={styles.list}>
                    {posts.map((post) => (<BlogEntry post={post}></BlogEntry>))}
                </ul>
            </div>
        </Page>
    );
}


function BlogEntry({ post }:{post:Post}) {
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
    );
}