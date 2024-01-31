const cartExpress = require('express')

const productController = require('../Controller/productsController')

const userController = require('../Controller/usersController')

const wishlistController = require('../Controller/wishlistController')

const cartController = require('../Controller/cartController')

const jwtMiddleware = require('../Middleware/jwtMiddleware')

const router = new cartExpress.Router()

//get all products
router.get('/all-products',productController.getALLProductsController)

//register
router.post('/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

//get a product
router.get('/get-product/:id',productController.getAProductController)

//add to wishlist
router.post('/add-wishlist',jwtMiddleware,wishlistController.addToWishlist)

//get from wishlist
router.get('/getfrom-wishlist',jwtMiddleware,wishlistController.getFromWishlist)

router.delete('/delete-wishlist',jwtMiddleware,wishlistController.deleteFromWishlist)

router.post('/add/cart',jwtMiddleware,cartController.addToCartController)

module.exports = router