import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const dark="html,body{--html-color-scheme:dark;--body-color:white;--body-background:rgb(20, 18, 22);--header-background-color:rgb(20, 18, 22);--menu_open-background-color:rgb(20, 18, 22);--module-span-background-color:white;--module_open-span-background-color:white;--a-color:inherit;--p-a-color:rgb(225, 165, 180);--span-a-color:rgb(225, 165, 180);--card-border:0.1px solid white;--li-border-top:0.1px solid white;--li-a-time-color:rgb(225, 165, 180);--footer:0.1px solid white;--footer-a-color:rgb(225, 165, 180);}"
  const light="html,body{--html-color-scheme:light;--body-color:black;--body-background:rgb(255, 253, 250);--header-background-color:rgb(255, 253, 250);--menu_open-background-color:rgb(255, 253, 250);--module-span-background-color:black;--module_open-span-background-color:black;--a-color:inherit;--p-a-color:rgb(165, 170, 225);--span-a-color:rgb(165, 170, 225);--card-border:0.1px solid black;--li-border-top:0.1px solid black;--li-a-time-color:rgb(165, 170, 225);--footer:0.1px solid black;--footer-a-color:rgb(165, 170, 225);}"
  const [theme,setTheme]=useState(false);
  const [cssTheme,setCssTheme]=useState(light);
  const [menu,setMenu]=useState(false)

  useEffect(()=>{
    function fetchData(){
      // const userTheme=window.matchMedia('(prefers-color-scheme: dark)').matches;
      // setTheme(userTheme)
    }
    fetchData();
    console.log(theme)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  useEffect(()=>{
    if(theme){
     setCssTheme(dark)
  
    }else{
    setCssTheme(light)
    }
  },[theme])
  
  return (
    <>
    <style>{cssTheme}</style>
    <div className='header'>
    
    <Link href="/" >
    <div className="homeButton">
    <div className='logo'>
      <Image src={"/"+"./peacock_wh.png"} alt="page logo" width={32} height={32}/>
    </div>
    <span>Portfolio</span>
    </div>
    </Link>

    <div className='space'></div>

    <div className='navbar'>
    <div className={menu?'menu_open':'menu'}>
    <Link onClick={()=>{if(menu){setMenu(!menu)}}} href="/#about">About</Link>
    <Link onClick={()=>{if(menu){setMenu(!menu)}}} href="/projects">Projects</Link>
    <Link onClick={()=>{if(menu){setMenu(!menu)}}} href="/writtings">Writtings</Link>
    </div>
    <button className='theme' id={theme?"sun":"moon"} onClick={()=>{setTheme(!theme)}}>
      <Image src={theme?"/"+"./sun.png":"/"+"./moon.png"} alt="page logo" width={32} height={32}/>
    </button>
    <button className={menu?'module_open':'module'} onClick={()=>{setMenu(!menu)}}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    </div>
    
    
    </div>
    </>
  )
}
