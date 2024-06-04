import * as THREE from './three.js';

// crear una escena "tipo escena de película"

const scene = new THREE.Scene();

// crear una cámara, una perspectiva
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// crea un render
const renderer = new THREE.WebGLRenderer();

// se obtiene el tamaño de la pantalla
renderer.setSize( window.innerWidth, window.innerHeight );

// se crea una función 
renderer.setAnimationLoop( animate );

// crea el elemento HTMl para visualizar la escena 3D
document.body.appendChild( renderer.domElement );

// se crea un cuboide 
const geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5);

// mesh combina todos los triangulos y les asigna una malla
const material = new THREE.MeshBasicMaterial( { color: 0x12c9c3 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 6;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;
	renderer.render( scene, camera );

}