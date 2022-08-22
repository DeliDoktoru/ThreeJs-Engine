"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshRenderer = void 0;
const Component_1 = require("../Core/Component");
class MeshRenderer extends Component_1.Component {
    constructor(_mesh) {
        super();
        this.mesh = _mesh;
    }
    Init() {
        super.Init();
        this.gameobject.scene.add(this.mesh);
        this.gameobject.threeObject.add(this.mesh);
        console.log(this.mesh.scale);
        console.log(this.mesh.position);
        console.log(this.mesh.rotation);
        console.log(this.gameobject.threeObject.scale);
        console.log(this.gameobject.threeObject.position);
        console.log(this.gameobject.threeObject.rotation);
        // this.gameobject.threeObject.position.set(0,0,0);
    }
    Awake() {
        super.Awake();
    }
    Update() {
        super.Update();
    }
}
exports.MeshRenderer = MeshRenderer;
//# sourceMappingURL=MeshRenderer.js.map