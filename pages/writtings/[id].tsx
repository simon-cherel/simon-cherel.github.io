import { useRouter } from 'next/router'
import { useState, useEffect} from 'react';
import {getWritting } from '../../comps/getMarkdown'

const Writting = () => {
  const [state, setState]=useState({})
  const router = useRouter();
  const id = router.query.id? router.query.id.toString():'';
  useEffect(() => {
    const fetchData = async (id:number) => {
      const result = getWritting(id);
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

export default Writting
