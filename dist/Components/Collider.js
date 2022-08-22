"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
const Component_1 = require("../Core/Component");
const RigidBody_1 = require("./RigidBody");
class Collider extends Component_1.Component {
    constructor(_shape) {
        super();
        this.shape = _shape;
    }
    Init() {
        super.Init();
        let rb = this.gameobject.GetComponent(RigidBody_1.RigidBody);
        if (rb != null) {
            rb.AssignCollider(this);
        }
    }
}
exports.Collider = Collider;
//# sourceMappingURL=Collider.js.map