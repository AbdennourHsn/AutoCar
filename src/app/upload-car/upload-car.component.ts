import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color } from '../_modeles/Color';

@Component({
  selector: 'app-upload-car',
  templateUrl: './upload-car.component.html',
  styleUrls: ['./upload-car.component.css']
})
export class UploadCarComponent {
  ownerId:number | undefined;
  showPopup = false;
  Name: string="";
  descreption: string="";
  price:number=0;
  categorie:string="";
  maxSpeed:number=0;
  colors:Color[] =[];
  file: File | null = null; 

  // private fbxModel: THREE.Object3D| null = null;;
  // private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene| undefined;
  private camera: THREE.PerspectiveCamera| undefined;
  
  constructor(private http: HttpClient) {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return; 
    }
    this.ownerId = JSON.parse(userString).id;
  }
  @ViewChild('modelContainer', { static: false }) modelContainer!: ElementRef;
  onFileChange(event: any) {
    this.file = event.target.files[0];

    const file = event.target.files[0];
    this.loadModel(file);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('modelName', this.Name);
    formData.append('descriptiom', this.descreption);
    formData.append('price', ""+this.price);
    formData.append('categorie', this.categorie);
    formData.append('maxSpeed', ""+this.maxSpeed);
    formData.append('colors', JSON.stringify(this.colors));
    if (this.file) {
      formData.append('file', this.file);
    }
    if(this.ownerId){
      formData.append('ownerId', ""+this.ownerId);
      this.http.post('http://localhost:5281/api/cars/add', formData).subscribe(
        () => {
          console.log('Upload successful!');
        },
        (error) => {
          console.error('Upload failed:', error);
        }
      );
  }
}

  ngAfterViewInit() {
      this.CreateScene();
      
  }


  CreateScene() {


    const container = document.getElementById('3d-container');
    if(container){
    // Set up the Three.js scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    // camera.rotation.y = 45/180*Math.PI;
    this.camera.position.x = 0;
    this.camera.position.y = 1;
    this.camera.position.z = +5;
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Color: white, Intensity: 1
    directionalLight.position.set(1, 1, 1); // Set light position
    this.scene.add(directionalLight);
    const ambientLight = new THREE.AmbientLight(0x404040); // Color: a soft gray
    this.scene.add(ambientLight);

    const hlight = new THREE.AmbientLight (0x404040,100);
    this.scene.add(hlight);

    const light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    this.scene.add(light);

    const light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    this.scene.add(light2);

    const light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    this.scene.add(light3);

    const light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    this.scene.add(light4);

    //   GLTF


    const scene2=this.scene;
    const camera2=this.camera;
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene2, camera2);
    }
    animate();
  }
  }

  
  getFileExtension(filename: string): string {
    return filename.split('.').pop() || '';
  }

  loadModel(file:File){
      this.clearModels()
      const path = URL.createObjectURL(file);
      const loader = new GLTFLoader();
      loader.load(
        path,
        (gltf) => {
          console.log(gltf.scene);
          const object = gltf.scene;
          object.position.set(0, 0, 0); // Adjust the position as needed
          object.scale.set(1, 1, 1); // Adjust the scale as needed
          this.scene?.add(object);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );
  }

  clearModels() {
    const objectsToRemove:THREE.Object3D[] = [];
    this.scene?.traverse(child => {
      if (child instanceof THREE.Mesh || child instanceof THREE.Group) {
        objectsToRemove.push(child);
      }
    });
  
    for (let i = 0; i < objectsToRemove.length; i++) {
      const object = objectsToRemove[i];
      this.scene?.remove(object);
    }
  }


  AddColor(color:Color){
    this.colors?.push(color);
    console.log(this.colors)
  }
}
