import {Request, Response} from "express";

class MovementController {
    /* Checks whether the movement is valid or not */
    async validateMove(req: Request, res: Response) {
        let { source, dest } = req.query;
        source = parseInt(source);
        dest = parseInt(dest);
        /* Holds all possible cell indexes */
        const validPositions = [source - 17, source + 17, source - 15, source + 15,
                                source - 10, source + 10, source - 6, source + 6];
        try {
            if (validPositions.includes(dest)) {
                res.status(200).send({result: true});
            }
            else {
                res.status(200).send({result: false})
            }
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}

export default MovementController;