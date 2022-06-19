import express from 'express'
import async_Handler from 'express-async-handler'
import Product from '../models/ProductModel.js'
const router = express.Router()

// @desc   Fetch all products
// @route  Get /api/products/
// @access public
router.get(
  '/',
  async_Handler(async (req, res) => {
    const products = await Product.find({})
    res.send(products)
  })
)

//@desc   Fetch single product
//@route  GET /api/products/:id
//@access Public
router.get(
  '/:id',
  async_Handler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.send(product)
      res.end()
    } else {
      res.status(400)
      throw new Error('Product not Found.')
    }
  })
)

export default router
