import React from 'react'
import Footer from './Footer'
import Head from 'next/head'
import Header from './Header'

export default function Layout({children}:{children:any}) {
  return (
    <>
    <Head>
        <title>Simon&apos;s portfolio</title> 
        <meta name="description" content="Simon CHEREL's portfolio" />
        <link rel="icon" href="/peacock_wh.ico" />
      </Head>
    <Header/>
    <div className='container'>
      
      <main className='main'>
      
    {children}
    </main>
    
    </div>
    <Footer/>
    </>
  )
}
