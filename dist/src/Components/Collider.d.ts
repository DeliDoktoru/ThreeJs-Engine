import { Component } from "../Core/Component";
import * as CANNON from 'cannon-es';
export declare class Collider extends Component {
    body: CANNON.Body;
    shape: CANNON.Shape;
    constructor(_shape: CANNON.Shape);
    Init(): void;
}
