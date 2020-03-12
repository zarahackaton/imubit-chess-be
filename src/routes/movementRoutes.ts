import {Application} from 'express';
import MovementController from '../controllers/movementController';

class MovementRoutes {
    public movementController: MovementController;
    constructor() {
        this.movementController = new MovementController();
    }

    public routes(app: Application): void {
        app.route('/isValidMovement')
            .get(this.movementController.validateMove);
    }
}

export default MovementRoutes;