const Customer = require('../models/customer');
const customerCtrl = {};


customerCtrl.getCustomers = async (req,res) => {
    const customers = await Customer.find();
    res.json(customers);
};


customerCtrl.createCustomers = async (req,res) => {
    const customer = new Customer({
        Address: req.body.Address,
        City: req.body.City,
        Country: req.body.Country,
        District: req.body.District,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Status: req.body.Status
    });
    
    await customer.save();
    res.json({
        'status':'Customer saved'
    });
};

customerCtrl.getCustomer = async (req,res) => {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
};

customerCtrl.editCustomer = async (req,res)=>{
    const customer = {
        Address: req.body.Address,
        City: req.body.City,
        Country: req.body.Country,
        District: req.body.District,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Status: req.body.Status
    };
    await Customer.findByIdAndUpdate(req.params.id,{$set:customer}, {new:true});
    res.json({status: 'cust updated'});
};

customerCtrl.deleteCustomer = async(req,res)=>{
    await Customer.findByIdAndUpdate(req.params.id,{$set:{Status:"Inactive"}},{new:true});
    res.json({status: 'Customer deleted logically'});
}

module.exports = customerCtrl;