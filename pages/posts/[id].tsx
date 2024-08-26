import { getPosts, PostData, getPost, getAllPostPaths } from "@/components/pocketbaseData";

import { useRouter } from 'next/router';
import styles from '../../style/blog.module.css';
import Page from '@/components/pageLayout';
import Head from 'next/head';
import Date, { ExpandedDate } from '@/components/date';

interface Context {
    params: {
        id: string;
    };
}


export async function getStaticProps({ params }: Context) {
    const post = await getPost(params.id);
    return ({
        props: {
            postData: post
        }
    });
}

export async function getStaticPaths() {
    const paths = await getAllPostPaths();
    return ({
        paths: paths,
        fallback: false,
    });
}

export default function Post({ postData }: { postData: PostData; }) {
    console.log(postData);
    const router = useRouter();
    const link = router.asPath;

    function copyLink() {
        navigator.clipboard.writeText(link);
    }

    const subtitle = postData.subtitle!="" ? <h2 className={styles.subtitle}>{postData.subtitle}</h2> : null;

    return (
        <Page>
            <Head>
                <title>{postData.Title} | Blog</title>
            </Head>

            <div className={styles.textContent}>
                <h1 className={styles.title} onClick={copyLink}>{postData.Title}</h1>
                {subtitle} 
                <h3 className={styles.author}>{postData.Author}</h3>
                <div className={styles.date}><ExpandedDate pbTime={postData.created} /></div>
                <div className={styles.blogBody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
        </Page>
    );
}
