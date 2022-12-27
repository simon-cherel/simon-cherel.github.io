import Image from "next/image"
import Link from "next/link"


export default function Projects() {
  return (
    <>
        <h1 >
          Projects
        </h1>

        <div className='grid'>
          <Link href="/project:1" className='card'>
            <Image src="/peacock_wh.png" alt="page logo" width={32} height={32}/>
            <div>
            <h2>Tezos{"'"} Tumbler</h2>
            <p>Building a decentralized app enhancing privacy on the Tezos network thanks to zk-SNARK</p>
            </div>
          </Link>
          <Link href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </Link>
          <Link href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </Link>
          <Link href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </Link>
          <Link href="/project:2" className='card'>
            <div>
            <h2>Mini Dall-e</h2>
            <p>Creating and training a GAN model coupled with an NLP Clip model to generate images from texts</p>
            </div>
          </Link>
          <Link href="/projects" className='card last'>
            <p>See more</p>
            <span>→</span>
          </Link>
          </div>
    </>
  )
}
