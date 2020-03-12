"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MovementController {
    /* Checks whether the movement is valid or not */
    validateMove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { source, dest } = req.query;
            source = parseInt(source);
            dest = parseInt(dest);
            /* Holds all possible cell indexes */
            const validPositions = [source - 17, source + 17, source - 15, source + 15,
                source - 10, source + 10, source - 6, source + 6];
            try {
                if (validPositions.includes(dest)) {
                    res.status(200).send({ result: true });
                }
                else {
                    res.status(200).send({ result: false });
                }
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.default = MovementController;
//# sourceMappingURL=movementController.js.map