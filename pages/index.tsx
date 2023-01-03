import Grid from '@/comps/Grid'
import List from '@/comps/List'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <h1>
          Simon Cherel
        </h1>
        <p className='subtitle'>
          Seeking for new adventures
        </p>

        <h1 id='about'>
          About
        </h1>
        <p>
          I am currently finishing my last year of engineerring class at <a href="https://www.telecom-sudparis.eu/">Telecom SudParis</a>, specialised in cybersecurity.
          During the three year I passed at Telecom SudParis, I learned solid fondamental knowledge in computer science and network. 
          Before the three years spend in the engineering school, I intensively work on Mathematical and Physical fundamentals during three years in CPGE (Classe Preparatoire aux Grandes Écoles), sided by strong courses on Litterature and English.
        </p>
        
        <h1>
          <Link href="/projects">Projects</Link>
        </h1>

        <Grid/>

        <h1>
          <Link href="/writtings">Writtings</Link>
        </h1>

        <List/>
        
       </>
  )
}
