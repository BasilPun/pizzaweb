import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

//Allow app to parse form data. 
//Access form data thru req.body ??
app.use(express.urlencoded({extended: true}));

const orders = [];

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/index.html`)
});

app.get('/contact-us', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/contact.html`)
});

app.get('/confirm-order', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
});

app.get('/admin', (req, res) =>{
    res.send(orders);
});

app.get('/menu', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/menu.html`)
});

app.post('/submit-order', (req, res) =>{
    console.log(req.body);
    // const order = {
    //     fname: req.body.fname,
    //     lname: req.body.lname,
    //     email: req.body.email,
    //     method: req.body.method,
    //     toppings: req.body.toppings,
    //     size: req.body.size,
    //     comment: req.body.comment,
    //     timestamp: new Date()
    // }
    const order = req.body;
    order.timestamp = new Date();
    orders.push(order);
     
    console.log(orders);
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)
});

app.listen(PORT, () =>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});