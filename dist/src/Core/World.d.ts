import { GameObject } from "./GameObject";
import { Camera, Clock, Scene } from "three";
import * as CANNON from 'cannon-es';
export declare class World {
    scene: Scene;
    MainCam: Camera;
    gameObjects: GameObject[];
    physicsWorld: CANNON.World;
    clock: Clock;
    deltaTime: number;
    constructor(s: Scene, c: Camera, pw: CANNON.World);
    Update(): void;
}
