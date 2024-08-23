import { getPosts } from "@/components/pocketbaseData";
import { RecordModel } from "pocketbase";

interface Post extends RecordModel{

}

export async function getServerSideProps() {
    const res = await getPosts();
    return ({
        props: {
            post:res
        }
    });
}

export default function PocketbaseData({post}:{post:Post}) {
    console.log(post);
    return <p>:p</p>;
}