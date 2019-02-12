const express = require('express');
const router = express.Router();

const emploCtrl = require('../controllers/employee.controller');

router.get('/', emploCtrl.getEmployees);
router.post('/', emploCtrl.createEmployee);
router.get('/:id',emploCtrl.getEmployee);
router.put('/:id',emploCtrl.updateEmployee);
router.delete('/:id', emploCtrl.deleteEmployee);


module.exports = router; 
