"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const three_1 = require("three");
class World {
    constructor(s, c, pw) {
        this.gameObjects = [];
        this.MainCam = c;
        this.scene = s;
        this.physicsWorld = pw;
        this.clock = new three_1.Clock();
        test: three_1.Object3D;
    }
    Update() {
        this.deltaTime = this.clock.getDelta();
        this.gameObjects.forEach(x => x.Update());
    }
}
exports.World = World;
//# sourceMappingURL=World.js.map