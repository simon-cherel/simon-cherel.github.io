import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getJson } from './getJson'



export default function ProjectGrid() {
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
    <Link href={"/projects/"+project.project.numb} className='pcard'>
    <Image src={project.project.img} alt={project.project.title} width={32} height={32}/>
    <div>

    <h2>{project.project.title}</h2>
    <p>{project.project.description}</p>
    </div>
    </Link>
  
  );

  const EmptyCard = () => (
    <Link href={"/projects"} className='pcard'>
    <div>
    <Image src={"/"+"./peacock_wh.png"} alt="peacock" width={32} height={32}/>
    <h2>No projects</h2>
    <p>Coming soon</p>
    </div>
    </Link>
  
  );

  return (
    <div className={state.projects!==undefined?Object.keys(state.projects).length<4?'pgrid'+Object.keys(state.projects).length.toString():'pgrid':'pgrid'}>

{ state.projects!==undefined?Object.keys(state.projects).length!==0?Object.keys(state?.projects).map((project,i) =>(
                <Card key={i} project={state?.projects[project]}/>)):<EmptyCard/>:<EmptyCard/>}


        </div>
  )
}
