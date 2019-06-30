import express from 'express';

const router = express.Router();

router
    .get('', (_, res, next) => {
        res.status(200).json({
            message: "end-point-route fetched successfully!",
        }); 
        
        next();
});

export default router;