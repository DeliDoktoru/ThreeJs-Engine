"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
const Vector3_1 = require("three/src/math/Vector3");
const three_1 = require("three");
class GameObject extends three_1.Object3D {
    constructor(world, pos) {
        super();
        this.components = [];
        if (pos == undefined)
            pos = new Vector3_1.Vector3(0, 0, 0);
        this.scene = world.scene;
        this.position.set(pos.x, pos.y, pos.z);
        this.myWorld = world;
        this.scene.add(this);
        world.gameObjects.push(this);
    }
    Update() {
        this.components.forEach(x => x.Update());
    }
    AddComponent(component) {
        this.components.push(component);
        component.gameobject = this;
        component.Init();
        component.Awake();
        component.Start();
    }
    GetComponents(clss) {
        if (!clss)
            return null;
        let tip = clss.name;
        let _out = [];
        this.components.forEach(x => {
            if ((x.constructor.name) === tip)
                _out.push(x);
        });
        return _out;
    }
    GetComponent(clss) {
        if (!clss)
            return null;
        let tip = clss.name;
        let _out = null;
        this.components.forEach(x => {
            if ((x.constructor.name) === tip)
                _out = x;
        });
        return _out;
    }
    Destroy() {
        this.components.forEach(x => {
            x.RemoveComponent();
        });
        this.remove();
    }
}
exports.GameObject = GameObject;
//# sourceMappingURL=GameObject.js.map