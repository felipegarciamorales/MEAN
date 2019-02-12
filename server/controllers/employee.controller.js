const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees =  async (req, res) => {
    const Empleados  = await Employee.find();
    res.json(Empleados);
}   

employeeCtrl.getEmployee =  async (req, res) => {
   const empleado = await Employee.findById(req.params.id);   
    res.json(empleado);
}

employeeCtrl.createEmployee = async (req, res) => {
   const empleado =  new Employee (req.body);
   await empleado.save();
   res.json({
       "status" : "OK"
   });
}

employeeCtrl.updateEmployee = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({
        "status" : "OK"
    });
}

employeeCtrl.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.json({
        "status" : "OK"
    });
}

module.exports = employeeCtrl;
