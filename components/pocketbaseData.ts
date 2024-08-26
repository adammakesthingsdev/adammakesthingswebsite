import PocketBase, { RecordModel } from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export interface PostData extends RecordModel {
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    id: string;

    Title: string;
    subtitle?: string;
    Author: string;
    urlTitle: string;
    content: any;
    sendEmail: boolean;
}

export async function getPosts() {
    const posts = pb.collection('posts');
    const result = await posts.getFullList() as PostData[];
    return (result);
}

export async function getAllPostPaths() {
    const posts = pb.collection('posts');
    const result = await posts.getFullList() as PostData[];
    return (result.map((post) => {
        return ({
            params: {
                id: post.urlTitle
            }
        });
    }));
}

export async function getPost(urlID:string) {
    const posts = pb.collection('posts');
    const result = await posts.getFirstListItem(`urlTitle = "${urlID}"`) as PostData;
    return (result);
}