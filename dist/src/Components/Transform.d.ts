import { Vector3 } from "three/src/math/Vector3";
import { Component } from "../Core/Component";
import { Object3D } from "three";
import { GameObject } from "../Core/GameObject";
export declare class Transform extends Component {
    threeObject: Object3D;
    get LocalPosition(): Vector3;
    set LocalPosition(value: Vector3);
    get WorldPosition(): Vector3;
    constructor(go: GameObject);
    SetParent(prnt: Transform): void;
}
