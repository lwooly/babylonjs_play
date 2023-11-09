// import * as BABYLON from 'babylonjs';
import { Engine, Scene } from 'babylonjs';

const canvas = document.getElementById('renderCanvas');
console.log(canvas)

const engine = new Engine(canvas);

const createScene = () => {
  const scene = new Scene(engine);
  return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});
