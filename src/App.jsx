// import { Canvas } from '@react-three/fiber'
// import Spline from '@splinetool/react-spline'
// import React from 'react'

// const Cube = () =>{
//   return (
//     <mesh>

//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color='red' />
//     </mesh>

//   )
// }

// const App = () => {
//   return (
//     <Canvas style={{height: '100vh', width: '100vw'}}>
//       <Cube/>

//     </Canvas>
//   )
// }

// export default App

import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main>
    <h1 className='text-[8vw] absolute top-36 left-96 -z-10 font-custom'>Dhwani Jain</h1>
      <Spline
        scene="https://prod.spline.design/ZFCpTilF0isOxbi9/scene.splinecode"
      />
    </main>
  );
}



