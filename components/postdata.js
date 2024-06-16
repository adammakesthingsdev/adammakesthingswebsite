import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const postsDirectory = path.join(process.cwd(), 'blog-content');

export function getSortedPostsData() {
  console.log("sorting");
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}


export function getAllPostIds(){
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
          params: {
            id: fileName.replace(/\.md$/, ''),
          },
        };
      });
}

export async function getPostData(id) {
    const matterResult = getPostMetadeta(id);
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();
  
    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

export function getPostMetadeta(id){
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult=matter(fileContents);
  //console.log(matterResult);
  return matterResult;
}

export async function getPostDataList(){
  const allPages = getAllPostIds();

  const postDatas= await Promise.all(allPages.map(async (post)=>{
    const postData= await getPostData(post.params.id);
    const path="/posts/"+postData.id;
    return{
      id:postData.id,
      title:postData.title,
      date:postData.date,
      url:path,
    }
  }))
  console.log(postDatas);

  return postDatas;
}