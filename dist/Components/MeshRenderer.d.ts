import { Component } from "../Core/Component";
import { Scene, Mesh } from 'three';
export declare class MeshRenderer extends Component {
    mesh: Mesh;
    scene: Scene;
    constructor(_mesh: Mesh);
    Init(): void;
    Awake(): void;
    Update(): void;
}
