import { useRouter } from 'next/router'

const Writting = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Writting: {id}</p>
}

export default Writting
