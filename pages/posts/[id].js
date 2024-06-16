import { getAllPostIds, getPostData } from '../../components/postdata';
import { useRouter } from 'next/router';
import styles from '../../style/blog.module.css';
import Page from '@/components/pageLayout';
import Head from 'next/head';
import Date from '@/components/date';


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

export default function Post({ postData }) {
  const router = useRouter();
  const link = router.asPath;

  function copyLink()
  {
    navigator.clipboard.writeText(link)
  }

  return (
      <Page springy={false}>
          <Head>
              <title>{postData.title}</title>
          </Head>

          <div className={styles.textContent}>
              <h1 className={styles.title} onClick={copyLink}>{postData.title}</h1>
              <h1 className={styles.author}>Adam Greenberg</h1>
              <div className={styles.date}><Date dateString={postData.date}/></div>
              <div className={styles.blogBody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
      </Page>
  )
}
