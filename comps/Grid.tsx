import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getJson } from './getJson'



export default function Grid() {
  const obj: { [key: string]: any } = {};
  const [state, setState]=useState(obj)
  useEffect(() => {
    const fetchData = async () => {
      const result = await getJson();
      setState(JSON.parse(await result));
    }
    fetchData();
  },[]);

  const Card = (project:any) => (
    <Link href={"/projects/"+project.project.numb} className='card'>
    <Image src={"/"+project.project.img} alt={project.project.title} width={32} height={32}/>
    <div>

    <h2>{project.project.title}</h2>
    <p>{project.project.description}</p>
    </div>
    </Link>
  
  );

  return (
    <div className='grid'>

{ state.projects?Object.keys(state?.projects).map((project,i) =>(
                <Card key={i} project={state?.projects[project]}/>)):""}

         
          <Link href="/projects" className='card last'>
            <p>See more</p>
            <span>→</span>
          </Link>

        </div>
  )
}
