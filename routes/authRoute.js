const express=require('express')
const router=express.Router()
const { registerController, loginController, currentUserController } = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/register',registerController)//callback function
router.post('/login',loginController)//callback function
router.get('/current-user',authMiddleware,currentUserController)
module.exports =router