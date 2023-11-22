
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//* 20% ! NAV
const modelZone = document.getElementById("nav"); 
const rect = modelZone.getBoundingClientRect();

//* 80% ! CONTENIDO
const contenido = document.getElementById("model");
const contenidoCamara = contenido.getBoundingClientRect();


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,  contenidoCamara.width / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth - rect.width  , window.innerHeight );
const lugar = document.querySelector(".modelArticle");
lugar.appendChild( renderer.domElement );

//------
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
//--------

const loader = new GLTFLoader();

loader.load( 'model.gltf', function ( gltf ) {

    
	scene.add( gltf.scene);
    


}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

   
    

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();