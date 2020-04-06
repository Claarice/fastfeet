import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import middlewares from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliveryManController from './app/controllers/DeliveryManController';
import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DeliveryController';
import StartController from './app/controllers/StartController';
import EndController from './app/controllers/EndController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import DefectiveDeliveryController from './app/controllers/DefectiveDeliveryController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/delivery/:orderId/problems', DeliveryProblemController.store);

routes.use(middlewares);

routes.put('/users', UserController.update);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients', RecipientController.index);

routes.post('/deliverymen', DeliveryManController.store);
routes.put('/deliverymen/:id', DeliveryManController.update);
routes.get('/deliverymen', DeliveryManController.index);
routes.delete('/deliverymen/:id', DeliveryManController.delete);

routes.post('/order', OrderController.store);
routes.get('/order', OrderController.index);
routes.put('/order/:id', OrderController.update);
routes.delete('/order/:id', OrderController.delete);

routes.get('/deliveryman/:deliveryManId/deliveries', DeliveryController.index);

routes.put('/order/:orderId/start', StartController.update);

routes.put('/order/:orderId/end', EndController.update);

routes.delete(
  '/problem/:problemId/cancel-delivery',
  DeliveryProblemController.delete
);
routes.get('/delivery/:orderId/problems', DeliveryProblemController.index);

routes.get('/defective', DefectiveDeliveryController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
