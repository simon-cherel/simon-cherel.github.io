import { remark} from 'remark';
import html from 'remark-html';
import * as path from 'path';

export async function getProject(id:number) {
    const fullPath = path.join("../thesaurus/projects", "project_"+id.toString()+".md");
    const fileContents = await fetch(fullPath);
    const blobContents=await fileContents.blob()
    const blobResponse= await blobContents.text()

    const processedContent = await remark()
      .use(html)
      .process(blobResponse);
      const content= processedContent.toString();
      return content;
  }


  export async function getWritting(id:number) {
    const fullPath = path.join("../thesaurus/writtings", "writting_"+id.toString()+".md");
    const fileContents = await fetch(fullPath);
    const blobContents=await fileContents.blob()
    const blobResponse= await blobContents.text()

    const processedContent = await remark()
      .use(html)
      .process(blobResponse);
    const content= processedContent.toString();
    return content;
  }
