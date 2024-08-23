import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getPosts() {
    const posts = pb.collection('posts');
    const result = await posts.getFirstListItem("");
    return(result)
}