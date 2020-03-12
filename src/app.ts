import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import cors, {CorsOptions} from 'cors';
import MovementRoutes from './routes/movementRoutes';

class App {
    public app: Application;
    public movementRoutes: MovementRoutes = new MovementRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.movementRoutes.routes(this.app);
    }

    private config() {
        /* Allow requests coming from the Client */
        const options: CorsOptions = {
          origin: 'http://localhost:3000'
        };
        this.app.use(cors(options));
        this.app.use(morgan('dev'));

        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send('Service is up!');
        });
    }
}

export default new App().app;