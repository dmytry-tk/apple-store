var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db;


const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/user/:email/:password', function(req, res) {
    db.collection(`users`).findOne({ email: `${req.params.email}` }, function (err, doc) {
        if(err) {
            res.send({ 'error': 'Something went wrong with server' });
        }
        else if(!doc) {
            res.status(300).send({ 'error' : "this email is not registered"});
        }
        else if(req.params.password !== doc.password) {
            res.status(300).send({ 'error' : "Incorrect password"});
        }
        else{
            res.send(doc);
        }
    })
});

app.get('/:devices', function(req, res) {
    db.collection(`${req.params.devices}`).find().toArray(function (err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

app.get('/:device/:id', function(req, res) {
    db.collection(`${req.params.device}`).findOne({_id: ObjectID(req.params.id)}, function (err, doc) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(doc);
    })
});
// app.listen(3012, function () {
//     console.log('API app started')
// })


// app.post(`/register/:email/:username/:phone/:password`, function (req, res) {
//     var user = {
//         name: req.body.name
//     };
//     db.collection('users').insert(user, function (err, result) {
//         if(err) {
//             console.log(err);
//             return res.sendStatus(500);
//         }
//         res.send(user);
// })

app.post('/register', (req, res, next) => {
    let insertToDB = false;
    const { username, email, phone, password } = req.body;
    const note = {
        username: username,
        email: email,
        phone: phone,
        password: password,
    };
    db.collection(`users`).findOne({email: email}, (err, data) => {
        if(err){
            res.send({ 'error': 'Something went wrong with server' });
        }
        if(data){
            res.status(300).send({ 'error' : "This email is already registered. Log in to your account"});
        } else {
            insertToDB = true
        }
        if( insertToDB ) {
            db.collection('users').insert(note, (err1, result) => {
                if (err1) {
                    res.send({ 'error': 'An error has occurred' });
                }
                else {
                    res.send(result.ops[0]);
                }
            });
        }



    });
});

MongoClient.connect('mongodb://admin:Qwerty_13@applestore-shard-00-00-keonv.mongodb.net:27017,applestore-shard-00-01-keonv.mongodb.net:27017,applestore-shard-00-02-keonv.mongodb.net:27017/appleStore?ssl=true&replicaSet=appleStore-shard-0&authSource=admin&retryWrites=true', (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(3012,function () {
        console.log('API app started');
    })
});