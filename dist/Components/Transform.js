"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
const Component_1 = require("../Core/Component");
class Transform extends Component_1.Component {
    constructor(go) {
        super();
        this.threeObject = go.threeObject;
        this.LocalPosition = go.threeObject.position;
    }
    get LocalPosition() {
        return this.threeObject.position;
    }
    set LocalPosition(value) {
        this.threeObject.position.set(value.x, value.y, value.z);
    }
    get WorldPosition() {
        return this.threeObject.getWorldPosition(this.LocalPosition);
    }
    SetParent(prnt) {
        this.threeObject.parent = prnt.threeObject;
    }
}
exports.Transform = Transform;
//# sourceMappingURL=Transform.js.map