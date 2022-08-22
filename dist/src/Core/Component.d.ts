import { GameObject } from "./GameObject";
import { Transform } from "../Components/Transform";
export declare class Component {
    typeName: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    gameobject: GameObject;
    transform: Transform;
    constructor();
    Init(): void;
    Awake(): void;
    Start(): void;
    Update(): void;
    RemoveComponent(): void;
    OnDestroy(): void;
}
