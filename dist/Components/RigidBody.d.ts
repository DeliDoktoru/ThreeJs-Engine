import { Component } from "../Core/Component";
import { Body } from "cannon-es";
import { Collider } from "./Collider";
export declare class RigidBody extends Component {
    body: Body;
    constructor(_mass: number);
    Init(): void;
    AssignCollider(col: Collider): void;
    Update(): void;
}
