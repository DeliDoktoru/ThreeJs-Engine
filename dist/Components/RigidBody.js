"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigidBody = void 0;
const Component_1 = require("../Core/Component");
const cannon_es_1 = require("cannon-es");
const Collider_1 = require("./Collider");
class RigidBody extends Component_1.Component {
    constructor(_mass) {
        super();
        this.body = new cannon_es_1.Body({ mass: _mass });
    }
    Init() {
        super.Init();
        let rbs = this.gameobject.GetComponents(RigidBody);
        if (rbs.length >= 2) {
            alert("There can be only one Rigidbody on GameObject");
            throw new Error("Only One Rigidbody");
            return;
        }
        let colliders = this.gameobject.GetComponents(Collider_1.Collider);
        if (colliders.length != 0) {
            colliders.forEach(x => {
                this.AssignCollider(x);
            });
        }
    }
    AssignCollider(col) {
        this.body.addShape(col.shape);
    }
    Update() {
        super.Update();
        this.gameobject.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
    }
}
exports.RigidBody = RigidBody;
//# sourceMappingURL=RigidBody.js.map