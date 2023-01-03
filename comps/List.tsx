import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getJson } from './getJson'
import { getDateName } from './getDateName';
export default function List() {
  const obj: { [key: string]: any } = {};
  const [state, setState]=useState(obj)
  useEffect(() => {
    const fetchData = async () => {
      const result = await getJson();
      setState(JSON.parse(await result));
    }
    fetchData();
  },[]);

  
  const Listed = (writting:any) => (
    <li>
            <Link href={"/writtings/"+writting.writting.numb}>
            <h3>{writting.writting.title}</h3>
            <p>{writting.writting.description}</p>
            <time dateTime={writting.writting.hour}>{
              getDateName(writting.writting.hour)}</time>
            </Link>
          </li>
  
  );

  return (
    <ul className='list'>
          

{ state.writtings?Object.keys(state?.writtings).map((writting,i) =>(
                <Listed key={i} writting={state?.writtings[writting]}/>)):""}

          <li>
          <Link  href="/writtings">
            <h3>See more</h3>
            <span>→</span>
            </Link>
            </li>
        </ul>
  )
}
