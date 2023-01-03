import { remark} from 'remark';
import html from 'remark-html';
import * as path from 'path';

export async function getJson() {
    const fullPath = path.join("../tree.json");
    const fileContents = await fetch(fullPath);
    const blobContents=await fileContents.blob();
    const blobResponse= await blobContents.text();
    return blobResponse;
  }


