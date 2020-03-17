const express = require('express');
const router = express.Router();

const customer = require('../controllers/customer.controller')

router.get('/',customer.getCustomers);
router.post('/', customer.createCustomers);
router.get('/:id', customer.getCustomer);
router.put('/:id', customer.editCustomer);
router.delete('/:id', customer.deleteCustomer);

module.exports = router;