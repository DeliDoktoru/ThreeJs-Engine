import { Component } from "../Core/Component";
import * as CANNON from 'cannon-es';
import { Collider } from "./Collider";
export declare class RigidBody extends Component {
    body: CANNON.Body;
    constructor(_mass: number);
    Init(): void;
    AssignCollider(col: Collider): void;
    Update(): void;
}
