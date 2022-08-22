"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor() {
        this.typeName = typeof this;
    }
    Init() {
        this.transform = this.gameobject.transform;
    }
    Awake() {
    }
    Start() {
    }
    Update() {
    }
    RemoveComponent() {
    }
    OnDestroy() {
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map