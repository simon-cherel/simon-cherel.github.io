import Image from 'next/image'
export default function Footer() {
  return (
    <footer>  
          <a href='https://www.linkedin.com/in/simon-cherel/'>Linkedin</a>
          <span className='logo'>
            <Image src="/peacock_apple.png" alt="Peacock Logo" width={32} height={32} />
          </span>
          <a href='mailto:simon.cherel@telecom-sudparis.eu?subject=Happy to meet you'>Email</a>
      </footer>
  )
}
