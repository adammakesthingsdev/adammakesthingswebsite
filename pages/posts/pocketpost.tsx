import { ExpandedDate } from "@/components/date";
import { getPosts, PostData, getPost } from "@/components/pocketbaseData";
import { RecordModel } from "pocketbase";



export async function getServerSideProps() {
    const res = await getPost("a");
    return ({
        props: {
            post: res
        }
    });
}

export default function PocketbaseData({ post }: { post: PostData; }) {
    console.log(post);
    return <>
        <h1>{post.Title}</h1>
        <h2>{post.Author}</h2>
        <ExpandedDate pbTime={post.created}/>
    </>;
}