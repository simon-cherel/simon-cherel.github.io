import Head from 'next/head'
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

        <div className='grid'>
          <a href="/project:1" className='card'>
            <Image src="/peacock_wh.png" alt="page logo" width={32} height={32}/>
            <div>
            <h2>Tezos{"'"} Tumbler</h2>
            <p>Building a decentralized app enhancing privacy on the Tezos network thanks to zk-SNARK</p>
            </div>
          </a>
          <a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a>
          <a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a>
          <a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a>
          <a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a>
          <a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a><a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a><a href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </a>
        </div>

        <h1>
          <Link href="/writtings">Writtings</Link>
        </h1>
       </>
  )
}
