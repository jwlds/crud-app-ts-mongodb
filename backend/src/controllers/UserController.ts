import {NextFunction, Request, Response} from 'express';
import User from "../models/User"
import {collections} from "../database/dbConnection"
import { ObjectId } from "mongodb";


class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as User; 

      const user = await collections.users?.findOne({email: data.email });

      if (user) {
        return res.status(422).json({ message: `User ${data.email} already exists.` });
      }
      await collections.users?.insertOne(data);
      return res.status(201).json({
        status: 'success',
        message: 'User created successfully.',
        payload:  JSON.parse(JSON.stringify(data)),
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 'error',
        message: 'internal server error.',
        payload: []
      });
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId
      const user = await collections.users?.findOne({ _id: new ObjectId(userId) });
      if(user) {
        return res.status(200).json({
          status: 'success',
          message: 'User found.',
          payload: JSON.parse(JSON.stringify(user)),
        })
      }
    } catch (err) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found.',
        payload: [err]
      });
    }
  }

  async showAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = (await collections.users?.find({}).toArray());
      if(users?.length == 0){
        return res.status(404).json({
          status: 'error',
          message: 'Not registered user',
          payload:  JSON.parse(JSON.stringify(users)),
        });
      }
      return res.status(200).json({
        status: 'success',
        message: 'All registered users',
        payload:  JSON.parse(JSON.stringify(users)),
      });

    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 'error',
        message: 'internal server error.',
        payload: []
      });
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const updateUser = req.body as User
    try {
      const userId = req.params.userId
      const user = await collections.users?.findOne({ _id: new ObjectId(userId) });
      if (user) {

      const query = await collections.users?.findOne({email: updateUser.email });

      if (query) {
        return res.status(422).json({ message: `Email ${updateUser.email} already exists.` });
      }
      await collections.users?.updateOne(user, { $set: updateUser });
        return res.status(201).json({
          status: 'sucess',
          message: 'User changed successfully',
          payload:  JSON.parse(JSON.stringify(updateUser)),
        });
    } else {
      return res.status(304).json({
        status: 'error',
        message: `Game with id: ${userId} not updated`,
        payload: []
      });
    }
    } catch (err) {
      console.error(err);
      return res.status(404).json({
        status: 'error',
        message: 'User not found.',
        payload: []
      });
    }
  }
  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId
      const user = await collections.users?.deleteOne({ _id: new ObjectId(userId) });
      if (user && user.deletedCount) {
        return res.status(200).json({
          status: 'sucess',
          message: 'Successfully deleted user',
          payload:  JSON.parse(JSON.stringify(user)),
        });


        } else if (!user) {
          return res.status(400).json({
            status: 'error',
            message: 'Failed to remove user',
            payload: []
          });
        } else if(!user.deletedCount) {
          return res.status(404).json({
            status: 'error',
            message: 'User not found',
            payload: []
          });
        }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        status: 'error',
        message: 'internal server error.',
        payload: []
      });
    }
  }






}

export default new UserController();