import { useRouter } from 'next/router'
import {getStaticProps } from '../../comps/getProject'

const Writting = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id)
  // const postData= getStaticProps(id);
  return (<>
  <p>Writting: {id}</p>
   
  </>
  )
}

export default Writting
