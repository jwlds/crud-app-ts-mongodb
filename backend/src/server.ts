import express  from "express";
import http from 'http';
import {config} from "./config/index"
import userRoutes from './routes/User'
import ChalkLog from "./library/ChalkLog";
import { connectToDatabase } from "./database/dbConnection";

const router = express();


connectToDatabase().then(() => {
  ChalkLog.info('connected to mongodb');
  StartServer();
})
.catch((error) => {
  ChalkLog.error("Unable to connect:");
  ChalkLog.error(error);
})

const StartServer = () => {
  router.use((req,res,next) => {
    ChalkLog.info(`IP:[${req.socket.remoteAddress}]/nURL:[${req.url}]Method:[${req.method}]`)
    res.on('finish',() => {
      ChalkLog.info(`Status:[${res.statusCode}]IP:[${req.socket.remoteAddress}]/nURL:[${req.url}]Method:[${req.method}]`)
    });

    next();
  });

  router.use(express.urlencoded({extended: true}))
  router.use(express.json());
      router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    router.use('/user',userRoutes)

    router.get('/ping', (req, res, next) => res.status(200).json({ status: 'ok' }));

    router.use((req, res, next) => {
      const error = new Error('Not found');

      ChalkLog.error(error);

      res.status(404).json({
          message: error.message
      });
  });

  http.createServer(router).listen(config.server.port, () => ChalkLog.info(`Server is running on port ${config.server.port}`));
}