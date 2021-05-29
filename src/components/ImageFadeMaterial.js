import * as THREE from "three"
import { extend } from "@react-three/fiber"

export class ImageFadeMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        effectFactor: { value: 1.2 },
        dispFactor: { value: 0 },
        tex: { value: undefined },
        tex2: { value: undefined },
        disp: { value: undefined }
      },
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
      fragmentShader: `varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x, uv.y + dispFactor * (disp.r*effectFactor));
        vec2 distortedPosition2 = vec2(uv.x, uv.y - (1.0 - dispFactor) * (disp.r*effectFactor));
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
      }`
    })
  }

  get effectFactor() {
    return this.uniforms.effectFactor.value
  }
  set effectFactor(v) {
    return (this.uniforms.effectFactor.value = v)
  }
  get dispFactor() {
    return this.uniforms.dispFactor.value
  }
  set dispFactor(v) {
    return (this.uniforms.dispFactor.value = v)
  }
  get tex() {
    return this.uniforms.tex.value
  }
  set tex(v) {
    return (this.uniforms.tex.value = v)
  }
  get tex2() {
    return this.uniforms.tex2.value
  }
  set tex2(v) {
    return (this.uniforms.tex2.value = v)
  }
  get disp() {
    return this.uniforms.disp.value
  }
  set disp(v) {
    return (this.uniforms.disp.value = v)
  }
}

extend({ ImageFadeMaterial })
