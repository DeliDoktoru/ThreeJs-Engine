import { Component } from "./Component";
import { Transform } from "../Components/Transform";
import { Vector3 } from "three/src/math/Vector3";
import { World } from "./World";
import { Object3D } from "three";
export declare class GameObject {
    myWorld: World;
    components: Component[];
    transform: Transform;
    threeObject: Object3D;
    constructor(world: World);
    constructor(world: World, pos: Vector3);
    Update(): void;
    AddComponent(component: Component): void;
    GetComponents(clss: any): Component[];
    GetComponent(clss: any): Component;
    Destroy(): void;
}
