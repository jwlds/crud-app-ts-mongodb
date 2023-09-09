import express from 'express'
import UserController from '../controllers/UserController';

const router = express.Router();


router.post('/create',UserController.create);
router.get('/get',UserController.showAll);
router.get('/get/:userId',UserController.show);
router.put('/update/:userId',UserController.update);
router.delete('/delete/:userId',UserController.destroy);

export = router;