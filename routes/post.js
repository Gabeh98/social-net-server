import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('woking response');
});

export default router;