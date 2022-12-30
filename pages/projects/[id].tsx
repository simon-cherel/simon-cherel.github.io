import { stat } from 'fs';
import { useRouter } from 'next/router'
import { useState, useEffect} from 'react';
import { resourceLimits } from 'worker_threads';
import {getPostData } from '../../comps/getProject'

const Project = () => {
  const [state, setState]=useState({})
  const router = useRouter();
  const id = router.query.id? router.query.id.toString():'1';
  useEffect(() => {
    const fetchData = async (id:number) => {
      const result = getPostData(id);
      setState(await result);
    }
    fetchData(parseInt(id));
  },[]);
  return (
    <>
  <p>Project: {id}</p>
  <div dangerouslySetInnerHTML={{ __html: state.toString() }} />
    </>
    )
  
  
}

export default Project


      
