import { useRouter } from 'next/router'
import {getStaticProps } from '../../comps/getProject'

const Project = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id)
  // const postData= getStaticProps(id);
  return (<>
  <p>Project: {id}</p>
   
  </>
  )
}

export default Project


      
