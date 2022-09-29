import express from 'express';

import {CreateUser, getSingleUser, deleteUser, updateUser, getUsers} from '../controlers/users.js'


const router = express.Router();

router.get('/', getUsers);

router.post('/', CreateUser);

router.get('/:id', getSingleUser);

router.delete('/:id', deleteUser);

router.patch('/:id',  updateUser );

export default router;