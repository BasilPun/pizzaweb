import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));

//Allow app to parse form data. 
//Access form data thru req.body ??
app.use(express.urlencoded({extended: true}));

//set view engine to ejs
app.set('view engine', 'ejs');

const orders = [];

app.get('/', (req, res) =>{
    //goes into views and uses "index"
    res.render('index');
});

app.get('/contact-us', (req, res) =>{
    res.render('contact')
});

app.get('/confirm-order', (req, res) =>{
    res.render('confirm');
});

app.get('/admin', (req, res) =>{
    res.send(orders);
});

app.get('/menu', (req, res) =>{
    res.render('menu');
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
    res.render(confirm);
});

app.listen(PORT, () =>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});