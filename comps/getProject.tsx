import { remark } from 'remark';
import html from 'remark-html';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

export async function getPostData(id:number) {
    const fullPath = path.join("../thesaurus/projects", `project_${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }

export  async function getStaticProps(id:any) {
    // Add the "await" keyword like this:
    const postData = await getPostData(id);
  
    return {
      props: {
        postData,
      },
    };
  }
  