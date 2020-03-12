"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movementController_1 = __importDefault(require("../controllers/movementController"));
class MovementRoutes {
    constructor() {
        this.movementController = new movementController_1.default();
    }
    routes(app) {
        app.route('/isValidMovement')
            .get(this.movementController.validateMove);
    }
}
exports.default = MovementRoutes;
//# sourceMappingURL=movementRoutes.js.map