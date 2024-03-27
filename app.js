var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

const port = process.env.PORT || 8080;
var emp=[{ id:'1',name:'Prarthi',email:'prarthi@xyz.com',phone:'1478529631',address:'Gandhinagar' },
    { id:'2',name:'Dhruvi',email:'dhruvi@xyz.com', phone:'1234567891',address:'Gandhinagar'},
    { id:'3',name:'Yash',email:'yash@xyz.com',phone:'3216549871',address:'surat'},
    { id:'4',name:'Yashvi',email:'yashvi@xyz.com',phone:'9874563211',address:'mumbai'}
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./public'));
  });

app.get('/api/all', (req, res) => {
    res.send(cust);
})
app.post('/api/get', (req, res) => {
    const product = cust.find(({ id }) => id == req.body.id);

    if (!product)
        res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops...Cant find what you are looking for!</h2>');
    res.send(product);
});

app.post('/api/customer', (req, res) => {
 var product = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    };
    emp.push(product);
    res.send(product);
});

app.listen(port, () => {
    
    });
    


  