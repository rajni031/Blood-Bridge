const express= require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryControlller,getInventoryController, getDonarsController } = require('../controllers/inventoryController');

const router=express.Router();

//Add inventory || Post
router.post('/create-inventory',authMiddleware,createInventoryControlller)
// get inventory || get
//get alll blood records
router.get('/get-inventory',authMiddleware, getInventoryController)
//get alll donar records
router.get('/get-donars',authMiddleware, getDonarsController)

module.exports=router