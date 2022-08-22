import { Component } from "../Core/Component";
import { Mesh } from 'three';
export declare class MeshRenderer extends Component {
    mesh: Mesh;
    constructor(_mesh: Mesh);
    Init(): void;
    Awake(): void;
    Update(): void;
}
