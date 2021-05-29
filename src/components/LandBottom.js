import * as THREE from "three"
import React, { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import img1 from "./img/img5.png"
import img2 from "./img/img3.png"
import disp from "./img/displacement/10.png"
import "./ImageFadeMaterial"
function FadingImage() {
    const ref = useRef()
    const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [img1, img2, disp])
    const [hovered, setHover] = useState(false)
    useFrame(() => (ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, !!hovered, 0.1)))
    return (
      <mesh onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
        <planeGeometry />
        <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} />
      </mesh>
    )
  }
function Land() {
    return (
        <Canvas camera={{ position: [0, 0, 2], fov: 35 }} style={{width:"100vw",height:"100vh"}} >
          <Suspense fallback={null}>
            <FadingImage />
          </Suspense>
        </Canvas>
      )
}

export default Land

