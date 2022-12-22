import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import {Mesh} from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function Cube(){
  const meshRef= useRef<Mesh>(null);
  useFrame(()=>{
    if(!meshRef.current){
      return;
    }
    meshRef.current.rotation.x+=0.01;
    meshRef.current.rotation.y+=0.01;
  });
  return(
    <mesh ref={meshRef}>
          <boxGeometry/>
          <meshStandardMaterial color="blue"/>
    </mesh>
  );
}

export default function Writtings() {
  return (
    <>
      <Canvas>
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <Cube/>
          
   
      </Canvas>
    </>
  )
}
