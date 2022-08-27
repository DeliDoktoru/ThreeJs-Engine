"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.GameObject = exports.Component = exports.RigidBody = exports.MeshRenderer = exports.Collider = void 0;
var Collider_1 = require("./Components/Collider");
Object.defineProperty(exports, "Collider", { enumerable: true, get: function () { return Collider_1.Collider; } });
var MeshRenderer_1 = require("./Components/MeshRenderer");
Object.defineProperty(exports, "MeshRenderer", { enumerable: true, get: function () { return MeshRenderer_1.MeshRenderer; } });
var RigidBody_1 = require("./Components/RigidBody");
Object.defineProperty(exports, "RigidBody", { enumerable: true, get: function () { return RigidBody_1.RigidBody; } });
var Component_1 = require("./Core/Component");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return Component_1.Component; } });
var GameObject_1 = require("./Core/GameObject");
Object.defineProperty(exports, "GameObject", { enumerable: true, get: function () { return GameObject_1.GameObject; } });
var World_1 = require("./Core/World");
Object.defineProperty(exports, "World", { enumerable: true, get: function () { return World_1.World; } });
//# sourceMappingURL=index.js.map