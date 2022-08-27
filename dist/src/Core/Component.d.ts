import { GameObject } from "./GameObject";
export declare class Component {
    gameobject: GameObject;
    constructor();
    Init(): void;
    Awake(): void;
    Start(): void;
    Update(): void;
    RemoveComponent(): void;
    OnDestroy(): void;
}
