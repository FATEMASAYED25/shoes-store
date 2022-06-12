const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const productRoutes = require('./product');
const orderRoutes = require('./order');
const paymentRoute = require('./payment');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/payment', paymentRoute);

module.exports = router;