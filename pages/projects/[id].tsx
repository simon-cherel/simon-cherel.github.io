import { useRouter } from 'next/router'
import { useState, useEffect} from 'react';
import {getProject } from '../../comps/getMarkdown'

const Project = () => {
  const [state, setState]=useState({})
  const router = useRouter();
  const id = router.query.id? router.query.id.toString():'';
  useEffect(() => {
    const fetchData = async (id:number) => {
      const result = getProject(id);
      console.log(await result);
      setState(await result);
    }
    fetchData(parseInt(id));
  },[id]);
  return (
    <>
  <div dangerouslySetInnerHTML={{ __html: state.toString() }} />
    </>
    )
  
  
}

export default Project


      
