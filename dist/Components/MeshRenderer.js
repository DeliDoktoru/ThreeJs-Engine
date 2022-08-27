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
        this.gameobject.add(this.mesh);
    }
    Awake() {
        super.Awake();
    }
    Update() {
        super.Update();
    }
    RemoveComponent() {
        super.RemoveComponent();
        this.mesh.remove();
    }
}
exports.MeshRenderer = MeshRenderer;
//# sourceMappingURL=MeshRenderer.js.map