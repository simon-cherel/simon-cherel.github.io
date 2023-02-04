import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'
import { createContext, useState } from 'react';

export const HighlightContext = createContext({"state":false,"function":(highlight: boolean)=>{}});

export default function Layout({children}:{children:any}) {
  const [highlight, setHighlight] = useState(false);
  return (
    <>
    <Head>
    
        <title>Simon&apos;s portfolio</title> 
        <meta name="description" content="Simon CHEREL's portfolio" />
        <link rel="icon" href={"/"+"./peacock_wh.png"} />
      </Head>

    <HighlightContext.Provider value={{"state":highlight,"function":setHighlight}} >
    <Header/>
    <div className='container' style={{ display: "block" }}>
    
      <main className='main'>
      
    {children}
    </main>
    
    </div>
    <Footer/>
    </HighlightContext.Provider>
    </>
  )
}
