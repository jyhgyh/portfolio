import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';
import { gsap } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';

// Улучшенный 3D-рельефный эффект с текстурой, освещением и анимацией

import * as THREE from 'three';
import { gsap } from 'gsap';
import noise from 'simplex-noise'; // Перлин-шум для сглаживания

let scene, camera, renderer, plane, light;
let mouse = { x: 0, y: 0 };

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Загрузка текстуры
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://source.unsplash.com/random/1920x1080');

    const geometry = new THREE.PlaneGeometry(2, 2, 200, 200);
    
    const material = new THREE.ShaderMaterial({
        uniforms: {
            u_mouse: { value: { x: 0, y: 0 } },
            u_time: { value: 0 },
            u_texture: { value: texture }
        },
        vertexShader: `
            varying vec2 vUv;
            uniform vec2 u_mouse;
            uniform float u_time;
            
            void main() {
                vUv = uv;
                float dist = distance(uv, u_mouse);
                float noiseFactor = sin(u_time * 2.0) * 0.05;
                vec3 newPosition = position + normal * exp(-dist * 8.0) * 0.2 + vec3(noiseFactor, noiseFactor, 0.0);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            uniform sampler2D u_texture;
            
            void main() {
                vec4 texColor = texture2D(u_texture, vUv);
                gl_FragColor = texColor;
            }
        `,
    });

    plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Добавляем источник света
    light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(0, 0, 2);
    scene.add(light);

    window.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        gsap.to(plane.material.uniforms.u_mouse.value, { x: mouse.x, y: mouse.y, duration: 0.3 });
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    plane.material.uniforms.u_time.value += 0.02;
    light.position.x = mouse.x * 2;
    light.position.y = mouse.y * 2;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

init();
