"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const movementRoutes_1 = __importDefault(require("./routes/movementRoutes"));
class App {
    constructor() {
        this.movementRoutes = new movementRoutes_1.default();
        this.app = express_1.default();
        this.config();
        this.movementRoutes.routes(this.app);
    }
    config() {
        /* Allow requests coming from the Client */
        const options = {
            origin: 'http://localhost:3000'
        };
        this.app.use(cors_1.default(options));
        this.app.use(morgan_1.default('dev'));
        this.app.get('/', (req, res) => {
            res.status(200).send('Service is up!');
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map