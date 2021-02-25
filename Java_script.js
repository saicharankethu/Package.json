const exoress = require('express');
const Joi = require('joi');
const app = (express());




//Give data to the server
const customers = [
    {title: 'Google', id: 1},
    {title: 'Amazon', id: 2},
    {title: 'Facebook', id: 3},
    {title: 'Netflix' id: 4},
    {title: 'Tesla' id:5}
]
//Read Request Handlerss
// Display the Message when the URL consist of '/'
app.get('/', (req, res) => {
    res.send('Hi NJC labs, saicharan here!');
});
// Display the List of Customers when the URL consist of api customers
app.get('/api/customers', (req,res=>) {
    res.send(customers);
})
//Display the Information of Sprcific Customer when you mention the id.
app.get('/api/customer/:id', (req, res) =>{
    const customer = customer.find(c => c.id === perseInt(req.params.id));
    //If there is no valid customer
    if (!customer) res.status(404).send('h2 style="font-family: malgum Gothic; color: darkred;">Ooops...Cant find what you are looking for!</h2');
    res.send(customer);
});
//Insert New Customer Information
app.post('/api/customers', (req, res)=> {
    const {eroor} = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    //Increment the customer id
    const customer = {
        id: customers.lenth + 1,
        title: req.body.title
    };
    customers.push(customer);
    res.send(customer);
});
//Validate Information
function validateCustomer(customer) {
    const schema = {
        title: Joi.string().min(3).required()
    };
    return Joi.validate(customer, schema);
}
