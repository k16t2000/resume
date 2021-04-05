const express = require('express');
const route=express.Router()

const services = require('../services/render');
const controller=require('../controller/controller');
//index
route.get('/',services.homeRoutes);
// add user
route.get('/add-user',services.addUserRoutes);
// update user
route.get('/update-user',services.updateUserRoutes);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);


module.exports=route