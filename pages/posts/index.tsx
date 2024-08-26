//import { getPostDataList } from '../../components/postdata';
import styles from '../../style/blogindex.module.css';
import Page from '@/components/pageLayout';
import Head from 'next/head';
import Date, { ExpandedDate } from '@/components/date';
import { getPosts, PostData } from '@/components/pocketbaseData';

interface PostList {
    props: {
        posts: PostData[];
    };
}

export async function getServerSideProps() {
    const metadata = await getPosts();
    //console.log(metadata);
    return {
        props: {
            posts: metadata
        }
    };
};

export default function BlogIndex({ posts }: PostList["props"]) {
    return (
        <Page>
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


function BlogEntry({ post }: { post: PostData; }) {
    console.log(post);
    return (
        <li className={styles.list}>
            <hr className={styles.hr}></hr>
            <div className={styles.blogBody}>
                <a href={`/posts/${post.urlTitle}`}>
                    <h2>{post.Title}</h2>
                    {post.subtitle!="" ? <h3>{post.subtitle}</h3>:null}
                    <ExpandedDate pbTime={post.created}/>
                </a>
            </div>
        </li>
    );
}