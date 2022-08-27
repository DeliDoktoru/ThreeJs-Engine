import { Component } from "./Component";
import { Vector3 } from "three/src/math/Vector3";
import { World } from "./World";
import { Object3D, Scene } from "three";
export declare class GameObject extends Object3D {
    myWorld: World;
    components: Component[];
    scene: Scene;
    constructor(world: World);
    constructor(world: World, pos: Vector3);
    Update(): void;
    AddComponent(component: Component): void;
    GetComponents(clss: any): Component[];
    GetComponent(clss: any): Component;
    Destroy(): void;
}
